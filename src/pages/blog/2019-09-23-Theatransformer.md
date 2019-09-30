---
templateKey: 'blog-post'
title: 'Theatransforemer 募資計畫 01'
date: 2019-09-23
featuredpost: true
featuredimage: /img/jungo.jpg
description: >-
  整理PLC教具專案的建置過程。
tags:
  - Desktop APP
  - Auto Control
  - C++
  - Qt
---

# 劇瘋計畫專案
***
- [系統架構](#系統架構)
  - [硬體](#硬體)
    - [控制箱](#控制箱)
    - [控制主機](#控制主機)
    - [手動控制盒](#手動控制盒)
    - [馬達](#馬達)
  - [軟體](#軟體)
    - [設置環境](#設置環境)
    - [串列通訊](#串列通訊)
    - [Artnet]](#Artnet)
    - [程式解析](#程式解析)
    - [系統使用步驟](#系統使用步驟)
    - [修改db檔](#修改db檔)

# 系統架構
+ 控制系統電力需求：[單相220V](https://zh.wikipedia.org/wiki/%E5%96%AE%E7%9B%B8%E9%9B%BB)
+ 驅動器型號：[CSBL740]](http://www.csim.com.tw/CSBL740.html) 
+ 馬達型號：[750W CS80-07C8AE](http://www.csim.com.tw/servo_motor.html)
+ 控制系統：[Qt](https://www.qt.io/)
+ 控制通訊介面：[Serial](https://zh.wikipedia.org/wiki/%E4%B8%B2%E8%A1%8C%E9%80%9A%E4%BF%A1)
+ 無線控制通訊介面：[Artnet](https://art-net.org.uk/)
