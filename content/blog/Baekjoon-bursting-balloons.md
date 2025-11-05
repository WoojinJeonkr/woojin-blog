---
external : false
title : "Baekjoon bursting balloons"
tag : [Baekjoon, Python]
date : 2025-11-05
---

## 1. Problem

해당 문제는 [여기]()에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

n = int(input())  # 풍선의 개수 입력
balloons = list(map(int, input().split()))  # 각 풍선 안의 숫자 입력

dq = deque((i + 1, balloons[i]) for i in range(n))  # (풍선 번호, 이동값)으로 덱 초기화
result = []  # 터진 풍선 순서를 저장할 리스트

while dq:
    num, move = dq.popleft()  # 풍선을 터뜨림
    result.append(num)  # 터진 풍선 번호 기록
    
    if not dq:  # 모든 풍선이 터졌다면 종료
        break

    if move > 0:
        dq.rotate(-(move - 1))  # 양수면 오른쪽으로 이동
    else:
        dq.rotate(-move)  # 음수면 왼쪽으로 이동

print(*result)  # 터진 풍선의 순서 출력
```
