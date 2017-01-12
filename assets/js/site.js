$("#main").on("click", function(){
	$("#portfolio, #contact").addClass("grey");
	$("#main").removeClass("grey");
	$("#mainList").removeClass("hidden");
	$("#portfolioList, #contactList").addClass("hidden");
});

$("#portfolio").on("click", function(){
	$("#main, #contact").addClass("grey");
	$("#portfolio").removeClass("grey");
	$("#mainList, #contactList").addClass("hidden");
	$("#portfolioList").removeClass("hidden");
});

$("#contact").on("click", function(){
	$("#main, #portfolio").addClass("grey");
	$("#contact").removeClass("grey");
	$("#mainList, #portfolioList").addClass("hidden");
	$("#contactList").removeClass("hidden");
});