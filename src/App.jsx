import Hero from "./components/Hero";
import CharacterCards from "./components/CharacterCards";
import QuoteCarousel from "./components/QuoteCarousel";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#060312] text-white">
      <Hero />
      <CharacterCards />
      <QuoteCarousel />
      <Footer />
    </div>
  );
}
