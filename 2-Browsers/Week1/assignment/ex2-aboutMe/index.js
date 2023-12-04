'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const myData = ['Tenzijn', 'momo', 'Karze,Kham,Tibet'];
const spans = document.querySelectorAll('span');
const listItems = document.querySelectorAll('li');

// Entering the data in the span
spans.forEach((span, index) => {
  span.textContent = myData[index];
});

// adding the class list-item to the list
listItems.forEach((listItem) => {
  listItem.classList.add('list-item');
});
