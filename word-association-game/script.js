const MINIMUM_PLAYERS = 2;
const MAXIMUM_PLAYERS = 5;
const WORD_CATEGORIES = ["Fruits", "Vegetables", "Birds", "Fishes", "Animals"];
const fruits = [
    "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Cherry", "Coconut", "Cranberry", "Date",
    "Durian", "Fig", "Grape", "Grapefruit", "Guava", "Honeydew", "Kiwi", "Kumquat", "Lemon", "Lime",
    "Lychee", "Mango", "Melon", "Mulberry", "Nectarine", "Orange", "Papaya", "Peach", "Pear", "Persimmon",
    "Pineapple", "Plum", "Pomegranate", "Raspberry", "Starfruit", "Strawberry", "Tangerine", "Watermelon",
    "Akee", "Almond", "Ambarella", "Amla", "Apricot", "Arhat", "Bael", "Barberry", "Blackcurrant", "Breadfruit",
    "Burahem", "Carambola", "Chayote", "Cherimoya", "Chestnut", "Cloudberry", "Crabapple", "Cupuacu", "Damson",
    "Duku", "Elderberry", "Feijoa", "Gooseberry", "Granadilla", "Guanabana", "Honeyberry", "Jackfruit", "Jambul",
    "Jujube", "Kiwano", "Kokum", "Longan", "Loquat", "Lulo", "Mamoncillo", "Mangaba", "Mangosteen", "Medlar",
    "Nance", "Nannyberry", "Olive", "Pawpaw", "Pepino", "Physalis", "Pitanga", "Pitaya", "Rambutan", "Salak",
    "Salmonberry", "Sapodilla", "Soursop", "Tamarillo", "Tamarind", "Thimbleberry", "Ugni", "Yuzu"
];
const vegetables = [
  "Carrot", "Broccoli", "Spinach", "Tomato", "Cucumber", "Lettuce", "Zucchini", "Radish", "Cabbage", "Onion",
  "Garlic", "Eggplant", "Kale", "Asparagus", "Artichoke", "Mushroom", "Celery", "Beet", "Peas", "Cauliflower",
  "Green Beans", "Turnip", "Pumpkin","Squash", "Okra", "Fennel", "Leek", "Chard", "Rutabaga", "Watercress",
  "Snow Peas", "Parsnip", "Kohlrabi", "Endive", "Arugula", "Radicchio", "Celeriac", "Cress", "Yam", "Jicama",
  "Chives", "Corn", "Rhubarb",
];  
const animals = [
    "Dog", "Cat", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Dolphin", "Penguin", "Kangaroo",
    "Koala", "Gorilla", "Monkey", "Cheetah", "Panda", "Polar Bear", "Grizzly Bear", "Snake", "Crocodile", "Alligator",
    "Hawk", "Eagle", "Owl", "Shark", "Jellyfish", "Octopus", "Starfish", "Butterfly", "Bee", "Dragonfly",
    "Horse", "Cow", "Pig", "Chicken", "Duck", "Parrot", "Peacock", "Flamingo", "Rhino", "Hippopotamus",
    "Bison", "Wolf", "Fox", "Raccoon", "Rabbit", "Deer", "Antelope", "Camel", "Meerkat", "Armadillo",
    "Chimpanzee", "Bat", "Hummingbird", "Seahorse", "Ostrich", "Komodo Dragon", "Sloth", "Otter", "Platypus",
    "Walrus", "Hedgehog", "Lemur", "Llama", "Warthog", "Tarantula", "Spider", "Stingray",
    "Porcupine", "Mantis", "Ant", "Grasshopper", "Snail", "Slug", "Salmon", "Trout", "Pufferfish", "Axolotl",
    "Tapir", "Beaver", "Quokka", "Narwhal", "Capybara", "Echidna", "Chinchilla", "Mongoose",
    "Lemming", "Wombat", "Gibbon", "Bonobo", "Aardvark", "Gazelle", "Hyena", "Jaguar", "Lynx", "Magpie",
    "Numbat", "Ocelot", "Okapi", "Pangolin", "Quokka", "Serval", "Tapir", "Uakari", "Vulture", "Wallaby", "Yak"
];  
const birds = [
  "Sparrow", "Eagle", "Hawk", "Owl", "Penguin", "Flamingo", "Peacock", "Hummingbird", "Crow", "Swan",
  "Pigeon", "Albatross", "Robin", "Parakeet", "Canary", "Toucan", "Woodpecker", "Pelican", "Finch",
  "Seagull", "Cockatoo", "Duck", "Goose", "Kiwi", "Ostrich", "Vulture", "Quail", "Cormorant", "Nightingale",
  "Kingfisher", "Cuckoo", "Magpie", "Swift", "Kookaburra", "Wren", "Thrush", "Lark", "Snowy Owl", "Barn Owl",
  "Osprey", "Falcon", "Puffin"
];
const fishes = [
  "Goldfish", "Angelfish", "Betta", "Guppy", "Tetra", "Neon Tetra", "Cichlid", "Discus", "Koi", "Rainbowfish",
  "Molly", "Platy", "Swordtail", "Gourami", "Piranha", "Catfish", "Goby", "Pufferfish", "Clownfish", "Damselfish",
  "Tang", "Triggerfish", "Butterflyfish", "Wrasse", "Blowfish", "Lionfish", "Anglerfish", "Eel", "Seahorse", "Boxfish",
  "Chromis", "Parrotfish", "Shrimp", "Crab", "Lobster", "Snail", "Starfish", "Jellyfish", "Squid", "Octopus",
  "Cuttlefish", "Hagfish", "Lamprey", "Sturgeon", "Sardine", "Herring", "Anchovy", "Mackerel", "Salmon", "Trout",
  "Barracuda", "Tuna", "Marlin", "Swordfish", "Shark", "Ray", "Skate", "Sawfish", "Sunfish", "Groupers", "Snapper",
  "Pike", "Walleye", "Zebrafish", "Archerfish", "Dragonet", "Stonefish", "Flatfish", "Turbot", "Sole", "Halibut",
  "Flounder", "Plaice", "Dab", "Sole", "Hogfish", "Wobbegong", "Frogfish", "Pipefish", "Trumpetfish", "Batfish",
  "Grunion", "Mudskipper", "Axolotl", "Mudfish", "Gar", "Stickleback", "Scorpionfish", "Stonefish", "Carp", "Tench",
  "Piranha", "Arapaima", "Arowana", "Dorado", "Mahi-mahi", "Sawshark"
];

