import { Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* floating glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-4 py-2 text-rose-600 backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">A cozy corner for anime admiration</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-rose-900 sm:text-6xl">
          My Love for Japanese Anime Girls
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-rose-700/90">
          Cute, courageous, and endlessly inspiring — this site is a heartfelt
          celebration of the characters that sparked my imagination and made me
          smile.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#favorites"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-700"
          >
            <Heart className="h-5 w-5" />
            See Favorites
          </a>
          <a
            href="#quotes"
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-6 py-3 text-rose-700 transition hover:bg-rose-50"
          >
            Why I love them
          </a>
        </div>
      </div>
    </section>
  );
}
