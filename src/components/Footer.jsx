import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-fuchsia-400/20 bg-[#0b051e]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-fuchsia-200/80">
        <span className="inline-flex items-center gap-2">
          Made with blushes and sparkles
          <Heart className="h-4 w-4 text-fuchsia-400 animate-pulse" />
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