let wordList = [];
let participants = [];

/**
 * Configures initial UI on DOM content load
 */
document.addEventListener("DOMContentLoaded", function(){
    updatePlayersSelection(MINIMUM_PLAYERS, MAXIMUM_PLAYERS);
    updateCategorySelection(WORD_CATEGORIES);
    updateWordList();
    updatePlayersList(MINIMUM_PLAYERS);
    updatePlayersTable(MAXIMUM_PLAYERS);

    const playersSelection = document.getElementById("players-selection");
    /**
     * update <ul id="players-list"> on <select id="players-selection"> value change
     */
    playersSelection.addEventListener("change", function(){
        updatePlayersList(playersSelection.value);
        updatePlayersTable();
    });

    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function(){
        disableConfigurations();
        startGame();
    });
});

/**
 * updates &lt;select id="players-selection"&gt; to allow specified number of players to participate
 * @param {number} minimumPlayers - minimum number of participants
 * @param {number} maximumPlayers - maximum number of participants
 */
function updatePlayersSelection(minimumPlayers, maximumPlayers){
    /**
     * @type {HTMLSelectElement}
     */
    let playersSelection = document.getElementById("players-selection");
    for(let n=minimumPlayers; n<=maximumPlayers; n++){
        /**
         * @type {HTMLOptionElement}
         */
        let option = document.createElement("option");
        option.value = n;
        option.text = n;
        playersSelection.append(option);
    }
}

