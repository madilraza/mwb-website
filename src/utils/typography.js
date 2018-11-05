import Typography from 'typography';

const typography = new Typography({
  title: 'Mentors Without Borders',
  headerFontFamily: [
    'Yanone Kaffeesatz', 'sans-serif'
  ],
  bodyFontFamily: ['Heebo', 'sans-serif']
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
