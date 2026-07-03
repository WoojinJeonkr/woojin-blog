---
external : false
title : "Chimney smoke balancing"
tag : [Python]
date : 2026-07-03
---

## 1. Problem

한 공장에는 일렬로 배치된 `N`개의 굴뚝이 있다.

각 굴뚝은 현재 연기 배출량 `Ai`를 가진다.

환경 기준에 따르면, 인접한 두 굴뚝의 연기 배출량 차이가 `D` 이하이면 하나의 **안정 구간(smoke balancing segment)** 으로 간주한다.

즉, 연속 구간 `[l, r]`에 대해

```text
|Ai - Ai+1| ≤ D
```

를 모든 `l ≤ i < r`에 대해 만족하면 하나의 안정 구간이다.

공장 관리자는 가장 긴 안정 구간의 길이를 알고자 한다.

### 입력

첫째 줄에 굴뚝의 개수 `N`과 기준값 `D`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가장 긴 안정 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ D ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 4
15 18 20 23 40 41 43 45
```

### Example 2

```text
7 2
50 49 48 55 57 58 59
```

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
4
```

## 4. Explanation

### 4.1. Example 1

인접한 굴뚝의 연기 배출량 차이는 다음과 같다.

```text
3, 2, 3, 17, 1, 2, 2
```

`17`이 `D = 4`보다 크므로 안정 구간이 끊어진다.

가장 긴 안정 구간은

```text
15 18 20 23
```

또는

```text
40 41 43 45
```

이며 길이는 `4`이다.

### 4.2. Example 2

인접한 차이는 다음과 같다.

```text
1, 1, 7, 2, 1, 1
```

`7` 때문에 구간이 분리된다.

가장 긴 안정 구간은

```text
55 57 58 59
```

이며 길이는 `4`이다.

## 5. Solution

배열을 왼쪽부터 한 번 순회하면서 현재 안정 구간의 길이를 관리한다.

인접한 두 굴뚝의 연기 배출량 차이가 `D` 이하이면 현재 구간을 이어갈 수 있으므로 길이를 1 증가시킨다.

반대로 `D`를 초과하면 새로운 안정 구간이 시작되므로 현재 길이를 1로 초기화한다.

매 단계마다 지금까지의 최대 길이를 갱신하면 된다.

```text
if |Ai - Ai-1| ≤ D:
    current += 1
else:
    current = 1
```

그리고

```text
answer = max(answer, current)
```

를 수행한다.

배열을 한 번만 순회하므로 시간 복잡도는

```text
O(N)
```

이고,

추가로 사용하는 변수는 상수 개뿐이므로 공간 복잡도는

```text
O(1)
```

이다.

## 6. Answer

```python
import sys

input = sys.stdin.readline

N, D = map(int, input().split())
A = list(map(int, input().split()))

answer = 1
current = 1

for i in range(1, N):
    if abs(A[i] - A[i - 1]) <= D:
        current += 1
    else:
        current = 1

    answer = max(answer, current)

print(answer)
```
