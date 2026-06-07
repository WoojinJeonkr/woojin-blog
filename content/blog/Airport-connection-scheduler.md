---
external : false
title : "Airport connection scheduler"
tag : [Python]
date : 2026-06-07
---

## 1. Problem

한 여행 플랫폼은 공항 환승 일정을 자동으로 검증한다.

각 항공편은 출발 시간과 도착 시간이 기록된다.

환승 일정의 규칙은 다음과 같다.

1. 항공편 번호는 중복될 수 없다.
2. 모든 항공편은 출발 시간보다 늦게 도착해야 한다.
3. 일정 순서대로 탑승한다고 가정할 때, 이전 항공편 도착 후 다음 항공편 출발까지 최소 M분 이상의 환승 시간이 필요하다.

항공편 기록이 주어질 때, 규칙을 처음 위반한 항공편 번호(입력 순서 기준)를 출력하시오.

모든 항공편이 유효하면

```text
VALID
```

를 출력한다.

## 2. Input

첫째 줄에 항공편 수 N과 최소 환승 시간 M이 주어진다.

```text
N M
```

이후 N개의 줄에 다음 정보가 주어진다.

```text
flightNumber departure arrival
```

- flightNumber : 항공편 번호
- departure : 출발 시각(분)
- arrival : 도착 시각(분)

## 3. Limit

- 1 ≤ N ≤ 100000
- 0 ≤ departure, arrival ≤ 10^9
- 0 ≤ M ≤ 100000
- flightNumber는 길이 1 ~ 20의 영문/숫자 문자열

## 4. Output

규칙을 처음 위반한 항공편 번호(입력 순서)를 출력한다.

모든 항공편이 유효하면

```text
VALID
```

를 출력한다.

## 5. Input Example

```text
5 30
KE101 100 200
KE205 250 320
KE310 340 420
KE450 430 500
KE550 520 510
```

## 6. Output Example

```text
5
```

## 7. Example Explanation

5번째 항공편은

```text
520 → 510
```

으로 기록되어 있다.

도착 시간이 출발 시간보다 늦어야 하는 규칙을 위반한다.

따라서 최초 위반 항공편 번호는

```text
5
```

이다.

이 문제는 구현(Implementation), 해시(Set), 시뮬레이션(Simulation) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

used_flights = set()
prev_arrival = None

for idx in range(1, n + 1):
    flight, dep, arr = input().split()

    dep = int(dep)
    arr = int(arr)

    if flight in used_flights:
        print(idx)
        sys.exit(0)

    if arr <= dep:
        print(idx)
        sys.exit(0)

    if prev_arrival is not None:
        if dep - prev_arrival < m:
            print(idx)
            sys.exit(0)

    used_flights.add(flight)
    prev_arrival = arr

print("VALID")
```
