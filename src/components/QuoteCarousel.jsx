import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text:
      "Strong hearts and soft smiles — that balance is what inspires me most.",
  },
  {
    text:
      "Anime heroines taught me bravery can be gentle and kindness can be powerful.",
  },
  {
    text:
      "From quiet moments to epic battles, their stories remind me to dream big.",
  },
  { text: "Kawaiiness is a superpower — and so is compassion." },
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="quotes" className="relative overflow-hidden bg-rose-50 py-16">
      <div className="pointer-events-none absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-rose-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-pink-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-rose-900 sm:text-3xl">
          Little reasons I adore them
        </h2>
        <div className="mt-8 min-h-[96px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg text-rose-700"
            >
              “{quotes[index].text}”
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-rose-600" : "bg-rose-300"
              }`}
            />)
          )}
        </div>
      </div>
    </section>
  );
}
