const burger = document.querySelector('.burger')
const nav_links = document.querySelector('.nav-links')
const close_el = document.querySelector('.close')
const navLinks_li = document.querySelectorAll('.nav-links li')



burger.addEventListener('click' , ()=>{
  nav_links.classList.toggle('active')

  burger.classList.toggle('toggle')
})
// close_el.addEventListener('click' , ()=>{
//   nav_links.classList.remove('active')
// })

// navLinks_li.forEach((el,index)=>{
//   el.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 2}s`
//   // console.log(index / 5 + 0.2)
// })