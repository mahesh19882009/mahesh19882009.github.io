// Ready function
$(document).ready(function(e) {	
	$('.sidebartoggleBtn').click(function(){
		$('.sidePanel').toggleClass('collapsed');
		$('.rightCntr').toggleClass('expend');
		$(this).toggleClass('active');
	});
});


// Load function
$(window).load(function(){

//    $(".mCustomScrollbar").mCustomScrollbar();

});

// Load and Scroll function
$(window).bind("load scroll", function() {
/*    var window_offset = $(window).scrollTop();
    $('.headerArea nav.navbar').addClass('navbar-fixed-top');
*/});

// Load and Resize function
$(window).bind("load resize", function() {
    sizingheight();
});


// Height Calculation
function sizingheight(){

}


