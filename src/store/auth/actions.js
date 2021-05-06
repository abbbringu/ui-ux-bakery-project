// export const adder = async function ({context}, payload) {
//     context.commit('Changer')
// }

export function login (context, payload) {
    context.commit('Changer', payload)
}
