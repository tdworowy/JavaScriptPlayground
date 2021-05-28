const fetch = require('node-fetch');

function promise_sequence(inputs, promise_maker) {
    inputs = [...inputs]
    function handle_next_input(outputs) {
        if(inputs.length === 0) {
            return outputs
        } else {
            let next_input = inputs.shift()
            return promise_maker(next_input)
                .then(output => output.concat(output))
                .then(handle_next_input)
        }
    }
    return Promise.resolve([]).then(handle_next_input)
}
function fetch_body(url) {
    return fetch(url).then(r => r.text())
}

let urls  = ['https://en.wikipedia.org/wiki/Roman_Empire','https://en.wikipedia.org/wiki/JavaScript','https://en.wikipedia.org/wiki/Pepe_the_Frog']
promise_sequence(urls, fetch_body)
    .then(bodies => {
        console.log(bodies)
    })
    .catch(console.error)

