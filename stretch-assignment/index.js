let blockList = document.querySelectorAll('.block');

//Bring block to the top of the stack whenever it is being clicked
let min = '-1';
blockList.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    event.target.style.order = min;
    min = (parseInt(min, 10) - 1).toString(10); 
  })
})

let moveRight = [
  {
    transform: `translateX(0)`
  }, 
  {
    transform: `translateX(1300px)`
  }, 
  {
    transform: `translateX(0)`
  },
]

blockList.forEach(item => {
  item.addEventListener('mousedown', (event) => {
    event.preventDefault(); 
    event.target.animate(moveRight, {
      duration: 9000,
      //iterations: Infinity,
    })
  })
})

