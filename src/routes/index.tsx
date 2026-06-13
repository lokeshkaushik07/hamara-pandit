import { createFileRoute, Link } from "@tanstack/react-router";
import { gemstones, zodiacSigns } from "@/lib/gemstones";
import { Gem, Search, ChevronRight, Sparkles, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-gems.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ratna Vibhushan — Gemstone Guide & Catalog" },
      { name: "description", content: "Discover the sacred power of gemstones. Browse our complete guide to Vedic astrology gemstones, their benefits, zodiac connections, and how to wear them." },
      { property: "og:title", content: "Ratna Vibhushan — Gemstone Guide & Catalog" },
      { property: "og:description", content: "Discover the sacred power of gemstones. Browse our complete guide to Vedic astrology gemstones." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = gemstones.slice(0, 6);

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Precious gemstones on golden silk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/95 via-maroon-deep/80 to-maroon-deep/60" />
          <div className="absolute inset-0 pattern-lotus opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-maroon/50 px-4 py-1.5 text-xs font-medium text-gold-light backdrop-blur-sm mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ancient Wisdom, Modern Discovery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gold font-display leading-tight">
              Discover Your
              <br />
              <span className="text-gradient-gold">Sacred Stone</span>
            </h1>
            <p className="mt-6 text-lg text-gold-muted max-w-xl leading-relaxed">
              Explore the mystical world of Vedic gemstones. Each stone resonates with cosmic energies 
              to bring balance, prosperity, and protection into your life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 btn-primary-royal px-6 py-3 rounded-lg text-sm font-semibold"
              >
                <Search className="h-4 w-4" />
                Browse Catalog
              </Link>
              <Link
                to="/catalog"
                search={{ filter: "zodiac" }}
                className="inline-flex items-center gap-2 bg-transparent text-gold border border-gold/40 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gold/10 transition-colors"
              >
                Find by Zodiac
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats / Trust */}
      <section className="py-12 border-b border-gold-muted/20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard icon={<Gem className="h-5 w-5" />} value="12" label="Sacred Gemstones" />
            <StatCard icon={<Sparkles className="h-5 w-5" />} value="9" label="Planetary Stones" />
            <StatCard icon={<Shield className="h-5 w-5" />} value="12" label="Zodiac Matches" />
            <StatCard icon={<Heart className="h-5 w-5" />} value="7" label="Chakra Stones" />
          </div>
        </div>
      </section>

      {/* Featured Gemstones */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon font-display">Featured Gemstones</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              The most revered stones in Vedic astrology, each connected to a celestial body and zodiac sign.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((gem) => (
              <GemstoneCard key={gem.id} gemstone={gem} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 btn-secondary-royal px-6 py-3 rounded-lg text-sm font-semibold"
            >
              View Full Catalog
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Zodiac */}
      <section className="py-20 bg-ivory-warm border-t border-gold-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon font-display">Browse by Zodiac</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Every zodiac sign has gemstones that amplify its strengths and balance its weaknesses.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign}
                to="/catalog"
                search={{ zodiac: sign }}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-gold-muted/20 hover:border-gold/40 transition-all card-hover"
              >
                <ZodiacIcon sign={sign} />
                <span className="text-sm font-medium text-maroon group-hover:text-gold transition-colors">{sign}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon font-display">How to Choose</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Three simple paths to finding your perfect gemstone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="By Zodiac Sign"
              description="Each zodiac sign is ruled by a planet, and each planet has a corresponding gemstone. Find yours by your birth sign."
              icon={<Sparkles className="h-6 w-6 text-gold" />}
            />
            <StepCard
              number="02"
              title="By Purpose"
              description="Looking for love, prosperity, protection, or wisdom? Filter gemstones by the life goal you wish to achieve."
              icon={<Heart className="h-6 w-6 text-gold" />}
            />
            <StepCard
              number="03"
              title="By Chakra"
              description="Align your energy centers. Each chakra corresponds to specific gemstones that help balance and activate them."
              icon={<Shield className="h-6 w-6 text-gold" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-muted/30 text-maroon">
        {icon}
      </div>
      <span className="text-2xl font-bold text-maroon font-display">{value}</span>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );
}

function GemstoneCard({ gemstone }: { gemstone: typeof gemstones[0] }) {
  return (
    <Link
      to="/gemstones/$slug"
      params={{ slug: gemstone.id }}
      className="group flex flex-col rounded-xl bg-card border border-gold-muted/20 overflow-hidden card-hover"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-maroon/5 to-maroon/10 flex items-center justify-center">
        <div
          className="w-20 h-20 rounded-full shadow-lg"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${gemstone.colorHex}, ${gemstone.colorHex}88)`,
            boxShadow: `0 8px 32px ${gemstone.colorHex}44`,
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full bg-maroon/90 px-2.5 py-0.5 text-[10px] font-medium text-gold border border-gold/20">
            {gemstone.planet}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold text-maroon font-display group-hover:text-gold transition-colors">
            {gemstone.name}
          </h3>
          <span className="text-xs text-muted-foreground italic">{gemstone.hindiName}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{gemstone.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {gemstone.purposes.slice(0, 3).map((p) => (
            <span key={p} className="inline-flex rounded-md bg-gold-muted/20 px-2 py-0.5 text-[10px] font-medium text-maroon">
              {p}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gold-muted/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>{gemstone.metal}</span>
          <span className="flex items-center gap-1 text-maroon group-hover:text-gold transition-colors">
            Explore <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function StepCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-gold-muted/20">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-maroon/10 text-maroon mb-4">
        {icon}
      </div>
      <span className="text-xs font-bold text-gold tracking-widest">{number}</span>
      <h3 className="mt-2 text-lg font-semibold text-maroon font-display">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function ZodiacIcon({ sign }: { sign: string }) {
  const icons: Record<string, string> = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
  };
  return (
    <span className="text-2xl text-maroon group-hover:text-gold transition-colors">
      {icons[sign] || "✦"}
    </span>
  );
}
