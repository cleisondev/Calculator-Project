
//Functions

//This function gonna insert value on the input
function displayNum(num){
    let show = document.querySelector('.textview')
    show.value += num;
}
//This function gonna clean the input
function clean(value){
    let trash = document.querySelector('.textview')
    trash.value = ''
}

//This function gonna render the result 
//The setTimeout gonna clean the input and allow the user to insert value again
function equal(){
    let showresult = document.querySelector('.textview')
    showresult.value = eval(showresult.value)
    const timeOut = 10000;
    let finishing = finish => {
        showresult.value = ''
    }
    setTimeout(finishing, timeOut)
}

//Function that allows the keyboard insert values
const textarea = document.querySelector("body");

textarea.addEventListener("keydown", (e) => {
  change = document.querySelector('.textview')
  if(e.key === 'Enter'){
    change.value = eval(change.value)
  } 
  else if(e.key === 'Backspace'){
    change.value = ''
  }
  else{
    change.value += (e.key)
  };
 
});