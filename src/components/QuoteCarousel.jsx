import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "Strong hearts and soft smiles — power level: head-over-heels." },
  { text: "Bravery can be gentle; kindness can be legendary. Best. Girls." },
  { text: "Every sparkle is a battle won against a gloomy day." },
  { text: "Kawaii is my cardio. Compassion is my endgame." },
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="quotes" className="relative overflow-hidden bg-gradient-to-b from-[#0b051e] via-[#0a0619] to-[#12092a] py-20 text-white">
      {/* glow rails */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-full w-40 bg-gradient-to-b from-fuchsia-500/10 via-rose-500/10 to-cyan-400/10 blur-3xl" />
        <div className="absolute -right-20 top-0 h-full w-40 bg-gradient-to-b from-cyan-400/10 via-fuchsia-500/10 to-rose-500/10 blur-3xl" />
      </div>

      {/* floating emotes */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-fuchsia-200/70"
            style={{ left: `${(i * 9) % 100}%`, top: `${(i * 17) % 100}%` }}
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
          >
            {i % 2 ? "(✿◠‿◠)" : "(≧◡≦)♡"}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          className="text-2xl font-bold tracking-tight sm:text-3xl"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reasons my heart goes doki-doki
        </motion.h2>

        <div className="mt-8 min-h-[112px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="text-lg text-fuchsia-100/90"
            >
              “{quotes[index].text}”
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {quotes.map((_, i) => (
            <motion.span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-fuchsia-400" : "bg-fuchsia-300/40"}`}
              initial={false}
              animate={{ scale: i === index ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
