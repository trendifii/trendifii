import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-2";

import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats-1";
import VideoCarousel from "@/components/video-carousel";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <VideoCarousel/>
      <Features/>
      <Stats/>
      <FAQsThree/>
    </div>
  );
}
