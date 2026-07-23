<template>
  <div>
    <SiteHeader />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()

// Keep <html lang> in sync with the active locale for a11y and SEO.
useHead({
  htmlAttrs: {
    lang: computed(() => (locale.value === 'zh' ? 'zh-CN' : 'en'))
  }
})
</script>
