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
    if (nums.length == 2) {
        if (min < 0 && secmin < 0) {
            console.log(min * secmin);
        } else if (min < 0) {
            console.log(max * min);
        } else {
            console.log(max * sec);
        }
    } else if (max * sec > min * secmin) {
        console.log(max * sec);
    } else {
        console.log(min * secmin);
    };
}

maxProduct([5, 20, 2, 6]);
maxProduct([10, -20, 0, 3]);
