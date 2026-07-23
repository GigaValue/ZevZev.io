<template>
  <section id="top" class="hero">
    <div class="hero__glow" aria-hidden="true" />
    <div class="hero__grid-bg" aria-hidden="true" />

    <div class="container hero__inner">
      <div class="hero__copy">
        <a class="hero__badge" :href="repo" target="_blank" rel="noopener">
          <span class="dot" />
          {{ t.badge }}
          <span class="hero__badge-arrow">→</span>
        </a>

        <h1 class="hero__title">
          {{ t.titlePrefix }}
          <span class="hero__accent">{{ t.titleAccent }}</span>
          <template v-if="t.titleSuffix">{{ t.titleSuffix }}</template>
        </h1>

        <p class="hero__sub" v-html="t.sub" />

        <div class="hero__cta">
          <a class="btn btn--primary" href="#quickstart">{{ t.getStarted }}</a>
          <a class="btn btn--ghost" :href="repo" target="_blank" rel="noopener">
            <IconGithub />
            {{ t.star }}
          </a>
        </div>

        <p class="hero__analogy">
          <span class="mono">Kubernetes</span> {{ t.analogyMid }}
          <span class="mono hero__accent">ZevZev</span> {{ t.analogyEnd }}
        </p>
      </div>

      <div class="hero__demo">
        <div class="window">
          <div class="window__bar">
            <div class="window__dots">
              <span class="window__dot" style="background: var(--dot-red)" />
              <span class="window__dot" style="background: var(--dot-yellow)" />
              <span class="window__dot" style="background: var(--dot-green)" />
            </div>
            <span class="window__title">zevops.employee.yaml</span>
          </div>
          <div class="window__body">
            <pre class="code" v-html="manifest" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const repo = 'https://github.com/GigaValue/ZevZev'
const { locale } = useLocale()

const copy = {
  en: {
    badge: 'Open-source · Apache-2.0',
    titlePrefix: 'The open-source platform for',
    titleAccent: 'digital employees',
    titleSuffix: '',
    sub: 'Build, train, deploy, and operate AI employees. ZevZev turns an AI worker into a deployable, governable, testable software unit — <strong>Employee&nbsp;as&nbsp;Code</strong> for the AI workforce era.',
    getStarted: 'Get Started',
    star: 'Star on GitHub',
    analogyMid: 'manages Containers.',
    analogyEnd: 'manages Digital Employees.'
  },
  zh: {
    badge: '开源 · Apache-2.0',
    titlePrefix: '开源',
    titleAccent: '数字员工',
    titleSuffix: '平台',
    sub: '创建、训练、部署和运营 AI 员工。ZevZev 将 AI 工作者变成可部署、可治理、可测试的软件单元 —— AI 劳动力时代的<strong>员工即代码（Employee&nbsp;as&nbsp;Code）</strong>。',
    getStarted: '开始使用',
    star: '在 GitHub 加星',
    analogyMid: '管理容器，',
    analogyEnd: '管理数字员工。'
  }
}
const t = computed(() => copy[locale.value])

const manifest = `<span class="tok-key">apiVersion</span><span class="tok-punct">:</span> <span class="tok-str">zevzev.io/v1</span>
<span class="tok-key">kind</span><span class="tok-punct">:</span> <span class="tok-str">Employee</span>
<span class="tok-key">metadata</span><span class="tok-punct">:</span>
  <span class="tok-key">name</span><span class="tok-punct">:</span> <span class="tok-str">zevops</span>
  <span class="tok-key">description</span><span class="tok-punct">:</span> <span class="tok-str">AI SRE employee for incident response</span>
<span class="tok-key">spec</span><span class="tok-punct">:</span>
  <span class="tok-key">role</span><span class="tok-punct">:</span>
    <span class="tok-key">title</span><span class="tok-punct">:</span> <span class="tok-str">SRE Engineer</span>
    <span class="tok-key">mission</span><span class="tok-punct">:</span> <span class="tok-str">Monitor systems, triage alerts, propose fixes.</span>
  <span class="tok-key">runtime</span><span class="tok-punct">:</span>
    <span class="tok-key">type</span><span class="tok-punct">:</span> <span class="tok-str">hermes</span>
    <span class="tok-key">model</span><span class="tok-punct">:</span> <span class="tok-punct">{</span> <span class="tok-key">provider</span><span class="tok-punct">:</span> <span class="tok-str">openai</span><span class="tok-punct">,</span> <span class="tok-key">name</span><span class="tok-punct">:</span> <span class="tok-str">gpt-5</span> <span class="tok-punct">}</span>
  <span class="tok-key">skills</span><span class="tok-punct">:</span> <span class="tok-punct">[</span><span class="tok-str">incident-response</span><span class="tok-punct">,</span> <span class="tok-str">kubernetes-debug</span><span class="tok-punct">,</span> <span class="tok-str">github-issue-management</span><span class="tok-punct">]</span>
  <span class="tok-key">tools</span><span class="tok-punct">:</span> <span class="tok-punct">[</span><span class="tok-str">github</span><span class="tok-punct">,</span> <span class="tok-str">grafana</span><span class="tok-punct">,</span> <span class="tok-str">kubernetes</span><span class="tok-punct">]</span>
  <span class="tok-key">permission</span><span class="tok-punct">:</span>
    <span class="tok-key">level</span><span class="tok-punct">:</span> <span class="tok-str">proposer</span>
    <span class="tok-key">requireApproval</span><span class="tok-punct">:</span> <span class="tok-punct">[</span><span class="tok-str">production-change</span><span class="tok-punct">,</span> <span class="tok-str">external-message</span><span class="tok-punct">]</span>`
</script>

<style scoped>
.hero {
  position: relative;
  padding: 84px 0 88px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-soft);
}
.hero__glow {
  position: absolute;
  top: -260px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 620px;
  background: radial-gradient(
    ellipse at center,
    var(--accent-glow),
    transparent 62%
  );
  opacity: 0.28;
  filter: blur(30px);
  pointer-events: none;
}
.hero__grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border-soft) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-soft) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%);
  opacity: 0.4;
  pointer-events: none;
}
.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
}
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-dim);
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 5px 13px;
  margin-bottom: 26px;
}
.hero__badge:hover {
  border-color: #3a3a44;
  color: var(--text);
}
.hero__badge .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}
.hero__badge-arrow {
  color: var(--text-faint);
}
.hero__title {
  font-size: clamp(2.3rem, 5.2vw, 3.7rem);
  font-weight: 700;
  letter-spacing: -0.03em;
}
.hero__accent {
  color: var(--accent);
}
.hero__sub {
  margin-top: 22px;
  font-size: 1.14rem;
  color: var(--text-dim);
  max-width: 540px;
}
.hero__sub strong {
  color: var(--text);
  font-weight: 600;
}
.hero__cta {
  display: flex;
  gap: 14px;
  margin-top: 30px;
  flex-wrap: wrap;
}
.hero__cta :deep(svg) {
  width: 17px;
  height: 17px;
}
.hero__analogy {
  margin-top: 34px;
  padding-top: 22px;
  border-top: 1px solid var(--border-soft);
  color: var(--text-faint);
  font-size: 0.96rem;
}
.mono {
  font-family: var(--font-mono);
  color: var(--text-dim);
}
.hero__demo {
  min-width: 0;
}
@media (max-width: 940px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .hero__demo {
    order: 2;
  }
}
</style>
