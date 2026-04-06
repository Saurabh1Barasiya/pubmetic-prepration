const myInp = document.querySelector("#myInp");

function makeDebounce(func,delay){
    let timerId;
    return function(...args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{
            func.call(this,...args);
        },delay);
    }
}

function findSuggection(event){
    console.log(event.target.value);
}

const debouncFunc = makeDebounce(findSuggection,1000);
myInp.addEventListener("input",debouncFunc);