import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats-1";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <Stats/>
      <TeamSection/>
      <FAQsThree/>
      <FooterSection/>
    </div>
  );
}
