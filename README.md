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

## 目录

```
index.html          首页（站名 + 文章列表）
about.html          关于
archive.html        归档（按年份）
404.html            自定义 404
feed.xml            RSS
robots.txt          给搜索引擎看的
sitemap.xml         站点地图
assets/site.css     全部样式，改外观只动这一个文件
assets/*.svg        图片与 favicon
posts/*.html        文章，每篇一个文件
```

## 版权

内容采用 MIT 协议，见 `LICENSE`。
