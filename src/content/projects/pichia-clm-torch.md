---
title: PichiaCLM-Torch
titleZh: 毕赤酵母密码子语言模型（PyTorch）
description: PyTorch reimplementation of PichiaCLM — a deep learning codon optimization model for Pichia pastoris
descriptionZh: PichiaCLM 的 PyTorch 复现与优化版本，用于毕赤酵母异源蛋白表达的密码子偏好性预测
language: Jupyter Notebook
tags: [PyTorch, Deep Learning, Bioinformatics, Codon Optimization]
github: https://github.com/77652189/PichiaCLM-Torch
stars: 0
date: 2026-06-03
featured: false
color: blue
---

毕赤酵母（*Pichia pastoris*）是工业蛋白生产中最常用的宿主之一，密码子偏好性直接影响目标蛋白的表达量与折叠质量。本项目将 PichiaCLM 的原始实现迁移至 PyTorch，并针对训练效率和推理速度进行了优化。

## 模型结构

- 基于 Transformer 的密码子语言模型（CLM）
- 输入氨基酸序列，输出针对毕赤酵母优化的密码子组合方案
- 支持批量推理与序列评分，用于筛选高表达候选基因

## 应用场景

在异源蛋白表达流程中，密码子优化是提升产量的关键步骤。本模型可在基因设计阶段为工程师提供量化的密码子偏好建议，减少湿实验试错次数。

## Tech Stack

Python · PyTorch · Jupyter Notebook · Bioinformatics
