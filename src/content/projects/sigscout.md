---
title: SigScout
titleZh: 信号肽筛选与融合构建工作台
description: Signal peptide workbench — discovery, scoring, clustering, and fusion construct export for secretion design
descriptionZh: 面向毕赤酵母分泌表达设计的信号肽筛选、聚类与 AC/ABC 融合构建工作台
language: Python
tags: [Python, Streamlit, Bioinformatics, Signal Peptide]
github: https://github.com/77652189/SigScout
stars: 0
date: 2026-06-17
featured: false
color: cyan
---

SigScout 是一个蛋白层面的信号肽工作台，用于为毕赤酵母分泌表达目标筛选、解释、聚类和导出候选信号肽，并生成可直接用于湿实验的融合构建方案。

它的目标不是直接预测真实分泌效率，而是在湿实验前把候选范围缩小到可讨论、可审查、可复现的一批序列，为后续密码子优化和融合构建准备结构化输入。

## 核心模块

- **候选获取** — 从 UniProt 获取带 `signal peptide` 注释的候选，或导入本地 CSV
- **规则评分** — 检查 N 区正电、H 区疏水核心、C 区切割位点和低复杂度风险
- **USPNet 复核** — 可选调用本地 USPNet-fast；未安装时不阻断规则筛选
- **相似聚类** — 对高度相似的信号肽分组，输出代表序列
- **融合构建** — 生成 AC / ABC 融合蛋白序列、构建索引与基础加工风险扫描
- **导出** — 输出 CSV、FASTA 和 JSON 摘要，衔接下游工具（PichiaCLM 等）

## Tech Stack

Python · Streamlit · pandas · Pydantic · UniProt API · USPNet
