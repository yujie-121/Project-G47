// console.log("Hello");

fetch('http://localhost:3000/stores/all')
.then(response => response.json())
.then(stores => {
    // console.log(stores)

    stores.forEach((store) => {
        const grid=document.querySelector(".storesGrid")
        const gridElement=document.createElement("div")
        gridElement.classList.add("storeItem"); 

        const gridText=document.createElement("p")
        const storeName=document.createTextNode(store.name)

        const gridPlace=document.createElement("p")
        const storePlace=document.createTextNode(store.district)

//store name text
        grid.appendChild(gridElement)
        gridElement.appendChild(gridText)
        gridText.appendChild(storeName)

//district text
        gridElement.appendChild(gridPlace)
        gridPlace.appendChild(storePlace)


// Add click event listener
 gridElement.addEventListener("click", () => {
    let url = store.url;
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
        url = "https://" + url; 
    }
    window.open(url, "_blank"); 
    });
        
  });

})