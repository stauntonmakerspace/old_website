/*!
 * Modified from Meetup Badge Java Script
 * taken from http://www.meetup.com/meetup_api/foundry/#meetup-group-stats
 */

var $queries = {
    events: function() { return "http://api.meetup.com/2/events?group_urlname=Staunton-Makerspace&page=1&sig_id=12706655&sig=0e587e1c278f48e31076e865ec89bbf13f231cd3&callback=?" },
    groups: function() { return "http://api.meetup.com/2/groups?group_urlname=Staunton-Makerspace&sig_id=12706655&sig=8c29e154099c1a562d6fea7649e4f9d95ff900ae&callback=?" }
  };
  
  var sms_meetup = {
     with_jquery: function(block) {
        block(jQuery, document.body);
     }
  };

  sms_meetup.with_jquery(function($, ctx) {
	var	group = '',
	months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
	addLink = function(content, link) {
		return '<a target="_top" href="' + link + '">' + content + '</a>';
	    },
    addImage = function(src, alt) {
    	return src == "" ? '' : '<img src="'+src+'" width="'+($parameters.photo_width)+'" alt="'+alt+'"/>';
        },
    addLeadingZero = function( num ) {
		return (num < 10) ? ('0' + num) : num;
		},
	getFormattedDate = function( millis ) {
		var date = new Date( millis );
		return months[date.getMonth()] + ' ' + addLeadingZero( date.getDate() ) + ', ' + date.getFullYear().toString();
		},
	getFormattedTime = function( millis ) {
		var	time = new Date( millis ),
		hours = time.getHours(),
		min = time.getMinutes(),
		ampm = (hours > 11) ? 'PM' : 'AM';
		min = (min < 10) ? ('0' + min) : min;
		hours = (hours == 0) ? 1 : hours;
		hours = (hours > 12) ? hours-12 : hours;
		return hours + ':' + min + ' ' + ampm;
		}
					
	/* Requesting JSON for the group */
	$.getJSON($queries.groups(), function(data) {
	    var group = data.results[0];
		console.log(group);
	    $( ".meetup-group" ).append(
	    	'<h3>We are ' + group.members + " " + group.who + '</h3>',    	
	    	'<h2><a href="http://www.meetup.com/Staunton-Makerspace/">Join us !</a></h2>'
            );

		/* Requesting JSON for events */
	      	$.getJSON($queries.events(), function(data) {
	      	var event = data.results[0];
	      	console.log(event);
			if (data.status && data.status.match(/^200/) == null) {
	        	alert(data.status + ": " + data.details);
	        	} else {
	            	var venue = event.venue;
     						var city;
                    			if (!venue || !venue.city) {
                        			city = group.city;
                    				} else {
                        				city = venue.city;
                    					}
                    		var state_country;
                    			if (!venue || !venue.state) {
                        			if (group.state == "") {
                            			state_country = group.country.toUpperCase();
                        				} else {
                            				state_country = group.state;
                        					}
                    				} else {
                        				state_country = venue.state;
                    					}
                    		var venue_addr;
                    			if (venue) {
                        			if (venue.name !== undefined) {
                            			venue_addr = venue.name  + " - ";
                        				} else if (venue.address_1 !== undefined) {
                            			venue_addr = venue.address_1 + " - ";
                        				} else {
                            				venue_addr = "";
                        					}
                    				} else {
                       					venue_addr = "";
                    					}
                 		/* define location as all the location data together*/
						var location = venue_addr + city + ", " + state_country;
                    
						/* Next event */
            			$( ".meetup-event" ).append(
            				'<h5>' + getFormattedDate(event.time) + ' at ' + getFormattedTime(event.time) + '</h5>',
            				location +
	 						'<p>' + event.description + '</p>',
            				addLink("More information" ,event.event_url)
            				);
			}
		});
	});
});
