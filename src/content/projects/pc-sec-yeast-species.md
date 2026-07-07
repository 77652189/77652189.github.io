---
title: pcSecYeastSpecies
titleZh: 酵母分泌模型引擎与全基因组 KO/OE 筛查
description: Cross-species yeast secretion models, ported to a Python engine with a genome-scale KO/OE screening pipeline
descriptionZh: 跨物种酵母分泌通路模型的 Python 移植引擎，附带全基因组尺度的 KO/OE 候选基因筛查流水线
language: Python
tags: [Python, Systems Biology, Genome-Scale Modeling, Streamlit]
github: https://github.com/77652189/pcSecYeastSpecies
stars: 0
date: 2026-07-06
featured: false
color: amber
---

项目分两层：一层是三物种（*S. cerevisiae*、*K. phaffii*、*K. marxianus*）蛋白分泌的 MATLAB 参考模型；另一层是我针对当前实际工作流移植的 Python 引擎，聚焦 *Pichia* 单一物种的分泌工程决策支持，不是三物种的完整重写。

## 为什么移植

接手时项目本身跑不起来——团队没有 MATLAB 正式授权，逻辑又分散在几十个脚本里，难以理解和维护。移植不是"为了用 Python 而用 Python"，而是先尝试读懂现有代码遇到困难后，才决定收窄范围、只迁移当前工作流真正需要的部分，并反复核对与 MATLAB 原版的科学一致性。

## 全基因组 KO/OE 筛查

在移植出的引擎之上新增了一套全基因组尺度的候选基因筛查流水线：

- **规模**：对模型中全部 1025 个基因做 KO（敲除）/OE（过表达）两方向筛查
- **两阶段流程**：先做结构可行性预筛（毫秒级），只对通过预筛的基因才跑真正的 LP 求解仿真，大幅压低整体计算量
- **后台执行**：用独立子进程（而非 Streamlit 线程）跑小时级批量任务，加心跳文件防止页面刷新/重启导致任务丢失

## 工程细节

- **性能优化**：结果缓存把模型冷启动耗时压缩 **65 倍**；线程池并行化让批量 KO 筛查提速 **1.4 倍**（低于理论值，追查发现瓶颈在求解器本身而非任务调度，如实记录而非高估）
- **一次真实的生产事故**：扩容筛查范围后批量任务卡死超过 2 小时，排查定位到核心 LP 求解函数从未设置超时保护——个别退化约束会让求解器无限期占用进程。修复是给这个被十余处调用的共享函数统一加超时参数，一次修复保护全部调用方
- **架构**：Streamlit UI → FastAPI facade → Service 层 → Python 引擎核心模块（模型加载 / 培养条件 / 约束构建 / 仿真求解 / 候选筛查 / 结果报告）

## 科学边界

筛查结果用于候选基因的相对比较和优先级排序，不代表绝对产量预测；过表达（OE）用反应容量代理近似，不等同于完整的基因表达调控模型；所有结论仍需实验验证。

## Tech Stack

Python · MATLAB (reference layer) · Streamlit · FastAPI · HiGHS/scipy.optimize · ThreadPoolExecutor / ProcessPoolExecutor
