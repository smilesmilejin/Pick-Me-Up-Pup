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

// Extract logic related to building a new dog img element
// Combines making a new element and updating the count since we want the count 
// to reflect the number of images created
const createNewDogImageElement = (imgNumber) => {
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = 'A random doggo!';
  ++state.dogCount;

  return newDog;
};

const getRandomDogImage = () => {
  const imgNumber = pickRandomNumber();
  const newDog = createNewDogImageElement(imgNumber);

  return newDog;
};

// Extract logic related to updating UI to its own helper
const refreshUI = () => {
  state.dogCountLabel.textContent = state.dogCount;
};

const addDogImgToTop = () => {
  const newDog = getRandomDogImage();
  state.dogImageContainer.prepend(newDog);
  refreshUI();
};

const addDogImgToBottom = () => {
  {
    const newDog = getRandomDogImage();
    state.dogImageContainer.append(newDog);
    refreshUI();
  }
};

// Callback function passed to `addEventListener` for the click event is now
// very concise when logic is refactored into descriptively named helper functions
const handleAddButtonClicked = (event) => {
  addDogImgToTop();
};

// Infinity Scroll Implementation (NOT shown in roundtable)
// This is the callback function passed to `addEventListener` for the scroll event
const handlePageScrolled = (event) => {
  // Determine if we've reached the end of the document by
  // checking if the amount we've scrolled from the top plus
  // the visible part of the screen is greater than
  // or equal to the document's scrollHeight
  if (
    window.scrollY + window.innerHeight + 1 >=
    document.documentElement.scrollHeight
  ) {
    addDogImgToBottom();
  }
};

const registerEvents = () => {
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
  // add event listener for the scroll event for infinite scroll feature
  window.addEventListener('scroll', handlePageScrolled);
};

const loadControls = () => {
  state.dogImage = document.getElementById('dog-image');
  state.addDogButton = document.getElementById('addDogButton');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dogCountLabel');
};

const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadControls();
  registerEvents();
};

onLoaded();