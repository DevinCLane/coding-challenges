# What's the difference between dynamic programming and divide and conquer techniques?

DP:

-   optimal substructure (tends to be recursive)
-   overlapping subproblems that can be cached over time

Divide and conquer:

-   no overlapping subproblems, cannot be cached
-   in merge sort, the merge step is different every time and thus cannot be cached
