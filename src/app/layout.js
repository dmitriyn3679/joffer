import {Inter, Kristi, Poppins} from "next/font/google";
import Footer from "@/components/Footer/Footer";
import {MantineProvider} from "@mantine/core";
import "../styles/globals.css";
import '@mantine/core/styles.css';
import {theme} from "@/utils/theme";
import Header from "@/components/Header/Header";
import {OrganizationJsonLd} from "@/components/Seo/OrganizationJsonLd";
import {FaviconLinks} from "@/components/Seo/FaviconLinks";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

const kristi = Kristi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kristi",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>Перша робота в IT з Joffer — стажування та підтримка</title>
      <FaviconLinks />
      <OrganizationJsonLd />
    </head>
    <body className={`${poppins.variable} ${inter.variable} ${kristi.variable}`}>
    <MantineProvider
      defaultColorScheme="light"
      theme={theme}
    >
      <Header/>
      <main>{children}</main>
      <Footer/>
    </MantineProvider>
    <SpeedInsights />
    </body>
    </html>
  );
}
