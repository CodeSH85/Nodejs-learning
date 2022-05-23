# Node JS 筆記 

---
## Node 指令 (18.0.0)
```
執行檔案
node "file-name"
```
## Npm 指令 (8.6.0)
```
安裝套件
npm install {packageName}

全域安裝套件
npm install {packageName} -g

-dev: 開發期間才會使用到的套件
npm install --save-dev {packageName}

解除安裝套件
npm uninstall {packageName}
```
nvm vs npm vs npx
::: danger
!全域安裝通常使用在安裝個人開發用套件上
:::
```
npm run serve

npm init
```
## MVC架構
MVC: Model - View - Control

![express](https://mdn.mozillademos.org/files/14456/MVC%20Express.png)


### Express 套件

middleware 中介軟體，介於request/response中間

### static 
### 使用 middleware 設定靜態資源所在資料夾

express 提供了 static 方法來設定靜態資源所在的路徑，我們設置 public 資料夾來存放靜態資源：

### EJS

#### 模板引擎
```
<%= var %>
```


### Model

### Route 路由資料
導覽路徑

### Controllers 頁面控制
控制頁面行為(渲染render, req等)


app ==> router ==> controllers

### ORM 框架

ORM（物件關聯對應，Object Relational Mapping），是一個資料抽象化的技術
操作JavaScript物件的同時，修改DB資料庫的資料

#### Sequelize

npm install Sequelize


ORM 框架建立的 Product model ，擁有一個可以輸入多筆資料的方法 bulkCreate(array) ：

### express-session 

### csrf攻擊
