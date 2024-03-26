/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FBFBFB',
          foreground: '#403F53',
          cursor: '#90A7B2',
          active_selection: '#E0E0E0',
          inactive_selection: '#EDEDED',
          search_highlight: '#93A1A16C',
          comment: '#989FB1',
          constant: '#BC5454',
          numbers: '#AA0982',
          keywords: '#994CC3',
          functions: '#4876D6',
          quoted_strings: '#C96765',
          support: '#4876D6',
          language_variables: '#0C969B',
          invalid_construct: '#FF2C83'
        },
        dark: {
          background: '#011627',
          foreground: '#D6DEEB',
          cursor: '#80A4C2',
          active_selection: '#1D3B53',
          inactive_selection: '#7E57C25A',
          search_highlight: '#5F7E97',
          comment: '#637777',
          constant: '#FF6363',
          numbers: '#F78C6C',
          keywords: '#C792EA',
          functions: '#82AAFF',
          quoted_strings: '#ECC48DFF',
          support: '#ADDB67',
          language_variables: '#7FDBCA',
          invalid_construct: '#FF2C83'
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
