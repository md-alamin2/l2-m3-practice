// stateful function with closure

// const counter = ()=>{
//     let count = 0;

//     return (amount)=>{
//         count = count + amount;
//         return count;
//     }
// }

// const myCounter = counter();

// console.log(myCounter(2));
// console.log(myCounter(7))

// class

class Counter{
    constructor(count){
        this.count = count;
    }

    add(amount){
        this.count = this.count + amount;
    }

    print(){
        console.log(this.count);
    }
}

const counter = new Counter(0);

counter.add(5)
counter.add(10)

counter.print();