import {Hero} from "@/components/Hero/Hero";
import {HowItWork} from "@/components/HowItWork/HowItWork";
import {AboutUs} from "@/components/AboutUs/AboutUs";
import {ForWhom} from "@/components/ForWhom/ForWhom";
import {JoinIn} from "@/components/JoinIn/JoinIn";
import {Advantages} from "@/components/Advantages/Advantages";

export async function generateMetadata(){
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  return {
    title: "Перша робота в IT з Joffer — стажування та підтримка",
    description: "Без досвіду важко знайти першу роботу в IT. Ми це знаємо — тому пропонуємо стажування, реальні задачі та підтримку, щоб кожен отримав омріяний оффер.",
    keywords:
      "Стажування в IT, Перша робота програмістом, Junior вакансії без досвіду, Практика для студентів айтішників, Реальні проєкти для початківців",
    alternates: {
      canonical: `${baseUrl}/`,
    },
    openGraph: {
      title: "Joffer — Стажування та перша робота в IT",
      description:
        "Ми допомагаємо отримати реальний досвід, розвиватися та знайти першу роботу в ІТ.",
      url: baseUrl,
      siteName: "Joffer",
      type: "website",
      images: [
        {
          url: baseUrl + "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Joffer OG Image",
        },
      ],
      twitter: {
        card: "summary_large_image",
        title: "Joffer — Стажування та перша робота в IT",
        description:
          "Стажування, підтримка та практика для початківців — щоб кожен міг отримати оффер.",
        images: [baseUrl + "/og-image.jpg"],
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWork />
      <AboutUs />
      <ForWhom />
      <JoinIn />
      <Advantages />
    </>
  );
}
