# ! How do you find the missing number in a given integer array of 1 to 100 ?

# def missingNumber(arr):
#   n = len(arr)+1
#   total = (n*(n+1))//2
#   return total - sum(arr)


# arr =[1,2,3,5]
# print(missingNumber(arr))


#! How do you find the duplicate numbers on a given integer array ?

#! first check #

# def duplicateNumber(arr):
#   duplicate=[]
#   for i in range(len(arr)-1):
#     if arr[i] == arr[i+1]:
#       duplicate.append(arr[i])
#   return duplicate

# arr = [1,2,2,3,4,5]
# print(duplicateNumber(arr))

#! solution:2

# def duplicateNumber(arr):
#   seen = set()
#   duplicates=set()

#   for num in arr:
#     if num in seen:
#       duplicates.add(num)
#     else:
#       seen.add(num)
#   return list(duplicates)


# arr = [1,2,2,3,4,5,5,6,6,7]
# print(duplicateNumber(arr))

#! Question: Given an array of numbers, write a function to find the second-largest number in the array.


