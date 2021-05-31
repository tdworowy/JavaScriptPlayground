function elapse_time(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function* clock(interval, max=Infinity) {
    for(let count=1; count <= max; count++) {
        await elapse_time(interval)
        yield count
    }
}
async function test() {
    for await(let tick of clock(300, 100)) { 
        console.log(tick)
    }
}
test()