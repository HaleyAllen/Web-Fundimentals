// Reversing an array

function reverse(arr){
    for(var i = 0; i < arr.length/2 ;i++){
        var temp = arr[i]
        arr[i]=arr[arr.length -1 -i]
        arr[arr.length -1 -i] = temp
    }
    return arr
}
console.log(reverse(['a','b','c','d','e']))