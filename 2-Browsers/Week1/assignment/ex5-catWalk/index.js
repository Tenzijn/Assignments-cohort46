'use strict';

// const { set } = require("lodash");

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const catWalkImage = document.querySelector('img');
catWalkImage.style.left = '0px';
const catWalkImageRef = catWalkImage.src;
const catDanceImage =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
let imgPositionTracker = 0;

const changeImageBack = function () {
  catWalkIntervalCaller = setInterval(catWalk, 50);
  catWalkImage.setAttribute('src', catWalkImageRef);
};

function catWalk() {
  // to get window width
  const windowWidth = window.innerWidth;
  // to get current position of cat
  const imgPosition = parseInt(catWalkImage.style.left);
  // shift cat by 10px left
  catWalkImage.style.left = imgPosition + 8 + 'px';
  // if cat reaches the end of window, reset position to 0px but -250px to hide the cat and gives effect of coming from behind
  if (imgPosition > windowWidth) {
    catWalkImage.style.left = '-250px';
  }

  // if cat reaches the middle of window, stop the cat and change image to dancing cat
  //this logic : there is only one time that position of cat before is less than half of window width and position of cat now is more than half of window width
  // I use this because since we are adding 10px after each interval, it is not possible to have exact position of half of window width
  if (imgPositionTracker < windowWidth / 3 && imgPosition > windowWidth / 3) {
    imgPositionTracker = imgPosition;
    clearInterval(catWalkIntervalCaller);
    catWalkImage.setAttribute('src', catDanceImage);
    setTimeout(changeImageBack, 5000);
  }
  imgPositionTracker = imgPosition;
}

let catWalkIntervalCaller = setInterval(catWalk, 50);

window.addEventListener('load', catWalk);
