$(document).ready ( function(){
	$("h1").click(function() {
		$("h2").animate( {
			"font-size":"3em",
			"width": "35%",
			"left": "+=100px"
		}, 1000);
	});
});
