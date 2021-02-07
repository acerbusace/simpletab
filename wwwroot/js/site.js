$(document).ready(function() {
    setDate();

    setInterval(function() {
        setDate();
    }, 1000)
})

function setDate() {
    var date = new Date()
    var hours = date.getHours();
    var period = "AM";
    if (hours > 12) {
        hours -= 11;
        period = "PM";
    }
    else if (hours === 0) {
        hours = 12;
    }

    var stringHours = hours.toLocaleString('default', { minimumIntegerDigits: 2});
    var stringMinutes = date.getMinutes().toLocaleString('default', { minimumIntegerDigits: 2});
    var stringSeconds = date.getSeconds().toLocaleString('default', { minimumIntegerDigits: 2});
    $("#time").text(`${stringHours}:${stringMinutes}:${stringSeconds}`);

    $("#period").text(`${period}`);

    var stringMonth = date.toLocaleString('default', { month: 'long' });
    var stringWeekday = date.toLocaleString('default', { weekday: 'long' });
    var stringDate = date.getDate().toLocaleString('default', { minimumIntegerDigits: 2});
    $("#date").text(`${stringMonth} - ${stringWeekday} ${stringDate}`);
}