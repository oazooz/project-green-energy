function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDateTime = now.toLocaleDateString('ar-EG', options);
    document.getElementById('datetime').textContent = `التاريخ والوقت الحالي: ${formattedDateTime}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
function goToPage(page) {
    if (page) {
        window.location.href = page;
    }
}