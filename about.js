console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted!");
}

function complimentUser(evt) {
	alert("You're THE best!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const image = document.querySelector("img");
image.addEventListener("mouseover", complimentUser);