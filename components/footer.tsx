import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone py-16 sm:py-20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10">
                <svg
                  viewBox="0 0 40 40"
                  className="h-full w-full text-gold transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                >
                  <path d="M20 2C20 2 18 8 18 12C18 14 19 16 20 18C21 16 22 14 22 12C22 8 20 2 20 2Z" />
                  <path d="M20 18C20 18 14 20 12 24C10 28 12 32 14 34C14 30 16 26 20 24C24 26 26 30 26 34C28 32 30 28 28 24C26 20 20 18 20 18Z" />
                  <path d="M20 24L20 38" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M14 32C14 32 16 30 20 30C24 30 26 32 26 32" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-semibold tracking-wide text-parchment">
                  White Tree Systems
                </span>
              </div>
            </Link>
            <p className="font-serif text-sm text-silver leading-relaxed mb-6">
              The premier SAP consultancy of Gondor, delivering enterprise solutions to kingdoms
              and organizations across Middle-earth.
            </p>
            <p className="font-serif text-xs text-silver/60">
              Est. 1977 of the Third Age
            </p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display text-lg font-medium text-parchment mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  S/4HANA Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  Business Process Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  Change Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  Enterprise Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-display text-lg font-medium text-parchment mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  Our Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <a
                  href="mailto:stewards@whitetreesystems.com"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Partners column */}
          <div>
            <h3 className="font-display text-lg font-medium text-parchment mb-6">Partners</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.sap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  SAP Partner Network
                </a>
              </li>
              <li>
                <a
                  href="https://www.sap.com/products/s4hana.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-silver hover:text-gold transition-colors"
                >
                  S/4HANA Platform
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-serif text-sm text-silver/60">
              © {currentYear} White Tree Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-serif text-xs text-silver/40">
                Serving Middle-earth with honor since the Third Age
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
