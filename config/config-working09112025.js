/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
	
		
	
	
	
	
	
	 {
      module: 'MMM-pages',
      config: {
        timings: {
          default: 10000,
          2: 20000 
        },
	
	
	
	     modules: [
                ["clock-analog","day-family","cal-family","compliments","weather"]   ,             // page 0
                
                ["kyle-cal", "compliments", "cal-fireparie","clock-analog", "weather"], // page 1
                
		["adrian-cal", "compliments", "cal-middle","clock-analog", "weather"], // page 2
    
		
            ],
	
	
	
	        
      }
    },
	

	
	
	
	
	
	
	
	
		
	{	
		
		module: "clock",
	position: "top_center",
	classes: 'clock-analog',

	},
		
		

		
		
		
		
		
		{
			module: "calendar",
			header: "Family",
			position: "top_left",
			classes: "all-calendar",
			config: {
				  broadcastPastEvents: true, // <= IMPORTANT to see past events
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: " https://calendar.google.com/calendar/ical/family04134277048364242440%40group.calendar.google.com/private-4a9d69ed7d4e0d027f2de2ffae39489a/basic.ics",
						name: "family"

					},
				
				{
				fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: " https://www.fortosage.net/calendar/calendar_351_gmt.ics",
						name: "fireParie"

					},
				
								{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: " https://www.fortosage.net/calendar/calendar_359_gmt.ics",
						name: "firemiddle"

					}
				
				
				]
			}
		},









{
  module: "MMM-CalendarExt3",
  position: "bottom_bar",
  title: "Family Calendar",
  classes: "cal-family",
  config: {
	   broadcastPastEvents: true, // <= IMPORTANT to see past events
    mode: "month",
    instanceId: "basicCalendar",
    showMore: true,
	refreshInterval: "30500", // removed a 0
    locale: 'en-US',
    maxEventLines: 5,
    firstDayOfWeek: 0,
	fontSize: "28px",
    weeksInView: 4,
    calendarSet: ['family']
  
  }
},



{
  module: "MMM-CalendarExt3",
  position: "bottom_bar",
  title: "Family Calendar",
  classes: "cal-fireparie",
  config: {
	   broadcastPastEvents: true, // <= IMPORTANT to see past events
    mode: "month",
    instanceId: "basicCalendar",
    showMore: true,
	refreshInterval: "30500", // removed a 0
    locale: 'en-US',
    maxEventLines: 5,
    firstDayOfWeek: 0,
	fontSize: "28px",
    weeksInView: 4,
    calendarSet: ['fireParie']
  
  }
},




{
  module: "MMM-CalendarExt3",
  position: "bottom_bar",
  title: "Family Calendar",
  classes: "cal-middle",
  config: {
	   broadcastPastEvents: true, // <= IMPORTANT to see past events
    mode: "month",
    instanceId: "basicCalendar",
    showMore: true,
	refreshInterval: "30500", // removed a 0
    locale: 'en-US',
    maxEventLines: 5,
    firstDayOfWeek: 0,
	fontSize: "28px",
    weeksInView: 4,
    calendarSet: ['firemiddle']
  
  }
},



		
		{
			module: "calendar",
			header: "Family",
			position: "top_left",
			classes: "day-family",
			config: {
				  broadcastPastEvents: true, // <= IMPORTANT to see past events
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: " https://calendar.google.com/calendar/ical/family04134277048364242440%40group.calendar.google.com/private-4a9d69ed7d4e0d027f2de2ffae39489a/basic.ics",
						name: "family"

					}
			
				
				
				]
			}
		},





		{
			module: "calendar",
			header: "Adrian Calendar",
			position: "top_left",
			classes: "adrian-cal",
			config: {
				  broadcastPastEvents: true, // <= IMPORTANT to see past events
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url:  " https://www.fortosage.net/calendar/calendar_359_gmt.ics",
						name: "adrian-cal"

					}
			
				
				
				]
			}
		},




		{
			module: "calendar",
			header: "Kyle Calendar",
			position: "top_left",
			classes: "kyle-cal",
			config: {
				  broadcastPastEvents: true, // <= IMPORTANT to see past events
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: " https://www.fortosage.net/calendar/calendar_351_gmt.ics",
						name: "kyle-cal"

					}
			
				
				
				]
			}
		},









		{
			module: "compliments",
			position: "top_bar"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 39.1286407,
				lon: -94.3467165
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 39.1286407,
				lon: -94.3467165
			}
		},
		
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
