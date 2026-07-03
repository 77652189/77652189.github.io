---
title: MySchool
titleZh: 宠物训练学校管理系统
description: Java Swing desktop app with Spring Boot/JPA backend and role-based access control
descriptionZh: Spring Boot + JPA 驱动的 Java Swing 桌面端管理系统，实现三角色权限控制
language: Java
tags: [Java, Spring Boot, Swing, MySQL, RBAC]
github: https://github.com/77652189/MySchool
stars: 0
date: 2025-10-01
featured: false
color: amber
---

基于 Spring Boot、Spring Data JPA 和 MySQL 开发的宠物训练学校管理系统，前端为 Java Swing 桌面客户端（FlatLaf 主题引擎），涵盖课程管理、学员报名、训练师排班及宠物档案等核心功能。

指导教授：Mamoun Abu-Samaha

## 架构

标准分层架构，业务逻辑与界面显示解耦：Repository → Service → Swing View，Service 层通过构造器注入（DI）驱动 GUI 更新。

## 功能模块

- **课程管理** — 训练项目创建、排期、容量控制
- **学员报名** — 在线选课、退课、进度追踪
- **训练师排班** — 日程分配与冲突检测
- **宠物档案** — 结构化记录每只宠物的训练历史，支持图片加载与"成就墙"展示

## 权限设计

基于角色的访问控制（RBAC），管理员 / 训练师 / 学员三种角色对应不同的 UI 功能可见性，权限过滤在界面层和数据层同时生效。

## 工程细节

- Hibernate 自动生成物理表结构（DDL Auto），配合 `data.sql` 保证每次启动都有可用测试数据
- Spring Data JPA 级联删除（On Delete Cascade）保障关联数据的引用完整性
- FlatLaf 主题引擎支持一键切换深色模式

## Tech Stack

Java · Spring Boot · Spring Data JPA · Hibernate · Java Swing · FlatLaf · MySQL · Maven · JUnit
