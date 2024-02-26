import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px', // Mobile
        lg: '1440px', // Desktop
      },
      colors: {
        // Primary
        'Prim-Red': 'hsl(0, 78%, 62%)',
        'Prim-Cyan': 'hsl(180, 62%, 55%)',
        'Prim-Orange': 'hsl(34, 97%, 64%)',
        'Prim-Blue': 'hsl(212, 86%, 64%)',

        // Neutral
        'Neut-Very-Dark-Blue': 'hsl(234, 12%, 34%)',
        'Neut-Grayish-Blue': 'hsl(229, 6%, 66%)',
        'Neut-Very-Light-Gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '15px',
      },
    },
  },
  plugins: [],
};
export default config;
