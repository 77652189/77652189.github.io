# Portfolio

🌐 **[https://77652189.github.io](https://77652189.github.io)**

---

个人项目展示网站，基于 Astro + Tailwind CSS 构建，自动部署至 GitHub Pages。

A personal project showcase built with Astro + Tailwind CSS, auto-deployed to GitHub Pages.

## 新增项目 / Add a Project

在 `src/content/projects/` 目录下新建 Markdown 文件：

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: ProjectName
titleZh: 项目中文名
description: One-line description in English
descriptionZh: 一句话中文介绍
language: Python
tags: [AI, Python]
github: https://github.com/77652189/your-repo
stars: 0
date: 2026-01-01
featured: false
---

项目详细介绍写在这里...
```

推送后自动部署 / Push to deploy automatically:

```bash
git add .
git commit -m "add project-name"
git push
```
