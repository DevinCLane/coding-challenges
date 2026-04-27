/*
merge sort pseudo code


mergeSort(list)
    initialize n = list.length
    base case: if n < 2 return
    break the list into halves L and R
    Lsorted = mergeSort(L)
    Rsorted = mergeSort(R)  
    return merge(Lsorted, Rsorted)

mergeSort(list) 
    initialize n to the length of the list

    base case is if n < 2 just return

    initialize mid to n/2

    left = left slice of array to mid - 1

    right = right slide of array mid to n - 1

    mergeSort(left)

    mergeSort(right)

    merge (left, right, a)

time complexity:

O log(n) to divide the list
O(n) to merge the list together

we are doing linear O(n) merging the list together for every time we divide the list O(log(n))
therefore we have O (n * log(n))
 */
