import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p>hoge</p>
      <Image
        src="/rect/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
