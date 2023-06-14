// JavaScript代碼可用於控制頁面的顯示/隱藏
function showPage(pageId) {
    // 先將所有頁面隱藏
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
    
    // 顯示特定頁面
    document.getElementById(pageId).style.display = 'block';
  }