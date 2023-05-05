const list = [
    "ballot",
    "soil",
    "legislation",
    "valley",
    "country",
    "nail",
    "piano",
    "speech",
    "efflux",
    "reason",
    "alcohol",
    "stable",
    "slice",
    "situation",
    "profession",
    "restaurant",
    "pocket",
    "satisfaction",
    "condition",
    "comfortable"
];

class Model{
    constructor(words){
        this.words = words;
        this.maxChance = 10;
        this.wrongGuess = 0;
        this.hiddenIndex = [];
        this.currentWord = '';
        this.hiddenWord = '';
    }
    //start new game
    newGame(){
        //reset
        this.wrongGuess = 0;
        this.currentWord = this.words[Math.floor(Math.random() * this.words.length)]; //choose random word
        this.hiddenIndex = this.getHiddenindex();
        this.hiddenWord = this.getHiddenLetter();
    }

    guess(letter){
        if(this.hiddenIndex.includes(letter)){
            for(let i = 0; i<this.currentWord.length; i++){
                if(this.currentWord[i]===letter){
                    this.hiddenWord = this.hiddenWord.substring(0,i)+ 
                    letter + this.hiddenWord.substring(i+1);
    
                }
            }
            return true;
        }
        this.wrongGuess++;
        return false;
    }

    getHiddenindex(){
        const hideNum = Math.floor(Math.random()*(this.currentWord.length + 1))
        const index = new Set();
        while(index.size < hideNum) {
            const index = Math.floor(Math.random()*this.currentWord.length);
            index.add(index);
        }
        return Array.from(index);
    }

    getHiddenLetter(){
        let hiddenWord = '';
        for(let i = 0; i<this.currentWord.length; i++){
            if(this.hiddenIndex.includes(i)){
                hiddenWord += '_';
            }else{
                hiddenWord+=this.currentWord[i];
            }
        }
        return hiddenWord;
    }

    gameOver(){
        return this.wrongGuess >= this.maxChance;
    }

    winGame(){
        return this.currentWord === this.hiddenWord;
    }

    getChanceRemain(){
        return this.maxChance - this.wrongGuess;
    }

}

class View{
    constructor(){
        this.input = document.querySelector('.letter-input');
        this.guessRatio = document.querySelector('.guess-ratio');
        this.newGameBtn = document.querySelector('.new-game-button');
        this.newGameBtn = addEventListener('click', this.newGameClick.bind(this));
        this.input.addEventListener('keypress', this.letterInput.bind(this));
    }

    newGameClick(){
        this.newGame && this.newGame();
    }
    letterInput(event){
        if(event.key === 'Enter'){
            const letterCase = this.input.value.toLowerCase();
            this.letterInput && this.letterInput(letterCase);
        }
    }
    updateRatio(wrongGuess, maxChance){
        this.guessRatio.textContent = `${wrongGuess} / ${maxChance}`;
    }

    updateHiddenWord(hiddenWord){
        const main = document.querySelector('.main');
        main.innerHTML = '';
        for(let i = 0; i < hiddenWord.lenght; i++){
            const letterEle = document.createElement('span');
            letterEle.textContent = hiddenWord[i];
            main.appendChild(letterEle);
        }
    }

    showAlert(message){
        alert(message);
    }
}

class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.view.on;
    }
}