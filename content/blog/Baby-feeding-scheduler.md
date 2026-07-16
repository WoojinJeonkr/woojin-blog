---
external : false
title : "Baby feeding scheduler"
tag : [Python]
date : 2026-07-16
---

## 1. Problem

한 어린이집에서는 영유아의 수유 기록을 관리하는 시스템을 사용한다.

각 아이는 고유한 babyId를 가지며, 마지막 수유 시각으로부터 K분 이상 지나야 다음 수유를 진행할 수 있다.

수유 요청은 시간순으로 입력되며 다음 규칙을 따른다.

1. 처음 등장한 babyId는 즉시 수유한다.
2. 같은 babyId의 다음 수유 요청은 마지막 수유 시각으로부터 K분 이상 경과한 경우에만 수행된다.
3. K분이 지나지 않았다면 해당 요청은 무시된다.
4. 서로 다른 babyId는 독립적으로 관리된다.

주어진 수유 요청 목록에 대해 실제로 수행된 수유 횟수를 구하시오.

예를 들어 K = 20 일 때

```text
5 Emma
15 Emma
28 Emma
40 Emma
```

이라면

```text
5 Emma  -> 수유
15 Emma -> 무시
28 Emma -> 수유
40 Emma -> 무시
```

가 된다.

첫 번째 수유가 수행된 이후,

같은 babyId의 다음 수유는 마지막 수유 시각으로부터 K분 이상 지나야 다시 수행될 수 있다.

## 2. Input

첫째 줄에 수유 요청 수 N과 최소 수유 간격 K가 주어진다.

```text
N K
```

다음 N개의 줄에는 수유 요청 정보가 주어진다.

```text
time babyId
```

## 3. Limit

- 1 ≤ N ≤ 300000
- 1 ≤ K ≤ 10^9
- 0 ≤ time ≤ 10^9
- babyId 길이 : 1 ~ 30
- babyId는 영문 대소문자와 숫자로 구성
- 입력은 time 오름차순으로 주어진다.

## 4. Output

실제로 수행된 수유 횟수를 출력한다.

## 5. Input Example

```text
12 20
5 Emma
8 Noah
15 Emma
25 Noah
28 Emma
35 Liam
42 Noah
50 Emma
58 Liam
63 Emma
70 Noah
85 Emma
```

## 6. Output Example

```text
9
```

## 7. Example Explanation

수유 수행 결과는 다음과 같다.

```text
5  Emma -> 수유
8  Noah -> 수유
15 Emma -> 무시
25 Noah -> 무시
28 Emma -> 수유
35 Liam -> 수유
42 Noah -> 수유
50 Emma -> 수유
58 Liam -> 수유
63 Emma -> 무시
70 Noah -> 수유
85 Emma -> 수유
```

실제로 수행된 수유는 총 9회이다.

이 문제는 해시(Hash), 자료구조(Data Structure), 시뮬레이션(Simulation) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

last_fed = {}
feed_count = 0

for _ in range(n):
    time, baby_id = input().split()
    time = int(time)

    if baby_id not in last_fed:
        feed_count += 1
        last_fed[baby_id] = time
    elif time - last_fed[baby_id] >= k:
        feed_count += 1
        last_fed[baby_id] = time

print(feed_count)
```
