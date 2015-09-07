/* add exact values from drop-down menu and attribute link to google calendar */ 
var calendars = {
        events: "https://www.google.com/calendar/embed?src=03pvma0ukuk1a5gum6escq2d2k%40group.calendar.google.com&ctz=America/New_York",
        equipment: "https://www.google.com/calendar/embed?src=u7v4l84dep9cj42mn39g9q28r4%40group.calendar.google.com&ctz=America/New_York"
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
