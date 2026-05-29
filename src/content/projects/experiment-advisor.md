---
title: ExperimentAdvisor
titleZh: 实验设计顾问
description: Bayesian optimization for biological experiment design
descriptionZh: 用贝叶斯优化帮助设计生物实验方案
language: Python
tags: [Python, Bayesian, Biology, Optimization]
github: https://github.com/77652189/ExperimentAdvisor
stars: 0
date: 2026-05-28
featured: true
---

ExperimentAdvisor 利用贝叶斯优化算法，帮助实验人员在有限的实验次数内找到最优参数组合，减少试错成本。

## 背景

生物实验参数空间复杂，随机试验效率低。贝叶斯优化通过概率模型引导实验方向，每一次实验都比上一次更有价值。

## 功能 / Features

- 输入已有实验数据，建立概率代理模型
- 推荐下一步最具信息量的实验参数
- 可视化参数空间探索进度
- 支持多目标优化

## 技术栈

Python · Bayesian Optimization · scikit-learn · matplotlib
