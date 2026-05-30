// CartDrawer.jsx
function CartDrawer({ open, items, onClose, onQty, onRemove }) {
  const lines = Object.values(items);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const units = lines.reduce((s, l) => s + l.qty, 0);
  const freeInstall = subtotal >= 299;

  return (
    <>
      <div className={'drawer-scrim' + (open ? ' is-open' : '')} onClick={onClose} />
      <aside className={'drawer' + (open ? ' is-open' : '')} aria-hidden={!open}>
        <div className="drawer__head">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--fs-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h2l3 13h11l2.5-9H6.5" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
          </svg>
          <h3>Tu carrito{units > 0 ? ` · ${units}` : ''}</h3>
          <button className="drawer__close" onClick={onClose} aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <div className="drawer__body">
          {lines.length === 0 ? (
            <div className="drawer__empty">
              <Orb kind="swipe" size={84} />
              <p style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, color: 'var(--fg-2)', marginBottom: 6 }}>Tu carrito está vacío</p>
              <p style={{ fontSize: 13 }}>Explora el catálogo y elige el cambio para tu hogar.</p>
            </div>
          ) : (
            lines.map((l) => (
              <div className="line" key={l.p.id}>
                <div className="line__pic"><img src={l.p.img} alt={l.p.name} onError={(e)=>{e.currentTarget.style.display='none';}} /></div>
                <div className="line__info">
                  <div className="line__name">{l.p.name}</div>
                  <div className="line__model">{l.p.model} · {l.p.protocol}</div>
                  <div className="line__ctrls">
                    <span className="qty">
                      <button onClick={() => onQty(l.p.id, l.qty - 1)} aria-label="Menos">−</button>
                      <span>{l.qty}</span>
                      <button onClick={() => onQty(l.p.id, l.qty + 1)} aria-label="Más">+</button>
                    </span>
                    <button className="line__rm" onClick={() => onRemove(l.p.id)}>Quitar</button>
                  </div>
                </div>
                <div className="line__price">S/ {l.p.price * l.qty}</div>
              </div>
            ))
          )}
        </div>

        {lines.length > 0 && (
          <div className="drawer__foot">
            <div className="drawer__row"><span>Subtotal</span><span>S/ {subtotal}</span></div>
            <div className="drawer__row"><span>Instalación a domicilio</span><span>{freeInstall ? 'Incluida' : 'S/ 49'}</span></div>
            <div className="drawer__total"><span>Total</span><span>S/ {freeInstall ? subtotal : subtotal + 49}</span></div>
            <p className="drawer__note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={freeInstall ? 'var(--ok)' : 'var(--fg-mute)'} strokeWidth="2.4" strokeLinecap="round"><polyline points="5 13 10 18 20 7" /></svg>
              {freeInstall ? 'Instalación gratis: superaste los S/ 299.' : `Agrega S/ ${299 - subtotal} más y la instalación va gratis.`}
            </p>
            <button className="btn-checkout">
              Ir a pagar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

Object.assign(window, { CartDrawer });
