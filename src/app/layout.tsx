import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { Link, ViewTransitions } from "next-view-transitions";
import Navbar, { NavLinks } from "~/components/Navbar";
import { Search, ShoppingCart } from "lucide-react";
import { ClerkProvider } from "@clerk/nextjs";
import AuthNavlink from "~/components/AuthNavlink";
import { dark } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <ViewTransitions>
        <html lang="en">
          <body
            className={cn(
              "bg-background min-h-screen font-sans antialiased",
              inter.variable,
            )}
          >
            <Navbar>
              <div>
                <Link
                  className="hover:text-primary select-none text-2xl tracking-wide antialiased opacity-90 transition duration-200 ease-out hover:opacity-70 hover:transition-opacity"
                  href="/"
                >
                  Zephyr
                </Link>
              </div>
              <div className="flex gap-4">
                <NavLinks href="/search">
                  <Search />
                </NavLinks>
                <NavLinks href="/cart/:id">
                  <ShoppingCart />
                </NavLinks>
                <NavLinks href="#">
                  <AuthNavlink />
                </NavLinks>
              </div>
            </Navbar>
            <div className="mx-auto max-w-5xl">{children}</div>
          </body>
        </html>
      </ViewTransitions>
    </ClerkProvider>
  );
}
