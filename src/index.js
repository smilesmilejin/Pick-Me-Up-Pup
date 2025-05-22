console.log('loaded!');

// Method 1
// const NUMBER_OF_DOGS = 15;


// const pickRandomNumber = () => {
//   // pick a random number of the next image to use
//   // Math.floor(...) rounds it down to the nearest whole number: from 0 to 14.
//   // Adding 1 shifts the range to 1 through 15
//   return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
// };

// const onLoaded = () => {
//   // steps to carry out when the page has loaded
//   //   console.log(pickRandomNumber());
//   const dogImg = document.getElementById('dog-image');
//   const imgNumber =pickRandomNumber();

//   const newImgName =`./imgs/${imgNumber}.jpeg`;
//   // this does not work
//   //   const newImgName =`.//imgs/${imgNumber}.jpeg`;
//   dogImg.src = newImgName;
// };

// onLoaded();

// // Method 2 using state
// const NUMBER_OF_DOGS = 15;

// const state = {
//   dogImage: null,
//   addDogButton: null,
//   dogImageContainer: null,
//   dogCountLabel: null,
//   dogCount: 1,
// };



// const pickRandomNumber = () => {
//   // pick a random number of the next image to use
//   // Math.floor(...) rounds it down to the nearest whole number: from 0 to 14.
//   // Adding 1 shifts the range to 1 through 15
//   return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
// };

// const setRandomDog = () => {
//   const imgNumber =pickRandomNumber();
//   const newImgName =`./imgs/${imgNumber}.jpeg`;
//   state.dogImage.src = newImgName;
// };

// const registerEvents = () => {
//   // get random num
//   // to create image name
//   // create new image elements
//   // new image element src set to the new image name
//   // prepend the new image to the image container
//   state.addDogButton.addEventListener ('click', (event) => {
//     const imgNumber = pickRandomNumber();
//     const newImgName =`./imgs/${imgNumber}.jpeg`;
//     const newDog = document.createElement('img'); // new img element
//     newDog.src = newImgName;
//     newDog.alt = 'A random doggo!';
//     state.dogImageContainer.prepend(newDog); // insert a new dog image element at the beginning of a container using:
//     ++state.dogCount;
//     state.dogCountLabel.textContent = state.dogCount;
//   });
// };


// const onLoaded = () => {
//   loadedControls();
//   //   setRandomDog();
//   registerEvents();
// };

// const loadedControls = () => {
//   state.dogImage = document.getElementById('dog-image');
//   state.addDogButton = document.getElementById('addDogButton');
//   state.dogImageContainer = document.getElementById('dog-img-container');
//   // shift open downarrow to open line?
//   state.dogCountLabel = document.getElementById('dogCountLabel');
// };

// onLoaded();


// Method 3 Refactor
const NUMBER_OF_DOGS = 15;

const state = {
  dogImage: null,
  addDogButton: null,
  dogImageContainer: null,
  dogCountLabel: null,
  dogCount: 1,
};



const pickRandomNumber = () => {
  // pick a random number of the next image to use
  // Math.floor(...) rounds it down to the nearest whole number: from 0 to 14.
  // Adding 1 shifts the range to 1 through 15
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const setRandomDog = () => {
  const imgNumber =pickRandomNumber();
  const newImgName =`./imgs/${imgNumber}.jpeg`;
  state.dogImage.src = newImgName;
};

const handleAddButtonClicked = (event) => {
  const imgNumber = pickRandomNumber();
  const newImgName =`./imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img'); // new img element
  newDog.src = newImgName;
  newDog.alt = 'A random doggo!';
  state.dogImageContainer.prepend(newDog); // insert a new dog image element at the beginning of a container using:
  ++state.dogCount;
  state.dogCountLabel.textContent = state.dogCount;
};


const registerEvents = () => {
  // the function passed , NOT handleAddButtonClicked()
  state.addDogButton.addEventListener ('click', handleAddButtonClicked);
};


const onLoaded = () => {
  loadedControls();
  //   setRandomDog();
  registerEvents();
};

const loadedControls = () => {
  state.dogImage = document.getElementById('dog-image');
  state.addDogButton = document.getElementById('addDogButton');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dogCountLabel');
};

onLoaded();