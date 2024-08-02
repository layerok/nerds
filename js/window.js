var writeUs = document.getElementById('write-us');
var formWriteUs = document.getElementById('window');
var close = document.getElementById('close');
var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');

function popUp(){
	formWriteUs.className ="write-us";
}
function popDown(){
	formWriteUs.className ="notActive";
}

close.onclick = popDown;
close1.onclick = popDown;
close2.onclick = popDown;
writeUs.onclick = popUp;