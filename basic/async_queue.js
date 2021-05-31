class AsyncQueue {
    constructor() {
        this.values = []
        this.resolvers = []
        this.closed = false
    }
    enqueue(value) {
        if (this.closed) {
            throw new Error("AsyncQueue closed")
        }
        if(this.resolvers.length > 0) {
            const resolve = this.resolvers.shift()
            resolve(value)
        }
        else {
            this.values.push(vale)
        }
    }
    dequeue() {
        if(this.values.length > 0) {
            const value = this.values.shift()
            return Promise.resolve(value)
        }
        else if (this.closed) {
            return Promise.resolve(AsyncQueue.EOS)
        }
        else {
            return new Promise((resolve) => {
                this.resolvers.push(resolve)
            })
        }
    }
    close() {
        while(this.resolvers.length > 0 ) {
            this.resolvers.shift()(AsyncQueue.EOS)
        }
        this.closed = true
    }
    [Symbol.asyncIterator]() {
        return this
    }
    next() {
        return this.dequeue().then(value => (value === AsyncQueue.EOS)?
        {value: undefined, done: true}:
        {value: value, done: false}
        )
    }
}
AsyncQueue.EOS = Symbol("end-of-stream")

function event_stream(elt, type) {
    const q = new AsyncQueue()
    elt.addEventListener(type, e=>q.enqueue(e))
    return q
}
async function handle_keys() {
    for await(const event of event_stream(document, 'keypress')) {
        console.log(event.key)
    }
} 