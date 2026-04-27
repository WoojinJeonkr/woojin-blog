---
external : false
title : "Odd sum pair"
tag : [Codechef, Python]
date : 2026-04-27
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/ODDSUMPAIR)에서 확인하실 수 있습니다.

## 2. Answer

```py
class Solution:
    def check_odd_pairs(self, a, b, c):
        # 홀수 개수 계산
        odd_count = (a % 2) + (b % 2) + (c % 2)

        # 짝수 개수 = 전체(3) - 홀수 개수
        even_count = 3 - odd_count

        # 홀수와 짝수가 모두 존재하면 두 수를 골라 홀수 합 가능
        if odd_count >= 1 and even_count >= 1:
            return "YES"
        else:
            return "NO"
```
