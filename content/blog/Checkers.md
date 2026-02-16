---
external : false
title : "Checkers"
tag : [Baekjoon, Python]
date : 2026-02-16
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/21631)에서 확인해주실 수 있습니다.

## 2. Answer

```py
# 흰 말(a), 검은 말(b) 입력
a, b = map(int, input().split())

# 최대 검은 줄 개수 계산
result = min(b, a + 1)

# 결과 출력
print(result)
```
