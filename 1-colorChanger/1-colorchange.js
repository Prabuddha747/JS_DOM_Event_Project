const buttons =document.querySelectorAll('.button')
// console.log(button);
const body = document.querySelector('body')
// console.log(body)

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e)
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    // if(e.target.id=='purple'){
    //   body.style.backgroundColor=e.target.id;
    // }
  })
});
