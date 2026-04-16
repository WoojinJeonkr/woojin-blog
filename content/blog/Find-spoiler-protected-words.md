---
external : false
title : "Find spoiler protected words"
tag : [Baekjoon, Python]
date : 2026-04-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/468370)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(message, spoiler_ranges):
    n = len(message)

    # 1. 단어 분리 (start, end, word)
    words = []
    i = 0
    while i < n:
        if message[i] == ' ':
            i += 1
            continue

        start = i
        while i < n and message[i] != ' ':
            i += 1
        end = i - 1

        words.append((start, end, message[start:i]))

    # 2. 스포 문자 표시
    is_spoiler_char = [False] * n
    for s, e in spoiler_ranges:
        for i in range(s, e + 1):
            is_spoiler_char[i] = True

    # 3. 단어별 스포 여부 / 일반 등장 여부
    spoiler_words = set()
    normal_words = set()

    for start, end, word in words:
        is_spoiler = False
        for i in range(start, end + 1):
            if is_spoiler_char[i]:
                is_spoiler = True
                break

        if is_spoiler:
            spoiler_words.add(word)
        else:
            normal_words.add(word)

    # 4. 각 스포 구간에 포함된 단어들 (왼쪽 순)
    range_to_words = []

    for s, e in spoiler_ranges:
        current = []
        for start, end, word in words:
            if not (end < s or start > e):  # 겹침 체크
                current.append((start, word))

        current.sort()
        range_to_words.append([w for _, w in current])

    # 5. 시뮬레이션
    revealed = set()
    answer = 0

    for word_list in range_to_words:
        for word in word_list:
            if word in revealed:
                continue

            if word in spoiler_words and word not in normal_words:
                answer += 1

            revealed.add(word)

    return answer
```
