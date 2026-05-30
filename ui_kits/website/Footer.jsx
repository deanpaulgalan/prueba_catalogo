// Footer.jsx — address, social, sitemap

const footStyles = {
  wrap: { background: 'var(--fs-white)', borderTop: '1px solid var(--border-1)', padding: '64px 0 28px' },
  main: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 },
  colH: { fontFamily:'var(--font-sub)', fontWeight:600, fontSize:12, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--fg-3)', marginBottom: 16 },
  link: { fontFamily:'var(--font-body)', fontSize:14, color:'var(--fg-2)', display:'block', padding:'5px 0', cursor:'pointer' },
  brandBlock: { display: 'flex', flexDirection: 'column', gap: 14 },
  tagline: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:28, letterSpacing:'-.02em', color:'var(--fs-blue)' },
  addr: { fontFamily:'var(--font-body)', fontSize:13, color:'var(--fg-3)', lineHeight:1.6 },
  socials: { display:'flex', gap:10, marginTop:8 },
  socialBtn: {
    width:38, height:38, borderRadius:999, border:'1px solid var(--border-1)',
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    color:'var(--fg-2)', cursor:'pointer', background:'#fff',
  },
  bottom: {
    paddingTop: 24, borderTop:'1px solid var(--border-2)',
    display:'flex', alignItems:'center', justifyContent:'space-between', gap:16,
    fontFamily:'var(--font-body)', fontSize:12, color:'var(--fg-3)',
  },
};

function Footer() {
  return (
    <footer style={footStyles.wrap}>
      <div className="fs-container">
        <div style={footStyles.main}>
          <div style={footStyles.brandBlock}>
            <Logo size={32} wordmarkSize={26} />
            <span style={footStyles.tagline}>Elige el cambio.</span>
            <div style={footStyles.addr}>
              Av. La Encalada 1010, Of. 401<br/>
              Surco · Lima · Perú<br/>
              hola@futurestore.com · +51 1 700-0707
            </div>
            <div style={footStyles.socials}>
              {[
                ['Instagram', <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h0" />],
                ['Facebook',  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />],
                ['TikTok',    <path d="M21 8.5a6.5 6.5 0 0 1-5-2.3V16a5 5 0 1 1-5-5" />],
                ['YouTube',   <path d="M22 8.5a3 3 0 0 0-2.1-2.1C18.2 6 12 6 12 6s-6.2 0-7.9.4A3 3 0 0 0 2 8.5C1.6 10.2 1.6 12 1.6 12s0 1.8.4 3.5a3 3 0 0 0 2.1 2.1C5.8 18 12 18 12 18s6.2 0 7.9-.4a3 3 0 0 0 2.1-2.1c.4-1.7.4-3.5.4-3.5s0-1.8-.4-3.5zM10 15V9l5 3z" />],
              ].map(([label, path]) => (
                <button key={label} aria-label={label} style={footStyles.socialBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {label === 'Instagram' && <rect x="3" y="3" width="18" height="18" rx="5" />}
                    {path}
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={footStyles.colH}>Catálogo</div>
            {['Iluminación','Seguridad','Audio y voz','Climatización','Energía','Hubs y red'].map((l)=>(
              <a key={l} style={footStyles.link}>{l}</a>
            ))}
          </div>
          <div>
            <div style={footStyles.colH}>Servicios</div>
            {['Instalación a domicilio','Mantenimiento','Garantía 1 año','Soporte 24/7','Empresas y proyectos'].map((l)=>(
              <a key={l} style={footStyles.link}>{l}</a>
            ))}
          </div>
          <div>
            <div style={footStyles.colH}>Future Store</div>
            {['Sobre nosotros','Tiendas físicas','Trabaja con nosotros','Prensa','Contáctanos'].map((l)=>(
              <a key={l} style={footStyles.link}>{l}</a>
            ))}
          </div>
        </div>

        <div style={footStyles.bottom}>
          <span>© 2026 Future Store · Lima, Perú. Todos los derechos reservados.</span>
          <span>
            <a style={{ marginRight: 18, cursor:'pointer' }}>Términos</a>
            <a style={{ marginRight: 18, cursor:'pointer' }}>Privacidad</a>
            <a style={{ cursor:'pointer' }}>Libro de reclamaciones</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
