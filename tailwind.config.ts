import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // のれんの紺色をベースにした配色
        indigo: {
          DEFAULT: "#22405C",
          deep: "#16293B",
          soft: "#3B617F",
        },
        // 湯気・和紙をイメージした背景色
        paper: "#F7F5F0",
        // 「ゆ」の暖簾に使われる朱色（アクセントとして控えめに使用）
        yu: "#B3402A",
        steam: "#DCE5EA",
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"Noto Sans JP"',
          "Meiryo",
          "sans-serif",
        ],
        serif: [
          '"Hiragino Mincho ProN"',
          '"Noto Serif JP"',
          '"Yu Mincho"',
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
