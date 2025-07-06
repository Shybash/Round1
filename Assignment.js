function groupBy(array,keySelector){
    //Return empty object if input is null,undefined,or not an array
    if(!Array.isArray(array)||array.length===0){
        return {};
    }
    const result={};

    for(const item of array){
        //Determine the key using the selector,handling null//undefined
        let key;
        try{
            key=item==null ? null: keySelector(item);
        }catch{
            key=null;
        }

        const groupKey=String(key);
        //String version as object keys

        //initialize the group if it doesn't exist
        if(!result[groupKey]){
            result[groupKey]=[];
        }

        //push the current item into the group
        result[groupKey].push(item);
    }
    return result;
}


//Example usage
const numbers=[1,2,3,4,5,6,7,8,9];

//exaple 1: grouping by even and odd

const groupByEvenOdd=groupBy(numbers,x=>x%2===0?'Even':'odd');

console.log(groupByEvenOdd);
//{Even:[2,4,6,8],odd:[1,3,5,7,9]}

//example 2: grouping by first digit

const groupByFirstDigit=groupBy(numbers,x=>String(x)[0]);
console.log(groupByFirstDigit);
