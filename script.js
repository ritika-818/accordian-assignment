function toggleAccordion(item){
    const container = item.parentElement;
    const content = container.querySelector(".accordion-content");
    const icon = container.querySelector(".accordion-icon");
    const accordianItem = document.querySelectorAll(".accordion-item");

    accordianItem.forEach(element => {
        const content = element.querySelector(".accordion-content");
        const icon = element.querySelector(".accordion-icon");
        if(element !== container){
            content.style.maxHeight = "";
            content.style.padding = "0 20px";
            icon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
        }
    });
    if(content.style.maxHeight){
        content.style.maxHeight = "";
        content.style.padding = "0 20px";
        icon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
    } else{
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "10px 20px";
        icon.innerHTML=`<i class="fa-solid fa-circle-minus"></i>`;
    }
}