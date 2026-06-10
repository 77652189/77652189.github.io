---
title: healthGate
titleZh: 健康测评 Funnel 全栈系统
description: Full-stack health assessment funnel with step persistence, BMI/TDEE scoring, subscription gating, and full E2E coverage
descriptionZh: 分步持久化健康测评 Funnel，含服务端 BMI/TDEE 评估、订阅鉴权、模拟支付闭环与完整自动化测试
language: TypeScript
tags: [Next.js, TypeScript, Prisma, PostgreSQL, Vitest, Playwright]
github: https://github.com/77652189/healthGate
demo: https://healthgate-one.vercel.app
stars: 0
date: 2026-06-10
featured: false
color: violet
---

🌐 **[在线体验 → healthgate-one.vercel.app](https://healthgate-one.vercel.app)**

healthGate 是一个健康测评 Funnel 全栈项目，重点展示分步持久化、服务端健康评估、订阅鉴权、模拟支付闭环和完整自动化测试。

## 核心功能

- **8 步问卷 Funnel** — 分步收集体型、目标、活动强度、饮食等数据，支持中途刷新恢复（乐观锁并发控制）
- **服务端评估引擎** — 计算 BMI、BMR/TDEE、目标日期、卡路里摄入建议，结果持久化并附带算法版本号
- **Preview / Full 访问控制** — 未支付用户只看到 preview 结果；`/pay` 模拟支付回调后激活完整报告
- **幂等支付** — `/pay` 接口支持幂等键，防止重复扣款

## 测试覆盖

- **单元测试（Vitest）** — 算法边界（减重/维持/增重/BMI/BMR）、validation 边界（身高体重年龄、非法枚举、原型污染）
- **集成测试** — 分步保存、断点恢复、并发 `VERSION_CONFLICT`、preview/full 字段差异、支付幂等
- **E2E（Playwright）** — 完整 Funnel → 预览 → 支付 → 解锁全报告

## Tech Stack

Next.js App Router · TypeScript · Prisma · Supabase PostgreSQL · Zod · Vitest · Playwright · GitHub Actions · Vercel
