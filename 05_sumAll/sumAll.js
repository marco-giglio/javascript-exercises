const sumAll = function(start, end) {

    if (start > end) {
        [start, end] = [end, start]
    }

    if (start < 0 || end < 0) {
        return 'ERROR'
    }

    if (typeof start != 'number' || typeof end != 'number') {
        return 'ERROR'
    }

    const arr = []

    for (let i = start; i <= end; i++){
        arr.push(i)
    }

    let sum = 0 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
