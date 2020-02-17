const cards = [ 
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
}, 
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
}, 
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
}, 
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

let cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0].rank === cardsInPlay[1].rank)
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

function flipCard() {
	let cardId = this.getAttribute('data-id');
	if(this.getAttribute('src') !== 'images/back.png')
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
}

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.querySelectorAll('.playingCard')[i];
		console.log("Card " + i + " reset.");
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.addEventListener('click', flipCard);
		cardsInPlay = [];
		document.getElementById('game-state').textContent = 'Go again! Pick your first card.';
	}
}

createBoard();