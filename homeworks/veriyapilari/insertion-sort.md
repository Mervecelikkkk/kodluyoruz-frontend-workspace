#  Insertion Sort Project

------

## **[22,27,16,2,18,6]** dizisinin Insertion Sort türüne göre aşamaları:

```
1. Aşama [2,27,16,22,18,6]
2. Aşama [2,6,16,22,18,27]
3. Aşama [2,6,16,18,22,27]
```

## Big-O Gösterimi:

```
1. Aşama [2,27,16,22,18,6] ---> (n-1)
2. Aşama [2,6,16,22,18,27] ---> (n-2)
3. Aşama [2,6,16,18,22,27] --->n

n*(n+1)/2 ---> O(n^2)
```

## Time Complexity:

------

**Average Case:** Aradığımız sayının ortada olması.

**Worst Case:** Aradığımız sayının sonda olması.

**Best Case:** Aradığımız sayının dizinin en başında olması.

------

Dizi sıralandıktan sonra 18 sayısı **Average Case** kapsamına girer.

------

## **[7,3,5,8,2,9,4,15,6**] dizisinin Insertion Sort'a göre ilk 4 adımı:

```
1. Aşama [2,3,5,8,7,9,4,15,6]
2. Aşama [2,3,4,8,7,9,5,15,6]
3. Aşama [2,3,4,5,7,9,8,15,6]
4. Aşama [2,3,4,5,6,9,8,15,7]
```

