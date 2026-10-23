// Adds scroll-reveal, a scroll progress bar and click feedback to the
// existing UI without touching any component. Called once from main.jsx.
export function initAnimations() {
  if (typeof window === 'undefined') return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.remove('anim-pending')
        e.target.classList.add('anim-in')
        io.unobserve(e.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  const seen = new WeakSet()
  const scan = () => {
    const main = document.querySelector('main')
    if (!main || reduce) return
    // page blocks + items inside grids (cards, features, etc.)
    const targets = [
      ...main.querySelectorAll(':scope > * > *:not(.grid)'),
      ...main.querySelectorAll('.grid > *'),
    ]
    targets.forEach((el) => {
      if (seen.has(el)) return
      seen.add(el)
      const siblings = el.parentElement ? [...el.parentElement.children] : []
      el.style.setProperty('--anim-delay', `${(siblings.indexOf(el) % 6) * 0.08}s`)
      el.classList.add('anim-pending')
      io.observe(el)
    })
  }

  // Re-scan when routes change or data (products) renders later
  new MutationObserver(scan).observe(document.getElementById('root'), {
    childList: true,
    subtree: true,
  })
  scan()

  /* ---------- Scroll progress bar ---------- */
  const bar = document.createElement('div')
  bar.id = 'anim-progress'
  document.body.appendChild(bar)
  const onScroll = () => {
    const h = document.documentElement
    const max = h.scrollHeight - h.clientHeight
    bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  /* ---------- "Add to Cart" click pop ---------- */
  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button')
    if (!btn || reduce || !/add to cart/i.test(btn.textContent)) return
    btn.classList.remove('anim-pop')
    void btn.offsetWidth // restart animation
    btn.classList.add('anim-pop')
  })
}
