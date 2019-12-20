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
	hunger: 0,
	boredom: 0,
	sleepiness: 0,
	age: 0,
	//create a timer function to keep track of the time
	timer() {
		const timer = setInterval(() => {
			this.hunger+= 2;
			this.boredom++;
			this.sleepiness++;
			this.age += 2;

			const $currentSleep = $('#current-sleep').text(this.sleepiness);
			const $currentBoredom = $('#current-boredom').text(this.boredom);
			const $currentHunger = $('#current-hunger').text(this.hunger);
			const $currentAge = $('#current-age').text(this.age);


			//if hunger or boredom or sleepiness get to 10 then your buddy dies
			if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10) {
				clearInterval(timer);
				this.buddyDies();
			}
		}, 1000)
		
	},
	createBuddy() {
		//create a new buddy for the user
		const buddy = new Tamagotchi();
		this.startGame();

	},
	feedingBuddy() {
	},
	startGame() {
		this.timer();
	},
	buddyDies() {
		//make it so that whatever name the user has submitted appears
		//when the buddy has died
		const $h1 = $('<h1></h1>');
		$h1.text($('#name-input').val() + ' has died');
		$(document.body).append($h1);
	},
	restartGame() {
		
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
	game.startGame();
	$('#name-input-form').hide();
})

$('#feed').on('click', (event) =>{
	event.preventDefault();

	if(game.hunger >= 3) {
		game.hunger-= 3;
	}
})

$('#sleep').on('click', (event) =>{
	event.preventDefault();

	if(game.sleepiness >= 3) {
		game.sleepiness -= 3;
	}
})

$('#play').on('click', (event) =>{
	event.preventDefault();

	if(game.boredom >= 3) {
		game.boredom -= 3;
	}
})




















