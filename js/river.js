// river.js

/*-----------------------------------------------------------------------------*/
/* Joseph Code */
// implementation of the 'zoom effect' for the pictures
// there should be a more elegant way to do this

function hoverEffectRiverImgs(imgId) {
	"use strict";
	var prefix = imgId.substr(0, imgId.length - 1),
		number = imgId.substr(imgId.length - 1),
		numbers = ["1", "2", "3"],
		notNumber = ["0", "0"], //initialize array with "0"s to prevent null pointers
		j = 0;
	for (var i in numbers) { //gather the other two numbers that don't === number
		if (number != numbers[i]) {
			notNumber[j] = numbers[i];
			j++;
		}
	}
	$(imgId).hover(function () { //run hover function
		$(prefix + notNumber[0]).addClass('shrink_img');
		$(prefix + notNumber[1]).addClass('shrink_img');
		$(imgId).addClass('expand_img');
	}, function () {
		$(prefix + notNumber[0]).removeClass('shrink_img');
		$(prefix + notNumber[1]).removeClass('shrink_img');
		$(imgId).removeClass('expand_img');
	});
}
//call hover effect for all river section images
hoverEffectRiverImgs("#clear_water_img1");
hoverEffectRiverImgs("#clear_water_img2");
hoverEffectRiverImgs("#clear_water_img3");

hoverEffectRiverImgs("#hospital_hole_img1");
hoverEffectRiverImgs("#hospital_hole_img2");
hoverEffectRiverImgs("#hospital_hole_img3");

hoverEffectRiverImgs("#marine_life_img1");
hoverEffectRiverImgs("#marine_life_img2");
hoverEffectRiverImgs("#marine_life_img3");

hoverEffectRiverImgs("#wwsp_img1");
hoverEffectRiverImgs("#wwsp_img2");
hoverEffectRiverImgs("#wwsp_img3");
/* Joseph Code END */
/*-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------*/
/* Ben Code */

/* Ben Code END */
/*-----------------------------------------------------------------------------*/
