export function useJelly() {
  function jellyEffect(event: Event) {
    const el = event.currentTarget as HTMLElement
    if (!el) return

    el.classList.add('jelly')
    setTimeout(() => el.classList.remove('jelly'), 500)
  }

  return {
    jellyEffect
  }
}