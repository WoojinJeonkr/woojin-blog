---
external : false
title : "chino shock"
tag : [Baekjoon, Python]
date : 2026-01-26
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/27310)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 이모지 문자열 입력 (앞뒤 공백 제거)
emoji = input().strip()

# 이모지의 전체 길이 산출
total_length = len(emoji)

# 이모지 안에 포함된 콜론(:)의 개수 산출
colon_count = emoji.count(':')

# 이모지 안에 포함된 언더바(_)의 개수 산출
underscore_count = emoji.count('_')

# 입력 난이도 공식
# (이모지 전체 길이) + (콜론 개수) + (언더바 개수 × 5)
difficulty = total_length + colon_count + underscore_count * 5

# 계산된 입력 난이도 출력
print(difficulty)
```
