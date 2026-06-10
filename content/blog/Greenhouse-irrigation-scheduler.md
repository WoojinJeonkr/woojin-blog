---
external : false
title : "Greenhouse irrigation scheduler"
tag : [Python]
date : 2026-06-10
---

## 1. Problem

한 스마트 온실에서는 물 사용량을 줄이기 위해 자동 관수 시스템을 운영한다.

각 화분은 고유한 plantId를 가지며, 마지막 관수 시각으로부터 K시간 이상 경과해야 다시 물을 줄 수 있다.

관수 요청은 시간순으로 발생하며 다음 규칙을 따른다.

1. 처음 등장한 화분은 즉시 관수한다.
2. 같은 plantId의 관수 요청은 마지막 관수 시각으로부터 K시간 이상 경과한 경우에만 수행된다.
3. K시간이 지나지 않았다면 해당 요청은 무시된다.
4. 서로 다른 plantId는 독립적으로 관리된다.

주어진 관수 요청 목록에 대해 실제로 수행된 관수 횟수를 구하시오.

예를 들어 K = 5 일 때

```text
1 Rose
3 Rose
6 Rose
10 Rose
```

이라면

```text
1 Rose  -> 관수
3 Rose  -> 무시
6 Rose  -> 관수
10 Rose -> 무시
```

가 된다.

## 2. Input

첫째 줄에 관수 요청 수 N과 최소 관수 간격 K가 주어진다.

```text
N K
```

다음 N개의 줄에는 관수 요청 정보가 주어진다.

```text
time plantId
```

## 3. Limit

- 1 ≤ N ≤ 300000
- 1 ≤ K ≤ 10^9
- 0 ≤ time ≤ 10^9
- plantId 길이 : 1 ~ 30
- plantId는 영문 대소문자와 숫자로 구성
- 입력은 time 오름차순으로 주어진다.

## 4. Output

실제로 수행된 관수 횟수를 출력한다.

## 5. Input Example

```text
12 5
1 Rose
2 Tulip
4 Rose
7 Rose
8 Tulip
10 Lily
11 Tulip
13 Rose
16 Lily
17 Rose
20 Tulip
25 Rose
```

## 6. Output Example

```text
9
```

## 7. Example Explanation

관수 수행 결과는 다음과 같다.

```text
1  Rose  -> 관수
2  Tulip -> 관수
4  Rose  -> 무시
7  Rose  -> 관수
8  Tulip -> 관수
10 Lily  -> 관수
11 Tulip -> 무시
13 Rose  -> 관수
16 Lily  -> 관수
17 Rose  -> 무시
20 Tulip -> 관수
25 Rose  -> 관수
```

실제로 관수된 횟수는 총 9회이다.

이 문제는 해시(Hash), 자료구조(Data Structure), 시뮬레이션(Simulation) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

last_watered = {}
answer = 0

for _ in range(n):
    time, plant_id = input().split()
    time = int(time)

    if plant_id not in last_watered:
        answer += 1
        last_watered[plant_id] = time
    elif time - last_watered[plant_id] >= k:
        answer += 1
        last_watered[plant_id] = time

print(answer)
```
