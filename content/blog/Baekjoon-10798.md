---
external: false
title: "Baekjoon 10798"
date: 2023-04-06
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10798)

## 2. Solution

```python
words = []
for _ in range(5):
    words.append(input())
for i in range(max(len(e) for e in words)):
    for j in range(5):
        if i < len(words[j]):
            print(words[j][i], end='')
```

## 3. Chat GPT가 작성한 코드

```python
# 입력 받기
lines = []
for i in range(5):
    line = input().strip()
    lines.append(line)

# 각 문자열의 최대 길이 계산
max_length = max(len(line) for line in lines)

# 각 문자열에서 i번째 글자 추출하여 출력
for i in range(max_length):
    for j in range(5):
        if i < len(lines[j]):
            print(lines[j][i], end='')
print()
```
