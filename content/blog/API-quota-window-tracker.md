---
external : false
title : "API quota window tracker"
tag : [Python]
date : 2026-06-11
---

## 1. Problem

한 API Gateway는 고객별 API 호출 사용량을 추적한다.

각 고객(clientId)은 최근 W초 동안 발생한 API 요청 수가 최대 K개를 초과할 수 없다.

요청은 시간순으로 들어오며 다음 규칙을 따른다.

1. 각 요청은 `(timestamp, clientId)` 형태로 주어진다.
2. 현재 요청 시각을 T라고 할 때, 구간 `[T - W + 1, T]` 내의 승인된 요청 개수를 계산한다.
3. 해당 clientId의 승인된 요청 수가 이미 K개라면 현재 요청은 거부된다.
4. K개 미만이라면 현재 요청은 승인된다.
5. 서로 다른 clientId는 독립적으로 관리된다.

주어진 API 요청 목록에 대해 실제 승인된 요청 수를 구하시오.

예를 들어 W = 5, K = 3 일 때

```text
1 A
2 A
3 A
4 A
8 A
```

이라면

```text
1 A -> 승인
2 A -> 승인
3 A -> 승인
4 A -> 거부
8 A -> 승인
```

가 된다.

4초 시점에서는 최근 5초 구간 [0,4] 안에 이미
1, 2, 3초의 승인 요청 3개가 존재하기 때문이다.

## 2. Input

첫째 줄에 API 요청 수 N, 시간 구간 W, 허용 요청 수 K가 주어진다.

```text
N W K
```

다음 N개의 줄에는 API 요청 정보가 주어진다.

```text
timestamp clientId
```

## 3. Limit

- 1 ≤ N ≤ 300000
- 1 ≤ W ≤ 10^9
- 1 ≤ K ≤ 300000
- 0 ≤ timestamp ≤ 10^9
- clientId 길이 : 1 ~ 30
- clientId는 영문 대소문자와 숫자로 구성
- 입력은 timestamp 오름차순으로 주어진다.

## 4. Output

실제로 승인된 API 요청 수를 출력한다.

## 5. Input Example

```text
15 5 3
1 A
2 A
3 A
4 A
5 B
6 A
7 B
8 A
9 B
10 A
11 B
12 B
13 A
14 B
15 A
```

## 6. Output Example

```text
11
```

## 7. Example Explanation

승인 여부는 다음과 같다.

```text
1  A -> 승인
2  A -> 승인
3  A -> 승인
4  A -> 거부

5  B -> 승인

6  A -> 승인

7  B -> 승인

8  A -> 승인

9  B -> 승인

10 A -> 승인

11 B -> 승인

12 B -> 승인

13 A -> 승인

14 B -> 거부

15 A -> 승인
```

따라서 승인된 요청 수는 총 11개이다.

이 문제는 해시(Hash), 큐(Queue), 슬라이딩 윈도우(Sliding Window), 시뮬레이션(Simulation) 문제이다.

## 8. Answer

```py
import sys
from collections import defaultdict, deque

input = sys.stdin.readline

n, w, k = map(int, input().split())

approved = defaultdict(deque)
answer = 0

for _ in range(n):
    timestamp, client_id = input().split()
    timestamp = int(timestamp)

    q = approved[client_id]

    while q and q[0] < timestamp - w + 1:
        q.popleft()

    if len(q) < k:
        q.append(timestamp)
        answer += 1

print(answer)
```
