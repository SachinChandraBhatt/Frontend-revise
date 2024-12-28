function* hey() {
    yield 2
    yield 5
    yield "sachin"
    return "hello"
}

const hello = hey()
console.log(hello.next());
console.log(hello.next());
console.log(hello.next());
console.log(hello.next());

//yeild => generator
//next => iterator