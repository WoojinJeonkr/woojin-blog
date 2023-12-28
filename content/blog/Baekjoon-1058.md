---
external: false
title: "Baekjoon 1058"
date: 2022-11-28
---

## 1. Baekjoon 1058

[문제 확인하기](https://www.acmicpc.net/problem/1058)

## 2. 풀이

```python
n = int(input())
s = []
visit = [[0] * n for i in range(n)]
def floyd():
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if i == j:
                    continue
                if s[i][j] == "Y" or (s[i][k] == "Y" and s[k][j] == "Y"):
                    visit[i][j] = 1
for i in range(n):
    s.append(list(input().strip()))
floyd()
result = 0
for i in range(n):
    cnt = 0
    for j in range(n):
        if visit[i][j] == 1:
            cnt += 1
    result = max(result, cnt)
print(result)
```
