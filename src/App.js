import { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  FileText,
  Filter,
  Mic,
  TrendingUp,
  MapPin,
  Star,
  ShoppingBag,
  Code2,
  Store,
  Leaf,
  Heart,
  GraduationCap,
  Zap,
  Smartphone,
  Download,
  Menu,
  X,
} from "lucide-react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const NAV = {
  brand: "KaroPitch",
  tagline: "भारत का Stage",
  links: ["About", "Process", "Startups", "Investors", "Apply"],
  cta: "Apply Now",
};

const HERO = {
  badge: "🇮🇳  A KaroStartup Initiative",
  headline: ["Pitch Your Startup", "to India's Top", "Investors."],
  subtext:
    "KaroPitch connects early-stage founders — especially from Bharat's Tier-2 and Tier-3 cities — with the investors, mentorship, and network needed to build category-defining companies.",
  cta_primary: "Apply to Pitch",
  cta_secondary: "Explore Startups",
  stats: [
    { value: "₹240Cr+", label: "Funding Unlocked" },
    { value: "380+", label: "Startups Pitched" },
    { value: "120+", label: "Active Investors" },
    { value: "28", label: "States Represented" },
  ],
};

const ABOUT = {
  eyebrow: "Our Mission",
  headline: "Built for Bharat's Next Billion Builders",
  body: "India's most transformative startups aren't just born in metros. From Jaipur to Jorhat, from Kochi to Kanpur — the next unicorn could be anywhere. KaroPitch was built to make sure geography never limits greatness. We level the playing field, giving every founder a world-class stage to prove their vision.",
  highlights: [
    { icon: "🌐", text: "Tier 2 & 3 City Focus" },
    { icon: "⚡", text: "Rapid 30-Day Cohorts" },
    { icon: "🤝", text: "Founder-First Culture" },
    { icon: "🎯", text: "Sector-Agnostic Platform" },
  ],
};

const PROCESS = {
  eyebrow: "How It Works",
  headline: "From Application to Funding in 4 Steps",
  steps: [
    {
      number: "01",
      title: "Apply",
      subtitle: "Submit Your Pitch Deck",
      description:
        "Fill out your application and upload your pitch deck. Tell us your problem, solution, and the impact you want to create.",
      icon: "FileText",
      accent: "#00D4AA",
    },
    {
      number: "02",
      title: "Get Shortlisted",
      subtitle: "Curated by KaroStartup",
      description:
        "Our expert panel at KaroStartup reviews every application. Shortlisted founders are invited to the exclusive pitch bootcamp.",
      icon: "Filter",
      accent: "#6366F1",
    },
    {
      number: "03",
      title: "Pitch Live",
      subtitle: "Face India's Top Investors",
      description:
        "8 minutes on stage. Pitch live to a room full of India's most active angels, VCs, and institutional investors.",
      icon: "Mic",
      accent: "#F59E0B",
    },
    {
      number: "04",
      title: "Raise & Scale",
      subtitle: "Fund Your Vision",
      description:
        "Close your funding round, join the KaroPitch alumni network, and get 12 months of post-pitch support and investor intros.",
      icon: "TrendingUp",
      accent: "#EF4444",
    },
  ],
};

const STARTUPS_DATA = {
  eyebrow: "Featured Portfolio",
  headline: "Startups That Dared to Dream Big",
  items: [
    {
      name: "AgroLink",
      tagline: "Connecting 2M+ farmers directly to buyers",
      category: "AgriTech",
      raised: "₹4.2Cr",
      stage: "Seed",
      location: "Pune",
      color: "#00D4AA",
      emoji: "🌾",
    },
    {
      name: "MediRural",
      tagline: "AI diagnostics for underserved India",
      category: "HealthTech",
      raised: "₹8.7Cr",
      stage: "Series A",
      location: "Bengaluru",
      color: "#6366F1",
      emoji: "🏥",
    },
    {
      name: "FinKaro",
      tagline: "BNPL for Bharat's informal economy",
      category: "FinTech",
      raised: "₹12Cr",
      stage: "Series A",
      location: "Mumbai",
      color: "#F59E0B",
      emoji: "💳",
    },
    {
      name: "SkillBridge",
      tagline: "Vocational upskilling in regional languages",
      category: "EdTech",
      raised: "₹2.8Cr",
      stage: "Pre-Seed",
      location: "Hyderabad",
      color: "#EF4444",
      emoji: "📚",
    },
    {
      name: "CleanKart",
      tagline: "Circular economy for FMCG packaging",
      category: "CleanTech",
      raised: "₹5.5Cr",
      stage: "Seed",
      location: "Chennai",
      color: "#8B5CF6",
      emoji: "♻️",
    },
    {
      name: "LogiTrack",
      tagline: "Last-mile delivery intelligence platform",
      category: "LogiTech",
      raised: "₹18Cr",
      stage: "Series B",
      location: "Delhi",
      color: "#EC4899",
      emoji: "🚚",
    },
  ],
};

