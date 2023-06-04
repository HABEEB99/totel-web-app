import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Totel",
  description: "Book a place in a luxirious destination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen w-screen overflow-x-hidden`}
      >
        <Header />
        <div className="w-screen min-h-[70vh] flex ">
          <Sidebar />
          <main className="w-full border-l-[1px] border-gray-400">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
