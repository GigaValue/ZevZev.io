<template>
  <header class="hd">
    <div class="container hd__inner">
      <a href="#top" class="hd__brand" aria-label="ZevZev home">
        <svg class="hd__mark" viewBox="0 0 120 120" role="img" aria-label="ZevZev logo">
          <defs>
            <linearGradient id="zzHexAi" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#3ce9bd" />
              <stop offset="1" stop-color="#12a07c" />
            </linearGradient>
          </defs>
          <polygon
            points="60,18 96.4,39 96.4,81 60,102 23.6,81 23.6,39"
            fill="url(#zzHexAi)"
            stroke="url(#zzHexAi)"
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
        <span class="hd__name">ZevZev</span>
        <span class="hd__tag">v1</span>
      </a>

      <nav class="hd__nav" aria-label="Primary">
        <a href="#concept">{{ t.concept }}</a>
        <a href="#features">{{ t.modules }}</a>
        <a href="#lifecycle">{{ t.lifecycle }}</a>
        <a href="#zevops">ZevOps</a>
        <a href="#quickstart">{{ t.quickstart }}</a>
      </nav>

      <div class="hd__actions">
        <div class="hd__lang" role="group" aria-label="Language">
          <button
            type="button"
            :class="{ 'is-active': locale === 'en' }"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
          <span class="hd__lang-sep" aria-hidden="true">|</span>
          <button
            type="button"
            :class="{ 'is-active': locale === 'zh' }"
            :aria-pressed="locale === 'zh'"
            @click="setLocale('zh')"
          >
            中文
          </button>
        </div>
        <a class="hd__gh" :href="repo" target="_blank" rel="noopener">
          <IconGithub />
          <span>GitHub</span>
        </a>
        <a class="btn btn--primary hd__cta" href="#quickstart">{{ t.getStarted }}</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const repo = 'https://github.com/GigaValue/ZevZev'
const { locale, setLocale } = useLocale()

const copy = {
  en: {
    concept: 'Concept',
    modules: 'Modules',
    lifecycle: 'Lifecycle',
    quickstart: 'Quick Start',
    getStarted: 'Get Started'
  },
  zh: {
    concept: '概念',
    modules: '模块',
    lifecycle: '生命周期',
    quickstart: '快速开始',
    getStarted: '开始使用'
  }
}
const t = computed(() => copy[locale.value])
</script>

<style scoped>
.hd {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 11, 0.72);
  backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid var(--border-soft);
}
.hd__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
}
.hd__brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 650;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
}
.hd__mark {
  display: block;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.hd__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-faint);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 1px 5px;
}
.hd__nav {
  display: flex;
  gap: 26px;
  font-size: 0.92rem;
  color: var(--text-dim);
}
.hd__nav a:hover {
  color: var(--text);
}
.hd__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.hd__lang {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
}
.hd__lang button {
  background: none;
  border: none;
  padding: 2px 3px;
  cursor: pointer;
  color: var(--text-faint);
  font-family: inherit;
  font-size: inherit;
  transition: color 0.15s ease;
}
.hd__lang button:hover {
  color: var(--text-dim);
}
.hd__lang button.is-active {
  color: var(--accent);
}
.hd__lang-sep {
  color: var(--border);
}
.hd__gh {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.92rem;
  color: var(--text-dim);
}
.hd__gh:hover {
  color: var(--text);
}
.hd__gh :deep(svg) {
  width: 18px;
  height: 18px;
}
@media (max-width: 860px) {
  .hd__nav {
    display: none;
  }
}
@media (max-width: 560px) {
  .hd__gh span,
  .hd__tag {
    display: none;
  }
}
</style>