const INVESTORS_DATA = {
  eyebrow: "Investor Network",
  headline: "Meet Investors Looking for the Next Big Startup.",
  subtext:
    "Our curated network of angels, VCs, and institutional funds are actively looking to back India's boldest founders.",
  tiers: [
    {
      label: "Lead Partners",
      logos: ["Nexus VP", "Sequoia Surge", "Blume Ventures", "Lightspeed"],
    },
    {
      label: "Angel Network",
      logos: [
        "Anand Mahindra",
        "Kunal Shah",
        "Nandan Nilekani",
        "Rajan Anandan",
        "Vani Kola",
        "Peyush Bansal",
      ],
    },
    {
      label: "Government Partners",
      logos: ["Startup India", "SIDBI", "NASSCOM", "iStart Rajasthan"],
    },
  ],
  cta: "Join as an Investor",
};

const WHO = {
  eyebrow: "Open to All Builders",
  headline: "Who Can Apply?",
  categories: [
    {
      icon: "ShoppingBag",
      label: "D2C Brands",
      desc: "Consumer products going direct",
    },
    {
      icon: "Heart",
      label: "Consumer Startups",
      desc: "Products built for the masses",
    },
    {
      icon: "Store",
      label: "MSMEs",
      desc: "Traditional business, digital edge",
    },
    {
      icon: "Code2",
      label: "SaaS Startups",
      desc: "Software solving real problems",
    },
    { icon: "Zap", label: "Manufacturing", desc: "Made-in-India innovators" },
    {
      icon: "Leaf",
      label: "Bharat-Focused",
      desc: "Built for Tier-2 & Tier-3 India",
    },
    {
      icon: "GraduationCap",
      label: "EdTech",
      desc: "Skills and learning at scale",
    },
    {
      icon: "Smartphone",
      label: "Deep Tech",
      desc: "AI, ML, Robotics, and beyond",
    },
  ],
  note: "Early-stage (Idea to Series A). Indian registered entity or founder.",
};

const LOGOS = [
  { name: "Accel", abbr: "AC" },
  { name: "Peak XV", abbr: "PX" },
  { name: "Blume", abbr: "BL" },
  { name: "Lightspeed", abbr: "LS" },
  { name: "Matrix", abbr: "MX" },
  { name: "SIDBI", abbr: "SI" },
  { name: "Kalaari", abbr: "KL" },
  { name: "Stellaris", abbr: "ST" },
  { name: "Fireside", abbr: "FS" },
  { name: "100X.VC", abbr: "1X" },
  { name: "Titan Capital", abbr: "TC" },
  { name: "Inflection", abbr: "IN" },
];

const TESTIMONIALS = [
  {
    quote:
      "KaroPitch didn't just give us a stage — they gave us the right room. We closed our seed round within 3 weeks of the pitch day.",
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "MediRural",
    location: "Bengaluru",
    raised: "₹8.7Cr",
    avatar: "PN",
    color: "#6366F1",
  },
  {
    quote:
      "As a Tier-2 founder from Jaipur, I always felt the system was built for metro kids. KaroPitch proved me wrong. The investors actually listened.",
    name: "Arjun Sharma",
    role: "Co-Founder",
    company: "AgroLink",
    location: "Jaipur",
    raised: "₹4.2Cr",
    avatar: "AS",
    color: "#00D4AA",
  },
  {
    quote:
      "The bootcamp alone was worth it. We completely rethought our GTM strategy based on investor feedback before we even pitched. Game changer.",
    name: "Meera Iyer",
    role: "Founder",
    company: "SkillBridge",
    location: "Hyderabad",
    raised: "₹2.8Cr",
    avatar: "MI",
    color: "#F59E0B",
  },
];

