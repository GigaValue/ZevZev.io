<template>
  <section id="concept" class="section">
    <div class="container">
      <div class="concept__head">
        <div>
          <span class="eyebrow">// {{ t.eyebrow }}</span>
          <h2 class="section-title">{{ t.title }}</h2>
        </div>
        <p class="section-lede" v-html="t.lede" />
      </div>

      <div class="concept__anatomy">
        <div
          v-for="part in t.parts"
          :key="part.key"
          class="anatomy__card"
        >
          <div class="anatomy__key mono">{{ part.key }}</div>
          <div class="anatomy__title">{{ part.title }}</div>
          <p class="anatomy__desc">{{ part.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLocale()

const copy = {
  en: {
    eyebrow: 'Employee as Code',
    title: 'An AI employee is a deployable, governable, testable unit.',
    lede: 'Just like a Kubernetes <span class="mono">Deployment</span> describes a workload, a ZevZev <span class="mono">Employee</span> manifest declares who the worker is, how it thinks, what it can do, and what it is allowed to do — versioned in Git, reviewed in pull requests, and rolled out with confidence.',
    parts: [
      {
        key: 'spec.role',
        title: 'Identity & mission',
        desc: 'The job title and the mission the employee is accountable for — the north star that guides every decision it makes.'
      },
      {
        key: 'spec.runtime',
        title: 'How it thinks',
        desc: 'A runtime-neutral binding to Hermes, the OpenAI Agent SDK, LangGraph, or CrewAI, plus the underlying model. Swap it without rewriting the employee.'
      },
      {
        key: 'spec.skills',
        title: 'What it knows',
        desc: 'Reusable capability packages composed onto the employee. Skills over prompts — trained, shareable, and independently versioned.'
      },
      {
        key: 'spec.tools',
        title: 'What it can touch',
        desc: 'Governed access to external systems through the Tool Gateway, so credentials are brokered — never baked into a prompt.'
      },
      {
        key: 'spec.permission',
        title: 'What it may do',
        desc: 'Governance by design: authority levels and human-approval gates for sensitive actions like production changes or external messages.'
      },
      {
        key: 'kind: Employee',
        title: 'One portable file',
        desc: 'Everything above lives in a single declarative manifest you can diff, test, and deploy — the contract between humans and a digital worker.'
      }
    ]
  },
  zh: {
    eyebrow: '员工即代码',
    title: 'AI 员工是一个可部署、可治理、可测试的单元。',
    lede: '正如 Kubernetes 的 <span class="mono">Deployment</span> 描述一个工作负载，ZevZev 的 <span class="mono">Employee</span> 清单声明了这名员工是谁、如何思考、能做什么、以及被允许做什么 —— 在 Git 中版本化、在 Pull Request 中评审，并可放心地上线。',
    parts: [
      {
        key: 'spec.role',
        title: '身份与使命',
        desc: '员工的职位头衔，以及它所负责的使命 —— 指引它每一个决策的北极星。'
      },
      {
        key: 'spec.runtime',
        title: '如何思考',
        desc: '与 Hermes、OpenAI Agent SDK、LangGraph 或 CrewAI 的运行时中立绑定，外加底层模型。可随意替换，无需重写员工。'
      },
      {
        key: 'spec.skills',
        title: '它懂什么',
        desc: '可复用的能力包，组合到员工之上。技能胜于提示词 —— 经过训练、可共享、可独立版本化。'
      },
      {
        key: 'spec.tools',
        title: '它能触达什么',
        desc: '通过工具网关对外部系统进行受治理的访问，凭据由网关代管 —— 绝不写死在提示词里。'
      },
      {
        key: 'spec.permission',
        title: '它可以做什么',
        desc: '治理内建：为生产变更、对外消息等敏感操作设置权限级别与人工审批关卡。'
      },
      {
        key: 'kind: Employee',
        title: '一个可移植的文件',
        desc: '以上的一切都存放在一份声明式清单里，可以 diff、测试和部署 —— 这是人类与数字员工之间的契约。'
      }
    ]
  }
}
const t = computed(() => copy[locale.value])
</script>

<style scoped>
.concept__head {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-bottom: 52px;
}
.mono {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.92em;
}
.concept__anatomy {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.anatomy__card {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 22px;
  transition: border-color 0.18s ease, transform 0.18s ease;
}
.anatomy__card:hover {
  border-color: var(--border);
  transform: translateY(-2px);
}
.anatomy__key {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 6px;
  padding: 3px 8px;
  margin-bottom: 14px;
}
.anatomy__title {
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 7px;
}
.anatomy__desc {
  color: var(--text-dim);
  font-size: 0.94rem;
}
@media (max-width: 900px) {
  .concept__head {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .concept__anatomy {
    grid-template-columns: 1fr;
  }
}
</style>
