// InstallSection.jsx — "Instalación incluida" promo with photo + bullet list

const instStyles = {
  wrap: { background: 'var(--fs-ink)', color: '#fff', padding: '96px 0 104px', position: 'relative', overflow: 'hidden' },
  ripple: { position: 'absolute', left: '-15%', top: '-30%', width: '60%', height: '160%', color: 'rgba(255,255,255,.05)' },
  grid: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', position: 'relative' },
  steps: { display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 },
  step: {
    display: 'flex', alignItems: 'flex-start', gap: 16,
    padding: 18, borderRadius: 22, background: 'rgba(255,255,255,.05)',
    border: '1px solid rgba(255,255,255,.08)',
  },
  stepN: {
    flexShrink: 0, width: 40, height: 40, borderRadius: 999,
    background: 'var(--fs-blue)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18,
  },
  stepTitle: { fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 15, marginBottom: 4 },
  stepBody: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.5 },
  photoFrame: { position: 'relative', borderRadius: 32, overflow: 'hidden', aspectRatio: '4 / 5' },
};

function InstallSection() {
  const steps = [
    { t: 'Eliges en línea', b: 'Catálogo curado y compatible. Ningún producto sale del Future Store si no se conversa entre sí.' },
    { t: 'Coordinamos visita en 48 h', b: 'Un especialista llega a tu casa en Lima, Callao o las principales ciudades del país.' },
    { t: 'Instalamos y configuramos', b: 'Sin cables a la vista. Te dejamos las escenas listas y te enseñamos a usarlas.' },
    { t: 'Garantía y soporte 1 año', b: 'Producto e instalación cubiertos. WhatsApp directo con el equipo técnico.' },
  ];

  return (
    <section id="instalacion" style={instStyles.wrap}>
      <svg style={instStyles.ripple} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none">
        <g stroke="currentColor" strokeWidth="1.2">
          {[80, 160, 250, 350, 460, 580, 710, 850].map((r) => (<circle key={r} cx="500" cy="500" r={r} />))}
        </g>
      </svg>
      <div className="fs-container" style={instStyles.grid}>
        <div>
          <div className="fs-eyebrow" style={{ color: 'var(--fs-cyan)' }}>Instalación incluida</div>
          <h2 className="fs-h-section" style={{ color: '#fff', marginTop: 10 }}>
            La tecnología debería ser<br />una aliada, no un proyecto.
          </h2>
          <p className="fs-body" style={{ color: 'rgba(255,255,255,.75)', maxWidth: 460, marginTop: 14 }}>
            Cada compra incluye una visita de un especialista de Future Store. No te toca taladrar,
            no te toca pelearte con una app — llegas a casa y todo funciona.
          </p>
          <div style={instStyles.steps}>
            {steps.map((s, i) => (
              <div key={i} style={instStyles.step}>
                <span style={instStyles.stepN}>{i + 1}</span>
                <div>
                  <div style={instStyles.stepTitle}>{s.t}</div>
                  <div style={instStyles.stepBody}>{s.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={instStyles.photoFrame}>
          <img src="../../assets/photo_lifestyle_1.jpg" alt="Persona usando una tablet inteligente en casa"
               style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          <div style={{ position:'absolute', inset:'auto 22px 22px 22px', background:'rgba(255,255,255,.94)', color:'var(--fg-1)', borderRadius:22, padding:'16px 18px', display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:44, height:44, borderRadius:999, background:'var(--ok)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
            </div>
            <div>
              <div style={{ fontFamily:'var(--font-sub)', fontWeight:600, fontSize:14 }}>Instalación confirmada</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:12, color:'var(--fg-3)' }}>Mar 28 · 10:30 a. m. · Miraflores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InstallSection });
