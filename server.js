const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require("path")
const router = jsonServer.router(path.join(__dirname),'db.json')
const middlewares = jsonServer.defaults()

const customeMiddle = require(path.join(__dirname),'middleware.js')
const port = process.env.PORT || 5000;

// 미들웨어 설정
server.use(middlewares)
server.use(customeMiddle)

const customRouter = jsonServer.rewriter(
    {
        "/api/v2/*": "/$1",
        "/:resource/:id/show": "/:resource/:id",
        "/posts/:category": "/posts?category=:category",
        "/articles\\?id=:id": "/posts/:id"
    }
)
server.use(customRouter)

// 라우터 설정
server.use(router)

server.listen(5000, () => {
  console.log('JSON Server is running')
})