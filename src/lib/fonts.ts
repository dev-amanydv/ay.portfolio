import { Outfit, Poppins, Roboto, Shadows_Into_Light } from "next/font/google";


export const poppins = Poppins({
    weight: ["400","100", "200", "300", "500", "600", "700"],
})

export const shadowsIntoLight = Shadows_Into_Light({
    weight: "400",
    subsets: ["latin"],
  });

export const roboto = Roboto({
  weight: ["400","100", "200", "300", "500", "600", "700"],
})

export const outfit = Outfit({
    weight: ["400","100", "200", "300", "500", "600", "700"],
    subsets: ["latin"],
  });
  
  