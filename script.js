var myFirstArray = ['Hello', 'world', 'goodbye', 'world'];

for (i = 0; i < myFirstArray.length; i++) {
	if (myFirstArray[i] == 'world') {
		console.log('They match!');
	}
}
var changeIt = document.getElementById('change-it');





var myFirstFunction = function() {
	console.log(changeIt);
	changeIt.textContent = "This thing is not on at all!!!!!!!!!";
	changeIt.style = "background-color: blue; padding: 2rem;";
}

changeIt.addEventListener('mouseover', myFirstFunction);