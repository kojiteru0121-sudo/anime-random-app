const items = [
  "葬送のフリーレン",
  "呪術廻戦",
  "進撃の巨人",
  "鬼滅の刃",
  "SPY×FAMILY",
  "推しの子",
  "ぼっち・ざ・ろっく！",
  "チェンソーマン",
  "薬屋のひとりごと",
  "ブルーロック",
  "Dr.STONE",
  "Re:ゼロから始める異世界生活",
  "東京リベンジャーズ",
  "僕のヒーローアカデミア",
  "転生したらスライムだった件"
];

function showRandom() {
  const result = document.getElementById("result");

  // 演出①：考え中表示
  result.textContent = "考え中...";
  result.style.opacity = 0.5;

  // 演出②：少し待ってから結果表示
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * items.length);
    result.textContent = "👉 今日見るアニメ： " + items[randomIndex];
    result.style.opacity = 1;
  }, 800);
}
