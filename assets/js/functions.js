$(window).load(function() {
	smoothScroll(1000);
	workBelt();
	workLoad();
	stickyHeader();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 70
			}, duration);
		}
	});
}

function workBelt() {
	$('.sites').click(function() {
		$('.work_main-div').css('left', '-100%');
		$('.work_content-main').show();
	});
	$('.work-return').click(function() {
		$('.work_main-div').css('left', '0%');
		$('.work_content-main').hide(800);
	});

}

function workLoad() {
	$.ajaxSetup({ cache: true });

	$('.block').click(function(){

		var $this = $(this),
			newTitle = $this.find('h3.h4').text(),
			newFolder = $this.data('folder'),
			newLink = $this.data('link'),
			urlPic = '/work/' + newFolder + '/img.html',
			urlCopy = '/work/' + newFolder + '/copy.html';

		$('.work_content-pic').load(urlPic);
		$('.work_content-copy').load(urlCopy);
		$('.button').attr("href", newLink);
		$('.work_content-title').text(newTitle);
	});
}

function stickyHeader() {
	var stickyTop = jQuery('header').height() + 100;

	jQuery(window).scroll(function(){
		if(jQuery(window).scrollTop() >= stickyTop){
			jQuery('header nav').addClass('sticky');
		}else{
			jQuery('header nav').removeClass('sticky');
		}
	});
}
