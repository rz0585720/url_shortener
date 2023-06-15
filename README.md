# 縮網址-URL Shortener

![](https://github.com/rz0585720/url_shortener/blob/main/index.png?raw=true)
![](https://github.com/rz0585720/url_shortener/blob/main/result.png?raw=true)
![](https://github.com/rz0585720/url_shortener/blob/main/detail.png?raw=true)

## 簡介 Introduction

這是一個可以產生短網址的網站

## 功能 Features

- 你可以輸入一個網址，按下 submit 後會獲得一個短網址
- 輸入相同的網址會獲得相同的短網址
- 輸入短網址，會導向原本的網站
- 你可以點擊複製按鈕，複製短網址
- 你可以在 My URLs 頁面看到你產生過的短網址
- 你可以在 My URLs 頁面複製曾經產生的短網址

## 環境建置及需求 Prerequisites

1. [Node.js](https://nodejs.org/en)
2. [Express @4.16.4](https://expressjs.com)
3. [Express-handlebars @3.0.0](https://www.npmjs.com/package/express-handlebars)
4. [Mongoose @5.9.7](https://mongoosejs.com)
5. [MongoDB](https://www.mongodb.com/try/download/community)
6. [Dotenv](https://www.npmjs.com/package/dotenv)

## 安裝 Installation

1. 打開終端機(Terminal)，Clone 此專案至本機電腦

```
git clone https://github.com/rz0585720/url_shortener.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd url_shortener
```

3. 安裝 npm 套件

```
npm install
```

4. 在專案資料夾中新增 .env 檔案，並依照 .env.example 檔案的格式輸入自己的 MongoDB 資訊

```
MONGODB_URI= <YOUR_MONGODB_URI>
```

5. 啟動伺服器，執行 app.js 檔案

```
npm run start
```

6. 當終端機(Terminal)出現以下字樣，表示伺服器已啟動並成功連結

```
Express is running on http://localhost:3000
```

7. 在任一瀏覽器中輸入 http://localhost:3000 開始使用網站
8. 在終端機(Terminal)中按下 Ctrl+C ，即可關閉伺服器結束專案
