/* =========================================================
   商品清单 · 加一个印花 = 在下面 PRODUCTS 里照样子加一段
   =========================================================
   title : 作品名称（显示在画下面）
   by    : 作者署名
   price : 价格，随你怎么写，比如 "¥ 59" 或 "¥ 59 ¥ 79"
   image : 图片路径，放在 assets/prints/ 里，写相对路径
   link  : 微信小店的商品链接（在小店里点"分享"复制过来）
           手机微信里点卡片会直接拉起小店；
           电脑浏览器可能打不开，所以页面顶部放了二维码。
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
    link: "#"
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

function render() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((p, i) => `
    <li class="pcard">
      <a href="${p.link}" target="_blank" rel="noopener">
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
          <a class="pbtn" href="${p.link}" target="_blank" rel="noopener"
             aria-label="购买 ${p.title}">+</a>
        </div>
      </div>
    </li>`).join("");
}

document.addEventListener("click", (e) => {
  const b = e.target.closest(".heart");
  if (!b) return;
  const i = b.dataset.i;
  liked.has(i) ? liked.delete(i) : liked.add(i);
  render();
});

render();
