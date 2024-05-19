// static
class Counter {
    count: number = 0;
    increment() {
        return (this.count = this.count + 1)
    }
    decreament() {
        return (this.count = this.count - 1)
    }
}

// const instance1 = new Counter();
// console.log(instance1.increment()) // 1 -> different memory

// const instance2 = new Counter();
// console.log(instance2.increment()) // 1 -> different memory

// to make the chanages in the same memory
class Counter2 {
    static count: number = 0;
    increment() {
        return (Counter2.count = Counter2.count + 1)
    }
    decreament() {
        return (Counter2.count = Counter2.count - 1)
    }
}

const instance = new Counter2();
console.log(instance.increment())

const instance2 = new Counter2();
console.log(instance2.increment())

const instance3 = new Counter2();
console.log(instance3.increment())

// if you want to make the methods also static
class Counter3 {
    static count: number = 0;
    static increment() {
        return (Counter2.count = Counter2.count + 1)
    }
     static decreament() {
        return (Counter2.count = Counter2.count - 1)
    }
}

console.log(Counter3.decreament())
console.log(Counter3.decreament())
console.log(Counter3.decreament())
