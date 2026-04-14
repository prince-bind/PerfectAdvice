import AboutSection from "@/components/Home/AboutSection";
import ConsultationBanner from "@/components/Home/ConsultationBanner";
import Customers from "@/components/Home/Customers";
import FAQSection from "@/components/Home/FAQSection";
import GlobalServices from "@/components/Home/GlobalServices";
import HeroSection from "@/components/Home/HeroSection";
import Offerings from "@/components/Home/Offerings";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Customers />
      <Offerings />
      <AboutSection />
      <AboutSection reverse={true} />
      <GlobalServices />
      <ConsultationBanner />
      <FAQSection />
    </main>
  );
}

export const metadata = {
  title: 'Perfect Advice - Your Trusted Legaltech Partner',
  description: 'Perfect Advice is a leading Legaltech platform offering comprehensive legal services, expert advice, and innovative solutions to individuals and businesses worldwide. Our mission is to make legal assistance accessible, affordable, and efficient for everyone.',
  keywords: 'Legaltech, Legal Services, Expert Advice, Business Solutions, Global Reach, Affordable Legal Assistance',
};