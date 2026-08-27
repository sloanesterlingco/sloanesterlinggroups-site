import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Database,
  Fingerprint,
  HeartPulse,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const deterministic = [
  "Validated rules, classifications, and thresholds",
  "Required safety checks and contraindications",
  "Explicit workflow states and escalation pathways",
  "Reproducible outputs from the same inputs",
];

const probabilistic = [
  "Pattern recognition across complex clinical context",
  "Risk estimates expressed with confidence and uncertainty",
  "Prioritization of likely explanations or next questions",
  "Adaptive support informed by longitudinal information",
];

const principles = [
  { icon: Stethoscope, title: "Clinician-led", text: "Technology is designed around the way care is actually delivered—not around a generic software workflow." },
  { icon: ShieldCheck, title: "Governed by design", text: "Deterministic safety layers, transparent limits, and human approval remain visible at every consequential step." },
  { icon: Fingerprint, title: "Traceable", text: "Recommendations should expose the inputs, governing rules, uncertainty, and source context that shaped them." },
  { icon: Network, title: "Continuity-centered", text: "Useful intelligence follows the patient and the care process across visits, teams, and disconnected systems." },
];

const horizon = [
  { number: "01", title: "Longitudinal health intelligence", text: "Transform fragmented visits, medications, records, and patient-reported information into an understandable clinical narrative over time." },
  { number: "02", title: "Specialty decision environments", text: "Pair authoritative classifications and structured pathways with context-aware support for focused clinical domains." },
  { number: "03", title: "Responsible workflow augmentation", text: "Reduce cognitive and documentation burden while preserving professional judgment, review, and accountability." },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top" aria-label="Sterling Health Technologies home">
      <img src="/sterling-health-technologies.png" alt="Sterling Health Technologies" />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <BrandMark />
        <nav aria-label="Primary navigation">
          <a href="#approach">Approach</a>
          <a href="#platforms">Platforms</a>
          <a href="#future">Future</a>
          <a className="nav-cta" href="#company">Company <ArrowRight /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker"><Sparkles /> Healthcare systems for what is known—and what is uncertain.</p>
            <h1>Healthcare intelligence, engineered for <em>certainty</em> and <em>uncertainty.</em></h1>
            <p className="hero-lede">Sterling Health Technologies develops clinician-led systems that combine deterministic clinical logic with probabilistic intelligence—creating technology that is structured, adaptive, and accountable.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#approach">Explore our approach <ArrowRight /></a>
              <a className="button button-quiet" href="#platforms">View platforms <ChevronRight /></a>
            </div>
          </div>

          <div className="intelligence-model" aria-label="Sterling intelligence model">
            <div className="model-label">Sterling intelligence model</div>
            <div className="model-core">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="core-mark"><HeartPulse /></div>
              <span className="node node-one">Rules</span>
              <span className="node node-two">Context</span>
              <span className="node node-three">Evidence</span>
              <span className="node node-four">Judgment</span>
            </div>
            <div className="model-footer">
              <span><CircleDot /> Deterministic guardrails</span>
              <span><BrainCircuit /> Probabilistic insight</span>
            </div>
          </div>
        </div>
        <div className="signal-strip" aria-label="Technology principles">
          <span>Clinical precision</span><i />
          <span>Explainable intelligence</span><i />
          <span>Human authority</span><i />
          <span>Continuity across care</span>
        </div>
      </section>

      <section className="section approach" id="approach">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">A disciplined approach to healthcare AI</p>
            <h2>Two modes of reasoning.<br />One accountable system.</h2>
          </div>
          <p>Healthcare is neither entirely rule-based nor entirely predictable. Reliable systems need the precision of deterministic logic and the flexibility of probabilistic reasoning—with clear boundaries between them.</p>
        </div>

        <div className="reasoning-grid">
          <article className="reasoning-card deterministic-card">
            <div className="card-index">01</div>
            <div className="card-icon"><Layers3 /></div>
            <p className="card-kicker">Deterministic layer</p>
            <h3>What must be true.</h3>
            <p>Rules, constraints, classifications, and safety gates provide a stable clinical foundation.</p>
            <ul>{deterministic.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </article>
          <article className="reasoning-card probabilistic-card">
            <div className="card-index">02</div>
            <div className="card-icon"><BrainCircuit /></div>
            <p className="card-kicker">Probabilistic layer</p>
            <h3>What may be true.</h3>
            <p>Models surface patterns, likelihoods, and uncertainty without disguising estimates as facts.</p>
            <ul>{probabilistic.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </article>
        </div>

        <div className="human-control">
          <div className="human-icon"><Stethoscope /></div>
          <div><p className="eyebrow">The governing layer</p><h3>Clinical judgment remains in control.</h3></div>
          <p>Technology can organize, calculate, identify, and suggest. Licensed professionals interpret the complete patient context and determine care.</p>
        </div>
      </section>

      <section className="dark-section" id="platforms">
        <div className="section-heading platform-heading">
          <div><p className="eyebrow light">Platforms in development</p><h2>Designed where healthcare loses continuity.</h2></div>
          <p>Our work begins with practical breakdowns in understanding, decision support, documentation, and follow-through.</p>
        </div>

        <div className="platform-grid">
          <a className="platform-card featured-platform" href="https://myhealthvaultai.com/" target="_blank" rel="noreferrer" aria-label="Visit MyHealthVaultAI">
            <div className="platform-topline"><span>Patient continuity</span><Database /></div>
            <div className="platform-body">
              <p className="platform-number">01</p><h3>MyHealthVaultAI</h3>
              <p>A patient-facing continuity layer that helps turn visits, medications, records, and next steps into understandable, longitudinal health information.</p>
              <div className="tag-row"><span>Visit capture</span><span>Medication clarity</span><span>Caregiver continuity</span></div>
            </div>
            <div className="platform-status"><span><span className="status-dot" /> Active development</span><span>Visit MyHealthVaultAI <ArrowRight /></span></div>
          </a>

          <a className="platform-card" href="https://sterlingvascular.com/" target="_blank" rel="noreferrer" aria-label="Visit Sterling Vascular">
            <div className="platform-topline"><span>Clinical reference</span><HeartPulse /></div>
            <div className="platform-body">
              <p className="platform-number">02</p><h3>Sterling Vascular</h3>
              <p>A provider-only clinical reference and decision-support environment for venous, pelvic, arterial, carotid, and aortic disease.</p>
              <div className="tag-row"><span>Classification</span><span>Algorithms</span><span>Clinical SOPs</span></div>
            </div>
            <div className="platform-status"><span><span className="status-dot purple" /> Clinical development</span><span>Visit Sterling Vascular <ArrowRight /></span></div>
          </a>

          <article className="platform-card future-platform">
            <div className="platform-topline"><span>Applied innovation</span><Network /></div>
            <div className="platform-body">
              <p className="platform-number">03</p><h3>Workflow intelligence</h3>
              <p>Future systems for safe automation, structured documentation, specialty workflows, and clearer movement of information across care.</p>
              <div className="tag-row"><span>Clinician-led</span><span>Explainable</span><span>Interoperable</span></div>
            </div>
            <div className="platform-status"><span className="status-dot muted" /> Research horizon</div>
          </article>
        </div>
      </section>

      <section className="section system-section">
        <div className="section-heading centered-heading">
          <p className="eyebrow">A governed intelligence architecture</p>
          <h2>From raw signal to responsible action.</h2>
          <p>Every layer should make the next layer safer, clearer, and easier to audit.</p>
        </div>
        <div className="system-flow">
          {[
            ["01", "Observe", "Capture the relevant clinical signal", Database],
            ["02", "Structure", "Normalize the information and context", Layers3],
            ["03", "Reason", "Apply rules, models, and evidence", BrainCircuit],
            ["04", "Explain", "Show rationale, limits, and uncertainty", Sparkles],
            ["05", "Decide", "Keep accountable humans in control", Stethoscope],
          ].map(([n, title, text, Icon], index) => {
            const FlowIcon = Icon as typeof Database;
            return <article key={String(title)}><span>{String(n)}</span><FlowIcon /><h3>{String(title)}</h3><p>{String(text)}</p>{index < 4 && <i />}</article>;
          })}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-heading split-heading compact-heading">
          <div><p className="eyebrow">How we build</p><h2>Trust is an architectural requirement.</h2></div>
          <p>Clinical technology earns trust by being useful, constrained, understandable, and honest about uncertainty.</p>
        </div>
        <div className="principles-grid">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <article key={title}><div><span>0{index + 1}</span><Icon /></div><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section future-section" id="future">
        <div className="future-intro">
          <p className="eyebrow">The horizon</p>
          <h2>Building toward healthcare that remembers, reasons, and communicates.</h2>
          <p>Our direction is not autonomous medicine. It is better-supported human care: more complete context, clearer decisions, and fewer points of failure between one encounter and the next.</p>
        </div>
        <div className="horizon-list">
          {horizon.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ChevronRight /></article>)}
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="company-copy">
          <p className="eyebrow">About the company</p>
          <h2>Clinical experience translated into better systems.</h2>
          <p>Sterling Health Technologies is a healthcare innovation company founded by Sloane Sterling, PA-C. The company develops human-centered technologies grounded in real clinical workflows, specialty expertise, and the practical needs of patients and care teams.</p>
        </div>
        <div className="company-principle">
          <LockKeyhole /><strong>Our standard</strong>
          <p>Useful enough to improve the work. Transparent enough to question. Constrained enough to trust.</p>
        </div>
      </section>

      <footer>
        <p className="footer-statement">Sterling Health Technologies advances healthcare innovation through clinical precision, responsible intelligence, and human-centered design.</p>
        <nav className="footer-links" aria-label="Company links">
          <a href="https://www.sterlinghealthtechnologies.com/" target="_blank" rel="noreferrer">Sterling Health Technologies</a>
          <a href="https://myhealthvaultai.com/" target="_blank" rel="noreferrer">MyHealthVaultAI</a>
          <a href="https://sterlingvascular.com/" target="_blank" rel="noreferrer">Sterling Vascular</a>
        </nav>
        <div><span>© 2026 Sterling Health Technologies</span><span>Healthcare technology—not autonomous medical care.</span></div>
      </footer>
    </main>
  );
}
