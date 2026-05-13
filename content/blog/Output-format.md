---
external : false
title : "Output format"
tag : [Codechef, Python]
date : 2026-05-13
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/BOOKPAGES)에서 확인하실 수 있습니다.

## 2. Answer

```py
class Solution:
    def check_array(self, A):
        # 홀수 개수 계산
        odd_count = 0

        for page in A:
            if page % 2 == 1:
                odd_count += 1

        # 홀수 개수가 짝수이면 가능
        if odd_count % 2 == 0:
            return "YES"
        else:
            return "NO"
```
