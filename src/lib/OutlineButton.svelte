<script>
  let {
    href,
    rel = undefined,
    text,
    variant = 'outline',
    size = 'md',
    onClick = undefined
  } = $props();

  const base = 'inline-flex items-center justify-center cursor-pointer font-medium no-underline transition-all duration-200 ease-in-out';

  const sizes = {
    sm: 'rounded-lg px-5 py-2.5 text-sm tracking-wide',
    md: 'rounded-lg px-7 py-3 text-base tracking-wide',
    lg: 'rounded-lg px-8 py-3.5 text-base tracking-wide'
  };

  const variants = {
    primary: 'bg-teal-600 text-white border-2 border-teal-600 shadow-sm hover:bg-teal-700 hover:border-teal-700 hover:shadow-md',
    outline: 'bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-900 hover:bg-blue-50',
    'outline-white': 'bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/60',
    ghost: 'bg-transparent text-blue-900 border-2 border-transparent hover:bg-blue-50'
  };
</script>

<a
  {href}
  {rel}
  onclick={onClick ?? undefined}
  class="{base} {sizes[size]} {variants[variant]}"
>
  {text}
</a>
