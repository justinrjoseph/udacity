$(function () {
	$('#menu').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.nav').toggleClass('open')
	});
});