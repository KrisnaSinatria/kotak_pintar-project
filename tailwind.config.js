/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'dashboard.html', 'Js/script.js', 'file.html', 'login.html', 'signup.html'],
  theme: {
    extend: {
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif']
      },
      backgroundImage: {
        'select-arrow': 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTExLjk5OTcgMTMuMTcxNEwxNi45NDk1IDguMjIxNjhMMTguMzYzNyA5LjYzNTg5TDExLjk5OTcgMTUuOTk5OUw1LjYzNTc0IDkuNjM1ODlMNy4wNDk5NiA4LjIyMTY4TDExLjk5OTcgMTMuMTcxNFoiIGZpbGw9InJnYmEoMTU2LDE2MywxNzUsMSkiPjwvcGF0aD48L3N2Zz4=")'
      },
      colors: {
        primary : '#142A37',
        secondary : '#2FB3E3',
        body : '#0A1C28',
        
      },
    },
  },
  plugins: [],
}

