/* =========================================================
   商品清单 · 加一个印花 = 在下面 PRODUCTS 里照样子加一段
   =========================================================
   title : 作品名称（显示在画下面）
   by    : 作者署名
   price : 价格，随你怎么写，比如 "¥ 59" 或 "¥ 59 ¥ 79"
   image : 图片路径，放在 assets/prints/ 里，写相对路径
   link  : 商品链接，两种都行：
           ① 微信小店"分享"复制的口令，如 "#微信小店://店名/xxxx"
           ② 普通网址 https://...
           手机微信里点卡片会拉起小店；电脑浏览器打不开，
           所以页面底部放了二维码。
   ========================================================= */

const PRODUCTS = [
  {
    title: "落日与远山",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-01.svg",
    link: "#"
  },
  {
    title: "笑脸（占位）",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-02.svg",
    link: "#"
  },
  {
    title: "夜航星（占位）",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-03.svg",
    link: "#"
  },
  {
    title: "星（占位）",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-04.svg",
    link: "#"
  },
  {
    title: "远山（占位）",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-05.svg",
    link: "#"
  },
  {
    title: "四格（占位）",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-06.svg",
    link: "#"
  },
  {
    title: "山隐",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-07.jpg",
    qr: "assets/prints/qr-shanyin.jpg",
    link: "#微信小店://MOT设计工作室/4Wq2yggJadluRUI"
  },
  {
    title: "山里人",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-08.jpg",
    link: "#"
  },
  {
    title: "有点人情世故",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-09.jpg",
    link: "#"
  },
  {
    title: "晚风",
    by: "Gus",
    price: "¥ 59",
    image: "assets/prints/print-10.jpg",
    link: "#"
  }
];

/* ============ 下面是渲染逻辑，一般不用动 ============ */

const liked = new Set();

/* 链接两种写法都支持：
   - 普通网址（https://...）→ 直接当 <a href> 用
   - 微信小店口令（#微信小店://...，从小店"分享"复制来的）
     → 点的时候用 location.href 拉起，微信里直接进店；
       普通浏览器拉不起来，就靠页面底部二维码兜底
   加一个 qr: "图片路径" → 点卡片或 + 不跳转，
   改为弹出这张商品二维码（手机长按识别下单） */
function isWxLink(link) { return /微信小店:\/\//.test(link); }
function rawLink(link) { return link.replace(/^#+/, ""); }

function render() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((p, i) => {
    const qr = p.qr ? ` data-qr="${p.qr}" data-title="${p.title}"` : "";
    const wx = !p.qr && isWxLink(p.link);
    const href = wx ? "javascript:void(0)" : p.link;
    const dataAttr = wx ? ` data-link="${rawLink(p.link)}"` : "";
    const target = wx ? "" : 'target="_blank" rel="noopener"';
    return `
    <li class="pcard">
      <a href="${href}"${qr}${dataAttr} ${target}>
        <div class="frame"><div class="mat"><img src="${p.image}" alt="${p.title}" loading="lazy"></div></div>
      </a>
      <div class="row">
        <div class="info">
          <h3>${p.title}</h3>
          <p class="by">by ${p.by}</p>
          <p class="price">${p.price}</p>
        </div>
        <div class="pbtns">
          <button class="pbtn heart ${liked.has(i) ? "liked" : ""}"
                  data-i="${i}" aria-label="喜欢 ${p.title}"
                  aria-pressed="${liked.has(i)}">♥</button>
          <a class="pbtn" href="${href}"${qr}${dataAttr} ${target}
             aria-label="购买 ${p.title}">+</a>
        </div>
      </div>
    </li>`;
  }).join("");
}

function openQr(src, title) {
  closeQr();
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `
    <div class="lightbox-card" role="dialog" aria-modal="true" aria-label="${title} 购买二维码">
      <img src="${src}" alt="${title} 微信扫码下单">
      <p>微信扫码下单 · 手机长按识别二维码</p>
    </div>`;
  box.addEventListener("click", closeQr);
  document.body.appendChild(box);
}
function closeQr() {
  const old = document.querySelector(".lightbox");
  if (old) old.remove();
}

document.addEventListener("click", (e) => {
  const qra = e.target.closest("[data-qr]");
  if (qra) {
    e.preventDefault();
    openQr(qra.dataset.qr, qra.dataset.title || "");
    return;
  }
  const wxa = e.target.closest("a[data-link]");
  if (wxa) {
    e.preventDefault();
    window.location.href = wxa.dataset.link;
    return;
  }
  const b = e.target.closest(".heart");
  if (!b) return;
  const i = b.dataset.i;
  liked.has(i) ? liked.delete(i) : liked.add(i);
  render();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeQr();
});

render();
