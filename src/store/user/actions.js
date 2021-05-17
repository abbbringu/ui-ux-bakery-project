export function setUserData (context, payload) {
    context.commit('setUser', payload)
}

export function cartAction (context, payload) {
    context.commit('Cart', payload)
}