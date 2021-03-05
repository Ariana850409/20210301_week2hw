function maxZeros(nums) {
    let sum = 0;
    let max = 0;
    nums.forEach(function (x) {
        if (x == 0) {
            sum += 1;
            if (sum > max) {
                max = sum;
            };
        };
        if (x == 1) {
            sum = 0;
        };
    });
    console.log(max);
}
maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4
maxZeros([1, 1, 1, 1, 1]); // 得到 0