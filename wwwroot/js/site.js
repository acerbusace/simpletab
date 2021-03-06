$(document).ready(function() {
    // Set the background image every hour
    setBackgroundImage();
    setInterval(function() {
        setBackgroundImage();
    }, 1000 * 60 * 60)

    // Set the date every second
    setDate();
    setInterval(function() {
        setDate();
    }, 1000)
})

// Set the background image
function setBackgroundImage() {
    // Get random photo from https://picsum.photos/
    if (window.location.search != "?blank") {
        $("html, body").css("background-image", `url("https://picsum.photos/${$(window).width()}/${$(window).height()}/")`);
    }
}

// Set the date
function setDate() {
    var date = new Date()
    var hours = date.getHours();
    var period = "AM";
    if (hours > 12) {
        hours -= 12;
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
    var stringDate = date.getDate().toLocaleString('default', { minimumIntegerDigits: 1 });
    $("#date").text(`${stringWeekday}, ${stringMonth} ${stringDate}`);
}