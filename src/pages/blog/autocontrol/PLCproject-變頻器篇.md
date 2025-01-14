---
templateKey: 'blog-post'
title: 'PLC project - 變頻器篇'
date: 2019-09-21
featuredpost: false
featuredimage: 
description: >-
  介紹如何利用通訊模式和手動模式控制變頻器。
tags:
  - AutoControl
  - PLC
---
### 變頻器設定筆記

1.  更改pr160為0才能顯示全部可調整的pr參數
2.  pr340設定為0,1才能切換三種運行模式，不然只能切換兩種
3.  變頻器的通訊速率：`9600`，需和PLC端設定相同
4.  詳細控制設定還是要詳讀變頻器的使用手冊

### 變頻器電源
以這次使用的FR-D740變頻器為例，將三相380V的電源線、馬達電源線接上。控制變頻器的電源電路需要一些保護元件，例如斷路器和電磁接觸器，相關電路接法原廠手冊也有範例可自行參閱，此篇以介紹控制方法為主。  

![變頻器電源設定接線圖](https://lh3.googleusercontent.com/iaajXP1EgHLb_Lvas8KpexoXIM6XKrEytKKnDh1DZGz_t8kB1OV4tdwWXHeYOM_2K4ViLqaJFCWD5IadpPYT_5PhWWt8mZeMllsyIO0JZOuK9SI273QLiduh4FT8uwFdp84aeOxcGIY=w647-h414-no)  
### 變頻器手動外部控制
這款變頻器可以透過內部的控制電路，連接外部元件來控制正反轉、簡單設定低中高速等，並輸出運行中的燈號，但這次是依靠客製的介面燈號觀察運行狀態，並利用電位器調速，輸出端和低中高速設定等功能就不使用。

![變頻器手動控制接線圖](https://lh3.googleusercontent.com/NlRosYUm-4UMaouzBxCuxi8OiB8kvywqmCqVMYrxEQ2uMEqgCm_f88xVf7Vmu6wJJ3rPXlCzgdYwio8hop1JDXHpdQsv94OvrQKlWLzSYLByANwWsxyJynof7P2Y6BDv0WWgZLKfzpk=w1383-h551-no)

### 變頻器手動外部調速
將變頻器的頻率設定接點接上電位器後，外部手動控制模式才能運作並調速。

![變頻器調速控制接線圖](https://lh3.googleusercontent.com/aGWj1FLrMnwZgJLlxbGv3FBZeJJXUQsP8hwptFEqA8WswQd5LC2ZrRT7oL7emRDrrQDAKhPphfQ0gIP3TuZLSlwsjJmsyA5j-jdTUWH9oJux4eT6e09ZoLS7amfDYeZ8b-d2Mew1kBo=w1363-h559-no)

![變頻器控制接線完成圖](https://lh3.googleusercontent.com/uG2DlsdbK_qqq0E_3hgbDgnDzC-VorYlu_JLgOM56X5dXlyVsGM6kNUp2d3CkGVRU0sH72WkOKUMX9Lrj_USYOWkqZiwKIsxFn3r7XpCDqhQp56qqymHXAc5qxoOgq4BYXg8ommGjHc=w1432-h937-no)  





