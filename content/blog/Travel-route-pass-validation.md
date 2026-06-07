---
external : false
title : "Travel route pass validation"
tag : [Python]
date : 2026-06-07
---

## 1. Problem

한 여행사는 여러 도시를 연결하는 여행 패스를 판매한다.

여행 패스의 규칙은 다음과 같다.

1. 같은 도시는 한 번만 방문할 수 있다.
2. 이동 거리는 항상 양수여야 한다.
3. 지금까지 이동한 누적 거리는 여행 패스의 최대 허용 거리 K를 초과할 수 없다.

여행 기록이 순서대로 주어질 때, 규칙을 처음 위반한 이동 번호를 출력하시오.

모든 이동이 규칙을 만족하면

```text
VALID
```

를 출력한다.

## 2. Input

첫째 줄에 이동 기록의 수 N과 최대 허용 거리 K가 주어진다.

```text
N K
```

이후 N개의 줄에 다음 정보가 주어진다.

```text
city distance
```

- city : 방문 도시 이름
- distance : 직전 도시에서 해당 도시까지 이동 거리

## 3. Limit

- 1 ≤ N ≤ 100000
- 1 ≤ K ≤ 10^12
- city는 길이 1 ~ 30의 영문 문자열
- -10^9 ≤ distance ≤ 10^9

## 4. Output

규칙을 처음 위반한 이동 번호를 출력한다.

모든 이동이 유효하면

```text
VALID
```

를 출력한다.

## 5. Input Example

```text
5 1000
Seoul 120
Busan 350
Daegu 200
Busan 100
Jeju 150
```

## 6. Output Example

```text
4
```

## 7. Example Explanation

4번째 이동에서

```text
Busan
```

을 다시 방문하였다.

같은 도시는 한 번만 방문할 수 있으므로 규칙 1을 위반한다.

따라서 최초 위반 이동 번호는

```text
4
```

이다.

이 문제는 구현(Implementation), 해시(Set), 누적합(Prefix Sum) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

visited = set()
total_distance = 0

for move_no in range(1, n + 1):
    city, dist = input().split()
    dist = int(dist)

    if city in visited:
        print(move_no)
        sys.exit(0)

    if dist <= 0:
        print(move_no)
        sys.exit(0)

    total_distance += dist

    if total_distance > k:
        print(move_no)
        sys.exit(0)

    visited.add(city)

print("VALID")
```
