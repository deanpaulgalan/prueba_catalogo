// Header.jsx — sticky top nav, transparent over hero, blurred-white after scroll
const headerStyles = {
  wrap: {
    position: 'sticky', top: 0, zIndex: 50, transition: 'background 320ms cubic-bezier(.22,1,.36,1), box-shadow 320ms',
  },
  inner: {
    display: 'flex', alignItems: 'center', gap: 28, padding: '18px 0',
  },
  brand: { display: 'flex', alignItems: 'center', gap: 12 },
  nav: { display: 'flex', alignItems: 'center', gap: 6, marginLeft: 18 },
  navLink: {
    fontFamily: 'var(--font-sub)', fontWeight: 500, fontSize: 14,
    padding: '8px 14px', borderRadius: 999, color: 'inherit',
    transition: 'background 200ms, color 200ms',
    cursor: 'pointer',
  },
  search: {
    marginLeft: 'auto', position: 'relative',
    display: 'flex', alignItems: 'center', minWidth: 240,
  },
  searchInput: {
    width: '100%', font: 'inherit', fontFamily: 'var(--font-body)', fontSize: 14,
    padding: '11px 16px 11px 42px', borderRadius: 999, border: '1px solid var(--border-1)',
    background: 'rgba(255,255,255,.85)', outline: 'none', color: 'var(--fg-1)',
    transition: 'border-color 200ms, box-shadow 200ms, background 200ms',
  },
  iconBtn: {
    width: 42, height: 42, borderRadius: 999, border: '1px solid var(--border-1)',
    background: 'rgba(255,255,255,.85)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', position: 'relative', color: 'inherit',
  },
  cartBadge: {
    position: 'absolute', top: -6, right: -6, minWidth: 20, height: 20, padding: '0 6px',
    borderRadius: 999, background: 'var(--fs-blue)', color: '#fff',
    fontFamily: 'var(--font-sub)', fontWeight: 700, fontSize: 11,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(63,67,176,.4)',
  },
};

function Header({ cartCount = 0, search, setSearch, scrolled, onLogoClick }) {
  const wrapStyle = {
    ...headerStyles.wrap,
    background: scrolled ? 'rgba(255,255,255,.78)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
    boxShadow: scrolled ? '0 1px 0 rgba(11,13,42,.06)' : 'none',
    color: scrolled ? 'var(--fg-1)' : '#fff',
  };

  const linkHover = (e, hover) => {
    e.currentTarget.style.background = hover ? (scrolled ? 'var(--fs-blue-50)' : 'rgba(255,255,255,.15)') : 'transparent';
  };

  return (
    <header style={wrapStyle}>
      <div className="fs-container" style={headerStyles.inner}>
        <a style={headerStyles.brand} onClick={onLogoClick}>
          <Logo size={26} />
        </a>
        <nav style={headerStyles.nav}>
          {['Catálogo', 'Categorías', 'Instalación', 'Ayuda'].map((l) => (
            <a key={l} style={headerStyles.navLink}
               onMouseEnter={(e) => linkHover(e, true)}
               onMouseLeave={(e) => linkHover(e, false)}>{l}</a>
          ))}
        </nav>

        <div style={headerStyles.search}>
          <svg style={{ position: 'absolute', left: 14, opacity: .55 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="¿Qué quieres automatizar?"
            style={headerStyles.searchInput}
            onFocus={(e)=>{ e.target.style.borderColor='var(--fs-blue)'; e.target.style.boxShadow='0 0 0 4px rgba(63,67,176,.14)'; e.target.style.background='#fff'; }}
            onBlur={(e)=>{ e.target.style.borderColor='var(--border-1)'; e.target.style.boxShadow='none'; e.target.style.background='rgba(255,255,255,.85)'; }}
          />
        </div>

        <button style={headerStyles.iconBtn} aria-label="Cuenta">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </button>
        <button style={headerStyles.iconBtn} aria-label="Carrito">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h2l3 13h11l2.5-9H6.5" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
          </svg>
          {cartCount > 0 && <span style={headerStyles.cartBadge}>{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
