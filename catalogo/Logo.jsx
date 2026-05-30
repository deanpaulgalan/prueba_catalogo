// Logo.jsx — isotype + wordmark + lockup. Color via currentColor.

function Isotype({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="currentColor" aria-hidden="true">
      {/* F-shape, tight 2x3 grid; long pills = 2× circle diameter */}
      <circle cx="50"  cy="50"  r="50" />
      <rect   x="100" y="0"    width="200" height="100" rx="50" />
      <rect   x="0"   y="100"  width="100" height="200" rx="50" />
      <circle cx="150" cy="150" r="50" />
    </svg>
  );
}

function Wordmark({ size = 22 }) {
  // Real brand artwork (Future Store, two words, custom curved-tail "t"),
  // recolored via CSS mask so it works on any background.
  const ratio = 2408 / 387; // wordmark.png aspect
  return (
    <span
      role="img"
      aria-label="Future Store"
      style={{
        display: 'inline-block',
        height: size,
        width: size * ratio,
        backgroundColor: 'currentColor',
        WebkitMask: 'url(../assets/logo-wordmark.png) no-repeat left center / contain',
        mask: 'url(../assets/logo-wordmark.png) no-repeat left center / contain',
      }}
    />
  );
}

function Logo({ size = 28, wordmarkSize, gap = 12, wordmark = true }) {
  // Wordmark artwork cap-height ≈ its full height, so match it close to the isotype.
  const ws = wordmarkSize ?? Math.round(size * 0.92);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <Isotype size={size} />
      {wordmark && <Wordmark size={ws} />}
    </span>
  );
}

// Orbs — radial-gradient touch icons used in product cards & category tiles
function Orb({ kind = 'tap', size = 96, glow = true }) {
  const id = React.useId().replace(/:/g, '');
  const gradients = {
    tap: (
      <radialGradient id={`g${id}`} cx="38%" cy="34%" r="78%">
        <stop offset="0%" stopColor="#E8DAFE" />
        <stop offset="40%" stopColor="#A78BF0" />
        <stop offset="100%" stopColor="#3F43B0" />
      </radialGradient>
    ),
    hold: (
      <radialGradient id={`g${id}`} cx="42%" cy="36%" r="78%">
        <stop offset="0%" stopColor="#D9C9FF" />
        <stop offset="45%" stopColor="#8D67D8" />
        <stop offset="100%" stopColor="#3F43B0" />
      </radialGradient>
    ),
    swipe: (
      <radialGradient id={`g${id}`} cx="45%" cy="35%" r="80%">
        <stop offset="0%" stopColor="#E8F4FF" />
        <stop offset="50%" stopColor="#8ACAEA" />
        <stop offset="100%" stopColor="#568EEC" />
      </radialGradient>
    ),
    multi: (
      <radialGradient id={`g${id}`} cx="40%" cy="35%" r="85%">
        <stop offset="0%" stopColor="#C8B0FF" />
        <stop offset="45%" stopColor="#6A4FCC" />
        <stop offset="100%" stopColor="#1E2270" />
      </radialGradient>
    ),
  };
  const extras = {
    hold: (
      <radialGradient id={`gc${id}`} cx="50%" cy="50%" r="35%">
        <stop offset="0%" stopColor="#C8B0FF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#C8B0FF" stopOpacity="0" />
      </radialGradient>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={glow ? { filter: 'drop-shadow(0 14px 28px rgba(63,67,176,.28))' } : null}
      aria-hidden="true"
    >
      <defs>
        {gradients[kind]}
        {extras[kind]}
      </defs>
      <circle cx="100" cy="100" r="96" fill={`url(#g${id})`} />
      {kind === 'hold' && <circle cx="100" cy="100" r="60" fill={`url(#gc${id})`} />}
      {kind === 'swipe' && (
        <g fill="none" stroke="#3F43B0" strokeWidth="2" opacity="0.55">
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="72" />
        </g>
      )}
      {kind === 'multi' && (
        <g fill="none" stroke="#8ACAEA" strokeWidth="1" opacity="0.7">
          {[14, 28, 42, 56, 70, 84].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} />
          ))}
        </g>
      )}
    </svg>
  );
}

Object.assign(window, { Logo, Isotype, Wordmark, Orb });
