if (navigator.userAgent.match(/Mobile/)) {
document.getElementById('carousel2').src = "images/carousel2-mobile.png";
}


var checkboxCount;

function CheckboxClick(cb){
	var answerscountid = document.getElementById("answerscountid");
	var answerscounttxt = document.getElementById("answerscounttxt")
	console.log("Clicked, new value = " + cb.checked);
	if(cb.checked){
		checkboxCount++;
	} else{
		checkboxCount--;
	}
	answerscountid.innerHTML = checkboxCount;
	if(checkboxCount == 0){
		answerscounttxt.className = "font-weight-bold text-success";
	} else if(checkboxCount == 1 || checkboxCount == 2){
		answerscounttxt.className = "font-weight-bold text-orange";
	} else{
		answerscounttxt.className = "font-weight-bold text-danger";
	}
}


$( document ).ready(function() {
    console.log( "ready!" );
    checkboxCount = 0;

});

AOS.init({
  duration: 2000,
})

