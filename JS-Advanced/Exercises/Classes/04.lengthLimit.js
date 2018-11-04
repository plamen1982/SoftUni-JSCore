class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerString.length > this.innerLength) {
            this.innerString = this.innerString.slice(0, this.innerLength);
            return `${this.innerString}...`
        }
        return this.innerString;
    }
}

let gosho = new Stringer("Gosh", 5);
console.log(gosho.toString());
gosho.decrease(3);
console.log(gosho.toString());