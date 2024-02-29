let state = {
    itemlist : ["Mac", "iPhone", "iPad", "appleWatch", "Airpods", "AirTag", "HomePod", "TV4K", "Accessories"],
    wishlist : [],
    switch: 0,

    subscribers: [],
    subscribe(f){
        this.subscribers.push(f)
    },

    publish(){
        let i = 0
        for(i = 0; i < this.subscribers.length; i++){
            this.subscribers[i]()
        }
    },

    additem(i) {
        this.wishlist.push(this.itemList[i])
        this.publish()
    }

}

const like = document.querySelectorAll(".like")
const favorite = document.querySelector(".fav")

//composible functions
const product = (itemName, itemID) => {
    let item = document.createElement('div')
    item.className = "horizontal-flex"
    item.id = "item"
    let itemname = document.createElement('p')
    itemname.textContent = itemName
    let favorite = document.createElement('span')
    favorite.className = "material-symbols-outlined like"
    favorite.textContent = "favorite"
    favorite.id = itemID
    item.appendChild(itemname)
    item.appendChild(favorite)

    return item
}

const productList = (productArray) => {
    let itemContainer = document.createElement('div')
    let j
    for(j = 0; j < productArray.length; j++){
        let productContainer = product(productArray[j], j)
        itemContainer.appendChild(productContainer)
    }
}
subscribe(productList)

let i = 0 
for(i = 0; i < like.length; i++){
    like[i].addEventListener("click", additem(parseInt(like[i].id)));
}


