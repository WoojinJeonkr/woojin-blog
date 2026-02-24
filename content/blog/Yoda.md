---
external : false
title : "Yoda"
tag : [Baekjoon, Python]
date : 2026-02-24
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5363)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# 문장 개수 입력
sentence_count = int(input().strip())

for _ in range(sentence_count):
    # 문장을 단어 단위로 분리
    words = input().strip().split()

    # 앞의 두 단어를 뒤로 이동
    yoda_sentence = words[2:] + words[:2]

    # 변환된 문장 출력
    print(" ".join(yoda_sentence))
```
