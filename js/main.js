lightGallery(document.getElementById('lightgallery'));

$(document).ready(function () {
	if ($("#back-to-top").length) {
		var scrollTrigger = 500, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$("#back-to-top").addClass("show");
				} else {
					$("#back-to-top").removeClass("show");
				}
			};
		backToTop();
		$(window).on("scroll", function () {
			backToTop();
		});
		$("#back-to-top").on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		});
	}
});

//function loader() {
//	myVar = setTimeout(showPage, 800);
//}
//
//function showPage() {
//	document.getElementById("loader").style.display = "none";
//	document.body.style.display = "block";
//}

$(document).ready(function () {
	$(".carousel").carousel({
		interval: 5000,
		pause: 'false'
	});
});

//$(document).ready(function () {
//	var width = $("#item-1").width();
//	$("#btn-left").click(function () {
//		var scrollPosition = $("#products-div").scrollLeft();
//		var scroll = scrollPosition - width;
//		$("#products-div").animate({
//			scrollLeft: scroll
//		}, 800);
//		if (scrollPosition === 0) {
//			$("#btn-left").prop("disabled", true);
//		} else {
//			$("#btn-right").prop("disabled", false);
//		};
//	});
//	$("#btn-right").click(function () {
//		$("#btn-left").prop("disabled", false);
//		var scrollPosition = $("#products-div").scrollLeft();
//		var scroll = scrollPosition + width;
//		$("#products-div").animate({
//			scrollLeft: scroll
//		}, 800);
//		var widthScroll = $("#products-div").prop("scrollWidth") - $("#products-div").width();;
//		if (scroll >= widthScroll) {
//			$("#btn-right").prop("disabled", true);
//		};
//	});
//});

//$(document).ready(function () {
//	$(".dropbtn").click(function () {
//		var header = $("header").outerHeight();
//		var href = $(this).attr('href');
//		$('html, body').animate({
//			scrollTop: $(href).offset().top - header
//		}, 1000);
//	});
//	$(".topBar li a").click(function () {
//		$(".topBar").removeClass("topBar-show");
//		$("#topBar").removeClass("topBar-height");
//		$(".hamburger.hamburger--elastic-r").removeClass("is-active");
//		$("body").css("overflow", "auto");
//		var href = $(this).attr('href');
//		$('html, body').animate({
//			scrollTop: $(href).offset().top - 20
//		}, 1000);
//	});
//});

$(document).ready(function () {
	$(".hamburger.hamburger--elastic-r").click(function () {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$("body").css("overflow", "auto");
			$("#topBar").css("overflow", "unset");
			$("#topBar").removeClass("topBar-height");
			$("#topBar .topBar").removeClass("topBar-show");
		} else {
			$(this).addClass("is-active");
			$("body").css("overflow", "hidden");
			$("#topBar").addClass("topBar-height");
			$("#topBar").css("overflow", "auto");
			$("#topBar .topBar").addClass("topBar-show");
		}
	});
});

//$(document).ready(function () {
//	$("#language").click(function () {
//		$(".dropdown-content-topBar").toggle();
//	});
//	$("body").click(function (e) {
//		if ($(e.target).closest("#language").length != 0) return false;
//		$(".dropdown-content-topBar").hide();
//	});
//});

$(document).ready(function () {
	$(".btn-rent").click(function () {
		$(this).addClass("active");
		$(".btn-sell").removeClass("active");
	});
	$(".btn-sell").click(function () {
		$(this).addClass("active");
		$(".btn-rent").removeClass("active");
	});
});

$('body').scrollspy({
	target: '#nav-bar'
});

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
	$('#slideshow > div:first')
		.fadeOut(3000)
		.next()
		.fadeIn(3000)
		.end()
		.appendTo('#slideshow');
}, 9000);

$(document).ready(function () {
	$(".login").click(function () {
		$("#login-div").toggle();
	});
});
