/* add exact values from drop-down menu and attribute link to google calendar */ 
var calendars = {
	blank: "",
	events: "",
	makerbot: "https://www.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=jd5136ciu2tpt5cchpou5f09vk%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FNew_York"
	};
	
function showCalendar() {
    var choice = document.getElementById("calendarChoice").value;
	/* just debugging */
	console.log(choice);
	console.log(calendars[choice]);
	/* if there was a previous calendar selected first, clear it */
	document.getElementById("googleCalendar").innerHTML = "";
	$( '#googleCalendar' ).append(
		'<iframe src="' + calendars[choice] + '" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>');
};
