// ヘッダー読み込み
fetch('../html/header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('common-header').innerHTML = html;
        
        startUtcClock();
    });