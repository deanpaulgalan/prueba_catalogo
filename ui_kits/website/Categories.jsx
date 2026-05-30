// Categories.jsx — sky-tinted section of large clickable category orbs

const catStyles = {
  wrap: { background: 'var(--fs-sky)', padding: '88px 0 96px' },
  header: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 40 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 },
  tile: {
    background: '#fff', borderRadius: 28, padding: '24px 18px 22px',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14,
    boxShadow: '0 1px 0 rgba(11,13,42,.04)',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'transform 200ms cubic-bezier(.22,1,.36,1), box-shadow 200ms, border-color 200ms',
  },
  tileActive: { borderColor: 'var(--fs-blue)' },
  name: {
    fontFamily: 'var(--font-display)', fontWeight: 800,
    fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg-1)',
  },
  sub: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-3)', lineHeight: 1.45 },
  count: {
    marginTop: 'auto', fontFamily: 'var(--font-sub)', fontWeight: 600,
    fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
    color: 'var(--fs-blue)',
  },
};

function Categories({ items, activeId, onSelect }) {
  return (
    <section style={catStyles.wrap} id="categorias">
      <div className="fs-container">
        <div style={catStyles.header}>
          <div>
            <div className="fs-eyebrow">Categorías</div>
            <h2 className="fs-h-section" style={{ marginTop: 8 }}>Empieza por la zona<br />que más usas.</h2>
          </div>
          <p className="fs-body" style={{ maxWidth: 360, margin: 0 }}>
            Productos curados para cada espacio del hogar. Compatibles entre sí, con instalación incluida.
          </p>
        </div>

        <div style={catStyles.grid}>
          {items.map((c) => {
            const isActive = c.id === activeId;
            return (
              <div
                key={c.id}
                style={{ ...catStyles.tile, ...(isActive ? catStyles.tileActive : {}) }}
                onClick={() => onSelect(c.id)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(11,13,42,.10)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 0 rgba(11,13,42,.04)'; }}
              >
                <Orb kind={c.orb} size={62} />
                <div style={catStyles.name}>{c.name}</div>
                <div style={catStyles.sub}>{c.sub}</div>
                <div style={catStyles.count}>{c.count} productos</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Categories });
