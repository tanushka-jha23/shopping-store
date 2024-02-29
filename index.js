let state = {
    itemlist : ["Mac", "iPhone", "iPad", "appleWatch", "Airpods", "AirTag", "HomePod", "TV4K", "Accessories"],
    wishlist : [],
    switch: false,

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
    },

    changeswitch(){
        this.switch = !(this.switch)
        this.publish()
    }
}

const like = document.querySelectorAll(".like")
const favorite = document.querySelector(".fav")
const itemSuperContainer = document.querySelector(".item-super-container")

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
    return itemContainer
}

const renderProductList = () =>{
    itemSuperContainer.innerHTML = ""
    if(state.switch == true){
        itemSuperContainer.appendChild(productList(state.wishlist))
    }
    else{
        itemSuperContainer.appendChild(productList(state.itemlist))
    }
}
state.subscribe(renderProductList)

let i = 0 
for(i = 0; i < like.length; i++){
    like[i].addEventListener("click", state.additem(parseInt(like[i].id)));
}

favorite.addEventListener("click", state.changeswitch())

state.publish()

