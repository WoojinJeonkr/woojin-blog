---
external: false
title: "Baekjoon 1813"
date: 2023-10-06
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1813)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
N = int(input())  # 사용자로부터 정수 입력 받기
num = list(map(int, input().split()))  # 사용자로부터 숫자 리스트 입력 받기

true_value = [0] * 51  # 0부터 50까지의 숫자를 세기 위한 리스트 초기화
for n in num:
    true_value[n] += 1  # 입력된 숫자의 개수를 카운트하여 true_value 리스트에 저장

true_flag = [j for j in range(len(true_value)) if j == true_value[j]]  # 숫자와 그 숫자의 개수가 같은 경우를 저장하는 리스트 생성

if not true_flag:  # 만약 true_flag가 비어있다면 (입력된 숫자가 없는 경우)
    print(-1)  # -1 출력
else:
    print(max(true_flag))  # true_flag 리스트에서 가장 큰 숫자 출력
```
