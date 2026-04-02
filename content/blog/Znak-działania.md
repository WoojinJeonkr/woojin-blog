---
external : false
title : "Znak działania"
tag : [Baekjoon, Python]
date : 2026-04-02
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/8713)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 두 정수 a, b 입력 받기
a, b = map(int, input().split())

# 세 가지 연산 결과를 리스트로 저장 (덧셈, 뺄셈, 곱셈)
li = [a+b, a-b, a*b]

# 최대값 구하기
m = max(li)

# 최대값이 위치한 인덱스 구하기 (0: +, 1: -, 2: *)
idx = li.index(m)

# 결과값이 음수일 경우 괄호로 감싸기 (출력 형식 맞추기)
m = m if m > 0 else f'({m})'

# a가 음수일 경우 괄호로 감싸기
a = a if a > 0 else f'({a})'

# b가 음수일 경우 괄호로 감싸기
b = b if b > 0 else f'({b})'

# 최대값이 여러 개일 경우 (동일한 결과가 2개 이상) "NIE" 출력
if li.count(m) > 1:
    print('NIE')

# 덧셈이 최대값인 경우
elif idx == 0:
    print(f"{a}+{b}={m}")

# 뺄셈이 최대값인 경우
elif idx == 1:
    print(f"{a}-{b}={m}")

# 곱셈이 최대값인 경우
elif idx == 2:
    print(f"{a}*{b}={m}")
```
