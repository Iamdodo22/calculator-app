/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
        mainBg0: "hsl(222, 26%, 31%)", 
        keyPadBg0: "hsl(223, 31%, 20%)", 
        screenBg0: "hsl(224, 36%, 15%)" ,
        keyBg0: "hsl(225, 21%, 49%)",
        keyShadow1 : "hsl(224, 28%, 35%)",
        keyBgToggle0: "hsl(6, 63%, 50%)",
        keyshadow00: "hsl(6, 70%, 34%)",
        keyBg00: "hsl(30, 25%, 89%)",
        keyShadow000: "hsl(28, 16%, 65%)",
        text0: "hsl(221, 14%, 31%)",
        pWhite: "hsl(0, 0%, 100%)",

      // theme2
      mainBg1: "hsl(0, 0%, 90%)", 
      keyPadBg1: "hsl(0, 5%, 81%)", 
      screenBg1: " hsl(0, 0%, 93%)",
      keyBg1: "hsl(185, 42%, 37%)",
      keyShadow1: "hsl(185, 58%, 25%)",
      keyBgToggle1: "hsl(25, 98%, 40%)",
      keyshadow11: "hsl(25, 99%, 27%)",
      keyBg11: "hsl(45, 7%, 89%)",
      keyShadow111: "hsl(35, 11%, 61%)",
      text1: "hsl(60, 10%, 19%)",

      // theme3
      mainBg2: " hsl(268, 75%, 9%)", 
      keyPadBg2: "hsl(268, 71%, 12%)", 
      screenBg2: " hsl(268, 71%, 12%)" ,
      keyBg2: "hsl(281, 89%, 26%)",
      keyShadow2: "hsl(285, 91%, 52%)",
      keyBgToggle2: "hsl(176, 100%, 44%)",
      keyshadow22: "hsl(177, 92%, 70%)",
      keyBg22: " hsl(268, 47%, 21%)",
      keyShadow222: "hsl(290, 70%, 36%)",
      text2: "hsl(52, 100%, 62%)",
      },
      fontFamily:{
        spartan: ['League Spartan']
      },
      fontSize:{
        pText: ['32px']
      }
    },
  },
  plugins: [],
}

