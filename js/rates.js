//rates.js


/*-----------------------------------------------------------------------------*/
/* Joseph Code */

//responsive styling of page
$(".service_examples").each(function () {
	"use strict";
	var divWidth = $(this).width();
	$(this).css("margin", function () {
		"use strict";
		return "0 " + ((1200 - divWidth) / 2) + "px";
	});
});


//functionality of elements on page
$("select").on("change", function () {
	"use strict";
	var sectionChar = this.value.substring(0, 1),
		selectedValue = this.value.substring(1),
		section;

	if (sectionChar === "T") {
		section = "tours";
	} else if (sectionChar === "S") {
		section = "special";
	}
	var exampleId = "#" + section + "_" + selectedValue,
		options =  "#" + section + "_dropdown option"

	$(options).each(function () {
		"use strict";
		var nonSelectValue = this.value.substring(1);
		if (nonSelectValue !== selectedValue) {
			var nonSelectId = "#" + section + "_" + nonSelectValue;
			$(nonSelectId).css("display", "none");
		}
	});
	$(exampleId).css("display", "block");
});

$(".example").click(function () {
	if ($(this).children("p").css("display") === "none") {
		$(this).children("p").css("display", "block");
		$(this).children("h3").css("display", "none");
		$(this).children("img").css("opacity", 0.7);
	} else {
		$(this).children("p").css("display", "none");
		$(this).children("h3").css("display", "block");
		$(this).hover(function () {
			$(this).children("img").css("opacity", 0.7);
		},
		function () {
			$(this).children("img").css("opacity", "initial");
		});
	}
});





// var weekiWacheeCoordinates = [28.5156, -82.5729];
var weekiWacheeCoordinates = [28.526, -82.615];
// var mymap = L.map('services_overview_visualization').setView(weekiWacheeCoordinates, 14);

function getMapboxApiKey() {
    "use strict";
    $.ajax({
        type: "GET",
        url: "http://localhost:8080",
        dataType: "text",
        crossDomain: true,
        success: function (data) {
            L.mapbox.accessToken = data;
            L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=' + data, {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                accessToken: data
            }).addTo(mymap);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
// getMapboxApiKey();

function plotPoints() {
	var wwKayakingMarker = L.marker([28.529652, -82.5898919]).addTo(mymap);
	wwKayakingMarker.bindPopup("Weeki Wachee Kayaking");
	var hospitalHoleMarker = L.marker([28.530534, -82.623217]).addTo(mymap);
	hospitalHoleMarker.bindPopup("Hospital Hole");
	var wwStateParkMarker = L.marker([28.517092, -82.574626]).addTo(mymap);
	wwStateParkMarker.bindPopup("Weeki Wachee<br>State Park");
	var wwChristianCamp = L.marker([28.534618, -82.617414]).addTo(mymap);
	wwChristianCamp.bindPopup("Weeki Wachee<br>Christian Camp");
	var tailGaters = L.marker([28.529066, -82.5893509]).addTo(mymap);
	tailGaters.bindPopup("Tail Gaters");
}
/* Joseph Code END */
/*-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------*/
/* Ben Code */

/* Ben Code END */
/*-----------------------------------------------------------------------------*/
