let state = {
    itemlist : [Mac, iPhone, iPad, appleWatch, Airpods, AirTag, HomePod, TV4K, Accessories],
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

const wishList = document.querySelector(".wishlist");
const like = document.querySelectorAll(".like");
const itemList = document.querySelectorAll("#item");

const addItemList = () => {
    wishList = ""
    let i = 0
    while(i < state.wishlist.length){
        let items = document.createElement("p")
        items.textcontent = state.wishlist[i]
        wishList.appendChild(items)

        i = i + 1
    }
}
subscribe(addItemList)

let i = 0 
for(i = 0; i < like.length; i++){
    like[i].addEventListener("click", additem(parseInt(getElementsByClassName("like").id)))
}