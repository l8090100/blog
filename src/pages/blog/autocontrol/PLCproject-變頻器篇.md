---
templateKey: 'blog-post'
title: 'PLC project - 變頻器篇'
date: 2019-09-21
featuredpost: false
featuredimage: 
description: >-
  如何控制變頻器
tags:
  - AutoControl
---
## 電源
以這次使用的FR-D740為例，除了將三相380V的電源線、馬達電源線接上外，要注意變頻器選擇瓦數的短路片，是否是按照馬達規格來設定，而出廠時照理說會已經設定好。  
![變頻器電源系統接線圖](https://lh3.googleusercontent.com/JpbQF94asS-s7bbSrSwltv5SvLiOWDIxjiRqXVRZFjO9QpXEqLh4w1dgiZfUdNzk4rZoJ0uu5OrEs3I20cSrRBT27zzfOKkdr_jU8MlUwXaJa9zGrFIH-a_gPUAw_0rmDu51tWGj_GM=w717-h292-no)
![變頻器電源設定接線圖](https://lh3.googleusercontent.com/iaajXP1EgHLb_Lvas8KpexoXIM6XKrEytKKnDh1DZGz_t8kB1OV4tdwWXHeYOM_2K4ViLqaJFCWD5IadpPYT_5PhWWt8mZeMllsyIO0JZOuK9SI273QLiduh4FT8uwFdp84aeOxcGIY=w647-h414-no)  
## 變頻器手動外部控制
這款變頻器可以透過內部的控制電路，連接外部元件來控制正反轉、簡單設定低中高速等，並輸出運行中的燈號，但這次是依靠客製的介面燈號觀察系統運行狀態，輸出端和低中高速設定等功能就不使用，只控制正反轉和電位器(可變電阻)調速。  

![變頻器手動控制接線圖](https://lh3.googleusercontent.com/NlRosYUm-4UMaouzBxCuxi8OiB8kvywqmCqVMYrxEQ2uMEqgCm_f88xVf7Vmu6wJJ3rPXlCzgdYwio8hop1JDXHpdQsv94OvrQKlWLzSYLByANwWsxyJynof7P2Y6BDv0WWgZLKfzpk=w1383-h551-no)
![變頻器調速控制接線圖](https://lh3.googleusercontent.com/aGWj1FLrMnwZgJLlxbGv3FBZeJJXUQsP8hwptFEqA8WswQd5LC2ZrRT7oL7emRDrrQDAKhPphfQ0gIP3TuZLSlwsjJmsyA5j-jdTUWH9oJux4eT6e09ZoLS7amfDYeZ8b-d2Mew1kBo=w1363-h559-no)
![變頻器控制接線完成圖](https://lh3.googleusercontent.com/uG2DlsdbK_qqq0E_3hgbDgnDzC-VorYlu_JLgOM56X5dXlyVsGM6kNUp2d3CkGVRU0sH72WkOKUMX9Lrj_USYOWkqZiwKIsxFn3r7XpCDqhQp56qqymHXAc5qxoOgq4BYXg8ommGjHc=w1432-h937-no)  

## 變頻器通訊
PLC和變頻器的通訊線也要自己製作，通訊方式是使用RS485串列通訊RX/TX，用RJ45網路線接頭和網路線製作即可。  

![變頻器通訊接線圖](https://lh3.googleusercontent.com/sB5g8vLoQ_BFEHvZOxQ-MeVtQGaiKKlPr8xQvxBjiEDNbWbtvtwbIGJ-1M9XLJJzu8yfxC7liWXMdr3qym5rURLOHsSiwM9bPmd_arxh2BU17lREkmp-p6jZAoIOox8AGuhWo4ISKns=w1389-h670-no)  

PLC端的通訊接頭也要照說明書配線，在沒有分配器的情況下只要如圖接線就可以通訊成功。  

![PLC通訊接線圖](https://lh3.googleusercontent.com/efNVNgAnPLiAByx1eW45YLhGKhZqtGxb9LwEPrILdVRVDishXqVyMDjYgEsZ_WIRfKOOrfKB5qCLn0zQRTx_OkQfEzRIdx6r2qgb0GBKcc0JfzSwcn9ZwkwOB5epw22fKIaxTwVZECk=w918-h559-no)  



