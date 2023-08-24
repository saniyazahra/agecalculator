//javascript using on date of birth
let inputdate = document.querySelector("input")
let para = document.querySelector("p.count")
inputdate.addEventListener("input",() => {
    let birthdate = new Date(inputdate.value)
    let currentdate = new Date()
    let newDate = new Date(currentdate-birthdate)
    let years = newDate.getFullYear() - 1970
    let months = newDate.getMonth()
    let days = newDate.getDate()-1
    para.innerHTML = `you're ${years} years ${months} months ${days} days age.`
}) 



