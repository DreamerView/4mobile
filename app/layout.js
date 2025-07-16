import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/app/globals.css";
import AOSInit from "@/component/AOSInit";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Modal from "@/component/Modal";
import Nav from "@/component/Nav";
import Script from 'next/script';

export const metadata = {
  title: "4mobile — Всё для вашего телефона",
  description: "4mobile — всё для вашего телефона: чехлы, кабели, зарядные устройства, защитные стёкла и многое другое. Выбирайте аксессуары для любых моделей смартфонов.",
  keywords: "аксессуары для телефона, интернет-магазин смартфонов, чехлы для смартфонов, зарядные устройства, защитные стёкла, купить аксессуары для телефона",
  alternates: {
    canonical: "https://4mobile.kz/"
  },
  openGraph: {
    title: "4mobile — Всё для вашего телефона",
    description: "4mobile — всё для вашего телефона: чехлы, кабели, зарядные устройства, защитные стёкла и многое другое. Выбирайте аксессуары для любых моделей смартфонов.",
    url: "https://4mobile.kz/",
    siteName: "4mobile",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "4mobile — Всё для вашего телефона",
    description: "4mobile — всё для вашего телефона: чехлы, кабели, зарядные устройства, защитные стёкла и многое другое. Выбирайте аксессуары для любых моделей смартфонов."
  }
};


export default async function RootLayout({ children }) {
  const res = await fetch('https://api.4mobile.kz/api/content/items/categories', {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        }
    });
    const navData = await res.json();
  return (
    <html lang="ru" data-bs-theme="dark">
      <body className="bg-black">
        <AOSInit />
        <Modal/>
        <Header />
        <Nav linkJson={navData} />
        {children}
        <Footer/>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  );
}
