// 获取按钮和内容区域的引用
const openStoreButton = document.getElementById('openStoreButton');
const cashCountButton = document.getElementById('cashCountButton');
const content = document.getElementById('content');

// 页面切换函数
function showOpenStorePage() {
    content.innerHTML = '<h2>開店金額 / Anfangsbestand </h2>';
}

function showCashCountPage() {
    content.innerHTML = '<h2>Kasse 現金清點 / Zählprotokoll</h2>';
}

// 初始显示开店页面
showOpenStorePage();

// 按钮点击事件监听
openStoreButton.addEventListener('click', showOpenStorePage);
cashCountButton.addEventListener('click', showCashCountPage);
