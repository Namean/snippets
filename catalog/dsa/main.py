data = [7, 12, 500,  9, 11, 3]

# lowest = arr[0]
# for i in range(0, len(arr)):
#     if (lowest <= arr[i]):
#         print("lowest is less than:", arr[i])
#         lowest = arr[i]
# print(lowest)

# lowest = data[0]

# for i in range(0, len(data)):
#     if (lowest > data[i]):
#         lowest = data[i]

# print(lowest)

# arr = ['A', 'B']
arr = [2, 3]

def swap(x, y):
    x = x + y
    y = x - y
    x = x - y
    

swap(arr[0], arr[1])
print(arr)