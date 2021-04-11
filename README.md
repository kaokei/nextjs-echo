# echo 服务文档

## 页面地址

请访问 https://echo.kaokei.com/

## 接口地址

echo 接口地址：https://echo.kaokei.com/api/echo

## 使用方式

- 需要注意 get 请求中使用的常量值`__echo_data__`来指定返回数据，且该数据需要 encodeURIComponent 转码

- 不管是 get 还是 post，如果需要自定义 header，那么就需要使用`__echo_headers__`和`__echo_body__`来分别指定 header 数据和 body 数据

- 不管是 get 还是 post，在接口`https://echo.kaokei.com/api/echo`后面是可以任意添加其他 path 的，比如`https://echo.kaokei.com/api/echo/hello`和`https://echo.kaokei.com/api/echo/hello/world`都是有效的接口。

#### get 方式一

https://echo.kaokei.com/api/echo?__echo_data__=%7B%22name%22%3A%22zhangsan%22%7D

该接口返回值是 `{"name": "zhangsan"}`

#### get 方式二

https://echo.kaokei.com/api/echo?__echo_data__=%7B%22__echo_body__%22%3A%7B%22name%22%3A%22zhangsan%22%7D%2C%22__echo_headers__%22%3A%7B%22token%22%3A123%7D%7D

该接口返回值是 `{"name": "zhangsan"}`，同时会在 response header 中设置`token=123`

#### post 方式一

https://echo.kaokei.com/api/echo
post 数据如下：

```json
{
  "name": "zhangsan"
}
```

该接口返回值是 `{"name": "zhangsan"}`

#### post 方式二

https://echo.kaokei.com/api/echo

post 数据如下：

```json
{
  "__echo_headers__": {
    "token": 123
  },
  "__echo_body__": {
    "name": "zhangsan"
  }
}
```

该接口返回值是 `{"name": "zhangsan"}`，同时会在 response header 中设置`token=123`

## 部署到 vercel.app

有需要的话，可以直接使用我的 git 仓库在 https://vercel.com/ 上部署自己的服务
