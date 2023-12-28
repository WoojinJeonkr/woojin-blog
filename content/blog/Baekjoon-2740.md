---
external: false
title: "Baekjoon 2740"
date: 2022-12-22
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2740)

## 2. Solution

```python
N, M = map(int, input().split()) 
matrix1 = [] 
for _ in range(N): 
    matrix1.append(list(map(int, input().split()))) 
S, K = map(int, input().split()) 
matrix2 = []
for _ in range(S): 
    matrix2.append(list(map(int, input().split())))
    
result = [[0 for _ in range(K)] for _ in range(N)] 
for n in range(N): 
    for k in range(K): 
        for m in range(M): 
            result[n][k] += matrix1[n][m] * matrix2[m][k] 
            
for row in result: 
    for num in row: 
        print(num, end=' ') 
    print()
```
