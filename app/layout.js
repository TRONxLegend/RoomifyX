import { Cormorant} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const cormorant = Cormorant({subsets: ["latin"]});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={cormorant.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
