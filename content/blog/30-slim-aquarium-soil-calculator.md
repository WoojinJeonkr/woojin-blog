---
external : false
title : "30 slim aquarium soil calculator"
tag : [Python]
date : 2026-09-04
---

## 1. Problem

30슬림 수조는 `30 × 18 × 24cm`, 유리 두께 `5T`인 소형 수조이다.

수조에 수초를 심기 위해서는 바닥에 소일을 깔아야 한다.

소일의 양을 너무 적게 넣으면 수초를 심기 어렵고,
너무 많이 넣으면 수조 내부의 공간이 줄어들 수 있다.

수조의 바닥은 `1cm × 1cm` 크기의 작은 칸으로 나누어 관리한다고 가정한다.

각 칸에는 원하는 소일 높이가 정해져 있으며,
관리자는 여러 구간의 소일 높이를 한 번에 변경할 수 있다.

관리 작업은 다음과 같다.

1. 특정 구간의 소일 높이를 일정량 증가시킨다.
2. 특정 구간의 소일 높이를 일정량 감소시킨다.
3. 특정 구간에 필요한 소일의 총 부피를 계산한다.
4. 전체 수조에서 가장 높은 소일 높이를 확인한다.

소일 높이는 0보다 작아질 수 없다.

각 칸의 넓이가 `1cm²`이므로,
각 칸의 소일 높이가 `h cm`라면 필요한 소일의 부피는 `h cm³`이다.

따라서 특정 구간에 필요한 소일의 총량은
해당 구간의 소일 높이의 총합과 같다.

수조의 바닥 크기는 `30 × 18 = 540cm²`이지만,
관리할 바닥 칸의 수 `SoilAreaCount`와 초기 소일 높이는 입력으로 주어진다.

많은 구간 변경과 계산 요청이 주어질 때,
각 작업을 효율적으로 처리하는 프로그램을 작성하라.

### 입력

첫 번째 줄에 바닥 칸의 개수 `SoilAreaCount`가 주어진다.

두 번째 줄에 `SoilAreaCount`개의 정수 `SoilHeight`가 주어진다.

각 값은 해당 바닥 칸에 현재 깔려 있는 소일의 높이를 의미한다.

세 번째 줄에 관리 작업의 개수 `OperationCount`가 주어진다.

다음 `OperationCount`개의 줄에 하나의 관리 작업이 주어진다.

- `1 StartPosition EndPosition AddHeight`
  - `StartPosition`부터 `EndPosition`까지의 소일 높이를 `AddHeight`만큼 증가시킨다.
- `2 StartPosition EndPosition RemoveHeight`
  - `StartPosition`부터 `EndPosition`까지의 소일 높이를 `RemoveHeight`만큼 감소시킨다.
  - 소일 높이가 0보다 작아지면 0으로 만든다.
- `3 StartPosition EndPosition`
  - `StartPosition`부터 `EndPosition`까지 필요한 소일의 총 부피를 출력한다.
- `4 StartPosition EndPosition`
  - `StartPosition`부터 `EndPosition`까지 가장 높은 소일의 높이를 출력한다.

각 바닥 칸의 넓이는 `1cm²`이다.

### 출력

각 `3`번 또는 `4`번 작업의 결과를 한 줄에 하나씩 출력한다.

`3`번 작업의 결과는 `cm³` 단위의 소일 부피와 같은 값이다.

## 제한사항

- `1 ≤ SoilAreaCount ≤ 200,000`
- `0 ≤ SoilHeight ≤ 100`
- `1 ≤ OperationCount ≤ 200,000`
- `1 ≤ StartPosition ≤ EndPosition ≤ SoilAreaCount`
- `1 ≤ AddHeight ≤ 100`
- `1 ≤ RemoveHeight ≤ 100`
- 소일의 높이는 항상 0 이상이다.
- 모든 계산 결과는 64비트 정수 범위를 초과하지 않는다.

## 2. Input Example

### Example 1

```text
8
2 3 4 5 6 5 4 3
6
3 1 8
1 2 6 2
4 1 8
2 3 7 5
3 1 8
4 1 8
```

### Example 2

```text
10
1 2 3 4 5 6 5 4 3 2
7
4 1 10
3 1 5
1 3 8 3
4 1 10
2 4 9 5
3 1 10
4 1 10
```

## 3. Output Example

### 3.1. Example 1

```text
32
8
39
8
```

### 3.2. Example 2

