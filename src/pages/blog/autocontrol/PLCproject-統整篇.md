---
templateKey: 'blog-post'
title: 'PLC project 01'
date: 2019-09-21
featuredpost: false
featuredimage: 
description: >-
  整理PLC教具專案的建置過程。
tags:
  - PLC
  - AutoControl
  - Modbus
---
![chemex](/img/blog1.jpg)

# PLC教具專案
***
- [系統架構](#系統架構)
  - [電力](#電力)
  - [PLC控制主機](#PLC控制主機)
  - [馬達與減速機](#馬達與減速機)
  - [變頻器](#變頻器)
  - [編碼器](#編碼器)
  - [設置環境](#設置環境)
  - [ModbusTCP](#ModbusTCP)
  - [Node-RED](#Node-RED)
- [設置環境](#設置環境)
- [系統使用步驟](#系統使用步驟)


## 系統架構

### 架構規劃
PLC教具主位是給劇場設計的學生使用，讓學生透過簡單的PLC程式撰寫，在經過設計的
運動模擬機構上，展示多種舞台常用的自動控制功能。

+ 馬達電力需求：[3相480V](https://zh.wikipedia.org/wiki/%E4%B8%89%E7%9B%B8%E9%9B%BB)
+ 控制系統電力需求：[單相110V](https://zh.wikipedia.org/wiki/%E5%96%AE%E7%9B%B8%E9%9B%BB)
+ PLC型號：[FX5U-32M](https://www.fapro.com.tw/p2-product-detail.asp?cid=2&tid=2&nid=460&ppage=) 
+ 馬達型號：[BHI62U-G2](https://sg.misumi-ec.com/vona2/detail/221000802432/?HissuCode=BHI62U-G2)
+ 減速機型號：[BH6G2-25RH](https://www.orientalmotor.com.tw/products/ac/list/detail/?product_name=BHI62F-25RH&brand_tbl_code=AC&series_code=0600&type_code=)
+ 變頻器：[FR-D740](https://www.seec.com.tw/Content/Goods/GCont.aspx?SiteID=10&MmmID=655575436061073254&CatId=2015121009215851581&MSID=655632441757735143#ad-image-0)
+ 絕對型旋轉編碼器：[EC6P-AG5C](https://www.omron.com.tw/products/family/494/lineup.html)
+ 控制介面：[Node-RED](https://nodered.org/)
+ PLC編程：[功能區塊圖 FBD](https://zh.wikipedia.org/wiki/%E5%8A%9F%E8%83%BD%E5%8D%80%E5%A1%8A%E5%9C%96)
+ 控制通訊介面：[Modbus TCP](https://zh.wikipedia.org/wiki/Modbus)
  
### 電力
一般劇場都會提供3相480V的電源讓自動控制設備使用，戶外演出時擇時會遇到3相220V或單相220V的電源，使用者可以根據不同的場地的電力設備挑選適合的馬達，也可以自己搭配適合馬達的動力箱，此專案採用後者，客製化了一個動力箱，此動力箱包含了3相480V和單相220V的電源，可以帶到不同場地並搭配不同電力需求的馬達使用。
### PLC控制主機
舊式PLC大多要透過專用的線材燒錄程式與通訊，只要遺失就得費時費力取得專用線材。為了簡化開發的時間與成本，改買可以使用網路線燒綠程式的新型PLC，也不需要網路外加模組便能用網路通訊。

### 馬達
這次使用的馬達為三相380V，200W的馬達，配上減速比為25的減速機，
### 變頻器
### 編碼器
為了知道馬達目前位置，使用絕對型[旋轉編碼器](https://zh.wikipedia.org/wiki/旋轉編碼器)偵測位置，如果用相對型編碼器，系統斷電後馬達如果還有移動就無法得知絕對位置，但絕對型編碼器每個角度都有編碼，不會有這個問題。
### 軟體
- [控制與監控介面](##控制與監控介面)
- [設置環境](##設置環境)
- [PLC程式解析](##PLC程式解析)
### Node-RED
Node-RED是IBM基於Node.js開發的視覺化物聯網開發工具，它可以用滑鼠拖拉的方式編寫程式，也可以添加Java-Script程式碼實現特殊功能。為了用最簡單的方式理解PLC通訊和使用者介面(GUI)之間的關係，這次的專案並沒有重新開發桌面應用軟體，而是使用現成的物聯網開發套件和PLC溝通。

### ModbusTCP
Modbus TCP是基於TCP/IP的工業通訊協定，常用來和PLC交換資料，網路上有許多針對不同程式語言包裝好的Modbus函式庫，方便做工業控制的應用開發。

### 設置環境
1.  安裝[GXWork3](https://www.fapro.com.tw/p3-news-detail.asp?nid=121)，撰寫PLC程式。
2.  完成[PLC的Modbus TCP通訊設定](https://kknews.cc/zh-tw/news/eknnl4q.html)，並[修改PLC的預設IP](http://bbs.gkong.com/archive.aspx?id=455676)。
3.  完成PLC和變頻器的通訊設定。
4.  參考網路資源[安裝Node-RED](https://kknews.cc/zh-tw/news/eknnl4q.html)，並[安裝Modbus外掛](https://flows.nodered.org/node/node-red-contrib-modbus)，才能和PLC通訊並存取內部資料。
5.  在Node-RED裡設定Modbus TCP伺服器。

### 系統使用步驟
1.  電腦開機
2.  控制系統上電
3.  確認控制模式切換開關為通訊模式
4.  雙擊 Node.js command prompt
5.  輸入 `node-red` + `Enter`執行Node-RED
6.  打開瀏覽器，網址列輸入 `127.0.0.1:1880`
7.  確認Modbus 伺服器的IP為`192.168.1.111`
8.  確認橘色圖塊下面的小字為綠點加上`Active`
9.  網址列輸入 `127.0.0.1:1880/ui`後即可看到控制介面
10. 開始控制馬達。
11. 


