import Hero from "./components/Hero";
import CharacterCards from "./components/CharacterCards";
import QuoteCarousel from "./components/QuoteCarousel";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CharacterCards />
      <QuoteCarousel />
      <Footer />
    </div>
  );
}