```text
6
15
9
29
9
```

## 4. Explanation

### 4.1. Example 1

초기 소일 높이는 다음과 같다.

```text
2 3 4 5 6 5 4 3
```

각 바닥 칸의 넓이가 `1cm²`이므로,
전체 소일 부피는 소일 높이의 총합과 같다.

```text
2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 = 32
```

따라서 첫 번째 결과는 `32cm³`이다.

이후 2번부터 6번까지 소일 높이를 `2cm` 증가시킨다.

```text
2 5 6 7 8 7 4 3
```

이때 가장 높은 소일의 높이는 `8cm`이다.

다음으로 3번부터 7번까지 `5cm`만큼 소일을 제거한다.

소일 높이가 0보다 작아질 수 없으므로 결과는 다음과 같다.

```text
2 5 1 2 3 2 0 3
```

전체 소일 높이의 합은 다음과 같다.

```text
2 + 5 + 1 + 2 + 3 + 2 + 0 + 3 = 18
```

따라서 마지막 두 결과는 `18`, `5`가 된다.

### 4.2. Example 2

초기 소일 높이는 다음과 같다.

```text
1 2 3 4 5 6 5 4 3 2
```

전체에서 가장 높은 소일은 6번 위치의 `6cm`이다.

1번부터 5번까지의 소일 부피는 다음과 같다.

```text
1 + 2 + 3 + 4 + 5 = 15
```

이후 3번부터 8번까지 소일 높이를 `3cm` 증가시킨다.

```text
1 2 6 7 8 9 8 7 3 2
```

가장 높은 소일의 높이는 `9cm`가 된다.

다음으로 4번부터 9번까지 `5cm`만큼 소일을 제거한다.

```text
1 2 6 2 3 4 3 2 0 2
```

전체 소일 높이의 합은 다음과 같다.

```text
1 + 2 + 6 + 2 + 3 + 4 + 3 + 2 + 0 + 2 = 25
```

따라서 전체 소일 부피는 `25cm³`이다.

마지막으로 가장 높은 소일의 높이는 `6cm`이다.

이 문제에서는 특정 구간의 소일 높이를 한꺼번에 변경하고,
구간의 소일 총량과 최대 높이를 반복해서 확인해야 한다.

각 구간을 직접 순회하면 작업 하나당 최대 `O(N)`의 시간이 필요하기 때문에
작업 횟수가 많을 경우 비효율적이다.

따라서 `Segment Tree`와 `Lazy Propagation`을 사용하여
구간 변경과 구간 조회를 효율적으로 처리할 수 있다.

각 Segment Tree 노드에는 다음 정보를 저장한다.

- `total`: 해당 구간의 소일 높이 총합
- `maximum`: 해당 구간의 최대 소일 높이
- `lazy`: 아직 자식 노드에 전달하지 않은 높이 변경량

소일을 추가하는 작업은 구간 전체에 동일한 값을 더하는
일반적인 Lazy Propagation으로 처리할 수 있다.

소일을 제거할 때 모든 소일의 높이가 0 이상이어야 하므로,
구간의 일부 값이 0이 되는 경우에는 해당 구간을 더 작은 구간으로 나누어 처리한다.

이를 통해 반복되는 소일 추가, 소일 제거, 부피 계산 및 최대 높이 조회를
효율적으로 처리할 수 있다.

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
            self.total[left_child]
            + self.total[right_child]
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

    def remove(
        self,
        query_left,
        query_right,
        amount
    ):
        self._range_remove(
            1,
            1,
            self.size,
            query_left,
            query_right,
            amount
        )

    def _range_remove(
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
                self.total[node_index] = 0
                self.maximum[node_index] = 0
                self.lazy[node_index] = 0
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

        self._range_remove(
            node_index * 2,
            left_position,
            middle_position,
            query_left,
            query_right,
            amount
        )

        self._range_remove(
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
    soil_area_count = int(input())
    soil_height = list(map(int, input().split()))

    operation_count = int(input())

    segment_tree = SegmentTree(soil_height)

    for _ in range(operation_count):
        operation = list(map(int, input().split()))

        operation_type = operation[0]
        start_position = operation[1]
        end_position = operation[2]

        if operation_type == 1:
            add_height = operation[3]

            segment_tree.add(
                start_position,
                end_position,
                add_height
            )

        elif operation_type == 2:
            remove_height = operation[3]

            segment_tree.remove(
                start_position,
                end_position,
                remove_height
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
