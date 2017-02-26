
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
  "method": "GET",
  "headers": {
    "x-mashape-key": "QSXfLpT0vymsh4ryclHotYsvlf58p1mtfGajsniaxFZjv7yNUx",
    "content-type": "application/x-www-form-urlencoded",
    "accept": "application/json",
    "cache-control": "no-cache",
    "postman-token": "fff157a0-a2fc-5328-3a93-07e2667f9631"
  }
};


$(document).ready(function(){

	$.ajax(settings).success(function (a) {
	// console.log(a);
	a = JSON.parse(a);
	$(".quote").append( "<p>" + a.quote + "</p>" + "<p class='author'>&mdash; " + a.author + "</p>");
	$('.quote').hide();
	$('.quote').show(1000);
});



});


$(document).ready(function() {
    $(".doRandom").click(function(){
        console.log("q");
		$.ajax(settings).success(function (a) {
		console.log(a);
		a = JSON.parse(a);
		$(".quote").html( "<p>" + a.quote + "</p>" + "<p class='author'>&mdash; " + a.author + "</p>");
		$('.quote').hide();
		$('.quote').show(1000);
		});
    }); 
});

$(document).ready(function(){

	$('.tweet').click(function(a) {
		textToTwt =  $(".quote")[0].innerText;
		console.log(textToTwt);
		var textURL = 'http://twitter.com/home?status=' + encodeURIComponent(textToTwt);
		window.open(textURL, '_blank');	

	});

});