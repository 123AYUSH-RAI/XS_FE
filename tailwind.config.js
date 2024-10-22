/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#14171A',
        secondary: '#14171A',
        accent: '#FFAD1F',
        background: '#fffaf0',
        darkBackground: '#15202B',
        
        // Navbar colors for light mode
        lightNavbar: '#F5F8FA',  // Light background for the navbar
        lightNavbarText: '#14171A', // Dark text color for contrast

        // Navbar colors for dark mode
        darkNavbar: '#1DA1F2',  // Dark background for the navbar
        darkNavbarText: '#fff', // Light text color for contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
}
