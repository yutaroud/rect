import Header from "./header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Footer from "./footer";

export const metadata = {
  title: "RECT",
  description: "",
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
