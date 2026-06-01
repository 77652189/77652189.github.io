---
title: ShoppingWithAI
titleZh: AI 智能导购系统
description: LangGraph + RAG multi-agent shopping assistant with Web UI
descriptionZh: 基于 LangGraph + RAG 的多节点购物 Agent，支持多轮对话与语义检索
language: Python
tags: [LangGraph, RAG, FAISS, Python, LLM]
github: https://github.com/77652189/ShoppingWithAI
stars: 1
date: 2026-03-01
featured: true
color: violet
---

基于 LangGraph 构建的多节点 Agent，实现购物意图路由与 RAG 检索问答，提供端到端 Web UI 演示。

## 核心模块

- **意图路由** — LangGraph 节点根据用户输入判断购物意图，分发至对应处理链
- **语义检索** — 使用通义千问 Embedding API + FAISS 替代关键词匹配，实现语义级商品检索
- **多轮对话** — 维护上下文状态，支持连续追问与条件筛选
- **Web UI** — 端到端可演示界面，方便展示 Agent 决策过程

## Tech Stack

Python · LangGraph · FAISS · Qwen Embedding API · RAG Pipeline
