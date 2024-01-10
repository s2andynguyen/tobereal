import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#F0B90B'
      },  
      backgroundImage: {
        'headblock': 'url("/images/home/head-block.png")',
        'gradient-left': 'linear-gradient(90deg, #F0B90B 0%, #FADD55 100%)',
        'gradient-right': 'linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)',
        'gradient-bottom': 'linear-gradient(180deg, #F0B90B 0%, #EBF00B 100%)'
      },
      dropShadow: {
        'title': '0 4px 4px rgba(240, 185, 11, 0.50)',
        'card': '0 4px 11px 0px rgba(0, 0, 0, 0.25)',
        'context': '0 4px 4px rgb(0,0,0)',
      },
      boxShadow: {
        'yellow': '0 10px 11px 0 rgba(240, 185, 11, 0.25)',
        'gray': '0 3px 10px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        montserrat: ["Montserrat"]
      }

    }, 
  },
  plugins: [],
}
export default config
