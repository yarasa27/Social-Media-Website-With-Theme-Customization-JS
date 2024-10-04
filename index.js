// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');



menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        item.classList.add('active');
    })
})