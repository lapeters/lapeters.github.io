$(function() {
	smoothScroll(1000);
	workBelt();
	workLoad();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}


function workBelt() {
	$('.sites').click(function() {
		$('.work-belt').css('left', '-100%');
		$('.content-main').show();
	});
	$('.work-return').click(function() {
		$('.work-belt').css('left', '0%');
		$('.content-main').hide(800);
	});

}

function workLoad() {
	$.ajaxSetup({ cache: false });

	$('.block').click(function(){

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			newLink = $this.data('link'),
			urlPic = '/work/' + newFolder + '/img.html',
			urlCopy = '/work/' + newFolder + '/copy.html';

		$('.pic').load(urlPic);
		$('.copy').load(urlCopy);
		$('.button').attr("href", newLink);
		$('.title').text(newTitle);
	});
} 

