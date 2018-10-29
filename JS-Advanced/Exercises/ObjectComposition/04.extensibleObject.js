function extensibleObject() {
    let obj = {
        extend: function(template){
            for(let prop of Object.keys(template)){
                if(typeof(template[prop]) === "function"){
                    Object.getPrototypeOf(obj)[prop] = template[prop];
                } else {
                    obj[prop] = template[prop];
                }
            }
        }
    };

    return obj;
}
let template =  {
    extensionMethod: function () {},
    extensionProperty: 'someString'
  }
  
console.log(extensibleObject().extend(template))

