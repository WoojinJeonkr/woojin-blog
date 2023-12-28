---
external: false
title: "Baekjoon 2810"
date: 2023-09-21
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2810)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
# 사용자로부터 정수를 입력받아 변수 n에 저장
n = int(input())

# 사용자로부터 문자열을 입력받아 변수 data에 저장
data = input()

# 'L' 문자의 개수를 세기 위한 변수 초기화
count = 0

# 문자열을 순회하며 'L' 문자의 개수를 센다
for i in range(len(data)):
    if data[i] == 'L':
        count += 1

# 'L' 문자의 개수에 따라 결과를 출력
if count == 0:  # 만약 'L' 문자가 하나도 없다면
    print(n)    # 결과로 입력받은 정수 n을 그대로 출력
else:           # 그렇지 않다면 (적어도 하나 이상의 'L' 문자가 있다면)
    # 결과로 출력할 값을 계산하고 출력
    # 'L' 문자의 개수를 반으로 나누고 1을 빼서 결과로 출력
    print(n - (count // 2 - 1))
```
