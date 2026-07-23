<template>
  <section id="lifecycle" class="section">
    <div class="container">
      <span class="eyebrow">// {{ t.eyebrow }}</span>
      <h2 class="section-title">{{ t.title }}</h2>
      <p class="section-lede">{{ t.lede }}</p>

      <ol class="life">
        <li v-for="(s, idx) in t.stages" :key="s.name" class="life__step">
          <div class="life__node">
            <span class="life__num mono">{{ String(idx + 1).padStart(2, '0') }}</span>
          </div>
          <div class="life__name">{{ s.name }}</div>
          <p class="life__desc">{{ s.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLocale()

const copy = {
  en: {
    eyebrow: 'Lifecycle',
    title: 'Manage employees like people, ship them like code.',
    lede: 'Every digital employee moves through a governed lifecycle — from the first hire to a graceful retirement — with evaluation gating every promotion.',
    stages: [
      { name: 'Hire', desc: 'Author the manifest and onboard the employee into your registry.' },
      { name: 'Train', desc: 'Attach skills and memory; shape behavior with real tasks.' },
      { name: 'Deploy', desc: 'Roll it out on the daemon and put it to work.' },
      { name: 'Evaluate', desc: 'Score performance against the role before trusting it.' },
      { name: 'Upgrade', desc: 'Swap runtimes, add skills, and re-evaluate safely.' },
      { name: 'Transfer', desc: 'Move a proven employee across teams or environments.' },
      { name: 'Retire', desc: 'Decommission gracefully and archive its record.' }
    ]
  },
  zh: {
    eyebrow: '生命周期',
    title: '像管理人一样管理员工，像交付代码一样交付他们。',
    lede: '每一名数字员工都会经历一套受治理的生命周期 —— 从初次雇佣到优雅注销 —— 每一次晋升都由评估来把关。',
    stages: [
      { name: '雇佣', desc: '编写清单，并将员工纳入你的注册中心。' },
      { name: '训练', desc: '挂载技能与记忆，用真实任务塑造其行为。' },
      { name: '部署', desc: '在守护进程上将其上线并投入工作。' },
      { name: '评估', desc: '在信任它之前，对照角色为其表现打分。' },
      { name: '升级', desc: '安全地更换运行时、新增技能并重新评估。' },
      { name: '交接', desc: '将一名久经考验的员工在团队或环境之间迁移。' },
      { name: '注销', desc: '优雅地下线，并归档它的记录。' }
    ]
  }
}
const t = computed(() => copy[locale.value])
</script>

<style scoped>
.life {
  list-style: none;
  margin: 48px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  counter-reset: step;
}
.life__step {
  position: relative;
  padding: 0 6px;
}
.life__node {
  position: relative;
  display: grid;
  place-items: center;
  height: 46px;
  margin-bottom: 16px;
}
.life__node::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  right: -50%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--border));
  transform: translateY(-50%);
  z-index: 0;
}
.life__step:last-child .life__node::before {
  display: none;
}
.life__num {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 1px solid var(--accent);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 13px;
  box-shadow: 0 0 0 4px var(--bg), 0 0 18px -6px var(--accent-glow);
}
.life__name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 5px;
}
.life__desc {
  color: var(--text-dim);
  font-size: 0.85rem;
  line-height: 1.5;
}
@media (max-width: 900px) {
  .life {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 18px;
  }
  .life__node {
    justify-items: start;
    justify-content: start;
  }
  .life__node::before {
    display: none;
  }
}
@media (max-width: 480px) {
  .life {
    grid-template-columns: 1fr;
  }
}
</style>
