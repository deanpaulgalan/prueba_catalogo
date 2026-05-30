// App.jsx — top-level state: cart, search, active category, scroll, toast

function App() {
  const data = window.FS_DATA;
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [activeCat, setActiveCat] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  // Scroll listener for sticky-nav state change
  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleAdd(p) {
    setCart((c) => [...c, p]);
    setToast(`${p.name} · S/ ${p.price}`);
    clearTimeout(handleAdd._t);
    handleAdd._t = setTimeout(() => setToast(null), 1800);
  }

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function pickCategory(id) {
    setActiveCat((prev) => (prev === id ? null : id));
    scrollTo('productos');
  }

  return (
    <>
      <Header
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
        scrolled={scrolled}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <Hero onShop={() => scrollTo('productos')} onInstall={() => scrollTo('instalacion')} />
      <Categories items={data.categories} activeId={activeCat} onSelect={pickCategory} />
      <ProductGrid
        products={data.products}
        categories={data.categories}
        activeCat={activeCat}
        search={search}
        onAdd={handleAdd}
      />
      <InstallSection />
      <Newsletter />
      <Footer />

      <div className={'fs-toast' + (toast ? ' is-visible' : '')}>
        <span className="ok-dot">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
        </span>
        Añadido al carrito · {toast}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
