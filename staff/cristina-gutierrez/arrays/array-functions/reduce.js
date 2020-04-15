function reduce(arr, callback, initialValue = 0) {
    var acc = initialValue
    for(var i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }
    return acc
}