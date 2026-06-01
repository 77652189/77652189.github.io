---
title: SortPaper
titleZh: 学术论文解析与质检系统
description: LangGraph pipeline for PDF parsing, QC, and semantic indexing
descriptionZh: 基于 LangGraph 的论文端到端解析、质检与语义入库工作流
language: Python
tags: [LangGraph, RAG, FAISS, LLM, Python]
github: https://github.com/77652189/SortPaper
stars: 1
date: 2026-04-01
featured: true
---

基于 LangGraph 构建的多节点流水线，将学术论文的 PDF 解析、内容质检、语义入库串联为端到端自动化工作流。

## 核心模块

- **解析层** — 自动提取 PDF 结构化内容，识别标题、摘要、章节
- **质检层（LLM-as-Judge）** — 按完整性、可读性、内容深度三个维度对解析结果自动评分
- **检索层** — 使用 DashScope Embedding API + FAISS 构建语义索引，支持后续 RAG 问答

## Tech Stack

Python · LangGraph · FAISS · DashScope Embedding API · LLM-as-Judge
