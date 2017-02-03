document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})




// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerBoxEl = document.querySelector('#compoundInvestment')
  answerBoxEl.textContent = answerBoxEl.textContent * 2
})




// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#color-circle button").addEventListener('click',function(){

  var circleEl = document.querySelector('#circle-bw')
	console.log(circleEl)

	var circleStyles = window.getComputedStyle(circleEl)

	if(circleStyles.backgroundColor === 'rgb(0, 0, 0)'){
		circleEl.style.background  = "#fff"
	} else {
		circleEl.style.background  = "rgb(0, 0, 0)"
	}
})




// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var sizeCircleEl = document.querySelector('.circle-red')

  var circleStyle = window.getComputedStyle(sizeCircleEl);

  if ( parseInt(circleStyle.width) < 320) {
    console.log(circleStyle.width)
    sizeCircleEl.style.height = parseInt(circleStyle.height) * 2 + 'px';
    sizeCircleEl.style.width = parseInt(circleStyle.width) * 2 + 'px';
  } else {
    sizeCircleEl.style.height = '40px';
    sizeCircleEl.style.width = '40px';
  }
})





// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#remove button").addEventListener('click',function(evt){
  // TASK #5
  var userLiEls = document.querySelectorAll('#user-list li')
  var userListContainerEl = document.querySelector('#user-list')

  forEach(userLiEls, function(liEl, index, theArray){
    // console.log(liEl.className);
  	if(liEl.className.indexOf('inactive') >= 0){
      // console.log(liEl);
      userListContainerEl.removeChild(liEl)
    }
  })
})




// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var allSquares = document.querySelectorAll('.square')

  for (var i = allSquares.length - 1 ; i >= 0 ; i--){
    var reverseOrderSquaresList = document.querySelector('#reverse-squares .answer-box')
    reverseOrderSquaresList.appendChild(allSquares[i]);
}
})


// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

var allTasks = document.querySelectorAll('#tasks')
var taskStr = ('');

forEach(allTasks, function(taskEl, index, theArray){
  taskStr = taskStr + taskEl;
})
console.log(taskStr);
})


//  (1) select all the #tasks li elements w/ .querySelectorAll(...)
//  (2) loop over each li DOM element
//   (3) inside of for-loop, store the value of the reversed string into a variable
//        - to reverse the string,
//           (i) split the string into an array of single characters,
//            (ii) reverse the array
//           (iii) join the now-reversed array back to a string

//  (3) inside of for-loop set DOMElement.innerHTML to the variable containing reversed string
//



// ---------------------------------------------------
// ---------------------------------------------------
document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
