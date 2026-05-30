// Hero.jsx — brand-blue full-bleed hero with concentric-ripple motif

const heroStyles = {
  wrap: {
    position: 'relative', overflow: 'hidden',
    background: 'var(--fs-blue)', color: '#fff',
    paddingTop: 'clamp(64px, 9vw, 140px)',
    paddingBottom: 'clamp(80px, 11vw, 180px)',
    marginTop: -76, // pull under the sticky transparent header
  },
  ripple: {
    position: 'absolute', right: '-12%', top: '50%', transform: 'translateY(-50%)',
    width: '85vw', height: '170vw', maxHeight: 1600, color: 'rgba(255,255,255,.32)',
    pointerEvents: 'none',
  },
  grid: {
    position: 'relative', display: 'grid', gridTemplateColumns: '1fr 0.9fr',
    gap: 56, alignItems: 'center',
  },
  eyebrow: { color: 'rgba(255,255,255,.85)' },
  headline: {
    fontFamily: 'var(--font-display)', fontWeight: 800,
    fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 1.0,
    letterSpacing: '-0.04em', margin: '14px 0 18px', textWrap: 'balance',
  },
  sub: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6,
    color: 'rgba(255,255,255,.85)', maxWidth: 480, marginBottom: 30,
  },
  ctas: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  proof: {
    marginTop: 56, display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap',
  },
  proofItem: { display: 'flex', flexDirection: 'column', gap: 4 },
  proofN: {
    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, letterSpacing: '-.03em',
  },
  proofL: {
    fontFamily: 'var(--font-sub)', fontSize: 12, letterSpacing: '.14em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,.7)',
  },
  photoFrame: {
    position: 'relative', borderRadius: 32, overflow: 'hidden',
    aspectRatio: '4 / 5', boxShadow: '0 30px 80px rgba(0,0,0,.35)',
    background: 'var(--fs-blue-800)',
  },
};

function RippleSvg() {
  return (
    <svg style={heroStyles.ripple} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="currentColor" strokeWidth="1.2">
        {[60, 120, 200, 295, 405, 525, 650, 780].map((r) => (
          <circle key={r} cx="500" cy="500" r={r} />
        ))}
      </g>
    </svg>
  );
}

function Hero({ onShop, onInstall }) {
  return (
    <section style={heroStyles.wrap}>
      <RippleSvg />
      <div className="fs-container" style={heroStyles.grid}>
        <div>
          <div className="fs-eyebrow" style={heroStyles.eyebrow}>Nuevos espacios inteligentes</div>
          <h1 style={heroStyles.headline}>Elige el cambio,<br />para tu hogar.</h1>
          <p style={heroStyles.sub}>
            Productos inteligentes para iluminar, asegurar y controlar tu hogar — entregados
            e instalados por especialistas en todo el Perú.
          </p>
          <div style={heroStyles.ctas}>
            <button className="fs-btn fs-btn--on-blue fs-btn--lg" onClick={onShop}>
              Ver catálogo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <button className="fs-btn fs-btn--lg" style={{ background:'transparent', color:'#fff', boxShadow:'inset 0 0 0 1.5px rgba(255,255,255,.6)' }} onClick={onInstall}>
              Cómo instalamos
            </button>
          </div>
          <div style={heroStyles.proof}>
            <div style={heroStyles.proofItem}>
              <span style={heroStyles.proofN}>12 000+</span>
              <span style={heroStyles.proofL}>hogares peruanos</span>
            </div>
            <div style={heroStyles.proofItem}>
              <span style={heroStyles.proofN}>48 h</span>
              <span style={heroStyles.proofL}>instalación promedio</span>
            </div>
            <div style={heroStyles.proofItem}>
              <span style={heroStyles.proofN}>1 año</span>
              <span style={heroStyles.proofL}>garantía total</span>
            </div>
          </div>
        </div>

        <div style={heroStyles.photoFrame}>
          <img src="../../assets/photo_lifestyle_2.jpg" alt="Mujer interactuando con un teléfono inteligente"
               style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }} />
          <div style={{
            position:'absolute', left:20, bottom:20, right:20,
            background:'rgba(255,255,255,.92)', borderRadius:20, padding:'14px 18px',
            display:'flex', alignItems:'center', gap:12, backdropFilter:'blur(8px)'
          }}>
            <Orb kind="hold" size={44} glow={false} />
            <div>
              <div style={{ fontFamily:'var(--font-sub)', fontWeight:600, fontSize:13, color:'var(--fs-blue)' }}>Activa la escena "Bienvenida"</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:12, color:'var(--fg-3)' }}>3 luces · 1 termostato · música</div>
            </div>
            <span style={{
              marginLeft:'auto', width:36, height:22, borderRadius:999, background:'var(--fs-blue)',
              position:'relative', flexShrink:0
            }}>
              <span style={{ position:'absolute', top:3, right:3, width:16, height:16, borderRadius:999, background:'#fff' }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
