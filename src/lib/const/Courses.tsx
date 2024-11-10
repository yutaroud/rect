type Course = {
  id: number;
  name: {
    category: string;
    level: string;
  };
  thumbnail: string;
  summary: string;
  details: string;
  target: string;
  sessionCount: string;
  duration: string;
  price: string;
  schedule: {
    dayOfWeeks: string[];
    times: string[];
  };
};

export const Courses: Course[] = [
  {
    id: 1,
    name: {
      category: "Scratch",
      level: "初級",
    },
    thumbnail: "thumbnail_course_1.png",
    summary: "マサチューセッツ工科大学で開発されたビジュアルプログラミング言語「Scratch」を用いてプログラミングの基礎概念を学びます。",
    details: "「Scratch」はマウス操作で行えるので、キーボード入力に慣れていなくても安心して学習することができます。",
    target: "小学3年生〜中学3年生",
    sessionCount: "月4回",
    duration: "1回60分",
    price: "6,500円",
    schedule: {
      dayOfWeeks: ["月","火","水","木","金"],
      times: ["17:00〜18:00", "18:30〜19:30","20:00〜21:00",],
    },
  },
  {
    id: 2,
    name: {
      category: "ソフトウェア開発",
      level: "中級",
    },
    thumbnail: "thumbnail_course_2.png",
    summary: "実際の開発で使用されているテキストプログラミング言語「JavaScript」を用いて決められたテーマに沿ってWebサイト開発を行い、プログラミングを学びます。",
    details: "主に、キーボードを使用する本格的なプログラミングを行うコースです。",
    target: "中学1年生〜高校3年生",
    sessionCount: "月4回",
    duration: "1回60分",
    price: "8,500円",
    schedule: {
      dayOfWeeks: ["月","火","水","木","金"],
      times: ["17:00〜18:00", "18:30〜19:30","20:00〜21:00",],
    },
  },
];