function JSV_Search(){
    let JSV_SearchData = [];
    const JSV_SearchSplit = location.split("?");
    for (let index in JSV_SearchSplit){
        if (index == 0){
            console.log("JSV Is now searching");
        } else {
            const Item = JSV_SearchSplit[index];
            const ItemSplit = Item.split("=");
            var Name = ItemSplit[0];
            var Data = ItemSplit[1];
            JSV_SearchData.push([Name,Data]);
        }
    }
}
function FindObjectJSV(Name,JSV_Array){
    for (index in JSV_Array){
        const Item = JSV_Array[index];
        if (Item[0] == Name){
            return Item[1]
        }
    }
    return null
}
