

const booklistActions ={
    addTolist:'addTolist',
    removeFromlist:'removeFromlist',
    emptylist:'emptylist',
    removeAllFromlist:'removeAllFromlist',
    addBulkTolist:'addBulkTolist'
}


function bookshopReducer(readlist=[], {type, book}){
    switch(type){
        case booklistActions.addTolist:
            return [...readlist, book];
        case booklistActions.addBulkTolist:
            console.log(book)
            return [...readlist, ...book];
        case booklistActions.removeOneFromlist:
            let newList=readlist.slice()
            for (let bookList of newList){
                if(bookList.id === book.id){
                    newList.splice(newList.indexOf(bookList),1)
                    return newList
                }
            }
            return newList
        case booklistActions.removebookFromlist:
            return readlist.filter((bookList)=>book.id!== bookList.id)

        case booklistActions.emptylist:
            return []
        default:
            throw new Error('Invalid Action')
    }
    
}

export{
    bookshopReducer,
    booklistActions
}