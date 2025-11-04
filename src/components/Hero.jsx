import Spline from "@splinetool/react-spline";
import { Heart, Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0214] via-[#0b051e] to-[#12092a] text-white">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* neon vignette + particles (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.22),transparent_60%),radial-gradient(40%_40%_at_20%_80%,rgba(6,182,212,0.18),transparent_60%),radial-gradient(40%_40%_at_80%_70%,rgba(244,63,94,0.18),transparent_60%)]" />

      {/* Floating kawaii particles */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-200/70"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              filter: "drop-shadow(0 0 12px rgba(236,72,153,0.4))",
            }}
            initial={{ y: 0, scale: 0.8, rotate: 0 }}
            animate={{ y: [0, -12, 0], scale: [0.8, 1, 0.8], rotate: [0, 10, 0] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut" }}
          >
            {i % 3 === 0 ? "✧" : i % 3 === 1 ? "❤" : "★"}
          </motion.span>
        ))}
      </motion.div>

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-white/5 px-4 py-2 text-fuchsia-200 backdrop-blur-md shadow-[0_0_0_1px_rgba(244,114,182,0.25)]"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">
            unapologetically cringe, cosmically cute
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 bg-gradient-to-br from-white via-fuchsia-100 to-pink-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow sm:text-6xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Anime Girl Hyper-Shrine 3000
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-fuchsia-100/90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Enter a dreamy, cyber-kawaii realm where waifu energy fuels the
          galaxy. Hold tight — sparkles, feelings, and space-ribbons ahead.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#favorites"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-600/20 transition [text-shadow:0_1px_0_rgba(0,0,0,0.25)] hover:from-fuchsia-500 hover:to-rose-500"
          >
            <Heart className="h-5 w-5 transition group-hover:scale-110" />
            Best Girls
          </a>
          <a
            href="#quotes"
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-white/10 px-6 py-3 text-fuchsia-100 backdrop-blur-md transition hover:bg-white/15"
          >
            <Rocket className="h-5 w-5" />
            Send me to feels
          </a>
        </motion.div>
      </div>
    </section>
  );
}
