<template>
  <section id="principles" class="section section--surface">
    <div class="container">
      <span class="eyebrow">// {{ t.eyebrow }}</span>
      <h2 class="section-title">{{ t.title }}</h2>
      <p class="section-lede">{{ t.lede }}</p>

      <div class="prin__grid">
        <div v-for="(p, idx) in t.principles" :key="p.name" class="prin">
          <span class="prin__idx mono">0{{ idx + 1 }}</span>
          <h3 class="prin__name">{{ p.name }}</h3>
          <p class="prin__desc">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLocale()

const copy = {
  en: {
    eyebrow: 'Principles',
    title: 'Opinionated where it counts.',
    lede: 'Five design principles shape every decision in ZevZev — and every employee you build on it.',
    principles: [
      { name: 'Local First', desc: 'Your workforce runs on your machine and your infrastructure. No mandatory cloud, no lock-in.' },
      { name: 'Runtime Neutral', desc: 'Hermes, OpenAI Agent SDK, LangGraph, CrewAI — the runtime is a swappable adapter, not a dependency.' },
      { name: 'Evaluation First', desc: 'Nothing is trusted until it is scored. Evaluation gates every deploy and every promotion.' },
      { name: 'Skills Over Prompts', desc: 'Capabilities are packaged, tested, and reused — not buried in brittle, copy-pasted prompt strings.' },
      { name: 'Governance By Design', desc: 'Permissions, approval gates, and audited tool access are built in from the first line of the manifest.' }
    ]
  },
  zh: {
    eyebrow: '原则',
    title: '在关键之处，坚持主张。',
    lede: '五条设计原则塑造了 ZevZev 中的每一个决策 —— 以及你在其之上构建的每一名员工。',
    principles: [
      { name: '本地优先', desc: '你的劳动力运行在你自己的机器与基础设施上。不强制上云，不锁定。' },
      { name: '运行时中立', desc: 'Hermes、OpenAI Agent SDK、LangGraph、CrewAI —— 运行时是可替换的适配器，而非依赖。' },
      { name: '评估优先', desc: '未经打分，绝不信任。评估为每一次部署与每一次晋升把关。' },
      { name: '技能胜于提示词', desc: '能力被打包、测试并复用 —— 而不是埋没在脆弱、复制粘贴的提示词字符串里。' },
      { name: '治理内建', desc: '权限、审批关卡与受审计的工具访问，从清单的第一行起就内建其中。' }
    ]
  }
}
const t = computed(() => copy[locale.value])
</script>

<style scoped>
.section--surface {
  background: linear-gradient(180deg, var(--bg), var(--bg-elev) 60%, var(--bg));
  border-top: 1px solid var(--border-soft);
  border-bottom: 1px solid var(--border-soft);
}
.prin__grid {
  margin-top: 46px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
.prin {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 22px;
  transition: border-color 0.18s ease, transform 0.18s ease;
}
.prin:hover {
  border-color: var(--border);
  transform: translateY(-2px);
}
.prin__idx {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
}
.prin__name {
  font-size: 1.02rem;
  font-weight: 600;
  margin: 14px 0 8px;
}
.prin__desc {
  color: var(--text-dim);
  font-size: 0.9rem;
}
@media (max-width: 1000px) {
  .prin__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .prin__grid {
    grid-template-columns: 1fr;
  }
}
</style>
