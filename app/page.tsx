import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyDelLuna from "@/components/WhyDelLuna";
import RoomStories from "@/components/RoomStories";
import SignatureDetails from "@/components/SignatureDetails";
import { NightInBupyeong, ReviewMood } from "@/components/LocationReviews";
import { PracticalInfo, Footer } from "@/components/FooterInfo";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <WhyDelLuna />
      <RoomStories />
      <SignatureDetails />
      <NightInBupyeong />
      <ReviewMood />
      <PracticalInfo />
      <Footer />
      <StickyCTA />
    </main>
  );
}
