### 简易 浏览器端 聊天室

#### 功能

1. 注册，用户名重复将注册失败
2. 登录，帐号或密码错误将登录失败
3. 聊天室，登录用户可以发送信息；聊天信息展示包括：用户名-->内容-->时间

#### 启动

+ 1.安装 node.js 、MongoDB
+ 2.安装项目依赖 
```
    $ npm install
``` 
+ 3.启动 MongoDB 数据库，并挂载
+ 4.启动 App（默认监听 3000 端口），并挂载
```
    方式一：
        $ npm start
    方式二（根目录下）：
        $ node ./bin/www
```
+ 5.打开浏览器 输入 127.0.0.1:3000，进入聊天室

> 小技巧：google 浏览器隐身模式窗口，可以避免使用多个浏览器切换用户
 
