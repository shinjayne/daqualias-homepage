import type {Metadata} from "next";
// import localFont from "next/font/local";
import {Red_Hat_Text} from 'next/font/google'
import "./globals.css";
import ogImage from './ogImage.png'

const redHatText = Red_Hat_Text({ subsets: ['latin'] })

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "DAQUALIAS 다퀄리아스",
  description: "We create something for those who love all the creativity and culture.",
    openGraph: {
        title: 'DAQUALIAS 다퀄리아스',
        type: 'website',
        url: 'https://www.daqualias.com',
        siteName: 'DAQUALIAS',
        description: 'We create something for those who love all the creativity and culture.',
        images: [
            {
                url: ogImage.src,
                width: ogImage.width,
                height: ogImage.height,
                alt: 'DAQUALIAS',
            },
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={redHatText.className}
      >
        {children}
      </body>
    </html>
  );
}
