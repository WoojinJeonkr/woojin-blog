---
external : false
title : "Algorithm running time 4"
tag : [Baekjoon, Python]
date : 2025-12-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/24265)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력된 n을 정수로 변환하여 읽어옴
n = int(input().strip())

# 코드1의 수행 횟수 계산
# 이중 반복문에서 j는 항상 i보다 크므로 총 수행 횟수는 nC2 = n*(n-1)/2
count = n * (n - 1) // 2

# 코드1 수행 횟수 출력
print(count)

# 수행 시간의 최고차항 차수 출력
# n*(n-1)/2는 n^2에 비례하므로 최고차항의 차수는 2
print(2)
```
