---
external: false
title: "Baekjoon 9933"
date: 2023-10-12
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/9933)

## 2. 정답 코드 (Python, memory: 31120KB, time: 44ms)

```python
# 사용자로부터 정수 N을 입력받습니다
N = int(input())

# N개의 패스워드를 입력받아 리스트에 저장합니다
passwords = [input().strip() for _ in range(N)]

# 각 패스워드에 대해 반복문을 실행합니다
for password in passwords:
    # 현재 패스워드의 역순이 리스트에 있는지 확인합니다
    if password[::-1] in passwords:
        # 현재 패스워드의 길이를 구합니다
        length = len(password)
        # 패스워드의 중앙 글자를 찾습니다 (길이가 홀수일 때)
        central_char = password[length // 2]
        # 결과를 출력하고 반복문을 종료합니다
        print(length, central_char)
        break
```