const KAROSTARTUP = {
  eyebrow: "Powered By",
  headline: "Built on the Foundation of KaroStartup",
  body: "KaroPitch is an initiative by KaroStartup — India's go-to destination for startup stories, news, and insights. Since 2020, KaroStartup has been empowering entrepreneurs by telling the stories that matter: from early-stage ideas to unicorn journeys. Today, that community becomes your launchpad.",
  stats: [
    { value: "500K+", label: "Monthly Readers" },
    { value: "2,000+", label: "Startup Stories" },
    { value: "100+", label: "Contributors" },
    { value: "50+", label: "Partners" },
  ],
  values: [
    {
      icon: "📰",
      title: "Truth & Accuracy",
      desc: "Factual, research-backed coverage of the ecosystem",
    },
    {
      icon: "🤝",
      title: "Community First",
      desc: "A supportive network for founders, investors & innovators",
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      desc: "Highlighting ideas that shape the future of business",
    },
    {
      icon: "❤️",
      title: "Passion Driven",
      desc: "We believe in the power of entrepreneurship to change the world",
    },
  ],
  cta: "Visit KaroStartup",
  link: "https://karostartup.com",
};

const FINAL_CTA = {
  headline: "Ready to Pitch Your Startup?",
  subtext:
    "Applications for Cohort 6 close July 31st. 50 spots. Thousands of dreams. No application fee. Ever.",
  cta_primary: "Apply Now",
  cta_secondary: "Partner With Us",
};

const COHORT_DEADLINE = {
  label: "Cohort 6 closes in",
  date: "2025-07-31T23:59:59",
  spots: 50,
  spotsLeft: 11,
};

const FOOTER_DATA = {
  brand: "KaroPitch",
  tagline: "भारत का Stage",
  links: {
    Platform: ["About", "How It Works", "Startups", "Investors"],
    Founders: ["Apply Now", "Pitch Deck Guide", "FAQs", "Alumni Stories"],
    Company: ["Blog", "Press Kit", "Careers", "Contact"],
  },
  social: ["Twitter", "LinkedIn", "Instagram", "YouTube"],
  legal: "© 2025 KaroPitch. Made with ❤️ in Bharat.",
};

// ─── ICON MAP ─────────────────────────────────────────────────────────────────
const iconMap = {
  FileText,
  Filter,
  Mic,
  TrendingUp,
  ShoppingBag,
  Code2,
  Store,
  Leaf,
  Heart,
  GraduationCap,
  Zap,
  Smartphone,
};

const gradients = [
  "linear-gradient(135deg,#00D4AA,#00B894)",
  "linear-gradient(135deg,#6366F1,#8B5CF6)",
  "linear-gradient(135deg,#F59E0B,#EF4444)",
  "linear-gradient(135deg,#10B981,#00D4AA)",
  "linear-gradient(135deg,#EF4444,#EC4899)",
  "linear-gradient(135deg,#3B82F6,#6366F1)",
  "linear-gradient(135deg,#14B8A6,#06B6D4)",
  "linear-gradient(135deg,#8B5CF6,#A855F7)",
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s",
        background: scrolled ? "rgba(2,8,23,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg,#00D4AA,#6366F1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontWeight: 900, fontSize: 11 }}>
              KP
            </span>
          </div>
          <span
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.5px",
            }}
          >
            {NAV.brand}
          </span>
          <span
            style={{
              color: "rgba(0,212,170,0.6)",
              fontSize: 12,
              fontWeight: 600,
              marginLeft: 4,
            }}
          >
            {NAV.tagline}
          </span>
        </div>
        {/* Desktop links */}
        <div className="nav-links">
          {NAV.links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00D4AA")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.55)")
              }
            >
              {l}
            </a>
          ))}
        </div>
        {/* Desktop CTA */}
        <button
          className="nav-cta"
          style={{
            padding: "8px 20px",
            borderRadius: 999,
            background: "linear-gradient(135deg,#00D4AA,#6366F1)",
            color: "white",
            fontWeight: 700,
            fontSize: 14,
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.85";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
          }}
        >
          {NAV.cta}
        </button>
        {/* Mobile hamburger */}
        <button className="nav-mob" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`mob-menu${mobileOpen ? " open" : ""}`}
        style={{
          background: "rgba(2,8,23,0.97)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 24px 28px",
        }}
      >
        {NAV.links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              color: "rgba(255,255,255,0.7)",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {l}
          </a>
        ))}
        <button
          style={{
            marginTop: 20,
            width: "100%",
            padding: "14px",
            borderRadius: 12,
            background: "linear-gradient(135deg,#00D4AA,#6366F1)",
            color: "white",
            fontWeight: 700,
            fontSize: 16,
            border: "none",
            cursor: "pointer",
          }}
        >
          {NAV.cta}
        </button>
      </div>
    </nav>
  );
}

