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

		//create a pause so you are able to pause when sleeping
		this.isPaused = false;
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

				this.hunger++;
				this.boredom++;
				this.sleepiness++;
				this.age += 3;

			const $currentSleep = $('#current-sleep').text(this.sleepiness);
			const $currentBoredom = $('#current-boredom').text(this.boredom);
			const $currentHunger = $('#current-hunger').text(this.hunger);
			const $currentAge = $('#current-age').text(this.age);

			//if hunger or boredom or sleepiness get to 10 then your buddy dies
			if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10) {
				clearInterval(timer);
				this.buddyDies();
			}
		}, 2000)
		
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
	gettingOlder() {
		if(this.$currentAge >= 5) {
			{$('.current-character').attr('src', 'yodadancing.gif')}
		}
	},
	buddyDies() {
		//make it so that whatever name the user has submitted appears
		//when the buddy has died
		const $h1 = $('<h1></h1>');
		$h1.text($('#name-input').val() + ' has died');
		$(document.body).append($h1);

		// const $img = $('<img>');
		// $img.attr('src', 'yodasleeping2.jpg');
		// document.body.appendChild($img);
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

	// const $babyYoda = $('<div></div>');
	// $babyYoda.attr('id', 'babyYoda1')
	// $(document.body).append($babyYoda)
})

//when you click on the feed me button then the tamagatchi's hunger should 
//go down
$('#feed').on('click', (event) =>{
	event.preventDefault();

	game.hunger = 0;

})

//when your tamagatchi goes to sleep then the sleepiness should go down
$('#sleep').on('click', (event) =>{
	event.preventDefault();

	game.sleepiness = 0;

	//screen turns black when you click on the light switch to go to sleep
	$(document.body).css('background-color', 'black');
	//$(document.body).css('background-color', 'LightGreen')

})

//when the tamagatchi wants to play then the boredom should go down
$('#play').on('click', (event) =>{
	event.preventDefault();

	game.boredom = 0;

})




















