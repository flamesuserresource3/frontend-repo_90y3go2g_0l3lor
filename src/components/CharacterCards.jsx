import { Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const favorites = [
  {
    name: "Asuna Yuuki",
    series: "Sword Art Online",
    vibe: "Graceful, brave, and kind",
    color: "from-fuchsia-500/30 via-rose-500/20 to-cyan-500/20",
    accent: "from-fuchsia-400 to-pink-400",
  },
  {
    name: "Mikasa Ackerman",
    series: "Attack on Titan",
    vibe: "Loyal, determined, unstoppable",
    color: "from-violet-500/30 via-fuchsia-500/20 to-rose-500/20",
    accent: "from-violet-400 to-fuchsia-400",
  },
  {
    name: "Zero Two",
    series: "DARLING in the FRANXX",
    vibe: "Playful, bold, unforgettable",
    color: "from-rose-500/30 via-pink-500/20 to-fuchsia-500/20",
    accent: "from-rose-400 to-pink-400",
  },
  {
    name: "Hinata Hyuga",
    series: "Naruto",
    vibe: "Gentle heart, fierce spirit",
    color: "from-cyan-500/30 via-fuchsia-500/20 to-violet-500/20",
    accent: "from-cyan-400 to-violet-400",
  },
];

function Badge({ text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/30 bg-white/10 px-2.5 py-1 text-xs font-medium text-fuchsia-100 backdrop-blur-md">
      <Star className="h-3.5 w-3.5 text-fuchsia-300" /> {text}
    </span>
  );
}

export default function CharacterCards() {
  return (
    <section id="favorites" className="relative overflow-hidden bg-gradient-to-b from-[#12092a] via-[#0e0a24] to-[#0b051e] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(40%_40%_at_10%_10%,rgba(236,72,153,0.15),transparent_60%),radial-gradient(40%_40%_at_90%_10%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(40%_40%_at_50%_90%,rgba(6,182,212,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-fuchsia-200">
          <Sparkles className="h-5 w-5" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Certified Best Girls (scientifically adorable)
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-fuchsia-100/80">
          Warning: gazing too long may cause blush damage and spontaneous heart
          sparkles.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((c, idx) => (
            <motion.article
              key={c.name}
              className="group relative overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-white/5 p-6 shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} blur-3xl`} />
              <div className="relative" style={{ transform: "translateZ(20px)" }}>
                <div className="mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 p-2 ring-1 ring-fuchsia-300/30">
                  <div className={`h-full w-full rounded-xl bg-gradient-to-br ${c.accent}`} />
                </div>
                <h3 className="text-lg font-semibold text-white drop-shadow">{c.name}</h3>
                <p className="text-sm text-fuchsia-200/90">{c.series}</p>
                <p className="mt-3 text-sm text-fuchsia-100/80">{c.vibe}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge text="waifu energy" />
                  <Badge text="comfort character" />
                  <Badge text="best girl" />
                </div>
              </div>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/60 to-fuchsia-400/0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
