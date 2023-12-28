---
external: false
title: "Baekjoon 4806"
date: 2023-08-25
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4806)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
line_count = 0

while True:
    try:
        line = input()
        if not line:
            break  # 빈 줄일 경우 반복문 종료
        line_count += 1
    except EOFError:
        break  # 입력이 끝나면 반복문 종료

print(line_count)
```
