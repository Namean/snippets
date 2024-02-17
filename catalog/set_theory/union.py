# https://ipcisco.com/lesson/python-set-operations/
# Union.py



def union(setA, setB):
    return setA | setB
    # return set(setA) | set(setB)



john = {
    "id": "001",
    "name": "John"
}

dan = {
    "id": "002",
    "name": "John"
}

adam = {
    "id": "003",
    "name": "Adam"
}

employees = [john['id'], dan['id']]
new_hires = [adam['id']]

numbers1 = {1, 2, 3}
numbers2 = {2, 3, 7, 10, 15}

print(numbers1 | numbers2)
print(union(numbers1, numbers2))

print(employees, new_hires)
print(union(employees, new_hires))
