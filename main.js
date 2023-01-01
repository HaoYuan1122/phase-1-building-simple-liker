// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like=document.getElementsByClassName('like-glyph')
for(let i=0;i<like.length;i++){
 like[i].addEventListener('click',clickCB)

 function clickCB(event){
    const heart=event.target
    mimicServerCall()
    .then(res => successfulRes(res))
    .catch(res => catchError(res))
    function catchError(res){
        console.log(res)
        const errorMessage=document.querySelector('#modal')
        errorMessage.className=''
        setTimeout(()=>{
            errorMessage.className='hidden'
        },3000)
    }
    function successfulRes(res){
        console.log(res)
        console.log(heart)
        if(heart.textContent===FULL_HEART ){
            heart.textContent=EMPTY_HEART 

        }else{
            heart.textContent=FULL_HEART
        }
        heart.classList.toggle('activated-heart')
    }
 }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
mimicServerCall()