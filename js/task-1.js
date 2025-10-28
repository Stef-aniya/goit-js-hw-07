const categotiesList = document.querySelector('#categories')
const categotiesItem = document.querySelectorAll('.item')
console.log (`Number of categories: ${categotiesItem.length}`)
categotiesItem.forEach(item =>{
    const categoryTitle = item.querySelector('h2').textContent
    const categoryListElement = item.querySelectorAll('ul li').length
    console.log (`Category: ${categoryTitle}`)
    console.log (`Elements: ${categoryListElement}`)
})

