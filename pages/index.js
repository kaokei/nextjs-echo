const htmlStr = `
<h1>echo 服务文档</h1>

<h2>页面地址</h2>

<p>请访问 https://echo.kaokei.com/</p>

<h2>接口地址</h2>

<p>echo 接口地址：https://echo.kaokei.com/api/echo</p>

<h2>使用方式</h2>

<ul><li><p>需要注意 get 请求中使用的常量值<code>__echo_data__</code>来指定返回数据，且该数据需要 encodeURIComponent 转码</p></li><li><p>不管是 get 还是 post，如果需要自定义 header，那么就需要使用<code>__echo_headers__</code>和<code>__echo_body__</code>来分别指定 header 数据和 body 数据</p></li><li><p>不管是 get 还是 post，在接口<code>https://echo.kaokei.com/api/echo</code>后面是可以任意添加其他 path 的，比如<code>https://echo.kaokei.com/api/echo/hello</code>和<code>https://echo.kaokei.com/api/echo/hello/world</code>都是有效的接口。</p></li></ul>

<h4>get 方式一</h4>

<p>https://echo.kaokei.com/api/echo?__echo_data__=%7B%22name%22%3A%22zhangsan%22%7D</p>

<p>该接口返回值是 <code>{&quot;name&quot;: &quot;zhangsan&quot;}</code></p>

<h4>get 方式二</h4>

<p>https://echo.kaokei.com/api/echo?__echo_data__=%7B%22__echo_body__%22%3A%7B%22name%22%3A%22zhangsan%22%7D%2C%22__echo_headers__%22%3A%7B%22token%22%3A123%7D%7D</p>

<p>该接口返回值是 <code>{&quot;name&quot;: &quot;zhangsan&quot;}</code>，同时会在 response header 中设置<code>token=123</code></p>

<h4>post 方式一</h4>

<p>https://echo.kaokei.com/api/echo
post 数据如下：</p>

<p><code>json
{
  &quot;name&quot;: &quot;zhangsan&quot;
}
</code></p>

<p>该接口返回值是 <code>{&quot;name&quot;: &quot;zhangsan&quot;}</code></p>

<h4>post 方式二</h4>

<p>https://echo.kaokei.com/api/echo</p>

<p>post 数据如下：</p>

<p><code>json
{
  &quot;__echo_headers__&quot;: {
    &quot;token&quot;: 123
  },
  &quot;__echo_body__&quot;: {
    &quot;name&quot;: &quot;zhangsan&quot;
  }
}
</code></p>

<p>该接口返回值是 <code>{&quot;name&quot;: &quot;zhangsan&quot;}</code>，同时会在 response header 中设置<code>token=123</code></p>

<h2>部署到 vercel.app</h2>

<p>有需要的话，可以直接使用我的 git 仓库在 https://vercel.com/ 上部署自己的服务</p>
`;

export default function Home() {
  return (
    <div className="container">
      <main>
        <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
      </main>
    </div>
  );
}
