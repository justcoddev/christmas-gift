module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        christmasGreen: '#1B2735',
        christmasRed: '#FFCE54',
      },
      fontFamily: {
        christmas: ['Mountains of Christmas', 'cursive'],
      },
      animation: {
        fall: 'fall 10s linear infinite',
        swing: 'swing 2s ease-in-out infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
};
