---
external : false
title : "Ranklist pages"
tag : [Codechef, Python]
date : 2026-05-12
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/RANKLISTPAGE)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스 개수 입력
T = int(input())

# 테스트 케이스만큼 반복
for _ in range(T):
    # Chef의 등수 입력
    X = int(input())

    # 한 페이지당 25명씩 있으므로 페이지 번호 계산
    # 예: 1~25 -> 1페이지, 26~50 -> 2페이지
    page = (X - 1) // 25 + 1

    # 결과 출력
    print(page)
```
