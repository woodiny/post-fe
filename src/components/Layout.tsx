import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-16 px-4 max-w-screen-xl mx-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
