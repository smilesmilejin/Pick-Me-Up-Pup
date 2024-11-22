const NUMBER_OF_DOGS = 15;
const state = {
  addDogButton: null,
  dogImgContainer: null,
  dogCountLabel: null,
  dogCount: 1
};

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const newDogImage = (imgNumber) => {
  // Create a new image and set its attributes
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = 'A random doggo';

  // track the number of created dog images
  ++state.dogCount;

  return newDog;
};

const randomDogImage = () => {
  // Pick a random number and use it to generate a
  // new dog image
  const imgNumber = pickRandomNumber();
  const newDog = newDogImage(imgNumber);

  return newDog;
};

const refreshUI = () => {
  // refresh the displayed count from our state variable
  state.dogCountLabel.textContent = state.dogCount;
};

const addDogImgToTop = () => {
  // update the document with a new dog image, and
  // update the count of dogs
  const newDog = randomDogImage();
  state.dogImgContainer.prepend(newDog);
  refreshUI();
};

const addDogImgToBottom = () => {
  // update the document with a new dog image, and
  // update the count of dogs
  const newDog = randomDogImage();
  state.dogImgContainer.append(newDog);
  refreshUI();
};

const handleAddButtonClicked = (event) => {
  addDogImgToTop();
};

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

const loadControls = () => {
  // retrieve references to all of the html
  // elements we will need to access
  state.addDogButton = document.getElementById('add-dog-button');
  state.dogCountLabel = document.getElementById('dog-count-label');
  state.dogImgContainer = document.getElementById('dog-img-container');
};
const registerEventHandlers = () => {
  loadControls();
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
  window.addEventListener('scroll', handlePageScrolled);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);