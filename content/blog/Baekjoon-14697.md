---
external: false
title: "Baekjoon 14697"
date: 2023-11-08
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/14697)

## 2. 정답 코드 (Python, memory: 31120KB, time: 44ms)

```python
# 입력 받기
a, b, c, n = map(int, input().split())

# 브루트포스 알고리즘으로 모든 경우의 수 확인
for i in range(n//a + 1):  # 5인실을 최대한 사용하는 경우부터 시작
    for j in range((n - i*a)//b + 1):  # 9인실을 최대한 사용하는 경우부터 시작
        if (n - i*a - j*b) % c == 0:  # 남은 학생 수가 12인실의 배수인 경우
            print(1)  # 빈 침대 없이 배정 가능하므로 1 출력
            exit()  # 프로그램 종료
print(0)  # 모든 경우를 확인해도 빈 침대 없이 배정할 수 없는 경우 0 출력
```
