---
title: GameSuccessPrediction
titleZh: Steam 独立游戏成功预测模型
description: ML model predicting indie game success with 97.9% accuracy — and a paradox
descriptionZh: 分析 1,189 款 Steam 游戏，预测准确率 97.9%，发现"Twitch 悖论"
language: Python
tags: [Python, XGBoost, scikit-learn, Data Science, ML]
github: https://github.com/77652189/GameSuccessPrediction
stars: 0
date: 2025-11-01
featured: true
color: blue
---

构建机器学习模型，对 1,189 款 Steam 游戏的 20+ 项特征进行分析，预测独立游戏市场成功率，准确率达 **97.9%**。

指导教授：Pramod Gupta

## 数据与成功定义

融合两个数据集，以游戏名称为主键对齐：

- **Steam Games Dataset** — 110,000+ 款游戏的元数据（价格、类型、开发商、好评率等）
- **Twitch Game Data (2016–2023)** — 月度 Top 200 游戏的直播曝光数据

两个数据集的游戏名称拼写不完全一致，用 **RapidFuzz** 做模糊字符串匹配完成对齐。

"成功"被定义为二分类标签，需同时满足：好评率 ≥ 85%，且（推荐数 > 1,000 或拥有者数 > 50,000）。

## 主要发现

**"Twitch 悖论"**：直播曝光度对新游戏有显著加成，但对特定品类会引发"流失风暴"——曝光越高、弃玩率反而越高，与"曝光即销量"的直觉相悖。

## 方法

- 多算法横向对比：Logistic Regression、Random Forest、XGBoost
- 网格搜索做超参数调优
- 端到端流程：特征工程 → 建模 → 评估 → Streamlit 可视化界面

## Tech Stack

Python · XGBoost · scikit-learn · pandas · RapidFuzz · Streamlit
