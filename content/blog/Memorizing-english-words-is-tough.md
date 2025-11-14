---
external : false
title : "Memorizing english words is tough"
tag : [Baekjoon, Python]
date : 2025-11-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/20920)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
# 빠른 입력을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 단어 개수 N과 외울 단어 기준 길이 M 입력
N, M = map(int, input().split())

# 단어와 등장 횟수를 저장할 딕셔너리
words = {}

for _ in range(N):
    # 단어 입력, 개행 제거
    w = input().rstrip()
    # 단어 길이가 M 이상인 경우만 카운트
    if len(w) >= M:
        # 단어 등장 횟수 증가
        words[w] = words.get(w, 0) + 1

# 등장 횟수 내림차순, 길이 내림차순, 알파벳 오름차순 정렬
sorted_words = sorted(words.items(), key=lambda x: (-x[1], -len(x[0]), x[0]))

for w, _ in sorted_words:
    # 정렬된 단어 출력
    print(w)
```
