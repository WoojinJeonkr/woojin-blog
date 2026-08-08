---
external : false
title : "Advertising campaign"
tag : [Python]
date : 2026-08-08
---

## 1. Problem

한 광고 회사는 앞으로 `N`일 동안 온라인 광고를 집행할 예정이다.

`Ai`는 `i`번째 날에 기록된 광고 노출 수를 의미한다.

회사는 광고 성과를 분석하기 위해 특정 기간의 광고 노출 합을 자주 확인한다.

하나의 광고 구간은 연속된 날짜 구간으로 정의된다.

광고 구간의 성과는 해당 구간의 노출 수 합으로 계산된다.

광고 회사는 모든 연속 구간 중 노출 수 합이 정확히 `K`가 되는 구간의 개수를 구하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

노출 수 합이 정확히 `K`가 되는 연속 구간의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `-10^9 ≤ Ai ≤ 10^9`
- `-10^14 ≤ K ≤ 10^14`

---

## 2. Input Example

### Example 1

```text
5 5
1 2 3 2 2
```

### Example 2

```text
6 4
2 2 2 2 2 2
```

---

## 3. Output Example

### 3.1. Example 1

```text
2
```

### 3.2. Example 2

```text
5
```

---

## 4. Explanation

### 4.1. Example 1

합이 5인 광고 구간은 다음과 같다.

```text
[2, 3]
[3, 4]
```

각 구간의 노출 수 합은

```text
2 + 3 = 5
3 + 2 = 5
```

이다.

따라서 정답은

```text
2
```

이다.

### 4.2. Example 2

합이 4인 광고 구간은 다음과 같다.

```text
(1,2)
(2,3)
(3,4)
(4,5)
(5,6)
```

총

```text
5
```

개의 구간이 존재한다.

---

## 5. Answer

### 풀이

연속 구간의 합을 빠르게 계산하기 위해 누적합을 사용한다.

현재까지의 누적합을 `prefix`라고 하자.

어떤 구간의 합이 `K`가 되려면

```text
prefix[j] - prefix[i] = K
```

를 만족해야 한다.

이를 변형하면

```text
prefix[i] = prefix[j] - K
```

가 된다.

따라서 현재 누적합이 `prefix`일 때 이전에 등장한

```text
prefix - K
```

의 개수를 정답에 더하면 된다.

등장 횟수는 해시맵으로 관리할 수 있으며 모든 원소를 한 번만 순회하므로 시간복잡도는 `O(N)`이다.

### 정답 코드

```python
import sys
from collections import defaultdict

input = sys.stdin.readline

N, K = map(int, input().split())
A = list(map(int, input().split()))

count = defaultdict(int)
count[0] = 1

prefix = 0
answer = 0

for x in A:
    prefix += x
    answer += count[prefix - K]
    count[prefix] += 1

print(answer)
```
