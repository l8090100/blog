---
templateKey: 'blog-post'
title: 'PLC project - PLC接線篇'
date: 2019-09-21
featuredpost: false
featuredimage: 
description: >-
  如何規劃PLC控制系統和接線。
tags:
  - PLC
  - AutoControl
---

#### PLC 控制系統規劃
PLC 又叫做「可程式邏輯控制器」，設計有許多的輸入和輸出接點，透過設計專用程式，就能實現各種控制邏輯。接線前先確認這次專案輸出元件，是共陽還是共陰級的設計。  

![NPN和PNP差別](https://lh3.googleusercontent.com/AKjS_xJejUrAI85x4QWbkLRDoBks7kCExLVH_5GBg2MY5QrVqJjNa5qsd5Z-Ds_ulqZtwkAcAylwbdsESaAGXBlqp1RWNCYSo9Xq3kxdbTK6cL-CLWLce6yC3SZdCc0M0aUB934pgk0=w1226-h833-no)

這次專案使用的絕對型編碼器就是NPN型，因此其他輸出端的控制元件也必須使用NPN邏輯，和24V電源供應器組成控制電路。

![輸出接線圖](https://lh3.googleusercontent.com/oWs2GTf1ylfvDXH2G3fRmkqi4tAXVOxf2igTyYVj8TyGVO2p-QJNYz1WzIw5zx8nX62A94NwTAXJLSF6_VkS1EzF5jd4uyLjHmZLexTj6Q0Mv8OAVoB8B0N-khSn95t-ncI6zbJf16Q=w980-h889-no)

X接點為輸入接點，Y接點則為輸出接點，輸入模組上的S/S接點接到24V就等於把PLC設定為NPN漏型輸入模式。
![PLC端接線圖](https://lh3.googleusercontent.com/5FO24ezXBS192bq8Wh2bKN4eTsvX4jUDltVKtNMAiNFeKZgLkPnbuAV3chzCR9aGTUXtlSmrvf0fyKCxJngQQ2R3QVPhuPoFmuRI5of5A8sKakz4BGN37wgrKhS4iUlGv3aHwoTgD7k=w960-h720-no)  


## 編碼器
為了知道馬達目前位置，使用絕對型[旋轉編碼器](https://zh.wikipedia.org/wiki/旋轉編碼器)偵測位置，如果用相對型編碼器，系統斷電後馬達如果還有移動就無法得知絕對位置，但絕對型編碼器每個角度都有編碼，不會有這個問題。需要注意的是，這次採用的編碼器為NPN型，PLC的控制迴路也必須為NPN型才能讀到編碼器的編碼訊號。