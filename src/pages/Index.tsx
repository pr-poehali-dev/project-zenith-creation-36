import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Works from "@/components/Works";
import Regions from "@/components/Regions";
import Promo from "@/components/Promo";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Works />
      <Regions />
      <Promo />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Index;