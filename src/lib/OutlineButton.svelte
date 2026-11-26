<script>
  /**
   * @type {{
   *   href: string,
   *   rel?: string,
   *   text: string,
   *   variant?: 'primary' | 'light' | 'outline' | 'outline-white' | 'ghost',
   *   size?: 'sm' | 'md' | 'lg',
   *   cta?: string,
   *   ctaLocation?: string
   * }}
   */
  let {
    href,
    rel = undefined,
    text,
    variant = 'outline',
    size = 'md',
    cta = undefined,
    ctaLocation = undefined
  } = $props();

  const base = 'inline-flex items-center justify-center cursor-pointer font-medium no-underline transition-all duration-200 ease-in-out';

  const sizes = {
    sm: 'rounded-lg px-5 py-2.5 text-sm tracking-wide',
    md: 'rounded-lg px-7 py-3 text-base tracking-wide',
    lg: 'rounded-lg px-8 py-3.5 text-base tracking-wide'
  };

  const variants = {
    primary: 'bg-navy-strong text-white border-2 border-navy-strong shadow-sm hover:bg-navy hover:border-navy hover:shadow-md',
    // Primary action on a navy panel.
    light: 'bg-white text-navy border-2 border-white shadow-sm hover:bg-nav-fg hover:border-nav-fg focus-visible:outline-white',
    outline: 'bg-white text-ink border-2 border-faint hover:border-navy-strong hover:bg-accent',
    'outline-white': 'bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white/80 focus-visible:outline-white',
    ghost: 'bg-transparent text-ink border-2 border-transparent hover:bg-accent'
  };

  const sizeClass = $derived(sizes[size] ?? sizes['md']);
  const variantClass = $derived(variants[variant] ?? variants['outline']);
</script>

<a
  {href}
  {rel}
  data-cta={cta}
  data-cta-location={ctaLocation}
  class="{base} {sizeClass} {variantClass}"
>
  {text}
</a>
