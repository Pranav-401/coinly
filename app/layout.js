import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coinly",
  description: "Smart financial tracking",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  antialiased`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-black py-12">
            <div className="container mx-auto px-4 text-center text-white ">
              <p>Made with ❤️ by CodeCrafter</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
