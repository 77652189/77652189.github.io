---
title: P-PromOpt
titleZh: 毕赤酵母启动子工程化工作流
description: Pichia promoter engineering workflow — candidate design, expression-data feedback, and baseline ranking
descriptionZh: 毕赤酵母启动子工程化工作流，涵盖候选设计、表达数据反馈与基线模型排序
language: Python
tags: [Python, Streamlit, Bioinformatics, Promoter Engineering]
github: https://github.com/77652189/P-PromOpt
stars: 0
date: 2026-06-30
featured: false
color: violet
---

P-PromOpt 是面向 *Pichia / Komagataella* 的启动子工程化工作流工具，围绕 hLF / OPN 等实际表达设计问题构建：从 `P_AOX1` / `P_GAP` 的假设驱动候选设计，到基因组内源启动子挖掘，再到表达数据回填与基线模型训练。

该项目不声称已经提升启动子强度——在积累足够多的本地 *Pichia* 表达数据之前，它输出的是设计候选、约束/风险评分和数据就绪报告，而非虚假的表达预测。

## 核心能力

- **候选面板设计** — 生成注释感知的 `P_AOX1` / `P_GAP` 实验面板，附设计假设与检测意图
- **约束评分** — 评估 GC 含量、同聚物、重复序列、酶切位点、编辑距离与亲本相对风险
- **内源启动子挖掘** — 从 FASTA/GFF 输入提取上游启动子窗口
- **表达数据反馈** — 生成检测计划与测量模板；验证候选/亲本覆盖度和表达字段
- **基线建模** — 仅在数据量达到阈值时训练轻量 k-mer 分类/回归基线
- **报告输出** — 导出 CSV、FASTA、JSON 和 Markdown 运行报告

## Tech Stack

Python · Streamlit · pandas · pytest · k-mer modeling