/**
 * Adds checked checkboxes in <p id="categories-container">
 * @param {Array of Strings} - array of word categories to choose from
 */
function updateCategorySelection(wordCategoryList){
    /**
     * @type {HTMLSelectElement}
     */
    let categoriesContainer = document.getElementById("categories-container");
    for(let n=0; n<wordCategoryList.length; n++){
        /**
         * @type {string}
         */
        let category = wordCategoryList[n];
        /**
         * @type {HTMLOptionElement}
         */
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = category.toLowerCase();
        checkbox.value = checkbox.id;
        checkbox.name = "word-categories";
        /**
         * @type {HTMLLabelElement}
         */
        const checkboxLabel = document.createElement("label");
        checkboxLabel.htmlFor = checkbox.id;
        checkboxLabel.textContent = category;
        checkbox.checked = true;
        /**
         * updates wordList on checkbox checked state change
         */
        checkbox.addEventListener("change", function(){
            updateWordList();
        });
        categoriesContainer.append(checkbox);
        categoriesContainer.append(checkboxLabel);
    }
}

/**
 * updates wordList based on <p id="categories-container"> checkboxes selection
 */
function updateWordList(){
    /**
     * @type {NodeListOf(Input[type="checkbox"]:checkbox)}
     */
    const wordCategories = document.querySelectorAll("#categories-container input[type='checkbox']:checked");
    /**
     * disables <button id="start-button"> when no word categories are selected, else enables it
     */
    document.getElementById("start-button").disabled = (wordCategories.length==0 ? true : false);
    /**
     * @type {Array of Strings}
     */
    wordList = [];
    for(let n=0; n<wordCategories.length; n++){
        /**
         * @type {HTMLInputElement[type="checkbox"]}
         */
        const checkbox = wordCategories[n];
        switch(checkbox.value){
            case "fruits":
                wordList = wordList.concat(fruits);
                break;
            case "vegetables":
                wordList = wordList.concat(vegetables);
                break;
            case "animals":
                wordList = wordList.concat(animals);
                    break;
            case "birds":
                wordList = wordList.concat(birds);
                break;
            case "fishes":
                wordList = wordList.concat(fishes);
                break;
        }
    }
}

/**
 * updates <ul id="players-list">
 * @param {number} totalPlayers - players participating in game
 */
function updatePlayersList(totalPlayers){
    /**
     * @type {HTMLUListElement}
     */
    let playersList = document.getElementById("players-list");
    /**
     * @type {number}
     */
    let playersCount = playersList.childElementCount;
    if(playersCount < totalPlayers){
        for(let n=playersCount; n<totalPlayers; n++){
            /**
             * @type {HTMLLIElement}
             */
            let listItem = document.createElement("li");
            listItem.textContent = "Player "+(n+1);
            listItem.id = "player-"+(n+1);
            listItem.contentEditable = true;
            /**
             * updates <td class="name"> of selected target player in <table id="transition-table">
             */
            listItem.addEventListener("input", function(){
                updatePlayerName(listItem.id, listItem.textContent);
            });
            playersList.append(listItem);
        }
    }
    else{
        /**
         * removes extra participants from the list
         */
        while(playersCount != totalPlayers){
            playersList.removeChild(playersList.lastChild);
            playersCount = playersList.childElementCount;
        }
    }
}

/**
 * updates <tbody id="players"> of <table id="transition-table"> to show participants
 */
