import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { dark } from "@clerk/themes"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps} appearance={
      {
        layout: {
          socialButtonsVariant: "auto",
          termsPageUrl: "/terms-and-conditions",
          privacyPageUrl: "/terms-and-conditions",
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        baseTheme: dark,
        variables: {
          colorPrimary: {
            "50": '#FDE047',
            '500': '#4ADE80',
            '600': '#FDE047'
          },
          colorBackground: "#15141A"
        }
      }
    }>
      <main className={`font-sans ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
