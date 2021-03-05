def maxProduct(nums):
    max = 0
    sec = 0
    min = 0
    secmin = 0
    for each in nums:
        if each > max:
            max = each
    for each in nums:
        if max > each >= sec:
            sec = each
    for each in nums:
        if each < min:
            min = each
    for each in nums:
        if min < each < secmin:
            secmin = each
    if max*sec > min*secmin:
        print(max*sec)
    else:
        print(min*secmin)


maxProduct([5, 20, 2, 6])  # 得到 120 因為 20 和 6 相乘得到最大值
maxProduct([10, -20, 0, 3])  # 得到 30 因為 10 和 3 相乘得到最大值
