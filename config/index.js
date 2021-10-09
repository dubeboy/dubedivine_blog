const host = process.env.NEXT_PUBLIC_HOST
const env = process.env.NODE_ENV

let strapiURL = ""
if(env === "development") {
    strapiURL = `http://${host}:1337`
} else if (env === "production") {
    strapiURL = host
}

export const server = "https://radiant-garden-05717.herokuapp.com"