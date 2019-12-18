---
templateKey: 'blog-post'
title: 'PLC project - FBD程式篇'
date: 2019-09-21
featuredpost: false
featuredimage: 
description: >-
  整理PLC教具專案的建置過程。
tags:
  - PLC
  - AutoControl
  - Coding
---

### 用FBD語言寫程式
PLC最常用的編程語言叫做階梯圖，除了歷史悠久外學習資源也非常多。唯有一個缺點是維護不便，當程式越來越龐大和複雜時，傳統階梯圖的除錯效率會越來越差。這次為了讓程式更圖形化和容易維護，改用[功能區塊圖](https://zh.wikipedia.org/wiki/%E5%8A%9F%E8%83%BD%E5%8D%80%E5%A1%8A%E5%9C%96)（Function Block Diagram，簡稱FBD）編程。FBD有兩個優點，一個是修改方便，一個是可以將複雜的子程式變成一個模塊，讓主程式只顯式最重要的參數。這次的PLC專題包含了10種功能，並沒有嚴格的排序問題，對於剛接觸PLC的新手，以下功能已包含許多常用的PLC控制指令與邏輯，在撰寫時也力求簡潔，方便以後設計擴充功能時有較清楚的參考。

### 燈號判斷
燈號的功能對劇場機械的自動控制來說，演出中執行的操作員只需要知道

1.  系統是否正常
2.  訊號送出去了沒
3.  機器到定位了沒

除了這些資訊，並不需要其他複雜的燈號。此段程式所判斷的，便是這三種訊息。  

![燈號判斷](https://lh3.googleusercontent.com/TZ2M6gYi60MstUXhO3sJ0L-4MVjlkOGRQD579dESfrPgX5aQoAxJLGn_fmCIKrD5aofHingX5t5zlklB7wRUKJbhi0kwIwGBnEuXOCXPnCMd6qU3sD2vMYmz6I6ebAO275Kdzj0XnEs=w741-h435-no)  

### 手自動模式判斷
劇場控制機械時常常要切換手動測試或運行，此段程式透過切換按鈕判斷藥用介面還是手動控制馬達。我們從PLC發送指令給變頻器來切換手自動模式，並使用變頻器自帶的正反轉輸入接點、可變電阻輸入接點，簡單的調整變頻器正反轉與頻率。  

![手自動模式判斷](https://lh3.googleusercontent.com/ShOG_GUB8oDHNFRTmIWnX51Hm1QjlcgmmTGrQFOo9wFygndq2iIWIQ5cyeH5rQuDXlwhrZNUH-OrkVSZliCa1xAbfBoxE4DXvgfoo7NMESZb4K9_YBVSz8xEcK2ye27jdoP87WKyFwg=w725-h468-no)  

### 控制模式判斷
包含兩種控制馬達的模式，兩種模式都會儲存並回傳當前馬達運行的狀態。按鈕控制點擊介面按鈕後，會傳送不同的控制訊號給PLC，並判斷馬達正反轉和停止。  

![控制模式判斷](https://lh3.googleusercontent.com/H0eaYoY_ADheHRsP-DhYh3I-r2bISAQmwOfxu1DpnzKTtXBhuHP69BJ8L6Ya-LA-M14eCyraW8RLIxXwVaVi1iQn5EgZO4e_BVRXM64WZph8RRCjheLw53W48sVEvvhQKw_7U7mfkS8=w648-h568-no)  

### 極限模式速度判斷
讓PLC程式判斷，馬達走到哪個極限再停止。其中經過的極限能設定不同速度，讓運動過程中有不同的速度變化。按鈕控制模式下則使用該模式的頻率。  

![極限定位模式](https://lh3.googleusercontent.com/UN2dm85WBbnGRmY-eNyj-n-OmVDlkw7pnkxroUlBRGp0GaIHj61FuCRbJ3SxKxdiTJ74AcmH4vKElz70U9K668fbwKZb5OB1mrxiD_XM501_vm-Qa2rYOIUZDLTCjerv08VZNknTjQA=w1660-h571-no)  

### 讀編碼器位置
此款絕對型編碼器有八條訊號線，每條線代表[格雷碼](https://kknews.cc/zh-tw/news/x869qo9.html)的一位數，PLC讀取八個接點的0,1便能解碼出實際位置。  

![讀編碼器位置](https://lh3.googleusercontent.com/B_yKzRFanuDUl06dvyr2Q4RyXPb3pz0i1qNKEyIxnpCV29RPd_hk2pxdDmWdltittMIXm7ziDDiiQwJUePNI3HO_yHsfDnhNSoPmBTFmk5P8m_-7yLriAvJPN8R_Q5E5SdbHOfwASJU=w370-h231-no)  

### 重點參數設定
這段簡單的設定參數到寄存器程式，將控制變頻器的重要參數紀錄在此方便查閱，就不用一一到控制指令圖塊找尋實際參數的值。  

![重點參數設定](https://lh3.googleusercontent.com/isp3YRkjrPUL5HODtXXpxF8J2Q5ghWpXTEYK9sPnW9B-ZadCBRVC7SZP0zDx1NrgSPkTUED7ubAiiMUMgfEz0HQoNSADiYi_vuICNNCGM7KHY2qVxKx7gezEaJ-E4gS5QoeJo4h0KSA=w283-h327-no)  

### 定位完成判斷
在介面選擇在哪個極限停止後，資料會存在PLC並判斷該極限是否被撞到，撞到的話就判斷為定位完成，並把資料歸零等待下一次的定位需求。  

![定位完成判斷](https://lh3.googleusercontent.com/0l6dNaDC61cvo1aR3jacSU37z8A0sONbBRv8816oi6JBNmrgaILBRcG7pI_RfIke63C8edKUJHDzrxFV4fh91CGdwvGJR2M9ri_lkPeLAxH9VHVE8WQN65O7VLpnJfW-U0R-ANXLD20=w979-h688-no)  

### 讀變頻器狀態
此段程式負責發出讀取變頻器狀態的請求，包含運行模式、輸出電流、輸出頻率、輸出電壓、異常內容、狀態監視、設定頻率。  

![讀變頻器狀態](https://lh3.googleusercontent.com/3aEuKjL4095g31yB8wo0JSNfrDX2KZFnigRsemg-NVFITzk6LZTs3JeOL56c09OJ-FJ5daFXToGYhrkYvKI77TpHbB7PWgays3uIDzTc1kLLiqPhu5VOrLD0dTs6vNPcWwXc3UDOkxE=w1571-h445-no)  

### 變頻馬達控制指令偵測
此部分的程式碼負責偵測馬達正反轉和停止的訊號，收到符合條件的觸發訊號後便發送控制指令給變頻器。 

![變頻馬達控制指令偵測](https://lh3.googleusercontent.com/lAQka5S0zbwqN658aq3JAthTeNfySF2k1FSrl829cM8L-JU1e21FJmpm2oSof0GuSD47GWsqhuWAeLwXXHBVnwW4pyUWdXpFWgjS4WcmuXqXoiwQPcDw6T5t3VP3GtGya9kozLYTW2k=w1248-h590-no)  

### 表演模式按鈕狀態判斷
此段程式並沒有結合馬達控制功能，主要展示兩種功能
1.  將實體按鈕和介面燈號連結，模擬表演開始、暫停和停止的燈號。
2.  利用PLC內建功能，實現按同一個按鈕顯示兩種不同亮燈效果。

  
![表演模式按鈕狀態判斷](https://lh3.googleusercontent.com/nX11ejp6e1B9aubw2HgPgUk4KjS_bU_f3-g1v884k9Vn4pa0-d41i6JArUSad1Q_0bcUiJAQwmeFoqy5cYkDtm0P1tBe5fNPFoM3zZDcOGN5G7mx2iwfhQPeVCGf2NfWZ-YwPZP0b9Y=w1444-h462-no)