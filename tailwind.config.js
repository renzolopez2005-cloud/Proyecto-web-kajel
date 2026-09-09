/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kajel-amber': '#b45309',
        'kajel-amber-dark': '#92400e',
        'kajel-amber-hover': '#78350f',
        'kajel-gold': '#f59e0b',
        'kajel-yellow': '#fef08a',
        'kajel-cream': '#fffbeb',
        'kajel-warm': '#fef3c7',
        'kajel-sand': '#fdfbf7',
        'kajel-border': '#e7e2d7',
        'kajel-brown': '#451a03',
        'kajel-dark': '#1c1917',
        'kajel-muted': '#57534e',
      },
      fontFamily: {
        headline: ['"Playfair Display"', 'Epilogue', 'serif'],
        handwriting: ['Caveat', 'cursive'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
