---
external : false
title : "Toy donation scheduler"
tag : [Python]
date : 2026-06-25
---

## 1. Problem

한 보육원에서는 아이들에게 장난감을 나누어 주는 행사를 준비하고 있다.

행사는 앞으로 `N`일 동안 진행되며, `i`번째 날에는 `Ai`명의 아이가 장난감을 필요로 한다.

보육원은 장난감을 하루가 끝난 뒤에 추가로 기부받을 수 있으며, 한 번 기부받은 장난감은 이후 날짜에도 계속 사용할 수 있다.

따라서 어떤 날 필요한 장난감 수가 현재 보유한 장난감 수보다 많다면, 부족한 수만큼만 추가 기부를 받아야 한다.

보육원은 행사 기간 동안 **총 몇 개의 장난감을 추가로 기부받아야 하는지** 계산하려고 한다.

### 입력

첫째 줄에 행사 기간 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

행사 기간 동안 추가로 기부받아야 하는 장난감의 총 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
6
2 5 3 7 6 10
```

### Example 2

```text
8
0 3 3 5 2 5 9 9
```

## 3. Output Example

### 3.1. Example 1

```text
10
```

### 3.2. Example 2

```text
9
```

## 4. Explanation

### 4.1. Example 1

장난감 수의 변화는 다음과 같다.

| 날짜 | 필요한 장난감 수 | 추가 기부 |
| ---- | ---------------- | -------- |
| 1 | 2 | 2 |
| 2 | 5 | 3 |
| 3 | 3 | 0 |
| 4 | 7 | 2 |
| 5 | 6 | 0 |
| 6 | 10 | 3 |

따라서 총 기부받아야 하는 장난감 수는

```text
2 + 3 + 2 + 3 = 10
```

개이다.

### 4.2. Example 2

필요한 장난감 수가 증가하는 시점은 다음과 같다.

```text
0 → 3 → 5 → 9
```

따라서 추가 기부 수는

```text
3 + 2 + 4 = 9
```

개이다.

## 5. Solution

현재까지 확보한 장난감 수를 `current`라고 하자.

각 날짜를 순회하면서,

- `Ai > current`이면 `Ai - current`개를 추가로 기부받는다.
- 이후 `current = Ai`로 갱신한다.
- `Ai ≤ current`이면 추가 기부는 필요하지 않다.

즉, 배열에서 이전까지의 최대값이 증가한 양의 합을 구하면 된다.

배열을 한 번만 순회하므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간 복잡도는

```text
O(1)
```

이다.

## 6. Answer

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

answer = 0
current = 0

for need in A:
    if need > current:
        answer += need - current
        current = need

print(answer)
```
