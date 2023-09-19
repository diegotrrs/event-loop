import Task from "./Task"

class SimpleEventLoop {

  private taskQueue: Task[] = []
  private isRunning: boolean = false

  enqueue(task: Task): void {
    this.taskQueue.push(task)
    if (!this.isRunning){
      this.run()
    }
  }

  private run(): void {
    this.isRunning = true
    while (this.taskQueue.length > 0) {
      const task = this.taskQueue.shift()      
      if (task){
        task()
      }
    }
    this.isRunning = false
  }
}

export default SimpleEventLoop