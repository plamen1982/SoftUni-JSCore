class SortedList{
    constructor(){
        this.arr = [];
        this.size = 0;
    }

    add(element){
        this.arr.push(element);
        this.arr.sort((a,b) => a-b);
        this.size++;
        return this.arr;
    };

    remove(index){
        if(index >=0 && index< this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a,b) => a-b);
            this.size--;
            return this.arr;
        }
    }

    get(index){
        if(index >= 0 && index < this.arr.length){
            return this.arr[index];
        }
    }
}

let obj = new SortedList();
console.log(obj.add(3));
console.log(obj.add(3));
console.log(obj.size);
console.log(obj.remove(0));
console.log(obj.size);
console.log(obj.get(0));
