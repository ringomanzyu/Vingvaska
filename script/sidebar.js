// サイドバー読み込み
fetch('../html/sidebar.html')
    .then(res => res.text())
    .then(html => {
        const sidebar = document.getElementById('common-sidebar');
        sidebar.innerHTML = html;

        const currentFile = location.pathname.split('/').pop() || 'dashboard.html';
        sidebar.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === currentFile) {
                link.classList.add('is-active');
            }
        });
    });
