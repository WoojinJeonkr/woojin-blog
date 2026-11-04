---
external: false
title: "Movie theater seat allocation"
tag: [Python]
date: 2026-11-04
---

## 1. Problem

영화관에서는 관객들이 원하는 좌석을 선택하여 영화를 관람할 수 있도록 좌석 예약 시스템을 운영한다.

영화관의 좌석은 1번부터 10번까지 있으며, 처음에는 모든 좌석이 비어 있다.

관객의 좌석 예약 요청이 순서대로 주어졌을 때 예약 성공 여부를 확인하는 프로그램을 작성하시오.

예약 규칙은 다음과 같다.

- 해당 좌석이 비어 있으면 예약에 성공하고 `SUCCESS`를 출력한다.
- 해당 좌석에 이미 다른 관객이 예약했다면 예약에 실패하고 `FAIL`을 출력한다.
- 예약에 성공한 좌석은 이후 취소되지 않는다.

모든 예약 요청을 처리한 후 예약된 좌석 번호를 오름차순으로 출력하고, 남은 좌석 수를 출력한다.

### 입력

첫째 줄에 예약 요청 횟수 \(N\)이 주어진다.

둘째 줄에 관객들이 요청한 좌석 번호가 공백으로 구분되어 주어진다.

### 출력

첫째 줄부터 \(N\)개의 줄에 각 예약 요청의 결과를 순서대로 출력한다.

그다음 줄에는 예약된 좌석 번호를 오름차순으로 출력한다. 예약된 좌석이 없다면 `NONE`을 출력한다.

마지막 줄에는 남은 좌석 수를 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 좌석 번호는 1 이상 10 이하의 정수이다.
- 입력된 좌석 번호의 개수는 \(N\)개이다.

## 2. Input example

### Example 1

```text
6
3 5 3 8 1 5
```

### Example 2

```text
5
2 4 6 8 10
```

## 3. Output example

### 3.1. Example 1

```text
SUCCESS
SUCCESS
FAIL
SUCCESS
SUCCESS
FAIL
1 3 5 8
6
```

### 3.2. Example 2

```text
SUCCESS
SUCCESS
SUCCESS
SUCCESS
SUCCESS
2 4 6 8 10
5
```

## 4. Explanation

### 4.1. Example 1

예약 요청은 `3, 5, 3, 8, 1, 5` 순서로 들어온다.

- 3번 좌석: 비어 있으므로 예약 성공
- 5번 좌석: 비어 있으므로 예약 성공
- 3번 좌석: 이미 예약되어 있으므로 예약 실패
- 8번 좌석: 비어 있으므로 예약 성공
- 1번 좌석: 비어 있으므로 예약 성공
- 5번 좌석: 이미 예약되어 있으므로 예약 실패

최종 예약 좌석은 `1, 3, 5, 8`이며, 남은 좌석은 6개이다.

### 4.2. Example 2

모든 요청 좌석이 서로 다르므로 예약이 모두 성공한다.

최종 예약 좌석은 `2, 4, 6, 8, 10`이며, 남은 좌석은 5개이다.

## 5. Answer

```python
n = int(input())
requests = list(map(int, input().split()))

reserved = set()
results = []

for seat in requests:
    if seat in reserved:
        results.append("FAIL")
    else:
        reserved.add(seat)
        results.append("SUCCESS")

if reserved:
    results.append(" ".join(map(str, sorted(reserved))))
else:
    results.append("NONE")

remaining = 10 - len(reserved)
results.append(str(remaining))

print("\n".join(results))
```
