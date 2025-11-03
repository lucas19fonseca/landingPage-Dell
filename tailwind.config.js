module.exports = {
  theme: {
    extend: {
      keyframes: {
        'pulse-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.7' },
        },
      },
      animation: {
        'pulse-down': 'pulse-down 1.8s ease-in-out infinite',
      },
    },
  },
};
