---
title: ShoppingWithAI
titleZh: AI 智能导购系统
description: LangGraph + RAG multi-agent shopping assistant with Streamlit UI
descriptionZh: 基于 LangGraph + RAG 的多节点购物 Agent，支持多轮对话与语义检索
language: Python
tags: [LangGraph, RAG, FAISS, Python, Streamlit]
github: https://github.com/77652189/ShoppingWithAI
stars: 1
date: 2026-03-01
featured: true
color: violet
---

基于 LangGraph 构建的多节点 Agent，实现购物意图路由与 RAG 检索问答，提供端到端 Streamlit 可视化界面。

## 架构

四个 LangGraph 节点组成决策链，每一步都可追溯：

- **Router Agent** — 识别用户意图（价格咨询、对比、专业咨询、闲聊），分发至对应节点
- **RAG Node** — 基于本地知识库的向量检索，回答产品参数与选购建议
- **Pricing Node** — 模拟实时比价查询
- **Recommender Node** — 结合预算、画像与场景，在设备库中做语义匹配推荐

## 核心模块

- **语义检索** — 通义千问（Qwen-3.5-Plus）Embedding API + FAISS 替代关键词匹配，实现语义级商品检索
- **多轮对话** — 维护上下文状态，支持连续追问与条件筛选
- **Streamlit UI** — 可视化购物界面，暴露 Agent 每一步决策过程，便于演示与调试

## Tech Stack

Python · LangGraph · FAISS · Qwen-3.5-Plus · Streamlit · RAG Pipeline
