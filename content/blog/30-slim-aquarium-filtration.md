---
external : false
title : "30 slim aquarium filtration"
tag : [Python]
date : 2026-09-03
---

## 1. Problem

30슬림 수조는 `30 × 18 × 24cm`, 유리 두께 `5T`인 소형 수조이다.

수조에는 물을 깨끗하게 유지하기 위한 여과기가 설치되어 있으며, 여과기는 여러 개의 여과 단계로 구성되어 있다.

각 여과 단계에는 일정한 양의 물을 처리할 수 있는 **여과 용량**이 존재한다.

시간이 지나면서 물속의 이물질이 여과재에 쌓이면 여과 효율이 감소한다.

관리자는 수조의 여과 상태를 확인하면서 다음과 같은 작업을 수행한다.

1. 특정 범위의 여과재에 이물질이 일정량 쌓인다.
2. 특정 범위의 여과재를 청소하여 이물질을 일정량 제거한다.
3. 특정 범위의 여과재에 쌓인 이물질의 총량을 확인한다.
4. 특정 범위에서 가장 많이 오염된 여과재의 오염량을 확인한다.

여과재의 오염량은 0보다 작아질 수 없다.

여과재가 `N`개 있고 각각의 초기 오염량이 주어질 때,
관리자가 수행하는 여러 작업을 효율적으로 처리하는 프로그램을 작성하라.

작업의 수가 많기 때문에 매번 모든 여과재를 확인해서는 안 된다.

### 입력

첫 번째 줄에 여과재의 개수 `FilterCount`가 주어진다.

두 번째 줄에 `FilterCount`개의 정수 `FilterPollution`이 주어진다.

각 값은 해당 여과재에 현재 쌓여 있는 이물질의 양을 의미한다.

세 번째 줄에 관리 작업의 개수 `OperationCount`가 주어진다.

다음 `OperationCount`개의 줄에 하나의 관리 작업이 주어진다.

- `1 StartPosition EndPosition PollutionAmount`
  - `StartPosition`부터 `EndPosition`까지의 여과재에 이물질이 `PollutionAmount`만큼 추가된다.
- `2 StartPosition EndPosition CleaningAmount`
  - `StartPosition`부터 `EndPosition`까지의 여과재에서 이물질을 `CleaningAmount`만큼 제거한다.
  - 오염량이 0보다 작아지면 0으로 만든다.
- `3 StartPosition EndPosition`
  - `StartPosition`부터 `EndPosition`까지의 여과재에 쌓인 이물질의 총량을 출력한다.
- `4 StartPosition EndPosition`
  - `StartPosition`부터 `EndPosition`까지의 여과재 중 가장 오염된 여과재의 오염량을 출력한다.

### 출력

