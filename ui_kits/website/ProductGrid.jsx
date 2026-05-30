// ProductCard.jsx / ProductGrid.jsx — pillared product cards with orb hero

const cardStyles = {
  card: {
    position: 'relative',
    background: '#fff',
    borderRadius: 28,
    padding: 18,
    display: 'flex', flexDirection: 'column', gap: 12,
    border: '1px solid var(--border-1)',
    transition: 'transform 200ms cubic-bezier(.22,1,.36,1), box-shadow 200ms, border-color 200ms',
    cursor: 'pointer',
  },
  cardDim: { opacity: .35, filter: 'saturate(.7)' },
  pic: {
    aspectRatio: '4 / 3',
    borderRadius: 20,
    background: 'linear-gradient(135deg, #EEF0F6 0%, #D0E1F2 100%)',
    position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  picTint: (kind) => ({
    background: kind === 'multi'
      ? 'linear-gradient(135deg, #1E2270 0%, #3F43B0 60%, #6A4FCC 100%)'
      : kind === 'hold'
      ? 'linear-gradient(135deg, #D0E1F2 0%, #8D67D8 100%)'
      : kind === 'swipe'
      ? 'linear-gradient(135deg, #E3EDF8 0%, #8ACAEA 100%)'
      : 'linear-gradient(135deg, #F3F4FD 0%, #C5C8F1 100%)',
  }),
  badge: {
    position: 'absolute', top: 14, left: 14,
    fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 11,
    padding: '5px 10px', borderRadius: 999,
    background: 'rgba(11,13,42,.85)', color: '#fff',
    letterSpacing: '.04em',
  },
  badgeDiscount: { background: 'var(--ok)' },
  badgeNew: { background: 'var(--fs-blue)' },
  fav: {
    position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: 999,
    background: 'rgba(255,255,255,.85)', border: 'none', display: 'flex',
    alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)',
  },
  eyebrow: {
    fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 11,
    letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--fs-blue)',
  },
  name: {
    fontFamily: 'var(--font-display)', fontWeight: 800,
    fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg-1)',
    lineHeight: 1.15,
  },
  tag: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.45 },
  footer: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' },
  price: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-.02em', color: 'var(--fg-1)' },
  oldPrice: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-mute)', textDecoration: 'line-through' },
  addBtn: {
    marginLeft: 'auto',
    fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 13,
    padding: '10px 16px', borderRadius: 999,
    background: 'var(--fs-blue)', color: '#fff', border: 'none', cursor: 'pointer',
    boxShadow: '0 6px 14px rgba(63,67,176,.28)',
    transition: 'all 200ms cubic-bezier(.22,1,.36,1)',
    display: 'inline-flex', alignItems: 'center', gap: 6,
  },
  addBtnAdded: { background: 'var(--ok)', boxShadow: '0 6px 14px rgba(47,181,122,.32)' },
};

function ProductCard({ p, onAdd, dim }) {
  const [added, setAdded] = React.useState(false);
  const [fav, setFav] = React.useState(false);

  function handleAdd(e) {
    e.stopPropagation();
    onAdd(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  const badgeStyle = p.badge?.startsWith('−') ? cardStyles.badgeDiscount : p.badge === 'Nuevo' ? cardStyles.badgeNew : null;

  return (
    <div
      style={{ ...cardStyles.card, ...(dim ? cardStyles.cardDim : {}) }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 36px rgba(11,13,42,.10)'; e.currentTarget.style.borderColor = 'transparent'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-1)'; }}
    >
      <div style={{ ...cardStyles.pic, ...cardStyles.picTint(p.orb) }}>
        <Orb kind={p.orb} size={140} glow={false} />
        {p.badge && <span style={{ ...cardStyles.badge, ...(badgeStyle || {}) }}>{p.badge}</span>}
        <button style={cardStyles.fav} onClick={(e) => { e.stopPropagation(); setFav(!fav); }} aria-label="Favorito">
          <svg width="16" height="16" viewBox="0 0 24 24" fill={fav ? 'var(--danger)' : 'none'} stroke={fav ? 'var(--danger)' : 'var(--fg-2)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <span style={cardStyles.eyebrow}>{p.catName}</span>
      <div style={cardStyles.name}>{p.name}</div>
      <div style={cardStyles.tag}>{p.tagline}</div>
      <div style={cardStyles.footer}>
        <span style={cardStyles.price}>S/ {p.price}</span>
        {p.oldPrice && <span style={cardStyles.oldPrice}>S/ {p.oldPrice}</span>}
        <button style={{ ...cardStyles.addBtn, ...(added ? cardStyles.addBtnAdded : {}) }} onClick={handleAdd}>
          {added ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
              Añadido
            </>
          ) : (
            <>
              Añadir
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function ProductGrid({ products, categories, activeCat, search, onAdd }) {
  const id2name = Object.fromEntries(categories.map((c) => [c.id, c.name]));
  const q = (search || '').trim().toLowerCase();

  // Sort: matches first (matches = no-active OR same cat) AND search match
  const filtered = products.map((p) => {
    const matchCat = !activeCat || p.cat === activeCat;
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || id2name[p.cat].toLowerCase().includes(q);
    return { ...p, catName: id2name[p.cat], dim: !matchCat || !matchSearch };
  });
  filtered.sort((a, b) => Number(a.dim) - Number(b.dim));

  return (
    <section id="productos" style={{ padding: '88px 0 96px' }}>
      <div className="fs-container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, gap: 24 }}>
          <div>
            <div className="fs-eyebrow">Catálogo destacado</div>
            <h2 className="fs-h-section" style={{ marginTop: 8 }}>
              {activeCat ? id2name[activeCat] : 'Lo más vendido'}{' '}
              <span style={{ color: 'var(--fg-mute)', fontWeight: 700 }}>· {filtered.filter(p=>!p.dim).length}</span>
            </h2>
          </div>
          <button className="fs-btn fs-btn--ghost">
            Ver todo el catálogo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} onAdd={onAdd} dim={p.dim} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProductCard, ProductGrid });
