let seconds = 0
let timer = document.querySelector("#counter")
let likes = 0
const comments = document.querySelector('#list')

document.addEventListener('DOMContentLoaded' , (event) => {
    console.log('DOM fully loaded');
    

    let timer = document.querySelector("#counter")
    const counterID = setInterval(counterByOne, 1000);
    // deactivate by clearInterval counterID
    function counterByOne() {
        timer.textContent++
        likes = 0
    }
    
    const plusBtn = document.querySelector('#plus')
    plusBtn.addEventListener('click', (e) => incrementByClick())

    const minusBtn = document.querySelector('#minus')
    minusBtn.addEventListener('click', decrementByClick)

    const likeBtn = document.querySelector('#heart')
    likeBtn.addEventListener('click', likeByClick)
    console.log(likeBtn)

    const form = document.querySelector('#comment-form')
    console.log(form)
    form.addEventListener('submit', handleSubmit)

    const pauseBtn = document.querySelector('#pause')
    pauseBtn.addEventListener('click', pauseAll)

    


    function pauseAll() {
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        likeBtn.disabled = true;
        document.querySelector('#submit').disabled = true; 
        pauseBtn.id = 'resume'
        pauseBtn.textContent = 'resume';

    }
    const resumeBtn = document.querySelector('#resume')
    console.log(resumeBtn)
    //resumeBtn.addEventListener('click')



})
// call backs for event listener to counter


function incrementByClick () {
    timer.textContent++
}

function decrementByClick() {
    timer.textContent--
}

function likeByClick() {
    let likesList = document.querySelector('ul')
    let li = document.createElement('li')
    likesList.appendChild(li)
    li.append(`${timer.textContent} has been liked times ${++likes}`)
}

function handleSubmit(event) {
    event.preventDefault()
    const inputComment = event.target.querySelector('#comment-input').value
    
    const li = document.createElement('li')
    li.textContent = inputComment
    comments.append(li)
    event.target.reset()
    
}


