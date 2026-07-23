export type Locale = 'en' | 'zh'

const STORAGE_KEY = 'zevzev.locale'

// Reactive, SSR-safe locale state shared across the app.
// Default is 'en' on the server (what `nuxt generate` bakes into the static
// HTML); the client plugin promotes it to the visitor's preference on hydration.
export const useLocale = () => {
  const locale = useState<Locale>('locale', () => 'en')

  const setLocale = (l: Locale) => {
    locale.value = l
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, l)
      } catch {
        /* storage may be unavailable (private mode) — ignore */
      }
    }
  }

  const toggleLocale = () => setLocale(locale.value === 'zh' ? 'en' : 'zh')

  const isZh = computed(() => locale.value === 'zh')

  return { locale, setLocale, toggleLocale, isZh }
}

export const LOCALE_STORAGE_KEY = STORAGE_KEY
