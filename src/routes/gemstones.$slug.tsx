import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getGemstoneById, gemstones } from "@/lib/gemstones";
import { ChevronLeft, Star, HardHat, MapPin, Calendar, Hand, Diamond, Sun, Moon } from "lucide-react";

export const Route = createFileRoute("/gemstones/$slug")({
  head: ({ params }) => {
    const gem = getGemstoneById(params.slug);
    return {
      meta: [
        { title: gem ? `${gem.name} (${gem.hindiName}) — Ratna Vibhushan` : "Gemstone — Ratna Vibhushan" },
        { name: "description", content: gem ? gem.description : "Gemstone details" },
        { property: "og:title", content: gem ? `${gem.name} (${gem.hindiName}) — Ratna Vibhushan` : "Gemstone" },
        { property: "og:description", content: gem ? gem.description : "" },
      ],
    };
  },
  component: GemstoneDetail,
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-maroon font-display">Gemstone not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">The gemstone you're looking for doesn't exist in our catalog.</p>
        <Link to="/catalog" className="mt-6 inline-flex items-center gap-2 btn-primary-royal px-4 py-2 rounded-lg text-sm font-medium">
          <ChevronLeft className="h-4 w-4" /> Back to Catalog
        </Link>
      </div>
    </div>
  ),
});

function GemstoneDetail() {
  const { slug } = useParams({ from: "/gemstones/$slug" });
  const gemstone = getGemstoneById(slug);

  if (!gemstone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-maroon font-display">Gemstone not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">The gemstone you're looking for doesn't exist in our catalog.</p>
          <Link to="/catalog" className="mt-6 inline-flex items-center gap-2 btn-primary-royal px-4 py-2 rounded-lg text-sm font-medium">
            <ChevronLeft className="h-4 w-4" /> Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const related = gemstones.filter(
    (g) =>
      g.id !== gemstone.id &&
      (g.planet === gemstone.planet || g.zodiacSigns.some((z) => gemstone.zodiacSigns.includes(z)))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb & Back */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-maroon transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Catalog
        </Link>
      </div>

      {/* Hero Detail Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Visual */}
          <div className="flex flex-col">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-maroon/10 via-ivory to-maroon/5 border border-gold-muted/30 flex items-center justify-center">
              <div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${gemstone.colorHex}, ${gemstone.colorHex}dd, ${gemstone.colorHex}66)`,
                  boxShadow: `0 24px 64px ${gemstone.colorHex}55, inset 0 -8px 24px ${gemstone.colorHex}33`,
                }}
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border"
                  style={{
                    backgroundColor: `${gemstone.colorHex}18`,
                    borderColor: `${gemstone.colorHex}44`,
                    color: gemstone.colorHex,
                  }}
                >
                  <Diamond className="h-3 w-3" />
                  {gemstone.color}
                </span>
              </div>
            </div>

            {/* Quick Facts Row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <QuickFact icon={<HardHat className="h-4 w-4" />} label="Hardness" value={`${gemstone.hardness}/10`} />
              <QuickFact icon={<Calendar className="h-4 w-4" />} label="Day" value={gemstone.day} />
              <QuickFact icon={<Hand className="h-4 w-4" />} label="Finger" value={gemstone.finger} />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-maroon font-display">{gemstone.name}</h1>
              <span className="text-xl text-gold font-display italic">{gemstone.hindiName}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
              <Sun className="h-3.5 w-3.5 text-gold" />
              Ruled by <span className="font-medium text-maroon">{gemstone.planet}</span>
            </p>

            <p className="mt-6 text-base text-foreground leading-relaxed">{gemstone.description}</p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {gemstone.zodiacSigns.map((z) => (
                <Link
                  key={z}
                  to="/catalog"
                  search={{ zodiac: z }}
                  className="inline-flex items-center gap-1 rounded-full bg-maroon/8 px-3 py-1 text-xs font-medium text-maroon border border-maroon/15 hover:border-gold/50 transition-colors"
                >
                  <Star className="h-3 w-3" /> {z}
                </Link>
              ))}
              {gemstone.chakras.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-full bg-teal/8 px-3 py-1 text-xs font-medium text-teal border border-teal/15"
                >
                  <Moon className="h-3 w-3" /> {c}
                </span>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-maroon font-display flex items-center gap-2">
                <Star className="h-5 w-5 text-gold" /> Key Benefits
              </h2>
              <ul className="mt-4 space-y-3">
                {gemstone.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-muted/30 text-maroon text-[10px] font-bold">
                      {i + 1}
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How to Wear */}
      <div className="bg-ivory-warm border-y border-gold-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-maroon font-display text-center mb-10">How to Wear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <WearCard
              icon={<Diamond className="h-5 w-5" />}
              title="Metal"
              value={gemstone.metal}
              description="Set the stone in this metal for optimal energy conduction."
            />
            <WearCard
              icon={<Hand className="h-5 w-5" />}
              title="Finger"
              value={gemstone.finger}
              description="Wear on this finger of your right hand for maximum effect."
            />
            <WearCard
              icon={<Calendar className="h-5 w-5" />}
              title="Day"
              value={gemstone.day}
              description="The most auspicious day to begin wearing this gemstone."
            />
            <WearCard
              icon={<MapPin className="h-5 w-5" />}
              title="Origin"
              value={gemstone.origin[0]}
              description={`Also found in: ${gemstone.origin.slice(1).join(", ")}.`}
            />
          </div>
          <div className="mt-8 p-6 rounded-xl bg-card border border-gold-muted/20">
            <h3 className="text-sm font-semibold text-maroon uppercase tracking-wider mb-2">Preparation</h3>
            <p className="text-sm text-foreground leading-relaxed">{gemstone.howToWear}</p>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-maroon/5 border border-gold-muted/20 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Vedic Mantra</p>
            <p className="text-lg font-display text-maroon">{gemstone.mantra}</p>
            <p className="mt-1 text-xs text-muted-foreground">Chant 108 times before wearing</p>
          </div>
        </div>
      </div>

      {/* Related Gemstones */}
      {related.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-maroon font-display mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((gem) => (
              <Link
                key={gem.id}
                to="/gemstones/$slug"
                params={{ slug: gem.id }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-gold-muted/20 hover:border-gold/40 transition-all card-hover"
              >
                <div
                  className="w-14 h-14 rounded-full shrink-0 shadow-md"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${gem.colorHex}, ${gem.colorHex}88)`,
                    boxShadow: `0 4px 16px ${gem.colorHex}44`,
                  }}
                />
                <div>
                  <h3 className="text-base font-semibold text-maroon font-display group-hover:text-gold transition-colors">
                    {gem.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{gem.planet} &middot; {gem.zodiacSigns[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function QuickFact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-gold-muted/20 text-center">
      <div className="text-maroon">{icon}</div>
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</span>
      <span className="text-sm font-semibold text-maroon">{value}</span>
    </div>
  );
}

function WearCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-gold-muted/20">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-maroon/10 text-maroon mb-3">
        {icon}
      </div>
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{title}</span>
      <span className="mt-1 text-base font-semibold text-maroon font-display">{value}</span>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
