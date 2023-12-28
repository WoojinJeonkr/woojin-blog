---
external: false
title: "Baekjoon 15953"
date: 2023-02-27
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/15953)

## 2. Solution

```python
import sys
 
def Agame(ranking):
    if ranking == 1 :return 5000000
    elif 1 < ranking <= 3 : return 3000000 
    elif 3 < ranking <= 6 : return 2000000
    elif 6 < ranking <= 10 : return 500000
    elif 10 < ranking <= 15 : return 300000
    elif 15 < ranking <= 21 : return 100000
    else : return 0
    
    
def Bgame(ranking): 
    if ranking == 1 : return 5120000 
    elif 1 < ranking <= 3 : return 2560000 
    elif 3 < ranking <= 7 : return 1280000
    elif 7 < ranking <= 15 : return 640000
    elif 15 < ranking <= 31 : return 320000
    else : return 0

N = int(sys.stdin.readline())
for i in range(N):
    a, b = map(int, sys.stdin.readline().split())
    print(Agame(a) + Bgame(b))
```
