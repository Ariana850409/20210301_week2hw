function maxProduct(nums) {
    let max = 0;
    let sec = 0;
    let min = 0;
    let secmin = 0;
    nums.forEach(function (x) {
        if (x > max) {
            max = x;
        };
    });
    nums.forEach(function (x) {
        if (max > x && x >= sec) {
            sec = x;
        };
    });
    nums.forEach(function (x) {
        if (x < min) {
            min = x;
        };
    });
    nums.forEach(function (x) {
        if (min < x && x < secmin) {
            secmin = x;
        };
    });
    if (max * sec > min * secmin) {
        console.log(max * sec);
    } else {
        console.log(min * secmin);
    };
}

maxProduct([5, 20, 2, 6]);
maxProduct([10, -20, 0, 3]);