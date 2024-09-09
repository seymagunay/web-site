const searchIcon = document.getElementById('searchIcon')
const searchEngine = document.getElementById('searchEngine')



searchIcon.addEventListener('click', ()=>{
   searchEngine.classList.toggle('active') 
   
})

var secenek=document.getElementById('d')
console.log(searchIcon);

/*

classList özelliği, DOM düğümlerinin sınıflarını değiştirmek ve yönetmek için kullanılır
classList Kullanımı için genellikle add, remove ve toggle metotları kullanılır. Bunlar, sırasıyla bir sınıf ekler,
bir sınıf kaldırır veya bir sınıfı varsa kaldırır yoksa ekler.

*/