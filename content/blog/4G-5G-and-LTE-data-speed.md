---
external : false
title : "4G 5G and LTE data speed"
tag : [Python]
date : 2026-08-17
---

## 1. Problem

한 통신사는 `4G`, `5G`, `LTE` 네트워크의 데이터 전송 속도를 측정하고 있다.

측정 구간 동안 시간 순서대로 데이터 전송 속도가 기록되며, `Speed`는 측정된 데이터 속도를 순서대로 저장한 배열이다.

통신사는 특정 시간 구간의 네트워크 품질을 분석하기 위해 연속된 측정 구간을 선택한다.

연속된 구간의 평균 데이터 속도가 `K` 이상인 경우 해당 구간을 **고속 통신 구간**이라고 정의한다.

단, 소수점 계산으로 인한 오차를 피하기 위해 평균을 직접 계산하지 않고 다음 조건을 사용한다.

구간의 데이터 속도 합이

```text
K × 구간의 길이
```

이상이라면 해당 구간은 고속 통신 구간이다.

통신사는 고속 통신 구간 중 **가장 긴 구간의 길이**를 구하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Speed`가 공백으로 구분되어 주어진다.

각 `Speed`는 4G, 5G 또는 LTE 환경에서 측정된 데이터 전송 속도를 의미한다.

### 출력

평균 데이터 속도가 `K` 이상인 연속 구간 중 가장 긴 구간의 길이를 출력한다.

조건을 만족하는 구간이 없다면 `0`을 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ K ≤ 10^9`
- `1 ≤ Speed의 각 원소 ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 50
40 55 60 45 70 80 35 65
```

### Example 2

```text
7 100
80 120 110 90 130 70 140
```

## 3. Output Example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
7
```

## 4. Explanation

### 4.1. Example 1

측정된 데이터 속도는 다음과 같다.

```text
40 55 60 45 70 80 35 65
```

기준 데이터 속도 `K`는 `50`이다.

각 속도에서 `K`를 빼면 다음과 같이 생각할 수 있다.

```text
-10 5 10 -5 20 30 -15 15
```

어떤 연속 구간의 평균 속도가 `50` 이상이라는 것은 해당 구간에서 위 값들의 합이 `0` 이상이라는 것과 같다.

예를 들어 다음 구간을 확인한다.

```text
55 60 45 70 80
```

구간의 데이터 속도 합은

```text
55 + 60 + 45 + 70 + 80 = 310
```

구간의 길이는 `5`이므로 기준값과 비교하면

```text
50 × 5 = 250
```

이다.

따라서

```text
310 >= 250
```

이므로 평균 데이터 속도는 `50` 이상이다.

더 긴 구간에서도 조건을 확인할 수 있지만, 가장 긴 조건 만족 구간의 길이는

```text
5
```

이다.

### 4.2. Example 2

측정된 데이터 속도는 다음과 같다.

```text
80 120 110 90 130 70 140
```

기준 데이터 속도 `K`는 `100`이다.

전체 구간의 데이터 속도 합은

```text
80 + 120 + 110 + 90 + 130 + 70 + 140 = 740
```

이고 전체 구간의 기준값은

```text
100 × 7 = 700
```

이다.

따라서

```text
740 >= 700
```

이므로 전체 구간의 평균 데이터 속도는 `100` 이상이다.

전체 구간의 길이가 `7`이므로 정답은

```text
7
```

이다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

N, K = map(int, input().split())
Speed = list(map(int, input().split()))

prefix = 0
minimum_prefix = 0
answer = 0

prefix_values = [0]

for value in Speed:
    prefix += value - K
    prefix_values.append(prefix)

for right in range(1, N + 1):
    if prefix_values[right] >= minimum_prefix:
        answer = right

    minimum_prefix = min(minimum_prefix, prefix_values[right])

print(answer)
```
