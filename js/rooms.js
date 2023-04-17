const roomImages = [
  'images/shangyue.png',
  'images/biecheng.png',
  'images/img_8.png',
  'images/img_9.png',
  'images/img_10.png',
  'images/img_11.png',
  'images/img_12.png',
  'images/img_13.png',
  'images/img_14.png',
  'images/img_15.png',
  'images/img_16.png',
  'images/img_17.png',
  'images/img_18.png',
  'images/img_19.png',
  'images/img_20.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
  'images/img_8.png',
]

// GET THE ROOM
// Read the randomized room index array from localStorage.
let randomizedRoomIndexes = JSON.parse(window.localStorage.getItem("rooms_in_the_dark")) || []
if (randomizedRoomIndexes.length === 0) {
  // This is either the first time we visit this page or we are out of rooms, so we must create a new randomized storage
  randomizedRoomIndexes = getRandomRoomIndexList()
}
// Set the current room from the first index in the randomized array
scene.style.backgroundImage = `url('${roomImages[randomizedRoomIndexes[0]]}')`
// Remove the current room index
randomizedRoomIndexes.splice(0, 1)
// Save new array to localStorage for next time
window.localStorage.setItem("rooms_in_the_dark", JSON.stringify(randomizedRoomIndexes))

// Function for creating a list of randomized indexes of rooms
function getRandomRoomIndexList() {
  let indexArray = [...Array(roomImages.length).keys()]
  fisherYatesShuffle(indexArray)
  return indexArray
}

// Fisher-Yates shuffle
function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

