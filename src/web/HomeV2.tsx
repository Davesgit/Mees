import React from "react";

type Props = { onStart: () => void };

const subjects = [
  {key:"math",title:"Rekenen",subtitle:"Getallen, sommen en meer",src:"/assets/mees/v2/subjects/MEES-V2-SUBJECT-MATH-001.svg",active:true},
  {key:"language",title:"Taal & lezen",subtitle:"Woorden, verhalen en taalspelletjes",src:"/assets/mees/v2/subjects/MEES-V2-SUBJECT-READING-001.svg"},
  {key:"nature",title:"Wereld & natuur",subtitle:"Ontdek de wereld om je heen",src:"/assets/mees/v2/subjects/MEES-V2-SUBJECT-NATURE-001.svg"},
  {key:"creative",title:"Creatief",subtitle:"Teken, maak en ontdek",src:"/assets/mees/v2/subjects/MEES-V2-SUBJECT-CREATIVE-001.svg"},
];

export default function HomeV2({onStart}:Props){
  return <main className="homev2-page">
    <header className="homev2-header">
      <img className="homev2-logo" src="/assets/mees/v2/brand/MEES-V2-BRAND-LOGO-HORIZONTAL-001.svg" alt="Mees"/>
      <nav className="homev2-nav" aria-label="Hoofdnavigatie">
        <button className="active">⌂ <span>Home</span></button>
        <button>▣ <span>Leren</span></button>
        <button>▥ <span>Ontdekboek</span></button>
      </nav>
      <div className="homev2-profile"><span className="homev2-avatar" aria-hidden="true">E</span><strong>Emma</strong><span>⌄</span></div>
      <div className="homev2-group">Groep <strong>5</strong><span>⌄</span></div>
    </header>

    <section className="homev2-hero">
      <img className="homev2-hero-bg" src="/assets/mees/MEES-SCENE-MOUNTAIN-LAKE-001.jpg" alt="" aria-hidden="true"/>
      <div className="homev2-hero-copy">
        <h1>Goedemorgen Emma!</h1>
        <p>Wat ga je vandaag ontdekken?</p>
        <button onClick={onStart}>Start met leren <span>→</span></button>
      </div>
      <img className="homev2-hero-bird" src="/assets/mees/v2/mascot/MEES-V2-MASCOT-BACKPACK-001.svg" alt="" aria-hidden="true"/>
    </section>

    <section className="homev2-subjects" aria-label="Vakken">
      {subjects.map(s=>s.active
        ? <button key={s.key} className={"homev2-subject "+s.key} onClick={onStart}>
            <img src={s.src} alt="" aria-hidden="true"/>
            <span className="homev2-subject-copy"><strong>{s.title}</strong><small>{s.subtitle}</small></span>
            <span className="homev2-circle-arrow">→</span>
          </button>
        : <article key={s.key} className={"homev2-subject "+s.key}>
            <img src={s.src} alt="" aria-hidden="true"/>
            <span className="homev2-subject-copy"><strong>{s.title}</strong><small>{s.subtitle}</small></span>
            <span className="homev2-circle-arrow">→</span>
          </article>
      )}
    </section>

    <section className="homev2-lower">
      <article className="homev2-panel homev2-continue">
        <header><h2>Ga verder waar je was</h2><button>Bekijk alles →</button></header>
        <button className="homev2-continue-card" onClick={onStart}>
          <img src="/assets/mees/v2/subjects/MEES-V2-SUBJECT-MATH-001.svg" alt="" aria-hidden="true"/>
          <span><small>Rekenen</small><strong>Breuken herkennen</strong><i><b style={{width:"58%"}}/></i></span>
          <em>→</em>
        </button>
      </article>

      <article className="homev2-panel homev2-today">
        <header><h2>Vandaag voor jou</h2><button>Bekijk alles →</button></header>
        <div className="homev2-today-list">
          <div><span className="homev2-mini-icon">📖</span><p><strong>Een spannend verhaal</strong><small>Taal & lezen</small></p><em>→</em></div>
          <div><span className="homev2-mini-icon">🌍</span><p><strong>Leven in het water</strong><small>Wereld & natuur</small></p><em>→</em></div>
          <div><span className="homev2-mini-icon">◒</span><p><strong>Procenten berekenen</strong><small>Rekenen</small></p><em>→</em></div>
        </div>
      </article>

      <article className="homev2-panel homev2-book">
        <header><h2>Nieuw in je ontdekboek</h2><button>Bekijk meer →</button></header>
        <div className="homev2-fact">
          <div className="homev2-fact-visual">🌊<span>🐬</span></div>
          <div><small>Dieren</small><h3>Wist je dat?</h3><p>Dolfijnen met hun naam naar elkaar roepen?</p><button>Bekijk weetje →</button></div>
        </div>
        <div className="homev2-thumbs" aria-hidden="true"><span>🐬</span><span>🦊</span><span>🌌</span><span>🌳</span><span>△</span><span>🦋</span></div>
      </article>
    </section>

    <section className="homev2-footer-note">
      <img src="/assets/mees/v2/brand/MEES-V2-BRAND-HEAD-001.svg" alt="" aria-hidden="true"/>
      <p>Leren is elke dag een nieuw avontuur.<br/>Veel plezier vandaag!</p>
    </section>
  </main>;
}