function updatePlayersTable(){
    let transitionTable = document.getElementById("transition-table");
    let playersTable = transitionTable.querySelector("#players");
    let playersListItems = document.querySelectorAll("#players-list li");
    let nRows = playersTable.rows.length;
    let nPlayers = playersListItems.length;
    if(nRows < nPlayers){
        for(let n=nRows; n<nPlayers; n++){
            let newPlayer = document.createElement("tr");
            newPlayer.className = "player-"+(n+1);
            let turn = document.createElement("td");
            turn.className = "turn";
            let name = document.createElement("td");
            name.className = "name";
            let letter = document.createElement("td");
            letter.className = "letter";
            let word = document.createElement("td");
            word.className = "word";
            name.textContent = playersListItems[n].textContent;
            newPlayer.append(turn);
            newPlayer.append(name);
            newPlayer.append(letter);
            newPlayer.append(word);
            playersTable.append(newPlayer);
        }
    }
    else{
        /**
         * removes extra participants from the table
         */
        while(nRows != nPlayers){    
            playersTable.removeChild(playersTable.querySelector(".player-"+(nRows)));
            nRows = playersTable.rows.length;
        }
    }
}

/**
 * Dynamically add rows to <tbody id="players"> before tr.<playerClass> element
 * @param {String} playerClass 
 * @param {CharacterData} transitionLetter 
 * @param {String} transitionWord 
 * @returns void
 */
function addRowToPlayersTable(playerClass, transitionLetter, transitionWord){
    /**
     * @type {HTMLTableRowElement}
     */
    const playerRecords = document.querySelector("."+playerClass);
    if(playerRecords.querySelector(".letter").innerHTML==""){
        playerRecords.querySelector(".letter").innerHTML = transitionLetter;
        playerRecords.querySelector(".word").innerHTML = transitionWord;
        return;
    }
    let newPlayerRecord = document.createElement("tr");
    let turn = document.createElement("td");
    let name = document.createElement("td");
    let letter = document.createElement("td");
    let word = document.createElement("td");
    newPlayerRecord.className = playerClass;
    turn.className = "turn";
    name.className = "name";
    letter.className = "letter";
    word.className = "word";
    name.textContent = playerRecords.querySelector(".name").textContent;
    letter.innerHTML = transitionLetter;
    word.innerHTML = transitionWord;
    newPlayerRecord.append(turn);
    newPlayerRecord.append(name);
    newPlayerRecord.append(letter);
    newPlayerRecord.append(word);
    playerRecords.insertAdjacentElement("beforebegin", newPlayerRecord);
}

/**
 * select player by ID and updates his/her name
 * @param {string} playerClassName - class name to select the player
 * @param {string} playerName - new name to be assigned to the selected player
 */
function updatePlayerName(playerClassName, playerName){
    let players = document.getElementById("players");
    let player = players.getElementsByClassName(playerClassName)[0];
    player.querySelector(".name").textContent = playerName;
    player.getElementsByClassName("name")[0].textContent = playerName;
}

/**
 * disables game configuration elements contained within <section id="game-setup-section">
 */
function disableConfigurations(){
    document.getElementById("players-selection").disabled = true;
    for(let n=0; n<document.getElementById("players-selection").value; n++){
        document.getElementById("player-"+(n+1)).contentEditable = false;
    }
    for(let n=0; n<WORD_CATEGORIES.length; n++){
        document.getElementById(WORD_CATEGORIES[n].toLowerCase()).disabled = true;
    }
    document.getElementById("start-button").disabled = true;
}

/**
 * starts game
 */
function startGame(){
    /**
     * @type {String}
     */
    const participants = populateParticipants();
    distributeWordsAmong(participants);
    const results = simulateGame(participants);
    updateResults(results.winner, results.transition);
}

/**
 * removes a word randomly from wordList, uses it as the starting word and updates <span id="initial-word">
 * @returns {String}
 */
function generateInitialWord(){
    const initialWord = wordList[Math.floor(Math.random()*wordList.length)];
    wordList.splice(wordList.indexOf(initialWord), 1);
    document.getElementById("initial-word").innerText = initialWord;
    return initialWord;
}

/**
 * selects game participants and their respective UI elements
 * @returns {Participant Array}
 */
function populateParticipants(){
    const playersSelection = document.getElementById("players-selection");
    const playersTable = document.getElementById("players");
    for(let n=1; n<=playersSelection.value; n++){
        let player = playersTable.getElementsByClassName("player-"+n)[0];
        participants = participants.concat(new Participant(player));
    }
    return participants;
}

