---
title: InkEcho
titleZh: 墨响
description: Multi-agent LangGraph pipeline that reimagines classic literature in new settings, with RAG-based long-range consistency
descriptionZh: 基于 LangGraph 三智能体协作的经典文学风格重构工作台，用 RAG 保证长文本改写的一致性
tags: [LangGraph, RAG, Multi-Agent, Python]
github: https://github.com/77652189/InkEcho
stars: 0
date: 2026-03-16
featured: false
color: rose
---

InkEcho（墨语回响）探索将经典文学移植到不同时代、地域、文化背景下的可能性——用多智能体协作重新讲述你熟悉的故事，而不是简单的词汇替换式"翻译"。

## 核心思路

如果《红楼梦》发生在现代硅谷？如果《哈姆雷特》是一部赛博朋克故事？InkEcho 先用 **Architect 节点**分析原著，把"故事讲了什么"（人物动机、核心冲突）与"故事是怎么讲的"（叙事风格）解耦，只替换叙事外壳，保留原著骨架。

例如"青龙偃月刀"在赛博朋克设定下会被重构为"高周波热能切割大刀"，在奇幻设定下则是"附带龙魂的传奇重刃"——语义对应关系由 LLM 推理生成，而非查表替换。

## 三智能体协作架构

基于 LangGraph 的状态机驱动三个角色分工协作：

- **Writer（作家）** — 将原著章节重构为目标风格
- **Critic（审阅者）** — 对比原著，检查关键剧情点是否丢失
- **Anchor（记忆官）** — 维护长效记忆，确保跨章节的设定前后一致

## 长程一致性

千章级别的改写容易"吃书"（忘记前文设定）。InkEcho 内置 RAG 向量库作为语义锚点记忆，配合独立的 **Reviewer 节点**自动拦截人设崩坏（OOC）与逻辑硬伤，支持章节级的批量精修流水线。

## Tech Stack

Python · LangGraph · RAG · Multi-Agent Workflow · Vector Store
