---
title: RA3-ChineseVoice
titleZh: 红警3 AI 中文配音 MOD
description: AI Mandarin voice mod for Red Alert 3 — 10,171 lines, built on a reverse-engineered SAGE asset pipeline
descriptionZh: 《红色警戒3》及《起义时刻》全套 AI 普通话配音，10,171 句，建立在逆向出来的 SAGE 资源流水线上
language: Python
tags: [Python, Reverse Engineering, TTS, Audio Pipeline, C#]
github: https://github.com/77652189/RA3-ChineseVoice
stars: 2
date: 2026-10-13
featured: true
color: rose
---

《命令与征服：红色警戒3》和资料片《起义时刻》的社区非盈利 AI 普通话配音：单位语音、EVA 播报、指挥官、战役对白、过场视频，一共 **10,171 句**，外加可选的简体中文文字。音色克隆自原版配音。

仓库里只有制作工具的代码，不含任何游戏文件或生成的配音。

## 真正的难点不在配音，在格式

游戏的声音、文字、视频都封在 SAGE 引擎的私有容器里，没有公开文档。要让一句中文语音进到游戏里，得先把这条链路全部打通：

- **BIG / SkuDef** — 资源包与加载顺序；同名文件排在前面的说了算
- **audio.bin / SNR** — 逐句记录的音频长度与采样参数，长度对不上就会被截断
- **RefPack** — EA 的压缩格式
- **EA-XA** — 过场视频里的音轨，需要人声分离后把中文配音回填
- **CSF** — 界面与字幕文字

## 两个关于「不要破坏玩家环境」的决定

**不动版本号。** 最初按常见做法新建了一个版本号 +1 的配置文件，起义时刻能用，原版红警3 完全没反应——Steam 启动时会指定版本号 1.13，根本不读新配置；而且改版本号会影响联机选版本。最终做法是在原配置里、紧挨英文语音包的前一行插入一行，卸载时逐字节还原。

**长度表按安装组合生成。** 安装器允许只装一部分（比如只要盟军和苏联），不同组合对应不同的 audio.bin，不能只发一份。

## 流水线

拆包 → 语音识别 → 翻译与校对合并 → TTS 音色克隆 → 候选挑选 → 音效处理 → 过场人声分离与回填 → 打包发布，外加一个 C# WPF 图形安装器与在线补丁通道。格式读写与打包都有回归测试。

## Tech Stack

Python · IndexTTS2 · ASR · C# WPF · PowerShell · pytest
