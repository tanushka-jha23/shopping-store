let state = {
    itemlist : [Mac, iPhone, iPad, appleWatch, Airpods, AirTag, HomePod, TV4K, Accessories],
    wishlist : [],

    additem(i) {
        this.wishlist.push(this.itemList[i])
    },

    subscribers: [],
    subscribe(f){
        this.subscribers.push(f)
    },

    publish(){
        let i = 0
        for(i = 0; i < this.subscribers.length; i++){
            this.subscribers[i]()
        }
    }
}