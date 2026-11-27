// clock.js
function startUtcClock() {
    const timeEl = document.getElementById('header_time');
    if (!timeEl) return;

    function updateTime() {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        timeEl.textContent = `${hours}:${minutes}Z`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}
