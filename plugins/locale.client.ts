import { LOCALE_STORAGE_KEY, type Locale } from '~/composables/useLocale'

// Runs on the client during hydration: honor a persisted choice, otherwise
// default to English. This is the international open-source site, so English is
// the default regardless of browser language; visitors can switch to 中文 and
// that choice is remembered.
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

  locale.value = 'en'
})
