const cards = document.querySelectorAll('.card');
const tops = document.querySelectorAll('.top');
const abouts = document.querySelectorAll('.about');
const contacts = document.querySelectorAll('.contact');
const products =document.querySelectorAll('.product');
const products_2 =document.querySelectorAll('.product_2');
const infos =document.querySelectorAll('.info');
const infos_2 = document.querySelectorAll('.info_2');
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { target } = entry;
        target.classList.toggle('active', entry.isIntersecting)
    })
}, {})
cards.forEach(cart=> {
    observer.observe(cart);

});
tops.forEach(top=> {
    observer.observe(top);

});
abouts.forEach(about=> {
    observer.observe(about);

});
contacts.forEach(contact=> {
    observer.observe(contact);

});
products.forEach(product=> {
    observer.observe(product);

});
products_2.forEach(product_2=> {
    observer.observe(product_2);

});
infos.forEach(info=> {
    observer.observe(info);

});
infos_2.forEach(info_2=> {
    observer.observe(info_2);

});


