---
external: false
title: "Baekjoon 10804"
date: 2023-10-27
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/10804)

## 2. 정답 코드 (Python, memory: 31120KB, time: 44ms)

```python
cards = list(range(1, 21))  # 1부터 20까지의 숫자로 이루어진 리스트를 생성합니다.

for _ in range(10):  # 10번 반복합니다.
    a, b = map(int, input().split())  # 사용자로부터 두 개의 정수를 입력받습니다.
    cards[a-1:b] = reversed(cards[a - 1:b])  # 입력받은 범위 내의 카드를 뒤집습니다.

print(*cards)  # 뒤집힌 카드들을 출력합니다.
```
