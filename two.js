function avg(data) {
    let sum = 0;
    for (let i = 0; i < data['count']; i++) {
        let money = data['employees'][i]['salary'];
        sum += money;
    };
    console.log(sum / data['count']);
}
avg({
    "count": 3,
    "employees": [
        {
            "name": "John",
            "salary": 30000
        },
        {
            "name": "Bob",
            "salary": 60000
        },
        {
            "name": "Jenny",
            "salary": 50000
        }
    ]
}); // 呼叫 avg 函式