function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

function CountdownBlock({ value, label }) {
  return (
    <div style={{ textAlign: "center", minWidth: 56 }}>
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          color: "white",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.35)",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Hero() {
  const time = useCountdown(COHORT_DEADLINE.date);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#020817",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.2) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 480,
          height: 480,
          background: "rgba(0,212,170,0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: 480,
          height: 480,
          background: "rgba(99,102,241,0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 900,
          margin: "0 auto",
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid rgba(0,212,170,0.3)",
            background: "rgba(0,212,170,0.08)",
            color: "#00D4AA",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 32,
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "#00D4AA",
              borderRadius: "50%",
              boxShadow: "0 0 8px #00D4AA",
            }}
          />
          {HERO.badge}
        </div>

        <h1 style={{ fontWeight: 900, lineHeight: 1.0, marginBottom: 24 }}>
          {HERO.headline.map((line, i) => (
            <span
              key={i}
              style={{
                display: "block",
                fontSize: "clamp(56px,10vw,112px)",
                background:
                  i === 0
                    ? "none"
                    : i === 1
                      ? "linear-gradient(135deg,#00D4AA,#5EEAD4)"
                      : "linear-gradient(135deg,#6366F1,#A78BFA)",
                WebkitBackgroundClip: i > 0 ? "text" : "none",
                WebkitTextFillColor: i === 0 ? "white" : "transparent",
                color: i === 0 ? "white" : "transparent",
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 32px",
          }}
        >
          {HERO.subtext}
        </p>

        {/* ── Countdown + Spots ── */}
        <div
          className="countdown-inner"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 20,
            border: "1px solid rgba(239,68,68,0.3)",
            background: "rgba(239,68,68,0.07)",
            marginBottom: 36,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginRight: 16,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#EF4444",
                borderRadius: "50%",
                boxShadow: "0 0 8px #EF4444",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {COHORT_DEADLINE.label}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <CountdownBlock value={time.days} label="Days" />
            <span
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 20,
                fontWeight: 300,
                paddingBottom: 10,
              }}
            >
              :
            </span>
            <CountdownBlock value={time.hours} label="Hrs" />
            <span
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 20,
                fontWeight: 300,
                paddingBottom: 10,
              }}
            >
              :
            </span>
            <CountdownBlock value={time.minutes} label="Min" />
            <span
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 20,
                fontWeight: 300,
                paddingBottom: 10,
              }}
            >
              :
            </span>
            <CountdownBlock value={time.seconds} label="Sec" />
          </div>
          <div
            style={{
              marginLeft: 16,
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(239,68,68,0.2)",
              border: "1px solid rgba(239,68,68,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#FCA5A5", fontSize: 12, fontWeight: 700 }}>
              Only {COHORT_DEADLINE.spotsLeft} spots left
            </span>
          </div>
        </div>

        {/* ── Email capture ── */}
        {!submitted ? (
          <div
            className="hero-email"
            style={{
              display: "flex",
              gap: 0,
              maxWidth: 480,
              margin: "0 auto 32px",
              borderRadius: 999,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "16px 24px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: 15,
                outline: "none",
                minWidth: 0,
              }}
            />
            <button
              onClick={() => email && setSubmitted(true)}
              style={{
                padding: "14px 24px",
                background: "linear-gradient(135deg,#00D4AA,#0EA5E9)",
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Reserve My Spot →
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              borderRadius: 999,
              background: "rgba(0,212,170,0.15)",
              border: "1px solid rgba(0,212,170,0.4)",
              color: "#00D4AA",
              fontWeight: 600,
              fontSize: 15,
              marginBottom: 32,
            }}
          >
            ✅ You're on the list! We'll be in touch soon.
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#00D4AA,#0EA5E9)",
              color: "white",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 20px 60px rgba(0,212,170,0.35)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {HERO.cta_primary} <ArrowRight size={18} />
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 28px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "rgba(99,102,241,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Play size={13} color="#A78BFA" fill="#A78BFA" />
            </div>
            {HERO.cta_secondary}
          </button>
        </div>

        <div className="stats4">
          {HERO.stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: "24px 16px",
                textAlign: "center",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
              }
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  background: "linear-gradient(135deg,#00D4AA,#6366F1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div
      style={{
        background: "#020817",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(90deg,#020817,transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(270deg,#020817,transparent)",
          zIndex: 2,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <span
          style={{
            color: "rgba(255,255,255,0.2)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            padding: "0 40px",
            flexShrink: 0,
          }}
        >
          Trusted by investors from
        </span>

        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { display: flex; animation: marquee 28s linear infinite; width: max-content; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>

        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 28px",
                borderRight: "1px solid rgba(255,255,255,0.05)",
                flexShrink: 0,
                cursor: "default",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.05em",
                }}
              >
                {logo.abbr}
              </div>
              <span
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "120px 0",
        background: "#020817",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 400,
          height: 400,
          background: "rgba(0,212,170,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 400,
          height: 400,
          background: "rgba(99,102,241,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div className="grid-2">
          <div>
            <p
              style={{
                color: "#00D4AA",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {ABOUT.eyebrow}
            </p>
            <h2
              style={{
                fontSize: "clamp(32px,4vw,56px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              {ABOUT.headline}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 17,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              {ABOUT.body}
            </p>
            <div className="grid-4" style={{ gap: 12 }}>
              {ABOUT.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    cursor: "default",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,170,0.08)";
                    e.currentTarget.style.borderColor = "rgba(0,212,170,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  <span style={{ fontSize: 22 }}>{h.icon}</span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))",
                padding: 32,
                backdropFilter: "blur(10px)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg,#00D4AA,#6366F1,#A78BFA)",
                }}
              />
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div style={{ fontSize: 56, marginBottom: 12 }}>🇮🇳</div>
                <h3
                  style={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: 24,
                    marginBottom: 8,
                  }}
                >
                  Bharat First
                </h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
                  Every state. Every language. Every dream.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7,1fr)",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: "1",
                      borderRadius: "50%",
                      background:
                        i % 5 === 0
                          ? "linear-gradient(135deg,#00D4AA,#6366F1)"
                          : i % 3 === 0
                            ? "rgba(99,102,241,0.4)"
                            : "rgba(255,255,255,0.07)",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                28 States · 8 Union Territories · 1 Vision
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: "linear-gradient(135deg,#00D4AA,#0EA5E9)",
                borderRadius: 16,
                padding: "12px 16px",
                boxShadow: "0 20px 40px rgba(0,212,170,0.4)",
              }}
              className="floater"
            >
              <div style={{ color: "white", fontWeight: 900, fontSize: 22 }}>
                380+
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 11 }}>
                Startups
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -16,
                left: -16,
                background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                borderRadius: 16,
                padding: "12px 16px",
                boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
              }}
              className="floater"
            >
              <div style={{ color: "white", fontWeight: 900, fontSize: 22 }}>
                ₹240Cr
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 11 }}>
                Raised
              </div>
            </div>
          </div>
        </div>
        {/* end grid-2 */}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      style={{
        position: "relative",
        padding: "120px 0",
        background: "#030d1a",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 25% 50%,rgba(99,102,241,0.08) 0%,transparent 60%),radial-gradient(circle at 75% 50%,rgba(0,212,170,0.08) 0%,transparent 60%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              color: "#6366F1",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {PROCESS.eyebrow}
          </p>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 900,
              color: "white",
            }}
          >
            {PROCESS.headline}
          </h2>
        </div>
        <div className="grid-4">
          {PROCESS.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: 24,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.4s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = `${step.accent}40`;
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 24px 60px ${step.accent}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 900,
                    color: `${step.accent}25`,
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {step.number}
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${step.accent}15`,
                    border: `1px solid ${step.accent}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  {Icon && <Icon size={22} color={step.accent} />}
                </div>
                <h3
                  style={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: 22,
                    marginBottom: 4,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: step.accent,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {step.subtitle}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StartupCard({ s }) {
  return (
    <div
      style={{
        position: "relative",
        padding: 24,
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        transition: "all 0.4s",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${s.color}40`;
        e.currentTarget.style.boxShadow = `0 24px 60px ${s.color}15`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: `${s.color}15`,
            border: `1px solid ${s.color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          {s.emoji}
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 999,
            background: `${s.color}15`,
            color: s.color,
            border: `1px solid ${s.color}30`,
          }}
        >
          {s.category}
        </span>
      </div>
      <h3
        style={{
          color: "white",
          fontWeight: 900,
          fontSize: 20,
          marginBottom: 8,
        }}
      >
        {s.name}
      </h3>
      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: 14,
          marginBottom: 20,
          lineHeight: 1.6,
        }}
      >
        {s.tagline}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            color: "rgba(255,255,255,0.35)",
            fontSize: 12,
          }}
        >
          <MapPin size={12} />
          {s.location}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
            {s.stage}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <TrendingUp size={12} color={s.color} />
            <span style={{ fontWeight: 700, fontSize: 14, color: s.color }}>
              {s.raised}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Startups() {
  return (
    <section
      id="startups"
      style={{
        padding: "120px 0",
        background: "#020817",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 60,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p
              style={{
                color: "#8B5CF6",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {STARTUPS_DATA.eyebrow}
            </p>
            <h2
              style={{
                fontSize: "clamp(32px,5vw,64px)",
                fontWeight: 900,
                color: "white",
              }}
            >
              {STARTUPS_DATA.headline}
            </h2>
          </div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,255,255,0.5)",
              background: "none",
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4AA")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            View All Startups <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid-3">
          {STARTUPS_DATA.items.map((s, i) => (
            <StartupCard key={i} s={s} />
          ))}
        </div>
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#00D4AA",
                borderRadius: "50%",
              }}
            />
            Cohort 6 applications open — Be the next success story
            <button
              style={{
                color: "#00D4AA",
                background: "none",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                marginLeft: 8,
              }}
            >
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Investors() {
  return (
    <section
      id="investors"
      style={{
        position: "relative",
        padding: "120px 0",
        background: "#030d1a",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 50%,rgba(99,102,241,0.1) 0%,transparent 70%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              color: "#6366F1",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {INVESTORS_DATA.eyebrow}
          </p>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 900,
              color: "white",
              marginBottom: 16,
            }}
          >
            {INVESTORS_DATA.headline}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 18,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            {INVESTORS_DATA.subtext}
          </p>
        </div>
        {INVESTORS_DATA.tiers.map((tier, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              {tier.label}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {tier.logos.map((name, j) => (
                <div
                  key={j}
                  style={{
                    padding: i === 0 ? "10px 22px" : "8px 18px",
                    borderRadius: 999,
                    border:
                      i === 0
                        ? "1px solid rgba(99,102,241,0.35)"
                        : i === 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(0,212,170,0.2)",
                    background:
                      i === 0
                        ? "rgba(99,102,241,0.12)"
                        : i === 1
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(0,212,170,0.05)",
                    color:
                      i === 0
                        ? "#A78BFA"
                        : i === 1
                          ? "rgba(255,255,255,0.65)"
                          : "rgba(0,212,170,0.7)",
                    fontSize: i === 0 ? 14 : i === 1 ? 13 : 12,
                    fontWeight: i === 0 ? 700 : 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                >
                  {i === 0 && <Star size={11} color="#A78BFA" fill="#A78BFA" />}
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 32px",
              borderRadius: 999,
              border: "1px solid rgba(99,102,241,0.4)",
              background: "rgba(99,102,241,0.1)",
              color: "#A78BFA",
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.2)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
            }}
          >
            {INVESTORS_DATA.cta} <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function WhoCanApply() {
  return (
    <section id="apply" style={{ padding: "120px 0", background: "#020817" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p
            style={{
              color: "#00D4AA",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {WHO.eyebrow}
          </p>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 900,
              color: "white",
            }}
          >
            {WHO.headline}
          </h2>
        </div>
        <div className="grid-4" style={{ marginBottom: 40 }}>
          {WHO.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={i}
                style={{
                  padding: 24,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: gradients[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  {Icon && <Icon size={22} color="white" />}
                </div>
                <h3
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 6,
                  }}
                >
                  {cat.label}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
                  {cat.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "20px 24px",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14 }}>
            <span style={{ color: "#00D4AA", fontWeight: 600 }}>
              Eligibility:{" "}
            </span>
            {WHO.note}
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "#020817",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          background: "rgba(99,102,241,0.07)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              color: "#F59E0B",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Founder Stories
          </p>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 900,
              color: "white",
            }}
          >
            Heard it from the Stage
          </h2>
        </div>

        <div className="grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                padding: 32,
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.4s",
                cursor: "default",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${t.color}35`;
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 28px 60px ${t.color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg,transparent,${t.color},transparent)`,
                }}
              />

              {/* Quote mark */}
              <div
                style={{
                  fontSize: 64,
                  lineHeight: 1,
                  color: `${t.color}25`,
                  fontWeight: 900,
                  marginBottom: 8,
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} color="#F59E0B" fill="#F59E0B" />
                ))}
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  marginBottom: 28,
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg,${t.color},${t.color}80)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ color: "white", fontWeight: 700, fontSize: 14 }}
                  >
                    {t.name}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
                    {t.role} · {t.company}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{ color: t.color, fontWeight: 700, fontSize: 14 }}
                  >
                    {t.raised}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>
                    raised
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div
          style={{
            marginTop: 48,
            padding: "20px 32px",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {[
            {
              value: "94%",
              label: "of pitched startups raised within 6 months",
            },
            { value: "4.9/5", label: "average founder satisfaction score" },
            {
              value: "380+",
              label: "founders in the KaroPitch alumni network",
            },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "white" }}>
                {item.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 12,
                  marginTop: 4,
                  maxWidth: 180,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KaroStartupSection() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "#030d1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(0,212,170,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              color: "#00D4AA",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {KAROSTARTUP.eyebrow}
          </p>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,60px)",
              fontWeight: 900,
              color: "white",
              marginBottom: 20,
            }}
          >
            {KAROSTARTUP.headline}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            {KAROSTARTUP.body}
          </p>
        </div>

        {/* Stats row */}
        <div className="stats4" style={{ marginBottom: 48 }}>
          {KAROSTARTUP.stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: "28px 20px",
                textAlign: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(0,212,170,0.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
              }
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 900,
                  background: "linear-gradient(135deg,#00D4AA,#6366F1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid-4" style={{ marginBottom: 48 }}>
          {KAROSTARTUP.values.map((v, i) => (
            <div
              key={i}
              style={{
                padding: "24px 20px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,170,0.25)";
                e.currentTarget.style.background = "rgba(0,212,170,0.05)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
              <h3
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 8,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to karostartup.com */}
        <div style={{ textAlign: "center" }}>
          <a
            href={KAROSTARTUP.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              borderRadius: 999,
              border: "1px solid rgba(0,212,170,0.35)",
              background: "rgba(0,212,170,0.08)",
              color: "#00D4AA",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,170,0.15)";
              e.currentTarget.style.borderColor = "rgba(0,212,170,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,212,170,0.08)";
              e.currentTarget.style.borderColor = "rgba(0,212,170,0.35)";
            }}
          >
            {KAROSTARTUP.cta} → karostartup.com
          </a>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        overflow: "hidden",
        background: "#020817",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,rgba(0,40,30,0.8),#020817,rgba(20,10,60,0.8))",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,170,0.15) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translateY(-50%)",
          width: 400,
          height: 400,
          background: "rgba(0,212,170,0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "20%",
          transform: "translateY(-50%)",
          width: 400,
          height: 400,
          background: "rgba(99,102,241,0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>🚀</div>
        <h2
          style={{
            fontSize: "clamp(40px,6vw,72px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {FINAL_CTA.headline}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 18,
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          {FINAL_CTA.subtext}
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 44px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#00D4AA,#0EA5E9)",
              color: "white",
              fontWeight: 700,
              fontSize: 18,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 24px 60px rgba(0,212,170,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {FINAL_CTA.cta_primary} <ArrowRight size={20} />
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 44px",
              borderRadius: 999,
              border: "1px solid rgba(99,102,241,0.45)",
              background: "rgba(99,102,241,0.1)",
              color: "#A78BFA",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {FINAL_CTA.cta_secondary} <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#020817",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "72px 0 40px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid-2c" style={{ marginBottom: 64 }}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "linear-gradient(135deg,#00D4AA,#6366F1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontWeight: 900, fontSize: 11 }}>
                  KP
                </span>
              </div>
              <span style={{ color: "white", fontWeight: 700, fontSize: 18 }}>
                {FOOTER_DATA.brand}
              </span>
            </div>
            <p
              style={{
                color: "rgba(0,212,170,0.6)",
                fontSize: 13,
                marginBottom: 12,
              }}
            >
              {FOOTER_DATA.tagline}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              India's most ambitious founders deserve India's best stage. We
              built it.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {FOOTER_DATA.social.map((s) => (
                <button
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "white";
                    e.target.style.borderColor = "rgba(255,255,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.4)";
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {s[0]}
                </button>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_DATA.links).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {section}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: 14,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "white")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.35)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
            {FOOTER_DATA.legal}
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontSize: 12,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.6)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.25)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Syne', 'Inter', sans-serif",
        background: "#020817",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        input::placeholder { color: rgba(255,255,255,0.3); }

        .grid-4  { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .grid-3  { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .grid-2  { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .grid-2c { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; }
        .stats4  { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(255,255,255,0.05); border-radius:20px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); }
        .nav-links { display:flex; gap:32px; }
        .nav-cta   { display:inline-block; }
        .nav-mob   { display:none; cursor:pointer; background:none; border:none; color:white; }
        .mob-menu  { display:none; }

        @media(max-width:1024px){
          .grid-4  { grid-template-columns:repeat(2,1fr); }
          .grid-3  { grid-template-columns:repeat(2,1fr); }
          .grid-2c { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:768px){
          .grid-4  { grid-template-columns:repeat(2,1fr); gap:12px; }
          .grid-3  { grid-template-columns:1fr; }
          .grid-2  { grid-template-columns:1fr; gap:40px; }
          .grid-2c { grid-template-columns:1fr; gap:32px; }
          .stats4  { grid-template-columns:repeat(2,1fr); }
          .nav-links { display:none; }
          .nav-cta   { display:none; }
          .nav-mob   { display:flex; align-items:center; }
          .mob-menu.open { display:block; }
          .floater   { display:none !important; }
          .sec-pad   { padding:72px 0 !important; }
          .countdown-inner { flex-wrap:wrap; justify-content:center; gap:8px; }
          .hero-email { flex-direction:column; border-radius:16px !important; }
          .hero-email input { border-radius:12px !important; }
          .hero-email button { border-radius:12px !important; width:100%; justify-content:center; }
        }
        @media(max-width:480px){
          .grid-4 { grid-template-columns:repeat(2,1fr); gap:10px; }
          .stats4 { grid-template-columns:repeat(2,1fr); }
        }

        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-track { display:flex; animation:marquee 28s linear infinite; width:max-content; }
        .marquee-track:hover { animation-play-state:paused; }
      `}</style>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <About />
      <Process />
      <Startups />
      <Investors />
      <WhoCanApply />
      <Testimonials />
      <KaroStartupSection />
      <CTAFinal />
      <Footer />
    </div>
  );
}
