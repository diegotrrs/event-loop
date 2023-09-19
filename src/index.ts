import SimpleEventLoop from "./SimpleEventLoop"

const eventLoop = new SimpleEventLoop()

eventLoop.enqueue(() => {
  console.log("Task 1")
})

eventLoop.enqueue(() => {
  console.log("Task 2")
})