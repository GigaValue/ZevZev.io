<template>
  <section id="zevops" class="section section--surface">
    <div class="container zevops">
      <div class="zevops__copy">
        <span class="eyebrow">// {{ t.eyebrow }}</span>
        <h2 class="section-title">{{ t.title }}</h2>
        <p class="section-lede">{{ t.lede }}</p>

        <ul class="zevops__list">
          <li v-for="c in t.caps" :key="c">
            <span class="zevops__check" aria-hidden="true">✓</span>{{ c }}
          </li>
        </ul>

        <a class="btn btn--ghost" href="#quickstart">{{ t.deploy }}</a>
      </div>

      <div class="zevops__demo">
        <div class="window">
          <div class="window__bar">
            <div class="window__dots">
              <span class="window__dot" style="background: var(--dot-red)" />
              <span class="window__dot" style="background: var(--dot-yellow)" />
              <span class="window__dot" style="background: var(--dot-green)" />
            </div>
            <span class="window__title">zevops — incident #4821</span>
          </div>
          <div class="window__body">
            <pre class="code" v-html="log" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLocale()

const copy = {
  en: {
    eyebrow: 'Flagship employee',
    title: 'Meet ZevOps, your AI SRE.',
    lede: 'The first flagship employee ships in the box. ZevOps watches your systems and works an incident end to end — so a page at 3am gets a head start before a human even opens their laptop.',
    deploy: 'Deploy ZevOps →',
    caps: [
      'Triages alerts and correlates related signals',
      'Inspects logs and queries metrics for context',
      'Reasons toward a probable root cause',
      'Files a GitHub issue with the evidence attached',
      'Drafts a clear incident report for the on-call human'
    ]
  },
  zh: {
    eyebrow: '旗舰员工',
    title: '认识 ZevOps —— 你的 AI SRE 员工。',
    lede: '开箱即带的首位旗舰员工。ZevOps 时刻盯着你的系统，端到端地处理一次事故 —— 让凌晨三点的告警在有人打开笔记本之前就已抢先一步。',
    deploy: '部署 ZevOps →',
    caps: [
      '告警分诊，并关联相关信号',
      '分析日志、查询指标以获取上下文',
      '推理定位可能的根因',
      '创建 GitHub Issue 并附上证据',
      '为值班同事起草清晰的事故报告'
    ]
  }
}
const t = computed(() => copy[locale.value])

const log = `<span class="tok-comment"># alert received · api-gateway p99 latency</span>
<span class="tok-prompt">zevops ›</span> <span class="tok-out">triaging alert</span> <span class="tok-key">ALT-4821</span> <span class="tok-out">…</span>
<span class="tok-prompt">zevops ›</span> <span class="tok-out">querying</span> <span class="tok-str">grafana</span> <span class="tok-out">metrics (last 30m)</span>
<span class="tok-prompt">zevops ›</span> <span class="tok-out">inspecting</span> <span class="tok-str">kubernetes</span> <span class="tok-out">logs for</span> <span class="tok-key">svc/api-gateway</span>
<span class="tok-out">  → connection pool exhausted after deploy</span> <span class="tok-key">v2.14.0</span>
<span class="tok-prompt">zevops ›</span> <span class="tok-out">root cause:</span> <span class="tok-str">DB max_connections not scaled with replicas</span>
<span class="tok-prompt">zevops ›</span> <span class="tok-out">filed</span> <span class="tok-str">github</span> <span class="tok-out">issue</span> <span class="tok-key">#4821</span> <span class="tok-ok">✓</span>
<span class="tok-prompt">zevops ›</span> <span class="tok-out">drafted incident report</span> <span class="tok-ok">✓</span>
<span class="tok-comment"># awaiting human approval: production-change</span>`
</script>

<style scoped>
.section--surface {
  background: linear-gradient(180deg, var(--bg), var(--bg-elev) 60%, var(--bg));
  border-top: 1px solid var(--border-soft);
  border-bottom: 1px solid var(--border-soft);
}
.zevops {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 56px;
  align-items: center;
}
.zevops__list {
  list-style: none;
  margin: 28px 0 30px;
  padding: 0;
  display: grid;
  gap: 12px;
}
.zevops__list li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  color: var(--text-dim);
  font-size: 0.98rem;
}
.zevops__check {
  color: var(--accent);
  font-weight: 700;
  margin-top: 1px;
}
.zevops__demo {
  min-width: 0;
}
@media (max-width: 940px) {
  .zevops {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
