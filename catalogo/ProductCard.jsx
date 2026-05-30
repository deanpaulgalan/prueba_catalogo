// ProductCard.jsx
const ICONS = {
  plus: <path d="M12 5v14M5 12h14" />,
  check: <polyline points="5 13 10 18 20 7" />,
};

function ProductCard({ p, onAdd }) {
  const [added, setAdded] = React.useState(false);
  const [fav, setFav] = React.useState(false);
  const [imgOk, setImgOk] = React.useState(true);

  function add() {
    onAdd(p);
    setAdded(true);
    clearTimeout(add._t);
    add._t = setTimeout(() => setAdded(false), 1300);
  }

  return (
    <article className="pcard">
      <div className="pcard__pic">
        {imgOk ? (
          <img src={p.img} alt={p.name} loading="lazy" onError={() => setImgOk(false)} />
        ) : (
          <Orb kind={p.orb || 'tap'} size={120} glow={false} />
        )}
        {p.badge && (
          <span className={'pcard__badge' + (p.badge === 'Oferta' || p.badge.startsWith('−') ? ' is-sale' : '')}>{p.badge}</span>
        )}
        <button className="pcard__fav" onClick={() => setFav(!fav)} aria-label="Favorito">
          <svg width="16" height="16" viewBox="0 0 24 24" fill={fav ? 'var(--danger)' : 'none'} stroke={fav ? 'var(--danger)' : 'var(--fg-2)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <span className="pcard__model">{p.model}</span>
      <h3 className="pcard__name">{p.name}</h3>
      <span className="pcard__proto">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12.5a10 10 0 0 1 14 0M8 16a5 5 0 0 1 8 0" /><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" /></svg>
        {p.protocol}
      </span>
      <p className="pcard__tag">{p.tagline}</p>

      <div className="pcard__foot">
        <span className="pcard__price">S/ {p.price}</span>
        {p.oldPrice && <span className="pcard__old">S/ {p.oldPrice}</span>}
        <button className={'pcard__add' + (added ? ' is-added' : '')} onClick={add} aria-label="Añadir al carrito">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            {added ? ICONS.check : ICONS.plus}
          </svg>
        </button>
      </div>
    </article>
  );
}

Object.assign(window, { ProductCard });
