import Typography from 'typography';

const typography = new Typography({
  title: 'Minimal',
  baseFontSize: '16px',
  baseLineHeight: 1.66,
  scaleRatio: 3.66,
  headerFontFamily: [
    'Yanone Kaffeesatz', 'sans-serif'
  ],
  bodyFontFamily: [
    'Heebo', 'sans-serif'
  ],
  headerWeight: 700,
  googleFonts: [
    {
      name: 'Yanone Kaffeesatz',
      styles: ['700']
    }, {
      name: 'Heebo',
      styles: ['400']
    }
  ]
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
