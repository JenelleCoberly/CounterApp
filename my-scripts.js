//Create a count

if(localStorage.getItem("count") == null){
	localStorage.setItem("count",0)
}

//Update the count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update()

//Add button will add one to count

function plusOne() {
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
	update()
}

//Reset button will reset the counter to zero
function reset() {
	If(confirm("Are you sure you want to reset?")) {
		localStorage.setItem("count",0);
		update();

	}
}