/**
 * randomly distributes the words of the wordList among the participants
 */
function distributeWordsAmong(participants){
    /**
     * @type {number} - number of participants
     */
    const nParticipants = participants.length;
    /**
     * @type {number} - number of words in the wordList
     */
    const nWords = wordList.length;
    /**
     * @type {number} - minimum number of words each participant must have
     */
    const wordsPerParticipant = nWords/nParticipants;
    for(let n=0; n<wordsPerParticipant; n++){
        for(let m=0; m<nParticipants-1; m++){
            let word = wordList[Math.floor(Math.random()*wordList.length)];
            wordList.splice(wordList.indexOf(word), 1);
            participants[m].learn(word);
        }
    }
    for(let n=0; n<wordList.length; n++){
        participants[nParticipants-1].learn(wordList[n]);
    }
}

function simulateGame(participants){
    let competingParticipants = new CircularDoublyLinkedList(participants);
    let competitionTransition = new CircularDoublyLinkedList();
    let currentParticipant = competingParticipants.getHead();
    let word = generateInitialWord();
    competitionTransition.add(new Transition("&#955;", word));
    updateTransitionGraph("", word, "");
    let lastLetter = word.charAt(word.length-1);
    while(competingParticipants.getSize() != 1){
        let previosWord = word;
        const playerName = currentParticipant.getData().element.querySelector(".name").textContent;
        lastLetter = previosWord.charAt(word.length-1);
        word = currentParticipant.getData().answer(lastLetter);
        if(!word || word === previosWord){
            competingParticipants.remove(currentParticipant);
            let className = currentParticipant.getData().element.className;
            addRowToPlayersTable(className, lastLetter, "	&#128542;");
            word = previosWord;
            competitionTransition.add(new Transition("&#955;", word));
            updateTransitionGraph("&#955;", word, playerName);
        }
        else{
            let className = currentParticipant.getData().element.className;
            addRowToPlayersTable(className, lastLetter, word);
            competitionTransition.add(new Transition(lastLetter, word));
            updateTransitionGraph(lastLetter, word, playerName);
        }
        currentParticipant = currentParticipant.next;
    }
    competitionTransition.add(new Transition("&#955;", word));
    const winner = competingParticipants.getHead().getData().element;
    let transition = "";
    let currentTransition = competitionTransition.getHead();
    if(competitionTransition.getSize() == 1){
        transition += currentTransition.getData().getLetter();
    }
    while(currentTransition.next != competitionTransition.getHead()){
        transition += currentTransition.getData().getLetter();
        currentTransition = currentTransition.next;
    }
    return {"winner": winner.querySelector(".name").textContent, "transition": transition};
}

function updateTransitionGraph(letter, word, player){
    const transitionGraph = document.querySelector(".transition-graph");
    let transitionNode = document.createElement("span");
    transitionNode.classList.add("transition-node");
    let transition = document.createElement("span");
    transition.classList.add("transition");
    let transitionPlayer = document.createElement("span");
    transitionPlayer.classList.add("transition-player");
    transitionPlayer.innerHTML = player;
    let transitionLetter = document.createElement("span");
    transitionLetter.classList.add("transition-letter");
    transitionLetter.innerHTML = letter;
    let transitionArrow = document.createElement("span");
    transitionArrow.classList.add("transition-arrow");
    transitionArrow.innerHTML = "&rightarrow;";
    let transitionWord = document.createElement("span");
    transitionWord.classList.add("transition-word");
    transitionWord.innerHTML = word;
    transition.appendChild(transitionPlayer);
    transition.appendChild(transitionLetter);
    transition.appendChild(transitionArrow);
    transitionNode.appendChild(transition);
    transitionNode.appendChild(transitionWord);
    transitionGraph.appendChild(transitionNode);
}

