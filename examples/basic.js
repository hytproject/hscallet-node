const hscallet = require('../index')

/* Initialize hscallet wrapper */
const api = new hscallet({
    key: process.env.API_KEY,
    pass: process.env.API_PASS,
    logging: false
})

async function main() {
    try {
        /* Test HytPrice */
        const price = await api.HytPrice()
        console.log("[Promised] HytPrice:", price)

        /*  api.HytPrice((err, data) => {
            if (err) return console.log("Error", err)
            console.log("[Callback] HytPrice", data)
         }) */

        /* Test User */
        const user = await api.getUser()
        console.log("[Promised] getUser:", user.user.name)

        /*  api.getUser((err, data) => {
            if (err) return console.log("Error", err)
            console.log("[Callback] HytPrice", data.user.name)
        }) */

        /* Post Shortlink */
        const link = await api.postLink({
            enabled: true,
            url: 'snow'
        })
        console.log("[Promised] postLink:", link)
    } catch (e) {
        console.log(e)
    }
}

main()