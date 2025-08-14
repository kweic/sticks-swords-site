import React, { useRef } from "react";

import icon from "./images/sticks_swords_icon_512.png";
import heroWide from "./images/sticks_swords_titleimage_v2.png";
import appStoreBadge from "./images/appstore_badge.png";
import googlePlayBadge from "./images/google_play_badge.png";

import screen1 from "./images/screens/screen1.png";
import screen2 from "./images/screens/screen2.png";
import screen3 from "./images/screens/screen3.png";
import screen4 from "./images/screens/screen4.png";
import screen5 from "./images/screens/screen5.png";
import screen6 from "./images/screens/screen6.png";
import screen7 from "./images/screens/screen7.png";

export default function App() {
  const railRef = useRef(null);
  const step = () => (railRef.current ? Math.min(railRef.current.clientWidth * 0.9, 480) : 420);
  const scrollLeft = () => railRef.current?.scrollBy({ left: -step(), behavior: "smooth" });
  const scrollRight = () => railRef.current?.scrollBy({ left: step(), behavior: "smooth" });

  return (
    <div className="container">
      <style>{`
        :root {
          --bg: #60849f;
          --panel: #60849f;
          --panel-2: #4d6a80;
          --text: white;
          --muted: #9fb1d1;
          --brand: #99d5ff;
          --brand-2: #33aaff;
          --ring: #ffffff22;
          --shadow: 0 10px 30px rgba(0,0,0,.35);
          --radius: 6px;
        }
        * { box-sizing: border-box; }
        html, body, #root { height: 100%; }
        body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans"; background: radial-gradient(1200px 800px at 80% -10%, #1a2133 0%, transparent 50%), radial-gradient(800px 600px at -10% 10%, #161b2a 0%, transparent 60%), var(--bg); color: var(--text); }
        .container { width: min(1100px, 92vw); margin: 0 auto; padding: 12px 0 64px; }
        header { display:flex; align-items:center; gap:16px; padding:12px; border-radius: 6px; background:linear-gradient(180deg, var(--panel), var(--panel-2)); box-shadow:var(--shadow); border:2px solid #9fb1d1; backdrop-filter: blur(6px); }
        header img.icon { width:128px; height:128px; border-radius:3px; box-shadow:0 6px 20px #0008; }
        header h1 { margin:0; font-size:24px; letter-spacing:.5px; }
        header .spacer { flex:1; }
        .store-links { display:flex; gap:12px; }
        .store-links img { height:40px; border-radius:4px; box-shadow: var(--shadow); }
        .hero { display:grid; grid-template-columns: 1.2fr 1.5fr; gap:28px; align-items:center; margin-top:12px; }
        @media (max-width: 900px) { .hero { grid-template-columns: 1fr; } }
        .hero-card { background: linear-gradient(180deg, var(--panel), var(--panel-2)); border:2px solid #9fb1d1; border-radius: 6px; box-shadow:var(--shadow); padding:24px; }
        .hero-title { font-size: clamp(28px, 3.2vw, 44px); line-height:1.08; margin:0 0 12px; }
        .hero-sub { font-size:16px; margin:0 0 12px; }
        .cta { display:inline-flex; align-items:center; gap:10px; padding:12px 18px; border-radius:3px; border:1px solid var(--ring); background:linear-gradient(135deg, var(--brand), var(--brand-2)); color:#0a0d14; font-weight:700; text-decoration:none; letter-spacing:.3px; box-shadow:0 12px 30px rgba(110,168,255,.35); transition: transform .06s ease, box-shadow .2s ease; }
        .cta:hover { transform: translateY(-1px); box-shadow:0 16px 40px rgba(110,168,255,.45); }
        .device-frame { border-radius: 6px; overflow: clip; border:2px solid #9fb1d1; position:relative; background:#000; box-shadow:0 30px 60px rgba(0,0,0,.5); }
        .device-frame img { display:block; width:100%; height:auto; object-fit:cover; }
        .features { display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:24px; }
        @media (max-width: 900px) { .features { grid-template-columns: 1.5fr; } }
        .feature { background: linear-gradient(180deg, var(--panel), var(--panel-2)); border:2px solid #9fb1d1; border-radius: 6px; padding:12px; }
        .feature strong { color:var(--text); font-weight:700; }
        .screenshots { margin-top:12px; position:relative; background: linear-gradient(180deg, #263540, #4d6a80); border:2px solid #9fb1d1; border-radius: 6px; padding:18px 18px 26px; box-shadow:var(--shadow); }
        .rail { display:grid; grid-auto-flow:column; grid-auto-columns: clamp(240px, 26vw, 360px); gap:14px; overflow-x:auto; scroll-snap-type:x mandatory; scroll-padding:12px; padding-bottom:10px; scrollbar-width:thin; }
        .shot { scroll-snap-align:start; border-radius:3px; overflow:hidden; border:1px solid #ffffff16; background:#000; }
        .shot img { display:block; width:100%; height:100%; object-fit:cover; }
        .rail::-webkit-scrollbar { height:10px; }
        .rail::-webkit-scrollbar-track { background:#0f1320; border-radius:999px; }
        .rail::-webkit-scrollbar-thumb { background:#2b3552; border-radius:999px; }
        .rail-controls { display:flex; gap:10px; justify-content:flex-end; margin-top:10px; }
        .btn { appearance:none; border:1px solid #ffffff20; background:#13192a; color:var(--text); padding:10px 12px; border-radius:3px; box-shadow:var(--shadow); cursor:pointer; font-weight:600; transition: transform .06s ease, background .2s ease; }
        .btn:hover { transform: translateY(-1px); background:#18213a; }
        footer { color:var(--muted); margin-top:48px; text-align:center; font-size:14px; }
        footer a { color:var(--muted); }
      `}</style>

      {/* Top Bar */}
      <header>
        {/* <img className="icon" src="./images/sticks_swords_icon_512.png" alt="Game icon" /> */}
        <img className="icon" src={icon} alt="Game icon" />
        <div>
          <h1>Sticks & Swords</h1>
          <div style={{ fontSize: 14 }}>Level up, find loot, equip your team.</div>
        </div>
        <div className="spacer" />
        <div className="store-links">
          {/* <a href="https://apps.apple.com/" target="_blank" rel="noreferrer">
            <img src={appStoreBadge} alt="Download on the App Store" />
          </a> */}
          <a href="https://play.google.com/store/apps/details?id=com.kweic.battlesim&hl=en_US" target="_blank" rel="noreferrer">
            <img src={googlePlayBadge} alt="Get it on Google Play" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero-card">
          <h2 className="hero-title">Fight, loot, dominate.</h2>
          <p className="hero-sub">
            Command your stick fighters, crush stick rivals, claim their stick gold on the battlefield.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            {/* <a className="cta" href="#screenshots">See Screenshots</a> */}
            <div className="store-links">
              {/* <a href="https://apps.apple.com/" target="_blank" rel="noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" />
              </a> */}
              <a href="https://play.google.com/store/apps/details?id=com.kweic.battlesim&hl=en_US" target="_blank" rel="noreferrer">
                <img src={googlePlayBadge} alt="Get it on Google Play" />
              </a>
            </div>
          </div>

          <div className="features">
            <div className="feature"><strong>Level</strong><br/> Win battles to level up your team.</div>
            <div className="feature"><strong>Loot</strong><br/>Find armor and weapons from fallen opponents.</div>
            <div className="feature"><strong>Equip</strong><br/> Choose which items your team will wear into battle.</div>
          </div>
        </div>

        <div className="device-frame">
          {/* Large "hero" image; ideal size ~1600×900 */}
          {/* <img src="/images/sticks_swords_titleimage_v2.png" alt="Cinematic gameplay artwork" /> */}
          <img src={heroWide} alt="Cinematic gameplay artwork" />
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="screenshots" aria-label="Screenshots">
        <h3 style={{ margin: 0, marginBottom: 12, fontSize: 22 }}>In‑game Screens</h3>
        <div className="rail" ref={railRef} tabIndex={0} aria-label="Scrollable screenshots">
          <figure className="shot"><img src={screen1} alt="Title Screen" /></figure>
          <figure className="shot"><img src={screen2} alt="Main Screen" /></figure>
          <figure className="shot"><img src={screen3} alt="Equip your team" /></figure>
          <figure className="shot"><img src={screen4} alt="Choose your opponent" /></figure>
          <figure className="shot"><img src={screen5} alt="Battle" /></figure>
          <figure className="shot"><img src={screen6} alt="Visit the item shop" /></figure>
          <figure className="shot"><img src={screen7} alt="Discover unique items" /></figure>
        </div>
        <div className="rail-controls">
          <button className="btn" onClick={scrollLeft} aria-label="Scroll screenshots left">◀</button>
          <button className="btn" onClick={scrollRight} aria-label="Scroll screenshots right">▶</button>
        </div>
      </section>

      <footer>
        <div style={{ marginTop: 18 }}>© {new Date().getFullYear()} Kevin Weichel</div>
      </footer>
    </div>
  );
}
