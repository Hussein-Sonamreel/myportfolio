// src/components/layout/Footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 border-t border-white/10 mt-24">
      <div className="container mx-auto text-center space-y-3">
        
        {/* Brand Tagline */}
        <p className="text-lg font-light tracking-wide text-white/80">
          Modern Luxury × Digital Precision
        </p>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>

        {/* Copyright */}
        <p className="text-sm text-white/50">
          &copy; {currentYear} Hussein Salim — Crafted with care using Vite, React & Tailwind CSS.
        </p>

        {/* Signature Note */}
        <p className="text-xs text-white/40">
          Designed in Kenya · Built for the world
        </p>
      </div>
    </footer>
  );
};
