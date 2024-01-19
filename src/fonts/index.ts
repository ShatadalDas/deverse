import { Inria_Sans, Libre_Franklin } from 'next/font/google'
import localFont from 'next/font/local'

// weights: 100, 200, 300, 400, 500, 600
const CascadiaCode = localFont({
    src: [
        { path: "./cascadia-code-woff/CascadiaCode-ExtraLight.woff", weight: "100", style: "normal" },
        { path: "./cascadia-code-woff/CascadiaCode-ExtraLightItalic.woff", weight: "100", style: "italic" },
        { path: "./cascadia-code-woff/CascadiaCode-Light.woff", weight: "200", style: "normal" },
        { path: "./cascadia-code-woff/CascadiaCode-LightItalic.woff", weight: "200", style: "italic" },
        { path: "./cascadia-code-woff/CascadiaCode-SemiLight.woff", weight: "300", style: "normal" },
        { path: "./cascadia-code-woff/CascadiaCode-SemiLightItalic.woff", weight: "300", style: "italic" },
        { path: "./cascadia-code-woff/CascadiaCode-Regular.woff", weight: "400", style: "normal" },
        { path: "./cascadia-code-woff/CascadiaCode-Italic.woff", weight: "400", style: "italic" },
        { path: "./cascadia-code-woff/CascadiaCode-SemiBold.woff", weight: "500", style: "normal" },
        { path: "./cascadia-code-woff/CascadiaCode-SemiBoldItalic.woff", weight: "500", style: "italic" },
        { path: "./cascadia-code-woff/CascadiaCode-Bold.woff", weight: "600", style: "normal" },
        { path: "./cascadia-code-woff/CascadiaCode-BoldItalic.woff", weight: "600", style: "italic" },
    ],
    variable: "--cascadia-code",
})

// weights: 300, 400, 700
const InriaSans = Inria_Sans({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--inria-sans",
})

// weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const LibreFranklin = Libre_Franklin({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--libre-franklin",
})

export {
    CascadiaCode, InriaSans, LibreFranklin
}