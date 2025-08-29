/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'salon': {
          'blue': '#D3E4FD',
          'pink': '#FFDEE2', 
          'lightgray': '#F8F9FA',
          'darkblue': '#1EAEDB',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D3E4FD 0%, #FFDEE2 100%)',
        'gradient-accent': 'linear-gradient(45deg, #1EAEDB 0%, #D3E4FD 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(30, 174, 219, 0.9) 0%, rgba(211, 228, 253, 0.8) 100%)',
      },
      boxShadow: {
        'salon-sm': '0 2px 4px rgba(0,0,0,0.05)',
        'salon-md': '0 5px 15px rgba(0,0,0,0.08)', 
        'salon-lg': '0 10px 30px rgba(0,0,0,0.12)',
        'salon-xl': '0 20px 40px rgba(0,0,0,0.15)',
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate3d(0,0,0) rotateZ(0.01deg)'
          },
          '34%': { 
            borderRadius: '70% 60% 70% 30% / 50% 60% 30% 60%',
            transform: 'translate3d(5px,5px,0) rotateZ(0.01deg)'
          },
          '67%': { 
            borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%',
            transform: 'translate3d(0,5px,0) rotateZ(0.01deg)'
          }
        }
      }
    },
  },
  plugins: [],
}