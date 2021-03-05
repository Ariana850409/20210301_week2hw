def avg(data):
    sum = 0
    for i in range(data['count']):
        money = data['employees'][i]['salary']
        sum += money
    print(sum/data['count'])


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
})  # 呼叫 avg 函式
