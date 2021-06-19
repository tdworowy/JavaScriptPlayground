let identity = new Proxy({}, {
    get(o,name,targer) { return name },
    has(o, name) { return true},
    ownKeys(o) { throw new RangeError("Infinite number of properties")},
    getOwnPropertyDescriptor(o, name) {
        return {
            value: name,
            enumerable: false,
            writable: false,
            configurable:false
        }
    },
    set(o, name, value, target) { return false },
    deleteProperty(o, name) { return false },
    defineProperty(o, name, desc) { return false },
    isExtensible(o) { return false },
    getPrototypeOf(o) { return null }
})

// act as if has infinity properties
console.log(identity.x)
console.log(identity.toString)
console.log(identity[0])
console.log(identity[121829])


function readOnlyProxy(o) {
    function readOnly() {
        throw new TypeError("ReadOnly")
    }
    return new Proxy(o, {
        set:readOnly,
        defineProperty:readOnly,
        deleteProperty:readOnly,
        setPrototypeOf: readOnly
    })
}

let obj = {x:1, y:2}
let proxyObj = readOnlyProxy(obj)
console.log(proxyObj.x)
proxyObj.x = 2