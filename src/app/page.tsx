import "./globals.css";
import Kv from "../modules/Kv";
import Company from "../modules/Company";
import Business from "../modules/Business";
import Recruitment from "@/modules/Recuritment";
import Contact from "@/modules/Contact";

export const metadata = {
  title: "株式会社レクト",
  description: "開発業務の請負やプログラミング教室の運営を行っております。",
  robots: "index,follow",
  alternates: {
    canonical: "https://re-ct.co.jp"
  }
};

export default function Home() {
  return (
    <main style={{paddingBottom: "80px"}}>
      <Kv />
      <Business />
      <Company />
      <Recruitment />
      <Contact />
    </main>
  );
}
