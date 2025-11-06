// * stateless vs stateful 

// stateless function

const counter = (amount)=>{
    let count = 0;
    count = count + amount
    return count;
}

// console.log(counter(2))
// console.log(counter(5))

// stateful object

const counter2 ={
    count: 0,

    add(amount){
        this.count = this.count + amount
    },

    print(){
        console.log(this.count)
    },
}

counter2.add(2)
counter2.add(8)

counter2.print()