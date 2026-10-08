import { useEffect, useRef, useState } from 'react';
import { FRAG, VERT } from '../../lib/shader-source';

type Props = {
  className?: string;
  /** Colours from the calm base to the brightest thread. Up to 8. */
  colors?: string[];
  /** 1 = original speed. Lower is calmer. */
  speed?: number;
};

// Brand: pearl base, with soft orchid threads.
const BRAND_COLORS = ['#fbf8fb', '#f6edf6', '#eddaf0', '#e2c0e7'];

const toRgb = (hex: string): [number, number, number] => {
  const n = parseInt(hex.replace('#', ''), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

/**
 * A slow, soft "neuro noise" shader that fills its parent.
 * Light on purpose: low resolution, pauses off-screen and in hidden tabs,
 * draws one still frame when the visitor prefers reduced motion,
 * and quietly does nothing if WebGL is not available.
 */
export default function ShaderBackground({ className, colors = BRAND_COLORS, speed = 0.4 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const program = gl.createProgram()!;
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(program, name);
    const list = colors.slice(0, 8);
    while (list.length < 8) list.push(list[list.length - 1]);
    gl.uniform3fv(u('u_colors'), new Float32Array(list.flatMap((c) => toRgb(c))));
    gl.uniform4f(u('u_shape'), 1.26, 0.35, 0.28, 0); // scale, intensity, paramA, warp
    gl.uniform4f(u('u_surface'), 1.824, 0.9, 0, 1); // detail, contrast, brightness, saturation
    gl.uniform4f(u('u_finish'), 0, 0, 0, 0); // hue, vignette, blur, grain
    gl.uniform4f(u('u_transform'), 1372, 0, 0.08, 0); // seed, rotation, drift, OKLab off
    gl.uniform4f(u('u_space'), -0.09, 0.01, 0, 0);
    gl.uniform4f(u('u_cursor'), 0, 0, 0, 0);
    const uScene = u('u_scene');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let disposed = false;
    let inView = true;
    let visible = document.visibilityState === 'visible';
    const t0 = performance.now();

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.round(r.width * dpr));
      const h = Math.max(1, Math.round(r.height * dpr));
      const k = Math.min(1, Math.sqrt(700_000 / (w * h))); // soft background: low resolution is fine
      const cw = Math.max(1, Math.round(w * k));
      const ch = Math.max(1, Math.round(h * k));
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
        gl.viewport(0, 0, cw, ch);
      }
    };

    const draw = (now: number) => {
      raf = 0;
      if (disposed || !inView || !visible) return;
      resize();
      const t = reduce ? 3 : ((now - t0) / 1000) * speed;
      gl.uniform4f(uScene, canvas.width, canvas.height, t, colors.length > 8 ? 8 : colors.length);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      setReady(true);
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const kick = () => {
      if (!raf && !disposed) raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(([e]) => {
      inView = e?.isIntersecting ?? true;
      if (inView) kick();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      if (reduce) { raf = 0; kick(); }
    });
    ro.observe(canvas);
    const onVis = () => {
      visible = document.visibilityState === 'visible';
      if (visible) kick();
    };
    document.addEventListener('visibilitychange', onVis);
    kick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      gl.deleteBuffer(buf);
      gl.deleteProgram(program);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`${className ?? ''} transition-opacity duration-[1800ms] ease-out ${ready ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
