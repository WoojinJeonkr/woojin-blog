---
external : false
title : "Space station corridor alignment"
tag : [Python]
date : 2026-05-18
---

## 1. Problem

한 우주 정거장에는 여러 개의 통로 연결 장치가 2차원 평면 위에 설치되어 있다.

각 장치는 서로 다른 좌표에 위치하며,
정거장 관리 시스템은 모든 장치를 하나의 기준 위치로 이동시켜
정렬하려고 한다.

한 번의 이동으로 장치를 상하좌우 방향으로 1칸 이동할 수 있다.

모든 장치를 하나의 좌표로 모으기 위한 최소 이동 횟수를 구하시오.

## 3. Input

- 첫째 줄에 장치의 개수 N이 주어진다.
- 다음 N개의 줄에는 각 장치의 좌표 X, Y가 공백으로 구분되어 주어진다.

## 5. Limit

- 1 ≤ N ≤ 200,000
- -1,000,000,000 ≤ X, Y ≤ 1,000,000,000

## 6. Output

- 모든 장치를 하나의 좌표로 이동시키기 위한 최소 이동 횟수를 출력한다.

## 7. Input Example

```text
5
1 2
2 4
3 1
5 2
4 3
```

## 8. Output Example

```text
10
```

## 9. Example Explanation

```text
모든 장치를 (3, 2) 위치로 이동한다고 가정하면

(1, 2) → (3, 2) : 2회
(2, 4) → (3, 2) : 3회
(3, 1) → (3, 2) : 1회
(5, 2) → (3, 2) : 2회
(4, 3) → (3, 2) : 2회

총 이동 횟수는 10회이다.
```

## 10. Answer

```py
import sys

input = sys.stdin.readline

N = int(input())

xs = []
ys = []

for _ in range(N):
    x, y = map(int, input().split())
    xs.append(x)
    ys.append(y)

# 맨해튼 거리의 최소는 각 좌표의 중앙값
xs.sort()
ys.sort()

target_x = xs[N // 2]
target_y = ys[N // 2]

answer = 0

for x in xs:
    answer += abs(x - target_x)

for y in ys:
    answer += abs(y - target_y)

print(answer)
```
