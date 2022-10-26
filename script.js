let item = document.querySelectorAll(".item"),
    search = document.querySelector("#search");

search.addEventListener("input",(e) => {
    let element = e.target.value.toLowerCase();
    item.forEach(i => {
        if(i.textContent.toLowerCase().includes(element)){
            i.parentElement.style.display = 'block'
        }else{
            i.parentElement.style.display = 'none'
        }
    })
})