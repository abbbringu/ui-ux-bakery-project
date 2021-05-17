export  function setUser (state, payload) {
    state.user=payload
}

// export  function Cart (state, payload) {
//     state.cart.forEach((element, index) => {
//       if(element.id == payload.id){
//           payload.incart = true
//           state.cart[index] = payload.amount
//       }  
//     })
//     if(!payload.incart){
//         state.cart.push(payload)
//     }
// }
export  function Cart (state, payload) {
    if(state.cart[payload.id-1] == 0){ // om inte objextet är där "skapar" den det annars lägger den till i amount
        state.cart[payload.id-1] = payload
    } else {
        state.cart[payload.id-1].amount += payload.amount
    }
    
}