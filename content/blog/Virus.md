---
external : false
title : "Virus"
tag : [Baekjoon, Python]
date : 2026-03-21
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/13775)에서 확인하실 수 있습니다.

## 2 Answer

```py
# 초기 시프트 값 입력
K = int(input())

# 암호화된 문자열 입력
text = input()

# 현재 시프트 값 설정
shift = K
result = []

# 문자열 한 글자씩 순회
for ch in text:
    # 알파벳일 경우만 복호화 수행
    if 'a' <= ch <= 'z':
        # 시프트만큼 뒤로 이동 (복호화)
        new_char = chr((ord(ch) - ord('a') - shift) % 26 + ord('a'))
        result.append(new_char)

        # 알파벳 처리 후 시프트 증가 (1~25 순환)
        shift += 1
        if shift > 25:
            shift = 1
    else:
        # 공백, 숫자, 기호는 그대로 유지
        result.append(ch)

# 결과 출력
print(''.join(result))
```
