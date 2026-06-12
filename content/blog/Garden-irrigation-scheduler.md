---
external : false
title : "Garden irrigation scheduler"
tag : [Python]
date : 2026-06-12
---

## 1. Problem

한 스마트 가든 시스템은 여러 화단(Bed)에 대한 자동 관수 일정을 관리한다.

각 화단은 일정 시간 동안 물을 공급받으면 토양이 충분히 젖은 상태가 되며, 이후 D초 동안은 추가 관수가 필요하지 않다.

관수 요청은 시간순으로 발생하며 다음 규칙을 따른다.

1. 각 요청은 `(timestamp, bedId)` 형태로 주어진다.
2. 어떤 화단에 관수가 승인되면 해당 화단은 즉시 젖은 상태가 된다.
3. 승인 시각을 T라고 할 때, 구간 `[T, T + D - 1]` 동안 해당 화단은 젖은 상태를 유지한다.
4. 화단이 이미 젖은 상태인 동안 들어온 관수 요청은 모두 무시된다.
5. 화단이 마른 상태일 때 들어온 요청만 승인된다.
6. 서로 다른 화단은 독립적으로 관리된다.

주어진 관수 요청 목록에 대해 실제로 승인된 관수 횟수를 구하시오.

예를 들어 D = 5일 때

```text
1 Rose
3 Rose
5 Rose
6 Rose
10 Rose
```

이라면

```text
1 Rose  -> 승인
3 Rose  -> 무시
5 Rose  -> 무시
6 Rose  -> 승인
10 Rose -> 무시
```

가 된다.

1초에 관수가 승인되면 Rose 화단은 구간 [1,5] 동안 젖어 있다.

따라서 3초와 5초의 요청은 무시되며,
6초에는 다시 마른 상태가 되어 관수가 승인된다.

## 2. Input

첫째 줄에 관수 요청 수 N과 젖은 상태 유지 시간 D가 주어진다.

```text
N D
```

다음 N개의 줄에는 관수 요청 정보가 주어진다.

```text
timestamp bedId
```

## 3. Limit

- 1 ≤ N ≤ 300000
- 1 ≤ D ≤ 10^9
- 0 ≤ timestamp ≤ 10^9
- bedId 길이 : 1 ~ 30
- bedId는 영문 대소문자와 숫자로 구성
- 입력은 timestamp 오름차순으로 주어진다.

## 4. Output

실제로 승인된 관수 횟수를 출력한다.

## 5. Input Example

```text
15 5
1 Rose
2 Rose
3 Tulip
4 Rose
5 Tulip
6 Rose
7 Lily
8 Tulip
9 Lily
10 Rose
11 Tulip
12 Lily
13 Rose
14 Lily
15 Tulip
```

## 6. Output Example

```text
9
```

## 7. Example Explanation

승인 여부는 다음과 같다.

```text
1  Rose  -> 승인
2  Rose  -> 무시

3  Tulip -> 승인

4  Rose  -> 무시

5  Tulip -> 무시

6  Rose  -> 승인

7  Lily  -> 승인

8  Tulip -> 승인

9  Lily  -> 무시

10 Rose  -> 무시

11 Tulip -> 무시

12 Lily  -> 승인

13 Rose  -> 승인

14 Lily  -> 무시

15 Tulip -> 승인
```

따라서 실제 승인된 관수 횟수는 총 9회이다.

이 문제는 해시(Hash), 시뮬레이션(Simulation), 구현(Implementation) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, d = map(int, input().split())

last_watered = {}
answer = 0

for _ in range(n):
    timestamp, bed_id = input().split()
    timestamp = int(timestamp)

    if bed_id not in last_watered:
        last_watered[bed_id] = timestamp
        answer += 1
        continue

    if timestamp >= last_watered[bed_id] + d:
        last_watered[bed_id] = timestamp
        answer += 1

print(answer)
```
