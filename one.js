function calculate(min, max) {
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    };
    console.log(sum);
}
calculate(1, 3); // 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8); // 你的程式要能夠計算 4+5+6+7+8，最後印出 30