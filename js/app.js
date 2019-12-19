//TAMAGOTCHI GAME PROJECT


//TAMAGOTCHI CLASS

//create a Tamagotchi class to be applied to each new Tamagotchi 
class Tamagotchi {
	constructor(name, age, hunger, sleepiness, boredom) {
		this.name = name;
		this.age = age;
		this.hunger = hunger; //1-10 scale
		this.sleepiness = sleepiness;//1-10 scale
		this.boredom = boredom;
	}
}

//GAME OBJECT
const game = {
	createTamagotchi() {
		const buddy = new Tamagotchi();

	}
}


//EVENT LISTENERS

//listen for form (name) submissions
$('#name-input-form').on('submit', (event) =>{
	//need to prevent default
	event.preventDefault();
	const $nameInput = $('#name-input').val(); // getter/setter input
	console.log($nameInput);

	const $h1 = $('<h1></h1>');
	$h1.text($nameInput);
	$(document.body).append($h1);
	$('#name-input-form').hide();
})



game.createTamagotchi();




