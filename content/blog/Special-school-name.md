---
external : false
title : "Special school name"
tag : [Baekjoon, Python]
date : 2026-01-12
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/27889)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 학교 약칭과 정식 명칭을 매핑한 딕셔너리 생성
schools = {
    "NLCS": "North London Collegiate School",
    "BHA": "Branksome Hall Asia",
    "KIS": "Korea International School",
    "SJA": "St. Johnsbury Academy"
}

# 학교의 약칭 입력
abbr = input().strip()

# 입력받은 약칭에 해당하는 정식 명칭 출력
print(schools[abbr])
```
