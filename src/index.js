'use strict';
// this variable has global scope
const NUMBER_OF_DOGS = 15;
const state = {
  dogImage: null,
  addDogButton: null,
  dogImageContainer: null,
  dogCountLabel: null,
  dogCount: 1
};

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const handleAddButtonClicked = (event) => {
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = 'A random doggo!';
  state.dogImageContainer.prepend(newDog);
  ++state.dogCount;
  state.dogCountLabel.textContent = state.dogCount;
};

const registerEvents = () => {
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
};

const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadControls();
  registerEvents();
};

const loadControls = () => {
  state.dogImage = document.getElementById('dog-image');
  state.addDogButton = document.getElementById('addDogButton');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dogCountLabel');
};

onLoaded();