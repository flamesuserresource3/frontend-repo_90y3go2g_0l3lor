export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-rose-600">
        Made with love and sparkles • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
