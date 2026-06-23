---
external : false
title : "Descending energy path"
tag : [Python]
date : 2026-06-23
---

## 1. Problem

한 산악 연구소에서는 여러 지점의 고도를 기록한 데이터를 분석하고 있다.

총 `N`개의 지점이 일렬로 나열되어 있으며, 각 지점의 고도는 `A1, A2, ..., AN`이다.

연구원들은 연속된 구간 중에서 **엄격하게 감소하는(Strictly Descending)** 구간을 찾고자 한다.

어떤 연속 구간 `[l, r]`이 다음 조건을 만족하면 이를 **하강 경로(Descending Energy Path)** 라고 부른다.

```text
Al > A(l+1) > A(l+2) > ... > Ar
```

즉, 구간 내의 인접한 모든 원소가 왼쪽에서 오른쪽으로 갈수록 반드시 작아져야 한다.

연구원은 만들 수 있는 모든 하강 경로 중 길이가 가장 긴 구간의 길이를 구하고자 한다.

---

### 입력

첫째 줄에 지점의 개수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

---

### 출력

가장 긴 하강 경로의 길이를 출력한다.

---

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
8
15 12 10 9 11 8 7 6
```

### Example 2

```text
10
30 28 25 25 24 20 18 16 19 10
```

---

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
4
```

---

## 4. Explanation

### 4.1. Example 1

수열

```text
15 12 10 9
```

는

```text
15 > 12 > 10 > 9
```

를 만족하므로 길이 `4`의 하강 경로이다.

이후 `9 < 11`이 되어 감소가 끊어진다.

뒤의 구간

```text
11 8 7 6
```

역시 길이 `4`의 하강 경로이다.

따라서 정답은 `4`이다.

---

### 4.2. Example 2

구간

```text
25 24 20 18 16
```

은 길이 `5`처럼 보이지만,

앞의 두 원소가

```text
25 25
```

로 같기 때문에 감소가 끊어진다.

실제로 가능한 가장 긴 하강 경로는

```text
25 24 20 18
```

또는

```text
24 20 18 16
```

이며 길이는 `4`이다.

---

## 5. Solution

연속된 구간이 엄격히 감소하는지만 확인하면 된다.

왼쪽부터 순회하면서 현재 감소 구간의 길이를 관리한다.

- `A[i-1] > A[i]` 이면 현재 하강 경로가 계속되므로 길이를 1 증가시킨다.
- 그렇지 않으면 새로운 하강 경로가 시작되므로 길이를 1로 초기화한다.

매 단계마다 최댓값을 갱신하면 된다.

각 원소를 한 번만 확인하므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간 복잡도는

```text
O(1)
```

이다.

---

## 6. Answer

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

answer = 1
current = 1

for i in range(1, N):
    if A[i - 1] > A[i]:
        current += 1
    else:
        current = 1

    answer = max(answer, current)

print(answer)
```
