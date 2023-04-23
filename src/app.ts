type HttpStatusCode = [number, string]
const goodStatus:HttpStatusCode = [200, "OK"]
const notFound:HttpStatusCode = [404, "Not Found"]
const badRequest:HttpStatusCode = [400, "Invelid Request"]
const serverErr:HttpStatusCode = [500, "Internal Server Error"]

console.log(goodStatus)