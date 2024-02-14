const adviceid = document.querySelector(".id")
const body = document.querySelector(".content")
const button = document.querySelector(".ri-add-box-fill")

async function getData(){
    const response = await fetch("https://api.adviceslip.com/advice",{
        method:"GET"
    })
    const data = await response.json()

    document.querySelector(".content").textContent = data.slip.advice
    console.log(data)

    document.querySelector(".id").textContent = data.slip.id
    console.log(data)

}

getData()

// setInterval(() => {},5000)

button.addEventListener("click", function(){
    getData()
})

let gender = "Frank_Dev007"
let myString = `https://x.com/${gender}`
console.log(myString);


// Endpoint
// https://api.github.com/users/franklin-raph