//LOADING JS
	let timerID = null
	function countDown(){
		var container=document.getElementById('loading');
		if(!container) return
		container.style.display="none";
		clearInterval(timerID);
	}
	function init(){
		timerID=setInterval(countDown,1500);
	}
	window.onload=init;


//hamburger jQuery

$(document).ready(function () {
	$('#nav-icon1').click(function () {
		$(this).toggleClass('open');
	});
});

// watches onScroll
$(document).ready(function () {
	$('.scrollimation ').waypoint(function () {
		$(this).addClass('in');
	}, { offset: '90%' });
});
