<template>
  <footer class="ft">
    <div class="container">
      <div class="ft__cta">
        <h2 class="ft__cta-title">{{ t.ctaTitle }}</h2>
        <div class="ft__cta-actions">
          <a class="btn btn--primary" href="#quickstart">{{ t.getStarted }}</a>
          <a class="btn btn--ghost" :href="repo" target="_blank" rel="noopener">
            <IconGithub />
            {{ t.viewGithub }}
          </a>
        </div>
      </div>

      <div class="ft__bar">
        <div class="ft__brand">
          <svg class="ft__mark" viewBox="0 0 120 120" role="img" aria-label="ZevZev logo">
            <defs>
              <linearGradient id="zzHexAiFt" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#3ce9bd" />
                <stop offset="1" stop-color="#12a07c" />
              </linearGradient>
            </defs>
            <polygon
              points="60,18 96.4,39 96.4,81 60,102 23.6,81 23.6,39"
              fill="url(#zzHexAiFt)"
              stroke="url(#zzHexAiFt)"
              stroke-width="10"
              stroke-linejoin="round"
            />
            <path
              d="M43 45 H77 L43 75 H77"
              fill="none"
              stroke="#fff"
              stroke-width="10.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ZevZev</span>
        </div>
        <div class="ft__meta mono">{{ t.meta }}</div>
        <div class="ft__links">
          <a :href="repo" target="_blank" rel="noopener">GitHub</a>
          <span aria-hidden="true">·</span>
          <span>© {{ year }} GigaValue</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const repo = 'https://github.com/GigaValue/ZevZev'
const year = new Date().getFullYear()
const { locale } = useLocale()

const copy = {
  en: {
    ctaTitle: 'Create your first digital employee in minutes.',
    getStarted: 'Get Started',
    viewGithub: 'View on GitHub',
    meta: 'Open-source · Local-first · Apache-2.0'
  },
  zh: {
    ctaTitle: '几分钟创建你的第一个数字员工。',
    getStarted: '开始使用',
    viewGithub: '在 GitHub 查看',
    meta: '开源 · 本地优先 · Apache-2.0'
  }
}
const t = computed(() => copy[locale.value])
</script>

<style scoped>
.ft {
  border-top: 1px solid var(--border-soft);
  padding: 80px 0 40px;
}
.ft__cta {
  text-align: center;
  padding: 40px 24px 56px;
}
.ft__cta-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  max-width: 620px;
  margin: 0 auto 26px;
}
.ft__cta-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.ft__cta-actions :deep(svg) {
  width: 17px;
  height: 17px;
}
.ft__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-top: 30px;
  border-top: 1px solid var(--border-soft);
  flex-wrap: wrap;
}
.ft__brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 650;
}
.ft__mark {
  display: block;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
}
.ft__meta {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-faint);
}
.ft__links {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-dim);
}
.ft__links a:hover {
  color: var(--text);
}
@media (max-width: 640px) {
  .ft__bar {
    justify-content: center;
    text-align: center;
  }
}
</style>
