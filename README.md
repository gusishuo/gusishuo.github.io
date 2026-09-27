# gusishuo.github.io

个人博客。纯 HTML + CSS，零 JavaScript，无构建步骤。

- 线上：<https://gusishuo.github.io>
- 字体：霞鹜文楷（LXGW WenKai，CDN 加载，失败则回退系统字体）
- 配色：羊皮纸奶油底 `#FAF9F5` + 赤陶强调色 `#C96442`（深色模式自动切换）

改完推到 `main` 分支，GitHub Pages 自动发布，不需要点任何按钮。

## 想改 X，就改这里的 Y

| 我想改… | 改哪个文件 | 改哪一处 |
|---|---|---|
| 站名 / 一句话介绍 | `index.html` | `<h1>` 和 `.tagline`（**每页页头都有，改了要全部同步**） |
| 配色（底、字、强调色） | `assets/site.css` | 顶部 `:root` 里的 `--bg` `--ink` `--accent` `--line` |
| 深色模式的颜色 | `assets/site.css` | `@media (prefers-color-scheme: dark)` 里那一组同名变量 |
| 字体 | `assets/site.css` | `--font` 一行 |
| 正文行宽 / 行高 / 字号 | `assets/site.css` | `--measure`、`body` 的 `font-size` 和 `line-height` |
| 导航项 | 每个 `.html` | `<nav>` 里的四个链接 |
| 页脚版权与联系方式 | 每个 `.html` | `<footer>` |
| **加一篇新文章** | 复制 `posts/` 里任意一个 `.html` | 改标题、日期、正文；再在 `index.html` 的 `.postlist`、`archive.html`、`feed.xml`、`sitemap.xml` 各加一条 |
| 改文章摘要 / 日期 / 阅读时长 | `index.html` | 对应 `<li>` 里的 `.meta` 和 `.summary` |
| 换 favicon / 配图 | `assets/` | 换掉 `favicon.svg`、`diagram.svg` 等文件即可（都是相对路径引用） |
| 文章里的配图和图注 | 对应的 `posts/*.html` | `<figure>` 与 `<figcaption>` |
| **商店加一个印花** | `assets/shop.js` | 顶部 `PRODUCTS` 里照样子加一段（title / by / price / image / link） |
| 商店的价格、名字、小店链接 | `assets/shop.js` | 同上，每个商品一段 |
| 商店的图片 | `assets/prints/` | 把印花图放进来，`image` 写相对路径，如 `assets/prints/xxx.png` |
| 微信小店二维码 | `assets/wechat-qr.png` | 把二维码图片放进 `assets/` 并命名为 `wechat-qr.png`，自动显示 |

## 目录

```
index.html          首页（站名 + 文章列表）
about.html          关于
archive.html        归档（按年份）
shop.html           商店（T 恤印花，点击跳微信小店）
404.html            自定义 404
feed.xml            RSS
robots.txt          给搜索引擎看的
sitemap.xml         站点地图
assets/site.css     全部样式，改外观只动这一个文件
assets/shop.js      商品清单，加印花只动这一个文件
assets/prints/      印花图片
assets/*.svg        favicon、配图
posts/*.html        文章，每篇一个文件
```

## 商店页怎么加商品

打开 `assets/shop.js`，最上面 `PRODUCTS` 里照样子加一段：

```js
{
  title: "作品名字",
  by: "Gus",
  price: "¥ 59",
  image: "assets/prints/你的图.png",
  link: "在这里粘贴微信小店的商品链接"
},
```

注意两点：

1. `link` 填你在**微信小店**里点"分享 / 复制链接"拿到的地址。
   手机微信里点卡片会直接拉起小店；**电脑浏览器可能打不开**（很多小店链接是小程序），
   所以页面顶部留了二维码位——把你的店铺二维码存成 `assets/wechat-qr.png` 即可。
2. 微信内点击外部链接可能受"业务域名"限制，如果点击没反应，
   去微信小店后台把 `gusishuo.github.io` 加进可信域名，或干脆只用二维码。

## 版权

内容采用 MIT 协议，见 `LICENSE`。
