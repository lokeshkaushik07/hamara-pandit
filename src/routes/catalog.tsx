import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  gemstones,
  zodiacSigns,
  chakras,
  planets,
  purposes,
  filterGemstones,
} from "@/lib/gemstones";
import { Search, X, ChevronRight, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Gemstone Catalog — Ratna Vibhushan" },
      { name: "description", content: "Browse the complete gemstone catalog. Filter by zodiac sign, chakra, planet, purpose, and more to find your perfect stone." },
      { property: "og:title", content: "Gemstone Catalog — Ratna Vibhushan" },
      { property: "og:description", content: "Browse the complete gemstone catalog. Filter by zodiac, chakra, planet, and purpose." },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const search = useSearch({ from: "/catalog" }) as {
    zodiac?: string;
    chakra?: string;
    planet?: string;
    purpose?: string;
  };

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    zodiac: search.zodiac || "",
    chakra: search.chakra || "",
    planet: search.planet || "",
    purpose: search.purpose || "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(
    () => filterGemstones(query, filters),
    [query, filters]
  );

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const clearFilters = () => {
    setFilters({ zodiac: "", chakra: "", planet: "", purpose: "" });
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-maroon-deep border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gold font-display">Gemstone Catalog</h1>
          <p className="mt-3 text-gold-muted max-w-xl">
            Browse all sacred gemstones. Use filters to find stones aligned with your zodiac, chakra, or life purpose.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filters Bar */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search gemstones, planets, purposes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-gold-muted/30 bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-maroon"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                showFilters || activeFilterCount > 0
                  ? "border-maroon bg-maroon text-gold"
                  : "border-gold-muted/30 bg-card text-foreground hover:border-maroon"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-maroon text-[10px] font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-card border border-gold-muted/20">
              <FilterSelect
                label="Zodiac Sign"
                value={filters.zodiac}
                onChange={(v) => setFilters((f) => ({ ...f, zodiac: v }))}
                options={zodiacSigns}
              />
              <FilterSelect
                label="Chakra"
                value={filters.chakra}
                onChange={(v) => setFilters((f) => ({ ...f, chakra: v }))}
                options={chakras}
              />
              <FilterSelect
                label="Planet"
                value={filters.planet}
                onChange={(v) => setFilters((f) => ({ ...f, planet: v }))}
                options={planets}
              />
              <FilterSelect
                label="Purpose"
                value={filters.purpose}
                onChange={(v) => setFilters((f) => ({ ...f, purpose: v }))}
                options={purposes}
              />
              {activeFilterCount > 0 && (
                <div className="sm:col-span-2 lg:col-span-4 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-maroon hover:text-gold transition-colors flex items-center gap-1"
                  >
                    <X className="h-3.5 w-3.5" /> Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Active filter pills */}
          {activeFilterCount > 0 && !showFilters && (
            <div className="flex flex-wrap gap-2">
              {filters.zodiac && (
                <FilterPill label={`Zodiac: ${filters.zodiac}`} onRemove={() => setFilters((f) => ({ ...f, zodiac: "" }))} />
              )}
              {filters.chakra && (
                <FilterPill label={`Chakra: ${filters.chakra}`} onRemove={() => setFilters((f) => ({ ...f, chakra: "" }))} />
              )}
              {filters.planet && (
                <FilterPill label={`Planet: ${filters.planet}`} onRemove={() => setFilters((f) => ({ ...f, planet: "" }))} />
              )}
              {filters.purpose && (
                <FilterPill label={`Purpose: ${filters.purpose}`} onRemove={() => setFilters((f) => ({ ...f, purpose: "" }))} />
              )}
              <button onClick={clearFilters} className="text-xs text-maroon hover:text-gold transition-colors ml-2">
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-medium text-maroon">{filtered.length}</span> gemstone
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Results Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((gem) => (
              <CatalogCard key={gem.id} gemstone={gem} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-gold-muted/20 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-maroon font-display">No gemstones found</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Try adjusting your filters or search query to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 btn-secondary-royal px-4 py-2 rounded-lg text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-maroon uppercase tracking-wider">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gold-muted/30 bg-background py-2 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
      >
        <option value="">All {label}s</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function FilterPill({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-maroon/10 px-3 py-1 text-xs font-medium text-maroon border border-maroon/20">
      {label}
      <button onClick={onRemove} className="hover:text-gold transition-colors">
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}

function CatalogCard({ gemstone }: { gemstone: typeof gemstones[0] }) {
  return (
    <Link
      to="/gemstones/$slug"
      params={{ slug: gemstone.id }}
      className="group flex flex-col rounded-xl bg-card border border-gold-muted/20 overflow-hidden card-hover"
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-maroon/5 to-maroon/10 flex items-center justify-center">
        <div
          className="w-16 h-16 rounded-full shadow-lg"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${gemstone.colorHex}, ${gemstone.colorHex}88)`,
            boxShadow: `0 8px 28px ${gemstone.colorHex}44`,
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full bg-maroon/90 px-2 py-0.5 text-[10px] font-medium text-gold border border-gold/20">
            {gemstone.planet}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-base font-semibold text-maroon font-display group-hover:text-gold transition-colors">
            {gemstone.name}
          </h3>
          <span className="text-[11px] text-muted-foreground italic">{gemstone.hindiName}</span>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">{gemstone.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {gemstone.purposes.slice(0, 2).map((p) => (
            <span key={p} className="inline-flex rounded-md bg-gold-muted/20 px-1.5 py-0.5 text-[10px] font-medium text-maroon">
              {p}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-3 border-t border-gold-muted/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>{gemstone.metal}</span>
          <span className="flex items-center gap-1 text-maroon group-hover:text-gold transition-colors">
            Details <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