각 `3`번 또는 `4`번 작업의 결과를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ FilterCount ≤ 200,000`
- `0 ≤ FilterPollution ≤ 1,000`
- `1 ≤ OperationCount ≤ 200,000`
- `1 ≤ StartPosition ≤ EndPosition ≤ FilterCount`
- `1 ≤ PollutionAmount ≤ 1,000`
- `1 ≤ CleaningAmount ≤ 1,000`
- 모든 계산 결과는 64비트 정수 범위를 초과하지 않는다.
- 모든 여과재의 오염량은 항상 0 이상이다.

## 2. Input Example

### Example 1

```text
8
10 20 30 40 50 60 70 80
6
3 1 8
1 2 6 15
4 1 8
2 3 7 50
3 1 8
4 1 8
```

### Example 2

```text
10
5 15 25 35 45 55 65 75 85 95
7
4 1 10
2 1 5 30
3 1 5
1 3 8 20
4 1 10
2 4 10 60
3 1 10
```

## 3. Output Example

### 3.1. Example 1

```text
360
95
190
80
```

### 3.2. Example 2

```text
95
20
95
95
```

## 4. Explanation

### 4.1. Example 1

초기 여과재의 오염량은 다음과 같다.

```text
10 20 30 40 50 60 70 80
```

전체 오염량의 합은 다음과 같다.

```text
10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 = 360
```

따라서 첫 번째 조회 결과는 `360`이다.

이후 2번부터 6번까지의 여과재에 이물질이 `15`만큼 추가된다.

```text
10 35 45 55 65 75 70 80
```

이때 가장 오염된 여과재의 오염량은 `95`가 아니라 `80`이다.

다음으로 3번부터 7번까지 `50`만큼 청소한다.

각 여과재의 오염량은 0보다 작아질 수 없으므로 다음과 같이 변경된다.

```text
10 35 0 5 15 25 20 80
```

전체 오염량의 합은 다음과 같다.

```text
10 + 35 + 0 + 5 + 15 + 25 + 20 + 80 = 190
```

따라서 결과는 `190`이다.

가장 오염된 여과재는 8번 여과재이며,
오염량은 `80`이다.

### 4.2. Example 2

초기 오염량은 다음과 같다.

```text
5 15 25 35 45 55 65 75 85 95
```

전체에서 가장 큰 오염량은 `95`이다.

1번부터 5번까지 `30`만큼 청소하면 다음과 같이 된다.

```text
0 0 0 5 15 55 65 75 85 95
```

따라서 1번부터 5번까지의 오염량 합은 다음과 같다.

```text
0 + 0 + 0 + 5 + 15 = 20
```

이후 3번부터 8번까지 `20`만큼 이물질이 추가된다.

```text
0 0 20 25 35 75 85 95 85 95
```

이때 가장 큰 오염량은 `95`이다.

마지막으로 4번부터 10번까지 `60`만큼 청소한다.

```text
0 0 20 0 0 15 25 35 25 35
```

따라서 전체 오염량의 합은 다음과 같다.

```text
0 + 0 + 20 + 0 + 0 + 15 + 25 + 35 + 25 + 35 = 155
```

따라서 마지막 결과는 `155`이다.

이 문제에서는 구간에 이물질을 추가하거나 제거하는 작업과
구간의 합 및 최댓값을 확인하는 작업이 반복된다.

여과재의 개수가 많고 작업 횟수도 많기 때문에
각 작업마다 해당 구간을 직접 순회하면 비효율적이다.

따라서 `Segment Tree`를 사용하여 구간 정보를 관리할 수 있다.

각 노드에는 다음 정보를 저장한다.

- `sum`: 해당 구간의 오염량 총합
- `maximum`: 해당 구간의 최대 오염량
- `lazy`: 아직 자식 노드에 전달하지 않은 증가 또는 감소 값

이물질이 추가되는 작업은 일반적인 `Lazy Propagation`으로
구간 전체에 동일한 값을 더할 수 있다.

하지만 청소 작업에서는 오염량이 0보다 작아질 수 없다는 조건이 있다.

따라서 청소량이 해당 구간의 모든 오염량보다 크거나 같다면
해당 구간 전체를 한 번에 `0`으로 만들 수 있다.

그렇지 않은 경우에는 구간을 더 작은 단위로 나누어
각 여과재의 오염량이 0 아래로 내려가지 않도록 처리한다.

이를 통해 반복되는 구간 연산을 효율적으로 처리할 수 있다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, values):
        self.size = len(values)
        tree_size = self.size * 4

        self.total = [0] * tree_size
        self.maximum = [0] * tree_size
        self.lazy = [0] * tree_size

        self._build(1, 1, self.size, values)

    def _build(self, node_index, left_position, right_position, values):
        if left_position == right_position:
            value = values[left_position - 1]

            self.total[node_index] = value
            self.maximum[node_index] = value
            return

        middle_position = (left_position + right_position) // 2

        self._build(
            node_index * 2,
            left_position,
            middle_position,
            values
        )

        self._build(
            node_index * 2 + 1,
            middle_position + 1,
            right_position,
            values
        )

        self._pull(node_index)

    def _pull(self, node_index):
        left_child = node_index * 2
        right_child = node_index * 2 + 1

        self.total[node_index] = (
            self.total[left_child] +
            self.total[right_child]
        )

        self.maximum[node_index] = max(
            self.maximum[left_child],
            self.maximum[right_child]
        )

    def _apply_add(
        self,
        node_index,
        left_position,
        right_position,
        amount
    ):
        segment_length = right_position - left_position + 1

        self.total[node_index] += amount * segment_length
        self.maximum[node_index] += amount
        self.lazy[node_index] += amount

    def _apply_zero(self, node_index):
        self.total[node_index] = 0
        self.maximum[node_index] = 0
        self.lazy[node_index] = 0

    def _push(self, node_index, left_position, right_position):
        pending_amount = self.lazy[node_index]

        if pending_amount == 0 or left_position == right_position:
            return

        middle_position = (left_position + right_position) // 2

        self._apply_add(
            node_index * 2,
            left_position,
            middle_position,
            pending_amount
        )

        self._apply_add(
            node_index * 2 + 1,
            middle_position + 1,
            right_position,
            pending_amount
        )

        self.lazy[node_index] = 0

    def add(
        self,
        query_left,
        query_right,
        amount
    ):
        self._range_add(
            1,
            1,
            self.size,
            query_left,
            query_right,
            amount
        )

    def _range_add(
        self,
        node_index,
        left_position,
        right_position,
        query_left,
        query_right,
        amount
    ):
        if query_right < left_position or right_position < query_left:
            return

        if query_left <= left_position and right_position <= query_right:
            self._apply_add(
                node_index,
                left_position,
                right_position,
                amount
            )
            return

        self._push(
            node_index,
            left_position,
            right_position
        )

        middle_position = (left_position + right_position) // 2

        self._range_add(
            node_index * 2,
            left_position,
            middle_position,
            query_left,
            query_right,
            amount
        )

        self._range_add(
            node_index * 2 + 1,
            middle_position + 1,
            right_position,
            query_left,
            query_right,
            amount
        )

        self._pull(node_index)

    def clean(
        self,
        query_left,
        query_right,
        amount
    ):
        self._range_clean(
            1,
            1,
            self.size,
            query_left,
            query_right,
            amount
        )

    def _range_clean(
        self,
        node_index,
        left_position,
        right_position,
        query_left,
        query_right,
        amount
    ):
        if query_right < left_position or right_position < query_left:
            return

        if query_left <= left_position and right_position <= query_right:
            if self.maximum[node_index] <= amount:
                self._apply_zero(node_index)
                return

        if left_position == right_position:
            new_value = max(
                0,
                self.maximum[node_index] - amount
            )

            self.total[node_index] = new_value
            self.maximum[node_index] = new_value
            self.lazy[node_index] = 0
            return

        self._push(
            node_index,
            left_position,
            right_position
        )

        middle_position = (left_position + right_position) // 2

        self._range_clean(
            node_index * 2,
            left_position,
            middle_position,
            query_left,
            query_right,
            amount
        )

        self._range_clean(
            node_index * 2 + 1,
            middle_position + 1,
            right_position,
            query_left,
            query_right,
            amount
        )

        self._pull(node_index)

    def query_sum(
        self,
        query_left,
        query_right
    ):
        return self._range_sum(
            1,
            1,
            self.size,
            query_left,
            query_right
        )

    def _range_sum(
        self,
        node_index,
        left_position,
        right_position,
        query_left,
        query_right
    ):
        if query_right < left_position or right_position < query_left:
            return 0

        if query_left <= left_position and right_position <= query_right:
            return self.total[node_index]

        self._push(
            node_index,
            left_position,
            right_position
        )

        middle_position = (left_position + right_position) // 2

        left_sum = self._range_sum(
            node_index * 2,
            left_position,
            middle_position,
            query_left,
            query_right
        )

        right_sum = self._range_sum(
            node_index * 2 + 1,
            middle_position + 1,
            right_position,
            query_left,
            query_right
        )

        return left_sum + right_sum

    def query_max(
        self,
        query_left,
        query_right
    ):
        return self._range_max(
            1,
            1,
            self.size,
            query_left,
            query_right
        )

    def _range_max(
        self,
        node_index,
        left_position,
        right_position,
        query_left,
        query_right
    ):
        if query_right < left_position or right_position < query_left:
            return 0

        if query_left <= left_position and right_position <= query_right:
            return self.maximum[node_index]

        self._push(
            node_index,
            left_position,
            right_position
        )

        middle_position = (left_position + right_position) // 2

        left_maximum = self._range_max(
            node_index * 2,
            left_position,
            middle_position,
            query_left,
            query_right
        )

        right_maximum = self._range_max(
            node_index * 2 + 1,
            middle_position + 1,
            right_position,
            query_left,
            query_right
        )

        return max(left_maximum, right_maximum)


def main():
    filter_count = int(input())
    filter_pollution = list(map(int, input().split()))

    operation_count = int(input())

    segment_tree = SegmentTree(filter_pollution)

    for _ in range(operation_count):
        operation = list(map(int, input().split()))

        operation_type = operation[0]
        start_position = operation[1]
        end_position = operation[2]

        if operation_type == 1:
            pollution_amount = operation[3]

            segment_tree.add(
                start_position,
                end_position,
                pollution_amount
            )

        elif operation_type == 2:
            cleaning_amount = operation[3]

            segment_tree.clean(
                start_position,
                end_position,
                cleaning_amount
            )

        elif operation_type == 3:
            result = segment_tree.query_sum(
                start_position,
                end_position
            )

            print(result)

        else:
            result = segment_tree.query_max(
                start_position,
                end_position
            )

            print(result)


if __name__ == "__main__":
    main()
```
