<template>
  <section id="features" class="section section--surface">
    <div class="container">
      <span class="eyebrow">// {{ t.eyebrow }}</span>
      <h2 class="section-title">{{ t.title }}</h2>
      <p class="section-lede">{{ t.lede }}</p>

      <div class="feat__grid">
        <article
          v-for="f in features"
          :key="f.title"
          class="feat"
        >
          <div class="feat__icon" v-html="f.icon" />
          <h3 class="feat__title">{{ f.title }}</h3>
          <p class="feat__desc">{{ f.desc }}</p>
          <span v-if="f.tag" class="feat__tag mono">{{ f.tag }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const i = (path: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`

const { locale } = useLocale()

// Icons are locale-independent; zipped into the localized cards below by index.
const icons = [
  i('<polyline points="4 7 9 12 4 17"/><line x1="12" y1="17" x2="20" y2="17"/>'),
  i('<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><line x1="7" y1="7" x2="7.01" y2="7"/><line x1="7" y1="17" x2="7.01" y2="17"/>'),
  i('<path d="M12 2 4 6v12l8 4 8-4V6z"/><path d="M4 6l8 4 8-4"/><line x1="12" y1="10" x2="12" y2="22"/>'),
  i('<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>'),
  i('<path d="M12 2l2.4 6.9H21l-5.3 4.1 2 6.9L12 16.8 6.3 19.9l2-6.9L3 8.9h6.6z"/>'),
  i('<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
  i('<path d="M12 3a4 4 0 0 0-4 4 4 4 0 0 0-2 7 3.5 3.5 0 0 0 3 5 3 3 0 0 0 3 1V4a3 3 0 0 0-3-1z"/><path d="M12 3a4 4 0 0 1 4 4 4 4 0 0 1 2 7 3.5 3.5 0 0 1-3 5 3 3 0 0 1-3 1"/>'),
  i('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>')
]

const copy = {
  en: {
    eyebrow: 'The platform',
    title: 'Everything you need to run a digital workforce.',
    lede: 'A local-first control plane and a composable set of modules — from the CLI in your terminal to the evaluation harness that decides whether an employee can be trusted with a role.',
    items: [
      { title: 'Zev CLI', tag: '$ zev', desc: 'A terminal-native workflow that feels like kubectl and docker. Deploy, inspect, and evaluate employees without leaving your shell.' },
      { title: 'Zev Daemon', tag: 'control plane', desc: 'A local control plane that schedules employees, reconciles desired state, and keeps your workforce running on your own machine.' },
      { title: 'Employee Registry', tag: 'versioned', desc: 'Store, version, and share employee manifests. Pull a proven employee the way you pull a container image.' },
      { title: 'Runtime Adapters', tag: 'runtime-neutral', desc: 'Run the same employee on Hermes, the OpenAI Agent SDK, LangGraph, or CrewAI. The runtime is a pluggable detail, never a lock-in.' },
      { title: 'Skill System', tag: 'skills > prompts', desc: 'Package capabilities into reusable, testable skills. Compose them onto any employee instead of hand-tuning fragile prompts.' },
      { title: 'Tool Gateway', tag: 'governed access', desc: 'A broker for credentialed tool access. Employees request capabilities; the gateway enforces scopes, secrets, and audit — by design.' },
      { title: 'Memory System', tag: '4 tiers', desc: 'Short-term, working, long-term, and experience memory — so employees recall context, learn from outcomes, and get better with tenure.' },
      { title: 'Evaluation Framework', tag: 'evaluation first', desc: 'Score an employee against its role before it ships. Answers the only question that matters: can this employee be trusted for this job?' }
    ]
  },
  zh: {
    eyebrow: '平台',
    title: '运营数字劳动力所需的一切。',
    lede: '一个本地优先的控制平面，加上一套可组合的模块 —— 从你终端里的命令行，到那套决定「能否把某个角色托付给一名员工」的评估框架。',
    items: [
      { title: 'Zev CLI 命令行', tag: '$ zev', desc: '一套终端原生的工作流，用起来就像 kubectl 和 docker。无需离开 shell，即可部署、检查和评估员工。' },
      { title: 'Zev 守护进程', tag: '控制平面', desc: '一个本地控制平面，负责调度员工、协调期望状态，并让你的劳动力在自己的机器上持续运行。' },
      { title: '员工注册中心', tag: '版本化', desc: '存储、版本化并共享员工清单。像拉取容器镜像一样拉取一名久经考验的员工。' },
      { title: '运行时适配器', tag: '运行时中立', desc: '同一名员工可运行在 Hermes、OpenAI Agent SDK、LangGraph 或 CrewAI 上。运行时是可插拔的细节，绝非锁定。' },
      { title: '技能系统', tag: '技能 > 提示词', desc: '把能力打包成可复用、可测试的技能。将它们组合到任意员工上，而不是手工调校脆弱的提示词。' },
      { title: '工具网关', tag: '受治理访问', desc: '受凭据管控的工具访问代理。员工申请能力，网关按设计强制执行作用域、密钥与审计。' },
      { title: '记忆系统', tag: '四层记忆', desc: '短期、工作、长期与经验记忆 —— 让员工记住上下文、从结果中学习，并随着资历越做越好。' },
      { title: '评估框架', tag: '评估优先', desc: '在员工上线前对照其角色打分。回答唯一重要的问题：这名员工能否被托付这份工作？' }
    ]
  }
}

const features = computed(() =>
  copy[locale.value].items.map((item, idx) => ({ ...item, icon: icons[idx] }))
)
const t = computed(() => copy[locale.value])
</script>

<style scoped>
.section--surface {
  background: linear-gradient(180deg, var(--bg), var(--bg-elev) 60%, var(--bg));
  border-top: 1px solid var(--border-soft);
  border-bottom: 1px solid var(--border-soft);
}
.feat__grid {
  margin-top: 46px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.feat {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 24px;
  transition: border-color 0.18s ease, transform 0.18s ease,
    box-shadow 0.18s ease;
}
.feat:hover {
  border-color: var(--border);
  transform: translateY(-3px);
  box-shadow: 0 18px 40px -28px rgba(0, 0, 0, 0.9);
}
.feat__icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent-dim);
  color: var(--accent);
  margin-bottom: 18px;
}
.feat__icon :deep(svg) {
  width: 21px;
  height: 21px;
}
.feat__title {
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.feat__desc {
  color: var(--text-dim);
  font-size: 0.93rem;
}
.feat__tag {
  display: inline-block;
  margin-top: 14px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--text-faint);
  border: 1px solid var(--border-soft);
  border-radius: 5px;
  padding: 2px 7px;
}
@media (max-width: 1040px) {
  .feat__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .feat__grid {
    grid-template-columns: 1fr;
  }
}
</style>
