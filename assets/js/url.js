'use strict'

const hamBurger = document.querySelector('.hamBurger')
const nav = document.querySelector('.nav')



// input 
const inputBar = document.querySelector('.inputBar')
const shortenBtn = document.querySelector('.shortenBtn')
const alertMsg = document.querySelector('.alertMsg')


const shortenContent = document.querySelectorAll('.shortenContent')
const shortSection = document.querySelectorAll('.shortSection')
const shortenLink = document.querySelector('.shortenLink')

// add element
const createdLinks = document.querySelector('.createdLinks')


// local storage

const arr2 =[]



// copy
const copyBtn = document.querySelectorAll('.copyBtn')


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// hamburger
hamBurger.addEventListener('click',function(){
    nav.classList.toggle('navVisible')
})









// input validation
shortenBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(inputBar.value == 0){
        alertMsg.style.visibility = 'visible'
        inputBar.style.borderColor = 'red'
    }
    else{
        alertMsg.style.visibility = 'hidden'
        inputBar.style.borderColor = 'transparent'
        fetchText(inputBar.value)
}   

}) 





//fetch api
async function fetchText(url) {
    const arr ={}
    let Url = `https://api.shrtco.de/v2/shorten?url=${url}`
    let response = await fetch(Url);
    let data = await response.json();
    

    let shortLink = data.result.short_link

    arr.url = inputBar.value;
    arr.shorturl = shortLink
    arr2.push(arr)
    setItems()    
    createItems(arr.shorturl,arr.url)
    inputBar.value = ''
}





//create element
function createItems(slink,olink){


    let html = `<div class="shortenContent">
    <p class="originalLink">${olink}</p>
    <div class="shortSection">
        <p class="shortenLink">${slink}</p>
        <button type="button" class="copyBtn">Copy</button>
    </div>
    </div>`
    createdLinks.insertAdjacentHTML('afterbegin',html) 
    document.querySelector('.shortenContent').classList.add('shortenAnime')



  // copy to clip board
        const shrtnLink = document.querySelectorAll('.shortenLink')
        const cpyBtn = document.querySelectorAll('.copyBtn')
            for(let i=0; i<1;i++){
                cpyBtn[i].addEventListener('click',function(event){
                    cpyBtn[i].innerHTML = 'copied'
                        setTimeout(function(){
                            cpyBtn[i].innerHTML = 'copy'
                        },2000)
                        navigator.clipboard.writeText(shrtnLink[i].innerHTML);
                        console.log(navigator.clipboard.writeText(shrtnLink[i].innerHTML))
                    
                })
            }
}




// set to localstorage
function setItems(){

    localStorage.setItem('items',JSON.stringify(arr2))
}



//get items
function getItems(){

    let gets = localStorage.getItem('items')
    let item = JSON.parse(gets)
    
    for (let index = 0; index < item.length ; index++) {
        createItems(item[index].shorturl,item[index].url)
    }
}

getItems()



































































        

////////////////////

// let items = localStorage.getItem('data')
//     if(items == null){
//         arr = []
//     }
//     else{
//         arr = JSON.parse(items)
//     }
//     arr.push(inputBar.value)

//     localStorage.setItem('data',JSON.stringify(arr))

//     showContent()

////////////////////////////////



// function showContent(){

//     let html

//     let items = localStorage.getItem('data')
//     if(items == null){
//         arr = []
//     }
//     else{
//         arr = JSON.parse(items)
//     }
   
//     for(let i=0;i<1;i++){
//     html = `<div class="shortenContent">
//     <p class="originalLink">${arr[arr.length - 1]}</p>
//     <div>
//         <p class="shortenLink">qefwgthryryjrhnynrynrtyrthrthrthrthrh</p>
//         <button class="copyBtn">Copy</button>
//     </div>
// </div>`
// createdLinks.insertAdjacentHTML("afterbegin",html)
// }
    
// }










