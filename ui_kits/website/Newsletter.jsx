// Newsletter.jsx — "Elige el cambio" email capture

const nlStyles = {
  wrap: { background: 'var(--fs-sky)', padding: '88px 0 96px' },
  card: {
    background: 'var(--fs-blue)', color: '#fff',
    borderRadius: 40, padding: '60px 64px',
    position: 'relative', overflow: 'hidden',
    display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center',
  },
  ripple: { position: 'absolute', right: '-25%', top: '-30%', width: '70%', height: '160%', color: 'rgba(255,255,255,.18)' },
  form: { display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' },
  input: {
    flex: 1, minWidth: 220, padding: '15px 20px', borderRadius: 999, border: 'none',
    fontFamily: 'var(--font-body)', fontSize: 15, background: '#fff', color: 'var(--fg-1)',
    outline: 'none',
  },
  perks: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' },
  perk: { display: 'flex', alignItems: 'flex-start', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.9)' },
  perkDot: { flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 },
};

function Newsletter() {
  const [state, setState] = React.useState('idle'); // 'idle' | 'done'
  const [email, setEmail] = React.useState('');

  function submit(e) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setState('done');
  }

  return (
    <section style={nlStyles.wrap}>
      <div className="fs-container">
        <div style={nlStyles.card}>
          <svg style={nlStyles.ripple} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none">
            <g stroke="currentColor" strokeWidth="1.2">
              {[80, 170, 270, 380, 500, 630, 770].map((r) => (<circle key={r} cx="500" cy="500" r={r} />))}
            </g>
          </svg>
          <div style={{ position:'relative' }}>
            <div className="fs-eyebrow" style={{ color:'rgba(255,255,255,.85)' }}>Newsletter</div>
            <h2 className="fs-h-section" style={{ color:'#fff', marginTop:8 }}>Elige el cambio,<br />una vez al mes.</h2>
            <p className="fs-body" style={{ color:'rgba(255,255,255,.85)', marginTop:12, maxWidth:420 }}>
              Lanzamientos, ofertas y guías cortas sobre cómo automatizar tu hogar paso a paso.
              Sin spam — solo cuando hay algo que vale la pena.
            </p>
            {state === 'idle' ? (
              <form style={nlStyles.form} onSubmit={submit}>
                <input style={nlStyles.input} placeholder="hola@futurestore.com" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                <button className="fs-btn fs-btn--on-blue fs-btn--lg" type="submit">Suscribirme</button>
              </form>
            ) : (
              <div style={{
                marginTop:24, padding:'18px 22px', borderRadius:999, background:'rgba(255,255,255,.14)',
                display:'inline-flex', alignItems:'center', gap:10, fontFamily:'var(--font-sub)', fontWeight:600
              }}>
                <span style={{ width:22, height:22, borderRadius:999, background:'#fff', color:'var(--fs-blue)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
                </span>
                ¡Gracias! Te escribimos pronto.
              </div>
            )}
          </div>

          <ul style={nlStyles.perks}>
            {[
              'Pre-acceso a productos y nuevos lanzamientos',
              'Descuentos para suscriptores (-15% promedio)',
              'Guías paso a paso para tu primer hogar inteligente',
              'Una sola edición al mes. Cancela cuando quieras.',
            ].map((t) => (
              <li key={t} style={nlStyles.perk}>
                <span style={nlStyles.perkDot}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Newsletter });
