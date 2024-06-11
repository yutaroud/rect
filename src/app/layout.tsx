import Head from "next/head";
import Header from "./header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Footer from "./footer";

export const metadata = {
  title: "株式会社レクト",
  description: "社会のコミュニケーションをITの力でもっと活発に",
  robots: "index,follow"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
