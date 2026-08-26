---
external : false
title : "Ambulia growth cycle"
tag : [Python]
date : 2026-08-26
---

## 1. Problem

수조 관리자는 수조에 심어진 암브리아의 생장 상태를 기록하고 있다.

암브리아는 일정한 생장 주기를 가지며, 각 줄기의 현재 생장량을 정수로 표현할 수 있다.

암브리아 줄기는 일렬로 `N`개가 배치되어 있으며, `Growth`는 각 줄기의 현재 생장량을 순서대로 저장한 배열이다.

관리자는 암브리아의 생장 상태를 관리하기 위해 다음 두 가지 연산을 수행한다.

### 생장 연산

구간 `[l, r]`에 포함된 모든 암브리아 줄기의 생장량을 `X`만큼 증가시킨다.

```text
Growth + X
```

암브리아는 일정한 생장 주기를 반복하므로 생장량이 `Cycle`에 도달하거나 초과하면 다음 생장 주기로 넘어간다.

따라서 실제 생장 단계는 다음과 같이 계산한다.

```text
Growth % Cycle
```

### 생장 단계 조회 연산

구간 `[l, r]`에 있는 암브리아 중 현재 생장 단계가 `X` 이상인 줄기의 개수를 구한다.

즉, 다음 조건을 만족하는 줄기의 개수를 출력한다.

```text
Growth % Cycle >= X
```

생장량을 직접 변경하면서 모든 줄기를 확인하면 연산 횟수가 많을 때 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**를 사용하여 구간의 생장 상태를 효율적으로 관리해야 한다.

또한 생장 주기가 반복되기 때문에 하나의 구간에 생장량을 더할 때 단순히 최솟값과 최댓값만 저장해서는 생장 단계별 개수를 정확하게 계산할 수 없다.

이를 해결하기 위해 Segment Tree의 각 노드에 생장 단계별 개수를 저장하고, 구간 전체에 동일한 증가량이 적용될 경우 **Lazy Propagation**을 이용하여 생장 단계의 위치를 순환시키는 방법을 사용한다.

### 입력

첫째 줄에 정수 `N`, `Q`, `Cycle`이 주어진다.

둘째 줄에 `N`개의 정수 `Growth`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

