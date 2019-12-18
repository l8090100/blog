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

### PLC 控制系統規劃
PLC 又叫做「可程式邏輯控制器」，設計有許多的輸入和輸出接點，透過設計專用程式，就能實現各種控制邏輯。接線前先確認這次專案輸出元件，是共陽還是共陰級的設計。  

1.  [EC6P-AG5C](https://www.omron.com.tw/products/family/494/lineup.html)絕對型編碼器：為NPN型，PLC的控制迴路也必須為NPN型才能讀到編碼器的編碼訊號。
2.  復歸按鈕
3.  表演控制模擬按鈕
4.  手自動模式切換開關
5.  極限定位開關
6.  系統狀態燈號
7.  表演狀態模擬燈號
8.  極限偵測燈號
9.  定位完成燈號
10. 電腦：電腦和PLC的通訊用一般的網路線即可，每台PLC都有自己的網路IP，在設定網路時要特別注意。
11. 變頻器

![NPN和PNP差別](https://lh3.googleusercontent.com/AKjS_xJejUrAI85x4QWbkLRDoBks7kCExLVH_5GBg2MY5QrVqJjNa5qsd5Z-Ds_ulqZtwkAcAylwbdsESaAGXBlqp1RWNCYSo9Xq3kxdbTK6cL-CLWLce6yC3SZdCc0M0aUB934pgk0=w1226-h833-no)

這次專案使用的絕對型編碼器就是NPN型，因此其他輸出端的控制元件也必須使用NPN邏輯，和24V電源供應器組成控制電路。

![輸出接線圖](https://lh3.googleusercontent.com/oWs2GTf1ylfvDXH2G3fRmkqi4tAXVOxf2igTyYVj8TyGVO2p-QJNYz1WzIw5zx8nX62A94NwTAXJLSF6_VkS1EzF5jd4uyLjHmZLexTj6Q0Mv8OAVoB8B0N-khSn95t-ncI6zbJf16Q=w980-h889-no)

X接點為輸入接點，Y接點則為輸出接點，輸入模組上的S/S接點接到24V就等於把PLC設定為NPN漏型輸入模式。
![PLC端接線圖](https://lh3.googleusercontent.com/5FO24ezXBS192bq8Wh2bKN4eTsvX4jUDltVKtNMAiNFeKZgLkPnbuAV3chzCR9aGTUXtlSmrvf0fyKCxJngQQ2R3QVPhuPoFmuRI5of5A8sKakz4BGN37wgrKhS4iUlGv3aHwoTgD7k=w960-h720-no)  

### 編碼器
[EC6P-AG5C](https://www.omron.com.tw/products/family/494/lineup.html)絕對型編碼器為NPN型，PLC的控制迴路也必須為NPN型才能讀到編碼器的編碼訊號。

### 變頻器和PLC通訊
PLC和變頻器的通訊線也要自己製作，通訊方式是使用RS485串列通訊RX/TX，用RJ45網路線接頭和網路線製作即可。  

![變頻器通訊接線圖](https://lh3.googleusercontent.com/sB5g8vLoQ_BFEHvZOxQ-MeVtQGaiKKlPr8xQvxBjiEDNbWbtvtwbIGJ-1M9XLJJzu8yfxC7liWXMdr3qym5rURLOHsSiwM9bPmd_arxh2BU17lREkmp-p6jZAoIOox8AGuhWo4ISKns=w1389-h670-no)

PLC端的通訊接頭也要照說明書配線，在沒有分配器的情況下只要如圖接線就可以通訊成功。  

![PLC通訊接線圖](https://lh3.googleusercontent.com/efNVNgAnPLiAByx1eW45YLhGKhZqtGxb9LwEPrILdVRVDishXqVyMDjYgEsZ_WIRfKOOrfKB5qCLn0zQRTx_OkQfEzRIdx6r2qgb0GBKcc0JfzSwcn9ZwkwOB5epw22fKIaxTwVZECk=w918-h559-no)  

PLC端設定MODBUS，到 `GXwork3` > `Navigation` > `Parameter` > `FX5UCPU`>`Module Parameter` > `485 serial port`如圖設置即可。
設定完成後就可在PLC內寫程式，利用變頻器指令控制正反轉、頻率、停止和運行模式等。

![PLC端通訊設定](https://lh3.googleusercontent.com/Hpob3K1BmHI7jMF1l7MiVIES2ZljhCRmJFhoI-D9CbyCy8-6a9bXKJperfrMdWL2SHYltJeDNdMYqkhDKzvXrzHOZ0nQN0vSLUTHKTtTBQlZmqItqgnNAwSn2eOZ0VPHxrfCjO4mhk8=w490-h169-no)