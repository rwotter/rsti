class Vehicle{
    constructor(type,wheels,capacity){
        this.type=type;
        this.whells=wheels;
        this.capacity=capacity;
    }

    dirigir(gas){
        setInterval(() => {
            if(gas >= 0) console.log(gas, "\n");
                gas -= 10;

        })
    }
}