---
external: false
title: "Baekjoon 1308"
date: 2022-12-01
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1308)

## 2. Solution

문제에 나온 조건을 활용하여 구하면 되는 문제이다.

```python
import datetime

y1,m1,d1 = map(int,input().split())
y2,m2,d2 = map(int,input().split())

day_interval = int(str(datetime.date(y2,m2,d2) - datetime.date(y1,m1,d1)).split()[0])

plus_day = 0 
for i in range(0,1000) :
    if i % 400 == 0 :
        plus_day += 366
    elif i % 100 == 0 :
        plus_day += 365
    elif i % 4 == 0 :
        plus_day += 366
    else :
        plus_day += 365

if day_interval >= plus_day :
    print('gg')
else :
    print(f'D-{day_interval}')
```
