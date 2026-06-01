---
title: ExperimentAdvisor
titleZh: 生物实验设计顾问
description: Bayesian optimization tool for biological experiment parameter design
descriptionZh: 用贝叶斯优化引导生物实验参数选择，减少试错次数
language: Python
tags: [Python, Bayesian, Optimization, Biology]
github: https://github.com/77652189/ExperimentAdvisor
stars: 0
date: 2026-05-28
featured: false
color: emerald
---

生物实验参数空间复杂，随机试验效率低。ExperimentAdvisor 利用贝叶斯优化算法，基于已有实验数据推荐下一步最具信息量的实验方案，最小化实验次数的同时最大化信息增益。

## 背景

源于在生物科技公司实习期间对发酵过程优化问题的思考——如何在有限的实验预算内，更快找到最优工艺参数。

## 功能

- 输入历史实验数据，建立概率代理模型（Gaussian Process）
- 基于 Acquisition Function 推荐下一个最优实验点
- 可视化参数空间探索进度与不确定性边界

## Tech Stack

Python · scikit-learn · scipy · matplotlib
