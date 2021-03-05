def maxZeros(nums):
    sum = 0
    max = 0
    for each in nums:
        if each == 0:
            sum += 1
            if sum > max:
                max = sum
        if each == 1:
            sum = 0
    print(max)


maxZeros([0, 1, 0, 0])  # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0])  # 得到 4
maxZeros([1, 1, 1, 1, 1])  # 得到 0