생장 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`의 모든 암브리아 줄기의 생장량에 `X`를 더한다.

생장 단계 조회 연산은 다음과 같은 형식이다.

```text
2 l r X
```

구간 `[l, r]`에서 생장 단계가 `X` 이상인 줄기의 개수를 출력한다.

### 출력

각 생장 단계 조회 연산에 대해 조건을 만족하는 암브리아 줄기의 개수를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `1 ≤ Q ≤ 200,000`
- `1 ≤ Cycle ≤ 20`
- `0 ≤ Growth의 각 원소 < Cycle`
- `0 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`
- `0 ≤ 조회 기준값 < Cycle`

## 2. Input Example

### Example 1

```text
8 6 5
0 1 2 3 4 0 2 4
2 1 8 3
1 2 6 2
2 1 8 3
1 1 8 4
2 2 7 4
2 1 8 1
```

### Example 2

```text
6 5 4
0 1 2 3 1 2
2 1 6 2
1 1 4 1
2 1 6 2
1 3 6 2
2 2 5 3
```

## 3. Output Example

### 3.1. Example 1

```text
3
5
3
7
```

### 3.2. Example 2

```text
3
4
2
```

## 4. Explanation

### 4.1. Example 1

암브리아의 생장 주기는 `5`이다.

처음 생장 단계는 다음과 같다.

```text
0 1 2 3 4 0 2 4
```

첫 번째 조회 연산은 다음과 같다.

```text
2 1 8 3
```

생장 단계가 `3` 이상인 줄기는

```text
3 4 4
```

이므로 결과는

```text
3
```

이다.

다음 연산을 수행한다.

```text
1 2 6 2
```

구간 `[2, 6]`에 생장량 `2`를 추가한다.

각 생장 단계는 주기 `5`를 기준으로 순환한다.

변경 전:

```text
0 1 2 3 4 0 2 4
```

변경 후:

```text
0 3 4 0 1 2 2 4
```

이제 생장 단계가 `3` 이상인 줄기는

```text
3 4 4
```

이므로 결과는

```text
3
```

처럼 계산할 수 있다.

구간 전체에 동일한 생장량이 추가되면 각 생장 단계가 일정한 방향으로 이동한다.

예를 들어 주기가 `5`이고 생장 단계가 다음과 같다고 하자.

```text
0 1 2 3 4
```

여기에 `2`가 추가되면

```text
2 3 4 0 1
```

이 된다.

따라서 Segment Tree의 각 노드에 다음과 같은 정보를 저장할 수 있다.

```text
생장 단계 0의 개수
생장 단계 1의 개수
생장 단계 2의 개수
...
생장 단계 Cycle-1의 개수
```

구간 전체에 `X`를 더하는 경우 모든 원소를 직접 변경하지 않고 생장 단계별 개수의 위치만 `X % Cycle`만큼 순환시킨다.

이 작업에 Lazy Propagation을 적용하면 구간 전체의 생장 주기 변경을 효율적으로 처리할 수 있다.

조회할 때는

```text
X 이상인 생장 단계
```

에 해당하는 개수들을 합산하면 된다.

### 4.2. Example 2

생장 주기가 `4`이고 처음 상태는 다음과 같다.

```text
0 1 2 3 1 2
```

생장 단계 `2` 이상인 줄기를 조회하면

```text
2 3 2
```

세 개가 존재하므로 결과는

```text
3
```

이다.

다음 연산을 수행한다.

```text
1 1 4 1
```

구간 `[1, 4]`의 생장 단계가 각각 `1`만큼 이동한다.

변경 결과는

```text
1 2 3 0 1 2
```

이다.

이제 생장 단계 `2` 이상인 줄기는

```text
2 3 2
```

이므로 결과는

```text
3
```

이다.

다시 구간 `[3, 6]`에 `2`를 추가하면

```text
1 2 1 2 3 0
```

이 된다.

구간 `[2, 5]`에서 생장 단계가 `3` 이상인 줄기는

```text
3
```

하나이므로 결과는

```text
1
```

이 된다.

이처럼 암브리아의 생장 주기가 반복되는 특성을 이용하면 각 Segment Tree 노드에 생장 단계별 개수를 저장할 수 있다.

구간 전체에 생장량을 추가할 때는 실제 모든 원소를 변경하지 않고 단계별 개수를 순환시키므로 구간 연산을 빠르게 처리할 수 있다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, values, cycle):
        self.size = len(values)
        self.cycle = cycle

        self.count = [
            [0] * cycle
            for _ in range(self.size * 4)
        ]

        self.lazy = [0] * (self.size * 4)

        self._build(
            1,
            0,
            self.size - 1,
            values
        )

    def _build(self, node, left, right, values):
        if left == right:
            self.count[node][values[left]] = 1
            return

        middle = (left + right) // 2

        self._build(
            node * 2,
            left,
            middle,
            values
        )

        self._build(
            node * 2 + 1,
            middle + 1,
            right,
            values
        )

        self._merge(node)

    def _merge(self, node):
        left_count = self.count[node * 2]
        right_count = self.count[node * 2 + 1]
        current_count = self.count[node]

        for phase in range(self.cycle):
            current_count[phase] = (
                left_count[phase]
                + right_count[phase]
            )

    def _rotate(self, node, shift):
        shift %= self.cycle

        if shift == 0:
            return

        current_count = self.count[node]

        rotated = [0] * self.cycle

        for phase in range(self.cycle):
            rotated[
                (phase + shift) % self.cycle
            ] = current_count[phase]

        self.count[node] = rotated
        self.lazy[node] = (
            self.lazy[node] + shift
        ) % self.cycle

    def _push(self, node):
        if self.lazy[node] == 0:
            return

        shift = self.lazy[node]

        self._rotate(node * 2, shift)
        self._rotate(node * 2 + 1, shift)

        self.lazy[node] = 0

    def update(
        self,
        query_left,
        query_right,
        value
    ):
        self._update(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            value % self.cycle
        )

    def _update(
        self,
        node,
        left,
        right,
        query_left,
        query_right,
        shift
    ):
        if (
            right < query_left
            or query_right < left
        ):
            return

        if (
            query_left <= left
            and right <= query_right
        ):
            self._rotate(node, shift)
            return

        self._push(node)

        middle = (left + right) // 2

        self._update(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            shift
        )

        self._update(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            shift
        )

        self._merge(node)

    def query(
        self,
        query_left,
        query_right
    ):
        result = [0] * self.cycle

        self._query(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            result
        )

        return result

    def _query(
        self,
        node,
        left,
        right,
        query_left,
        query_right,
        result
    ):
        if (
            right < query_left
            or query_right < left
        ):
            return

        if (
            query_left <= left
            and right <= query_right
        ):
            current_count = self.count[node]

            for phase in range(self.cycle):
                result[phase] += current_count[phase]

            return

        self._push(node)

        middle = (left + right) // 2

        self._query(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            result
        )

        self._query(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            result
        )


N, Q, Cycle = map(int, input().split())

Growth = list(map(int, input().split()))

tree = SegmentTree(
    Growth,
    Cycle
)

answer = []

for _ in range(Q):
    operation = list(map(int, input().split()))

    if operation[0] == 1:
        _, left, right, value = operation

        tree.update(
            left - 1,
            right - 1,
            value
        )

    else:
        _, left, right, threshold = operation

        counts = tree.query(
            left - 1,
            right - 1
        )

        result = sum(
            counts[phase]
            for phase in range(
                threshold,
                Cycle
            )
        )

        answer.append(str(result))

print("\n".join(answer))
```
