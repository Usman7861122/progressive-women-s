export const site = {
  name: "Progressive Women's Health",
  legal: "Progressive Womens Health, PLLC",
  doctor: 'Asia Mohsin, MD',
  tagline: 'Clinical excellence. Compassionate care.',
  phoneBook: '281-626-7694',
  phoneInfo: '281-993-4072',
  address: ['907 South Friendswood Drive, Suite 109', 'Friendswood, TX 77546'],
  mapQuery: '907 South Friendswood Drive Suite 109 Friendswood TX 77546',
  rating: { score: '4.9', count: 327 },
  social: [
    { label: 'Yelp', href: 'https://www.yelp.com/biz/progressive-womens-health-pllc-asia-mohsin-md-friendswood-2' },
    { label: 'Twitter', href: 'https://twitter.com/PwhPllc' },
  ],
  // Opens the Google Maps listing (with reviews). TODO: swap for the exact share link from Google Business Profile.
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent("Progressive Women's Health Asia Mohsin 907 South Friendswood Drive Suite 109 Friendswood TX 77546"),
  // TODO: replace with the real online scheduler link
  bookingUrl: '/#contact',
};

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Conditions', href: '/#conditions' },
  { label: 'Education', href: '/#education' },
  { label: 'Insurance', href: '/#insurance' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Blog', href: '/#blog' },
];
