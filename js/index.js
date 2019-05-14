// Your code goes here
let navlinks = document.addEventListener('click', (event) => {
  event.preventDefault();
})


function toggleStyle(element, styleName, value, defaultVal) {
  if (element.style[styleName] !== value) {
    element.style[styleName] = value;
  } else {
    element.style[styleName] = defaultVal;
  }
}

//Have an annoying alert pop up when page loads
window.addEventListener('load', (event) => {
  alert('Welcome! You have won $50 million dollars. Claim your prize by clicking okay');
})

//make the nav bar thinner upon scrolling 
let navBar = document.querySelector('.main-navigation');
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', (event) => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.height= "90px";
  } else {
    navBar.style.height = '60px';
  }
  prevScrollpos = currentScrollPos;
})

//Blur the destination image when mouse is over image
let destiImg = document.querySelector('.content-destination img');

destiImg.addEventListener('mouseover', (event) => {
  destiImg.style.filter = 'blur(3px)';
})

destiImg.addEventListener('mouseleave', (event) => {
  destiImg.style.filter = 'blur(0)';
})

//Change the text color when either 'p' or 'b' is pressed
let contentTxt = document.querySelectorAll('.text-content'); 

document.addEventListener("keydown",(event) => {
  event.preventDefault();
  if (event.keyCode === 80) {
    contentTxt[0].style.color = 'pink';
  } else if (event.keyCode === 66) {
    contentTxt[1].style.color = 'blue';
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 80 || event.keyCode === 66) {
    contentTxt.forEach(item => item.style.color = '');
  }
});

//Show the window width in the logo after resizing
let mainHeading = document.querySelector('.logo-heading');
window.addEventListener('resize', (event) => {
  mainHeading.textContent = `Fun Bus (at ${window.innerWidth} px width)`;
})

//Remove adventure.jpg after dragging
let img1 = document.querySelector('.img-content img');
img1.setAttribute('draggable', 'true');

img1.addEventListener('drag', (event) => {
  img1.style.display = 'none';
})

//Make text above disappear when first button is double-clicked
let btn1 = document.querySelector('.content-pick :nth-child(1) .btn');
let dest1Text = document.querySelector('.content-pick :nth-child(1) p');
btn1.addEventListener('dblclick', (event) => {
  toggleStyle(dest1Text, 'display', 'none', 'block');
  if (btn1.textContent !== 'Oops wrong button') {
    btn1.textContent = 'Oops wrong button';
  } else {
    btn1.textContent = 'Sign Me Up!'; 
  }
})

//Added a textarea so the select event can be used 
let inputForm = document.createElement('form')
let textBox = document.createElement('textarea')
let newLog = document.createElement('p');
inputForm.appendChild(textBox);
inputForm.appendChild(newLog);
document.querySelector('.home').appendChild(inputForm);
textBox.value = 'Just a random box you for to select and enter some text in. Nothing to see here.';
textBox.style.width = '300px';

textBox.addEventListener('select', (event) => {
  newLog.textContent = 'I see you selected something in the textbox';
})

//Change background color when textarea in focus
textBox.addEventListener('focus', (event) => {
  event.target.style.background = 'purple';  
  event.target.style.color = 'white';
})

textBox.addEventListener('blur', (event) => {
  event.target.style.background = '';  
  event.target.style.color = 'black';
})

//Change the size of fun.jpg using the mouse wheel
let img2 = document.querySelector('.inverse-content img');
img2.addEventListener('wheel', (event) => {
  event.preventDefault();
  let scale = 1;
  if (event.deltaY < 0) {
    img2.style.width = '50%';
  } else {
    img2.style.width = '100%';
  }
})


//bubbling - need to include stopPropagation to prevent bubbling
// document.querySelector('.content-pick :nth-child(3) .btn').addEventListener('click', (event) => {
//   event.stopPropagation();
//   alert('child clicked');
// })

// document.querySelector('.content-pick').addEventListener('click', (event) => {
//   alert('parent clicked');
// })