function updateResults(winnerName, winningTransition){
    document.getElementById("winner").textContent = winnerName;
    document.getElementById("transition").innerHTML = winningTransition;
    let transitionNodes = document.querySelectorAll(".transition-node");
    for(let n=transitionNodes.length-1; n>=0; n--){
        const transitionLetter = transitionNodes[n].querySelector(".transition-letter");
        if(transitionLetter.innerHTML != "λ"){
            const terminalWord = transitionNodes[n].querySelector(".transition-word");
            terminalWord.classList.add("terminal-word");
            break;
        }
    }
}

/**
 * Class to represent participant
 */
class Participant{
    /**
     * creates a participant and assigns a HTML element to it
     * @param {HTMLLIElement} element 
     */
    constructor(element){
        this.element = element;
        this.wordList = [];
    }
    /**
     * Saves word to participant's knowledge base
     * @param {String} word
     */
    learn(word){
        this.wordList = this.wordList.concat(word);
    }
    /**
     * Returns false or a random word starting with the specified letter
     * @param {CharacterData} letter 
     * @returns word | false
     */
    answer(letter){
        let word = this.wordList.filter(function(word){
            return word.charAt(0).toLowerCase()==letter.toLowerCase();
        });
        return (word.length == 0 ? false : word[Math.floor(Math.random()*word.length)]);
    }
}

/**
 * Class to represent the node of a CircularDoublyLinkedList
 */
class CircularDoublyLinkedListNode{
    /**
     * stores the participant
     * @param {Participant} data 
     */
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    /**
     * returns the current participant whose turn it is to cast a word
     * @returns {Participant}
     */
    getData(){
        return this.data;
    }
}

/**
 * Class to represent Circular DoublyLinkedList which will be used to store competing participants
 */
class CircularDoublyLinkedList{
    /**
     * accepts and stores an array of Participants
     * @param {Participant Array} nodes 
     */
    constructor(nodes=[]){
        this.head = null;
        this.tail = null;
        this.size = 0;
        for(let n=0; n<nodes.length; n++){
            this.add(nodes[n]);
        }
    }
    /**
     * returns head of current CircularDoublyLinkedList
     * @returns {Participant}
     */
    getHead(){
        return this.head;
    }
    /**
     * * returns the number of nodes
     * @returns {number}
     */
    getSize(){
        return this.size;
    }
    /**
     * adds the new node to the CircularDoublyLinkedList
     */
    add(newNode){
        if(this.head == null){
            this.head = new CircularDoublyLinkedListNode(newNode);
            this.tail = this.head;
            this.head.next = null;
            this.head.previous = null;
        }
        else{
            this.tail.next = new CircularDoublyLinkedListNode(newNode);
            this.tail.next.previous = this.tail;
            this.tail = this.tail.next;
            this.tail.next = this.head;
        }
        this.size++;
    }
    /**
     * removes the given Participant from the CircularDoublyLinkedList
     * @param {Participant} node 
     */
    remove(node){
        if(this.size == 0){return;}
        if(this.head == node){
            if(this.size == 1){
                this.head = this.tail = null;
            }
            else{
                this.head.next.previous = null;
                this.head = this.head.next;
                this.tail.next = this.head;
            }
        }
        else if(this.tail == node){
            this.tail.previous.next = this.head;
            this.tail = this.tail.previous;
        }
        else{
            let currentNode = this.head;
            while(currentNode.next != this.head || currentNode.next == null){
                if(currentNode == node){
                    currentNode.next.previous = currentNode.previous;
                    currentNode.previous.next = currentNode.next;
                }
                currentNode = currentNode.next;
            }
        }
        if(this.size != 0){
            this.size--;
        }
    }
}

/**
 * Class to represent a transition node
 */
class Transition{
    constructor(letter, word){
        this.letter = letter;
        this.word = word;
    }
    /**
     * returns the transition letter
     * @returns {CharacterData}
     */
    getLetter(){
        return this.letter;
    }
    /**
     * returns the transitioned word if any, else null
     * @returns {String}
     */
    getWord(){
        return this.word;
    }
}