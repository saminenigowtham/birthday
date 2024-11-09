

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
    var past = new Date(date);
    // Calculate the difference in milliseconds
    var diff = current - past;

    // Calculate total seconds
    var seconds = Math.floor(diff / 1000);
    
    // Calculate years, months, days, hours, minutes, seconds accurately
    var years = current.getFullYear() - past.getFullYear();
    var months = current.getMonth() - past.getMonth();
    var days = current.getDate() - past.getDate();

    // Adjust for negative days or months
    if (days < 0) {
        months--;
        var lastMonth = new Date(current.getFullYear(), current.getMonth(), 0);
        days += lastMonth.getDate(); // Get the last month's days
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate hours, minutes, and seconds
    var hours = current.getHours() - past.getHours();
    var minutes = current.getMinutes() - past.getMinutes();
    var seconds = current.getSeconds() - past.getSeconds();

    // Adjust for negative hours, minutes, and seconds
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }

    if (hours < 0) {
        days--;
        hours += 24;
    }

    // Format numbers to be two digits
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
	var result = years + " Years <span class=\"digit\">" + 
             months + " Months </span><span class=\"digit\">" + 
             days + " Days </span><span class=\"digit\">" + 
             hours + " Hours </span><span class=\"digit\">" + 
             minutes + " Minutes </span><span class=\"digit\">" + 
             seconds + " Seconds</span>";
	$("#clock").html(result);

	var text = "I JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
