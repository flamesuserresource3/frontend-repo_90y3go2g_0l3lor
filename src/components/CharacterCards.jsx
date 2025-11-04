import { Star } from "lucide-react";

const favorites = [
  {
    name: "Asuna Yuuki",
    series: "Sword Art Online",
    vibe: "Graceful, brave, and kind",
    color: "from-pink-200 to-rose-300",
  },
  {
    name: "Mikasa Ackerman",
    series: "Attack on Titan",
    vibe: "Loyal, determined, unstoppable",
    color: "from-rose-200 to-red-300",
  },
  {
    name: "Zero Two",
    series: "DARLING in the FRANXX",
    vibe: "Playful, bold, unforgettable",
    color: "from-rose-100 to-pink-200",
  },
  {
    name: "Hinata Hyuga",
    series: "Naruto",
    vibe: "Gentle heart, fierce spirit",
    color: "from-fuchsia-100 to-rose-200",
  },
];

function Badge({ text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rose-200/70 bg-white/60 px-2.5 py-1 text-xs font-medium text-rose-700 backdrop-blur">
      <Star className="h-3.5 w-3.5 text-rose-500" /> {text}
    </span>
  );
}

export default function CharacterCards() {
  return (
    <section id="favorites" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-rose-900 sm:text-3xl">
          Favorite Characters
        </h2>
        <p className="mt-2 max-w-2xl text-rose-700/90">
          A handful of characters who made my world brighter.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((c) => (
            <article
              key={c.name}
              className="group relative overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-br p-6 shadow-sm transition hover:shadow-md"
            >
              <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${c.color} blur-2xl`} />
              <div className="relative">
                <div className="mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-white to-rose-50 p-2 ring-1 ring-rose-100">
                  <div className={`h-full w-full rounded-xl bg-gradient-to-br ${c.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-rose-900">{c.name}</h3>
                <p className="text-sm text-rose-600">{c.series}</p>
                <p className="mt-3 text-sm text-rose-700/90">{c.vibe}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge text="Comfort character" />
                  <Badge text="Inspiration" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
