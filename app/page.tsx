"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

function PageContent() {
  const { theme } = useTheme();

  return (
    <div className="page-container">
      <header className="header">
        <span className="badge">Grokpedia v0.1</span>
        <div className="header-actions">
          <span className="theme-label">{theme === "dark" ? "Dark" : "Light"} mode</span>
          <ThemeToggle />
        </div>
      </header>
      <main className="main">
        <div className="hero">
          <div className="hero-meta">
            <span className="meta-dot" />
            <span>Research-grade knowledge engine</span>
          </div>
          <h1>Find insight faster.</h1>
          <p>
            Search across curated knowledge capsules, synthesis reports, and
            emergent ideas with a minimal, distraction-free interface.
          </p>
        </div>
        <form className="search-form" role="search">
          <div className="search-input-wrapper">
            <input
              type="search"
              placeholder="Ask Grokpedia anything..."
              aria-label="Search Grokpedia"
            />
            <button type="submit">Search</button>
          </div>
          <div className="search-hints">
            <span>Try:</span>
            <button type="button">Latest AI governance briefs</button>
            <button type="button">Explain quantum annealing</button>
            <button type="button">Compare AGI roadmaps</button>
          </div>
        </form>
      </main>
      <footer className="footer">
        <div>
          <strong>Grokpedia Labs</strong> · Strategic intelligence for deep tech.
        </div>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#changelog">Changelog</Link>
          <Link href="#roadmap">Roadmap</Link>
        </nav>
      </footer>
    </div>
  );
}

export default function Page() {
  return <PageContent />;
}
