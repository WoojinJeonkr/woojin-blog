---
external : false
title : "Warehouse coordinate placement optimizer"
tag : [Python]
date : 2026-05-23
---

## 1. Problem

한 물류 창고에서는 여러 개의 물건을 일정한 좌표 구역에 배치하려고 한다.

창고는 2차원 좌표 평면으로 구성되어 있으며,
각 물건은 `(x, y)` 형태의 좌표에 배치된다.

단, 물건끼리 너무 가까우면 충돌 위험이 발생하므로
모든 물건 사이의 맨해튼 거리(Manhattan Distance)가
최소 K 이상이어야 한다.

맨해튼 거리는 다음과 같이 정의된다.

|x1 - x2| + |y1 - y2|

N개의 물건 좌표가 주어질 때,
조건을 만족하는지 판별하는 프로그램을 작성하시오.

## 3. Input

- 첫째 줄에 물건의 개수 N과 최소 거리 K가 주어진다.
- 다음 N개의 줄에는 각 물건의 좌표 `x y` 가 주어진다.

## 5. Limit

- 2 ≤ N ≤ 1000
- 1 ≤ K ≤ 10000
- -10000 ≤ x, y ≤ 10000

## 6. Output

- 모든 물건 쌍의 맨해튼 거리가 K 이상이면 `SAFE`
- 하나라도 K 미만이면 `COLLISION` 을 출력한다.

## 7. Input Example

```text
4 5
0 0
3 4
10 2
7 8
```

## 8. Output Example

```text
SAFE
```

## 9. Example Explanation

각 물건 사이의 맨해튼 거리를 계산하면:

- (0,0) ↔ (3,4) = 7
- (0,0) ↔ (10,2) = 12
- (0,0) ↔ (7,8) = 15
- (3,4) ↔ (10,2) = 9
- (3,4) ↔ (7,8) = 8
- (10,2) ↔ (7,8) = 9

모든 거리가 최소 거리 K=5 이상이므로 안전한 배치이다.

## 10. Answer

```py
import sys

input = sys.stdin.readline

# 물건 개수 N과 최소 허용 거리 K 입력
n, k = map(int, input().split())

# 각 물건의 좌표 정보를 리스트에 저장
points = [tuple(map(int, input().split())) for _ in range(n)]

# 현재 상태를 안전하다고 가정
safe = True

# 모든 물건 쌍을 검사
for i in range(n):
    x1, y1 = points[i]

    for j in range(i + 1, n):
        x2, y2 = points[j]

        # 맨해튼 거리 계산
        dist = abs(x1 - x2) + abs(y1 - y2)

        # 최소 거리보다 작으면 충돌 발생
        if dist < k:
            safe = False
            break

    # 이미 충돌이 발생했으면 반복 종료
    if not safe:
        break

# 결과 출력
if safe:
    print("SAFE")
else:
    print("COLLISION")
```
