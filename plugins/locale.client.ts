import { LOCALE_STORAGE_KEY, type Locale } from '~/composables/useLocale'

// Runs on the client during hydration: pick up a persisted choice, otherwise
// follow navigator.language, falling back to English.
export default defineNuxtPlugin(() => {
  const { locale } = useLocale()

  let stored: string | null = null
  try {
    stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  } catch {
    stored = null
  }

  if (stored === 'en' || stored === 'zh') {
    locale.value = stored as Locale
    return
  }

  const nav = (navigator.language || '').toLowerCase()
  locale.value = nav.startsWith('zh') ? 'zh' : 'en'
})
