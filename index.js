let state = {
    itemlist : ["Mac", "iPhone", "iPad", "appleWatch", "Airpods", "AirTag", "HomePod", "TV4K", "Accessories"],
    wishlist : [],

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

const itemList = document.querySelector(".item-list")
const wishList = document.querySelector(".wishlist")
const like = document.querySelectorAll(".like")


const product = (itemName, itemID) =>{
    let item = document.createElement('div')
    item.className = "horizontal-flex"
    item.id = "item"
    let itemname = document.createElement('p')
    itemname.textcontent = itemName
    let favorite = document.createElement('span')
    favorite.className = "material-symbols-outlined like"
    favorite.id = itemID
    item.appendChild(itemname)
    item.appendChild(favorite)

    return item
}

let product1 = product("apple", 1)
itemList.appendChild(product1)

const addItemList = () => {
    wishList.innerHTML = ""
    let i = 0
    while(i < state.wishlist.length){
        let items = document.createElement('p')
        items.textcontent = state.wishlist[i]
        wishList.appendChild(items)

        i = i + 1
    }
}
state.subscribe(addItemList)

let i = 0 
for(i = 0; i < like.length; i++){
    like[i].addEventListener("click", additem(parseInt(like[i].id)));
}
