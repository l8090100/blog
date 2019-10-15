---
templateKey: 'blog-post'
title: 'PLC project - NodeRED篇'
date: 2019-09-21
featuredpost: false
featuredimage: 
description: >-
  如何利用Node RED和PLC連結，實現人機介面的操控與通訊
tags:
  - PLC
  - AutoControl
  - Modbus
  - Coding
---
## Node-RED
Node-RED是IBM基於Node.js開發的視覺化物聯網開發工具，它可以用滑鼠拖拉的方式編寫程式，也可以添加Java-Script程式碼實現特殊功能。為了用最簡單的方式理解PLC通訊和使用者介面(GUI)之間的關係，這次的專案並沒有重新開發桌面應用軟體，而是使用現成的物聯網開發套件和PLC溝通。
1.  讀PLC接點
2.  讀變頻器狀態
3.  控制變頻器正反轉
4.  設定四個極限定位與頻率
5.  計算實際轉速

### 與PLC通訊

`youtube: https://youtu.be/BXDBmNmpdMw`

1.  執行Node.js command
2.  輸入`node-red`
3.  打開瀏覽器並輸入`http://127.0.0.1:1880/`
4.  點畫面右上角選單 > `import` > `clipboard` > 上傳`flow.json`檔案
5.  PLC端也要設定IP和Modbus，到 `GXwork3` > `Navigation` > `Parameter` > `FX5UCPU`>`Module Parameter` > `Ethernet port`設定。  

![PLC端Modbus通訊設定](https://lh3.googleusercontent.com/Ogp3DxDB7HzfaQCLIzkOb0h3MXrlItPOWECgkuYmW9YTycZYxcv4yWHv4cXW6yxRJUT5a2qmlHGLJgRqfncyPym9qUs9baHkuTlm8hcvPZKuHnj3rIt5sMLblBE1sKTUgKXxnJECWFU=w493-h315-no)

1.  確認NodeRED端Modbus伺服器的IP設定

![NodeRED端Modbus通訊設定](https://lh3.googleusercontent.com/sy8V3Drun7ioKcZ4omhj1NBXdFjkEwWCQP4vKtNo3itIOkF2CdYob5CaEjy6LLSGhd0AvH4nJ8Uf9rF5KjJBhvxtIzSMSMMegvXLnHvx39Xsd9uU6eycaEUFKtFOwGPzSqaVme67xvk=w620-h648-no)  

2.  可以開始使用外掛的模組和PLC通訊

Modbus協定有許多不同功能碼來讀寫PLC的不同資料，以下是常用的功能碼，此專案用到01,03,05,06,15。


+ 01：讀 線圈寄存器 > 起始位置 8192 = M0
+ 03：讀 保持寄存器 > 起始位置 0 = D0
+ 05：寫 單個線圈寄存器 > 起始位置 8192 = M0
+ 06：寫 單個保持寄存器 > 起始位置 0 = D0
+ 15：寫 多個線圈寄存器 > 起始位置 8192 = M0


##  自訂功能函式
Node-RED撰寫程式的方式主要靠介面左邊的函示庫，只要把功能拉近程式區就能組合出各種應用。以下以最通用的function示範，並列出此專案使用到的自定函式。
1.  拉一個`function`圖塊到介面
2.  雙擊後輸入函式名稱、程式碼，並可調整輸出資料的數量。
3.  完成後按`Done`就完成一個自定義的函式了。

![自訂功能函式說明](https://lh3.googleusercontent.com/lNKl1qpbO4roAYZ7UoMPS-ESTPOSjNrzjims4BbrgS1xHK9HZxW8T2NRQCO0W8ESoi4SXmUYbZbjgexNb2e6dIntKBiKmY4rD3CCZTG7Drqel02PTeC4ezrZEkQ02GYlD2SuJxkMrrQ=w1508-h903-no)
### 處理陣列封包
Modbus裡某些功能碼可以讀到多筆資料，因此我們可以透過簡單的自訂函式，讓這些資料能獨立使用。`msg`在Node-RED裡代表著輸入端的資料。

``` javascript
var m = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(i = 0;i<20;i++){
    m[i] = { payload: msg.payload[i] };
}
return m;
```
1.  將`output`也設定為20
2.  此圖塊右邊的輸出接點會變成20個，即可連接其他的圖塊使用這些資料，如下圖。

![解陣列封包程式](https://lh3.googleusercontent.com/n6hDayzhOh_QdU5qzkbaGTP-uxVwCV1-ODPeiR4d1BAe9ij2fD1QbtdmcFre56gF5pdBDWCXoeQ7l5C0JkTy4a0HIAY6hjG6jVwVLR-nKbpn4qahgj8h7eqVMq5g3SeLLYLhnLxPxFg=w1392-h726-no)


### 讀變頻器狀態程式
#### 判斷手自動模式
從PLC讀到手自動的0/1訊號後，透過這段程式將手動/自動的訊息顯示在監控介面上。
``` javascript
var s = "default";
if (msg.payload===1) {
  s = "手動";
} else if (msg.payload===0) {
   s = "通訊";
}
msg.payload = s;
return msg;
``` 
![讀變頻器狀態程式](https://lh3.googleusercontent.com/GyocGu59ZtIkIcB95j4Jx_3TetVaJ78rEwejmdxQqCjGfE9HWVeaLEBR6DvvHhL9qBQSmqHlpgfsqKw0IEKgudZE_dBKfTcsuPa0ChKO0WIDelgP52LCEk_B2W5YpGdf5gWVDY4SL_U=w1108-h486-no)

#### 計算秒速
``` javascript
context.radius = context.radius || 0;

if (msg.topic === 'radius') {
  context.radius = msg.payload;
}
var r = 1550/60*msg.payload/100*context.radius*2*3.1415/60/10;
r = r.toFixed(1);
msg.payload = parseFloat(r);
return msg;
```

### 定位控制馬達程式
由程式可以看到定點A~D按鈕共同連接到一個寫入函式，而下面的頻率卻是分別寫入。這個寫法前提是，定點訊號一次只能設定一個，如果連續按到不同定點的話，會造成PLC判斷錯誤，因此定點A其實是送出`1,0,0,0`給PLC，以此類推，這樣便能確保PLC端永遠只接收到一個定位指令。  

![定位控制馬達程式](https://lh3.googleusercontent.com/ZdoUzo2cGZaI7tGH-q5eu-_pZH1Q-_VjB5zGnttESEh4Zn7oJkxIw0tjuAI_hivxsghd9983ckJnu6sTOPIh_B3YyMnXPms2jnwfsJtMxQzoMA7RR3njnEoc_tgt2vBEBGaPZ__SjDg=w1169-h489-no)

### 介面控制馬達程式
介面控制馬達正反轉的邏輯與定位控制相似，為了避免PLC同時接受到正轉和反轉的訊號造成動作錯誤，用正轉送出`1,0,0`，反轉送出`0,1,0`的寫法方便PLC判斷，避免誤動作。  

![介面控制馬達程式](https://lh3.googleusercontent.com/duyPHxpVJDWDY0_zJWWcWBD8K8r-Txf9YJ1GRd8FGvwfNFw8QmrL1hhsPYb9hPibXWC1iGwC42YYko_TFBr14qXKXkjtPyPL9Tx1rGfDtzos7qgWYmi3dy3YnQJrh-3Fj_Vf6S5xVRU=w1152-h283-no)
