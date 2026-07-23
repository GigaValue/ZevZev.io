<template>
  <section id="quickstart" class="section">
    <div class="container quickstart">
      <div class="quickstart__head">
        <span class="eyebrow">// {{ t.eyebrow }}</span>
        <h2 class="section-title">{{ t.title }}</h2>
        <p class="section-lede" v-html="t.lede" />
      </div>

      <div class="window quickstart__win">
        <div class="window__bar">
          <div class="window__dots">
            <span class="window__dot" style="background: var(--dot-red)" />
            <span class="window__dot" style="background: var(--dot-yellow)" />
            <span class="window__dot" style="background: var(--dot-green)" />
          </div>
          <span class="window__title">bash — ~/zevzev</span>
        </div>
        <div class="window__body">
          <pre class="code" v-html="terminal" />
        </div>
      </div>

      <p class="quickstart__foot" v-html="t.foot" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLocale()

const copy = {
  en: {
    eyebrow: 'Quick start',
    title: 'From zero to a running employee in three commands.',
    lede: 'Install the CLI, deploy the bundled example, and evaluate it. If you know <span class="mono">kubectl</span>, you already know ZevZev.',
    foot: '<span class="mono">zev</span> is local-first — everything above runs on your own machine, no account required.'
  },
  zh: {
    eyebrow: '快速开始',
    title: '三条命令，从零到一个运行中的数字员工。',
    lede: '安装命令行、部署内置示例，然后评估它。只要你会 <span class="mono">kubectl</span>，你就已经会用 ZevZev。',
    foot: '<span class="mono">zev</span> 本地优先 —— 以上一切都运行在你自己的机器上，无需账户。'
  }
}
const t = computed(() => copy[locale.value])

const terminal = `<span class="tok-prompt">$</span> <span class="tok-cmd">zev deploy examples/zevops</span>
<span class="tok-out">employee </span><span class="tok-str">"zevops"</span><span class="tok-out"> deployed</span> <span class="tok-ok">✓</span>

<span class="tok-prompt">$</span> <span class="tok-cmd">zev get employees</span>
<span class="tok-out">NAME     ROLE          STATUS</span>
<span class="tok-cmd">zevops</span>   <span class="tok-out">SRE Engineer</span>  <span class="tok-ok">Running</span>

<span class="tok-prompt">$</span> <span class="tok-cmd">zev eval zevops</span>
<span class="tok-out">Evaluation: zevops</span>
<span class="tok-out">Score: </span><span class="tok-num">82</span><span class="tok-out">/100</span>
<span class="tok-out">Result: </span><span class="tok-ok">Passed</span>`
</script>

<style scoped>
.quickstart__head {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.quickstart__head .section-lede {
  margin-left: auto;
  margin-right: auto;
}
.quickstart__win {
  max-width: 720px;
  margin: 0 auto;
}
.quickstart__win .window__body {
  padding: 24px 26px;
}
.mono {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.92em;
}
.quickstart__foot {
  text-align: center;
  color: var(--text-faint);
  font-size: 0.92rem;
  margin-top: 22px;
}
</style>
