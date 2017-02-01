// river.js


// this is probably the most super ugliest est way to do this...

$('#clear_water1').hover(function () {
	$('#clear_water2').addClass('shrink_img');
	$('#clear_water3').addClass('shrink_img');
	$('#clear_water1').addClass('expand_img');
}, function () {
	$('#clear_water2').removeClass('shrink_img');
	$('#clear_water3').removeClass('shrink_img');
	$('#clear_water1').removeClass('expand_img');
});
$('#clear_water2').hover(function () {
	$('#clear_water1').addClass('shrink_img');
	$('#clear_water3').addClass('shrink_img');
	$('#clear_water2').addClass('expand_img');
}, function () {
	$('#clear_water1').removeClass('shrink_img');
	$('#clear_water3').removeClass('shrink_img');
	$('#clear_water2').removeClass('expand_img');
});
$('#clear_water3').hover(function () {
	$('#clear_water1').addClass('shrink_img');
	$('#clear_water2').addClass('shrink_img');
	$('#clear_water3').addClass('expand_img');
}, function () {
	$('#clear_water1').removeClass('shrink_img');
	$('#clear_water2').removeClass('shrink_img');
	$('#clear_water3').removeClass('expand_img');
});

$('#hospital_hole1').hover(function () {
	$('#hospital_hole2').addClass('shrink_img');
	$('#hospital_hole3').addClass('shrink_img');
	$('#hospital_hole1').addClass('expand_img');
}, function () {
	$('#hospital_hole2').removeClass('shrink_img');
	$('#hospital_hole3').removeClass('shrink_img');
	$('#hospital_hole1').removeClass('expand_img');
});
$('#hospital_hole2').hover(function () {
	$('#hospital_hole1').addClass('shrink_img');
	$('#hospital_hole3').addClass('shrink_img');
	$('#hospital_hole2').addClass('expand_img');
}, function () {
	$('#hospital_hole1').removeClass('shrink_img');
	$('#hospital_hole3').removeClass('shrink_img');
	$('#hospital_hole2').removeClass('expand_img');
});
$('#hospital_hole3').hover(function () {
	$('#hospital_hole1').addClass('shrink_img');
	$('#hospital_hole2').addClass('shrink_img');
	$('#hospital_hole3').addClass('expand_img');
}, function () {
	$('#hospital_hole1').removeClass('shrink_img');
	$('#hospital_hole2').removeClass('shrink_img');
	$('#hospital_hole3').removeClass('expand_img');
});

$('#marine_life1').hover(function () {
	$('#marine_life2').addClass('shrink_img');
	$('#marine_life3').addClass('shrink_img');
	$('#marine_life1').addClass('expand_img');
}, function () {
	$('#marine_life2').removeClass('shrink_img');
	$('#marine_life3').removeClass('shrink_img');
	$('#marine_life1').removeClass('expand_img');
});
$('#marine_life2').hover(function () {
	$('#marine_life1').addClass('shrink_img');
	$('#marine_life3').addClass('shrink_img');
	$('#marine_life2').addClass('expand_img');
}, function () {
	$('#marine_life1').removeClass('shrink_img');
	$('#marine_life3').removeClass('shrink_img');
	$('#marine_life2').removeClass('expand_img');
});
$('#marine_life3').hover(function () {
	$('#marine_life1').addClass('shrink_img');
	$('#marine_life2').addClass('shrink_img');
	$('#marine_life3').addClass('expand_img');
}, function () {
	$('#marine_life1').removeClass('shrink_img');
	$('#marine_life2').removeClass('shrink_img');
	$('#marine_life3').removeClass('expand_img');
});

$('#wwsp1').hover(function () {
	$('#wwsp2').addClass('shrink_img');
	$('#wwsp3').addClass('shrink_img');
	$('#wwsp1').addClass('expand_img');
}, function () {
	$('#wwsp2').removeClass('shrink_img');
	$('#wwsp3').removeClass('shrink_img');
	$('#wwsp1').removeClass('expand_img');
});
$('#wwsp2').hover(function () {
	$('#wwsp1').addClass('shrink_img');
	$('#wwsp3').addClass('shrink_img');
	$('#wwsp2').addClass('expand_img');
}, function () {
	$('#wwsp1').removeClass('shrink_img');
	$('#wwsp3').removeClass('shrink_img');
	$('#wwsp2').removeClass('expand_img');
});
$('#wwsp3').hover(function () {
	$('#wwsp1').addClass('shrink_img');
	$('#wwsp2').addClass('shrink_img');
	$('#wwsp3').addClass('expand_img');
}, function () {
	$('#wwsp1').removeClass('shrink_img');
	$('#wwsp2').removeClass('shrink_img');
	$('#wwsp3').removeClass('expand_img');
});