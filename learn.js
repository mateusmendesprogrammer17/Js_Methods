
let values=[1,7,8,10,15,20]
function dobrarValores(values){

return values.map((value) => {
    return value * 2

});

}


function quadriplicarValores(){

    return values.map((value)=>{

        return value * 4;
    })
}



console.log(dobrarValores(values));
console.log(quadriplicarValores(values));
console.log(values);