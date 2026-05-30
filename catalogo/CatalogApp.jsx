// CatalogApp.jsx — header, hero, filters, grid, cart
const { useState, useMemo, useEffect } = React;

function CatalogApp() {
  const { categories, products } = window.FS_CATALOG;
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('todos');
  const [sort, setSort] = useState('destacados');
  const [cart, setCart] = useState({});       // { id: {p, qty} }
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const units = Object.values(cart).reduce((s, l) => s + l.qty, 0);

  function addToCart(p) {
    setCart((c) => {
      const ex = c[p.id];
      return { ...c, [p.id]: { p, qty: ex ? ex.qty + 1 : 1 } };
    });
    setToast(`${p.name} añadido`);
    clearTimeout(addToCart._t);
    addToCart._t = setTimeout(() => setToast(null), 1700);
  }
  function setQty(id, qty) {
    setCart((c) => {
      if (qty <= 0) { const n = { ...c }; delete n[id]; return n; }
      return { ...c, [id]: { ...c[id], qty } };
    });
  }
  function removeLine(id) {
    setCart((c) => { const n = { ...c }; delete n[id]; return n; });
  }

  const counts = useMemo(() => {
    const m = { todos: products.length };
    for (const c of categories) m[c.id] = products.filter((p) => p.cat === c.id).length;
    return m;
  }, []);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = products.filter((p) => {
      const okCat = activeCat === 'todos' || p.cat === activeCat;
      const okQ = !q || [p.name, p.model, p.tagline, p.protocol].some((s) => s.toLowerCase().includes(q));
      return okCat && okQ;
    });
    if (sort === 'precio-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'precio-desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [search, activeCat, sort]);

  const activeName = activeCat === 'todos' ? 'Todo el catálogo' : categories.find((c) => c.id === activeCat).name;

  return (
    <>
      <header className="cat-header">
        <div className="fs-container cat-header__inner">
          <a className="cat-header__brand" href="#"><Logo size={26} /></a>
          <span className="cat-header__tag">Distribuidor oficial SONOFF · Perú</span>
          <div className="cat-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busca por nombre, modelo o protocolo…" />
          </div>
          <button className="cart-btn" onClick={() => setCartOpen(true)} aria-label="Abrir carrito">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l3 13h11l2.5-9H6.5" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
            {units > 0 && <span className="cart-btn__badge">{units}</span>}
          </button>
        </div>
      </header>

      <section className="cat-hero">
        <svg className="ripple" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none">
          <g stroke="currentColor" strokeWidth="1.2">{[60,120,200,295,405,525,650,780].map((r)=><circle key={r} cx="500" cy="500" r={r} />)}</g>
        </svg>
        <div className="fs-container cat-hero__in">
          <div className="cat-hero__eyebrow">Catálogo · Domótica</div>
          <h1>Elige el cambio,<br />producto por producto.</h1>
          <p>Lo mejor de SONOFF — interruptores, sensores, enchufes y paneles — seleccionado, vendido e instalado por Future Store en todo el Perú.</p>
          <div className="cat-hero__chips">
            <span className="cat-hero__chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
              Instalación incluida desde S/ 299
            </span>
            <span className="cat-hero__chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /></svg>
              Garantía 2 años
            </span>
            <span className="cat-hero__chip">Compatible con Matter · Zigbee · Wi-Fi</span>
          </div>
        </div>
      </section>

      <div className="cat-toolbar">
        <div className="fs-container">
          <div className="cat-filters">
            <button className={'filter-pill' + (activeCat === 'todos' ? ' is-active' : '')} onClick={() => setActiveCat('todos')}>
              Todos <span className="filter-pill__count">{counts.todos}</span>
            </button>
            {categories.map((c) => (
              <button key={c.id} className={'filter-pill' + (activeCat === c.id ? ' is-active' : '')} onClick={() => setActiveCat(c.id)}>
                {c.name} <span className="filter-pill__count">{counts[c.id]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fs-container">
        <div className="cat-resultline">
          <h2>{activeName} <span className="count">· {visible.length}</span></h2>
          <label className="cat-sort">
            Ordenar
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="destacados">Destacados</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
            </select>
          </label>
        </div>

        <div className="cat-grid">
          {visible.map((p) => <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
        </div>
      </div>

      <footer className="cat-foot">
        <div className="fs-container cat-foot__in">
          <span className="cat-foot__brand"><Logo size={22} /></span>
          <span className="cat-foot__sep">© 2026 Future Store · Lima, Perú</span>
          <span>Productos SONOFF® — marca de terceros, distribuida oficialmente.</span>
        </div>
      </footer>

      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onQty={setQty} onRemove={removeLine} />

      <div className={'toast' + (toast ? ' is-visible' : '')}>
        <span className="ok"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg></span>
        {toast}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CatalogApp />);
