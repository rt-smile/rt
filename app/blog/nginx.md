---
title: "nginx"
date: "2024-09-19"
---

## 查看防火墙开放端口 ##

```sh
firewall-cmd --zone=public --list-ports
```

## 设置防火墙端口的开发和关闭 ##

```sh
firewall-cmd --zone=public --add-port=5672/tcp --permanent   # 开放5672端口

firewall-cmd --zone=public --remove-port=5672/tcp --permanent  #关闭5672端口

firewall-cmd --reload   # 配置立即生效
```

## 查看监听的端口 ##

```sh
netstat -lnpt
```

## 查看Nginx配置文件的位置 ##

```sh
nginx -t
```