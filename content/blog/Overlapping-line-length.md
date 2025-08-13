---
external : false
title : "Overlapping line length"
tag : [Programmers, Python]
date : 2025-08-13
---

## 1. Problem

해당 문제는 [여기]()에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(lines):
    # -100부터 100까지의 좌표를 나타내는 배열. 각 인덱스는 '좌표 + 100'
    # 배열 값은 해당 좌표를 지나는 선분의 개수
    line_counts = [0] * 201

    # 각 선분에 대해 반복
    for start, end in lines:
        # 선분이 차지하는 각 정수 좌표(start부터 end-1)에 대해
        # 해당 좌표를 지나는 선분 개수 1 증가
        for i in range(start, end):
            line_counts[i + 100] += 1

    answer = 0
    # 선분 개수가 2개 이상인 좌표의 개수를 세어 겹치는 총 길이 계산
    for count in line_counts:
        if count >= 2:
            answer += 1

    return answer
```
