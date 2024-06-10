import { Inter, Noto_Sans_Arabic, Poppins } from "next/font/google";

export const arabic_font = Noto_Sans_Arabic({ subsets: ["arabic"] });
export const english_font = Inter({ subsets: ["latin"] });
export const poppins_font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
