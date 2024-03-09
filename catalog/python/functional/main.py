

data = [1, 2, 3]


def square(x):
    return x ** 2


map_object = map(square, data)

output = list(map_object)
print(output)
