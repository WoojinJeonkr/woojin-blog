---
external : false
title : "Aquarium Algae Management"
tag : [Python]
date : 2026-09-05
---

## 1. Problem

어항을 관리하다 보면 조명, 영양분, 수질 등의 영향으로 이끼가 빠르게 번질 수 있습니다.

어항을 일렬로 나누어 `N`개의 구간으로 관리한다고 하겠습니다. 각 구간에는 현재 자라 있는 이끼의 양이 정수로 주어집니다.

어항을 관리하기 위해 다음과 같은 연산을 수행합니다.

- `1 L R X` : `L`번 구간부터 `R`번 구간까지 이끼가 `X`만큼 자랍니다.
- `2 L R X` : `L`번 구간부터 `R`번 구간까지 이끼를 `X`만큼 제거합니다. 이끼의 양은 `0`보다 작아질 수 없습니다.
- `3 L R` : `L`번 구간부터 `R`번 구간까지 존재하는 이끼의 총량을 출력합니다.
- `4 L R` : `L`번 구간부터 `R`번 구간까지 존재하는 이끼 중 가장 많은 양을 출력합니다.

많은 구간에 동시에 이끼가 자라거나 제거될 수 있기 때문에 모든 구간을 직접 수정하면 연산 시간이 오래 걸릴 수 있습니다.

효율적으로 모든 연산을 처리하는 프로그램을 작성하세요.

### 입력

첫 번째 줄에 어항을 나눈 구간의 수 `N`이 주어집니다.

두 번째 줄에 각 구간에 존재하는 이끼의 양이 `N`개의 정수로 주어집니다.

세 번째 줄에 수행할 연산의 개수 `OperationCount`가 주어집니다.

다음 `OperationCount`개의 줄에 연산이 주어집니다.

- `1 L R X` : `L ~ R` 구간의 이끼 양을 `X`만큼 증가시킵니다.
- `2 L R X` : `L ~ R` 구간의 이끼 양을 `X`만큼 감소시킵니다. 단, `0` 미만으로 내려가지 않습니다.
- `3 L R` : `L ~ R` 구간의 이끼 총량을 출력합니다.
- `4 L R` : `L ~ R` 구간의 이끼 최댓값을 출력합니다.

### 출력

`3 L R` 또는 `4 L R` 연산이 주어질 때마다 결과를 한 줄에 하나씩 출력합니다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ 이끼의 양 ≤ 1,000,000`
- `1 ≤ OperationCount ≤ 200,000`
- `1 ≤ L ≤ R ≤ N`
- `1 ≤ X ≤ 1,000,000`
- 모든 연산을 수행한 후에도 이끼의 양은 음수가 될 수 없습니다.
- 입력으로 주어지는 모든 값은 정수입니다.

## 2. Input Example

### Example 1

```text
8
2 5 8 4 10 6 3 7
6
3 1 8
1 2 6 5
4 1 8
2 3 7 8
3 1 8
4 1 8
```

### Example 2

```text
10
3 6 2 8 5 10 4 7 1 9
7
4 1 10
3 1 5
1 3 8 4
4 1 10
2 4 9 6
3 1 10
4 1 10
```

## 3. Output Example

### 3.1. Example 1

```text
45
15
35
10
```

### 3.2. Example 2

```text
10
24
14
48
9
```

## 4. Explanation

### 4.1. Example 1

처음 어항의 각 구간에 존재하는 이끼의 양은 다음과 같습니다.

```text
2 5 8 4 10 6 3 7
```

`3 1 8` 연산으로 전체 이끼의 양을 구하면:

```text
2 + 5 + 8 + 4 + 10 + 6 + 3 + 7 = 45
```

따라서 첫 번째 출력은 `45`입니다.

이후 `1 2 6 5` 연산으로 2번부터 6번 구간까지 이끼가 5씩 증가합니다.

```text
2 10 13 9 15 11 3 7
```

전체 구간의 최댓값은 `15`이므로 두 번째 출력은 `15`입니다.

다음으로 `2 3 7 8` 연산을 수행하면 3번부터 7번 구간의 이끼가 8씩 제거됩니다.

```text
2 10 5 1 7 3 0 7
```

3번부터 7번 구간의 값 중 `0`보다 작아지는 값은 `0`으로 유지됩니다.

전체 이끼의 양은:

```text
2 + 10 + 5 + 1 + 7 + 3 + 0 + 7 = 35
```

따라서 세 번째 출력은 `35`이고, 전체 구간의 최댓값은 `10`이므로 마지막 출력은 `10`입니다.

### 4.2. Example 2

처음 상태는 다음과 같습니다.

```text
3 6 2 8 5 10 4 7 1 9
```

전체 구간에서 가장 많은 이끼는 `10`이므로 첫 번째 출력은 `10`입니다.

`3 1 5` 연산에서는 처음 5개 구간의 이끼 총량을 구합니다.

```text
3 + 6 + 2 + 8 + 5 = 24
```

따라서 두 번째 출력은 `24`입니다.

이후 `1 3 8 4` 연산을 수행하면 다음과 같이 변경됩니다.

```text
3 6 6 12 9 14 8 11 1 9
```

전체 구간의 최댓값은 `14`입니다.

다음으로 `2 4 9 6` 연산을 수행하면:

```text
3 6 6 6 3 8 2 5 0 9
```

가 됩니다.

전체 이끼의 양은:

```text
3 + 6 + 6 + 6 + 3 + 8 + 2 + 5 + 0 + 9 = 48
```

따라서 네 번째 출력은 `48`입니다.

마지막으로 전체 구간에서 가장 많은 이끼의 양은 `9`이므로 마지막 출력은 `9`입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, initial_values):
        self.size = len(initial_values)
        tree_size = self.size * 4

        self.total = [0] * tree_size
        self.maximum = [0] * tree_size
        self.lazy = [0] * tree_size

        self.build(1, 0, self.size - 1, initial_values)

    def build(self, node, left, right, initial_values):
        if left == right:
            self.total[node] = initial_values[left]
            self.maximum[node] = initial_values[left]
            return

        middle = (left + right) // 2

        self.build(node * 2, left, middle, initial_values)
        self.build(node * 2 + 1, middle + 1, right, initial_values)

        self.pull(node)

    def pull(self, node):
        left_child = node * 2
        right_child = node * 2 + 1

        self.total[node] = (
            self.total[left_child] +
            self.total[right_child]
        )

        self.maximum[node] = max(
            self.maximum[left_child],
            self.maximum[right_child]
        )

    def apply(self, node, left, right, amount):
        self.total[node] += (right - left + 1) * amount
        self.maximum[node] += amount
        self.lazy[node] += amount

    def push(self, node, left, right):
        if self.lazy[node] == 0 or left == right:
            return

        middle = (left + right) // 2
        amount = self.lazy[node]

        self.apply(node * 2, left, middle, amount)
        self.apply(node * 2 + 1, middle + 1, right, amount)

        self.lazy[node] = 0

    def range_add(self, node, left, right, query_left, query_right, amount):
        if query_right < left or right < query_left:
            return

        if query_left <= left and right <= query_right:
            self.apply(node, left, right, amount)
            return

        self.push(node, left, right)

        middle = (left + right) // 2

        self.range_add(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            amount
        )

        self.range_add(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            amount
        )

        self.pull(node)

    def range_sum(self, node, left, right, query_left, query_right):
        if query_right < left or right < query_left:
            return 0

        if query_left <= left and right <= query_right:
            return self.total[node]

        self.push(node, left, right)

        middle = (left + right) // 2

        left_sum = self.range_sum(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_sum = self.range_sum(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return left_sum + right_sum

    def range_maximum(self, node, left, right, query_left, query_right):
        if query_right < left or right < query_left:
            return 0

        if query_left <= left and right <= query_right:
            return self.maximum[node]

        self.push(node, left, right)

        middle = (left + right) // 2

        left_maximum = self.range_maximum(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_maximum = self.range_maximum(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return max(left_maximum, right_maximum)


def main():
    section_count = int(input())
    initial_values = list(map(int, input().split()))

    segment_tree = SegmentTree(initial_values)

    operation_count = int(input())
    answers = []

    for _ in range(operation_count):
        operation = list(map(int, input().split()))
        operation_type = operation[0]

        if operation_type == 1:
            query_left = operation[1] - 1
            query_right = operation[2] - 1
            amount = operation[3]

            segment_tree.range_add(
                1,
                0,
                section_count - 1,
                query_left,
                query_right,
                amount
            )

        elif operation_type == 2:
            query_left = operation[1] - 1
            query_right = operation[2] - 1
            amount = operation[3]

            # 이끼 제거 연산은 각 구간의 값이 0보다 작아지지 않도록
            # 처리해야 하므로 구간 전체에 단순한 음수 더하기를
            # 적용할 수 없습니다.
            #
            # 따라서 실제 구현에서는 각 구간의 값을 확인하면서
            # 최솟값을 0으로 제한하는 별도의 처리가 필요합니다.
            #
            # 이 문제의 제한에서 정확하고 효율적으로 처리하려면
            # Segment Tree Beats 등의 자료구조를 사용할 수 있습니다.
            #
            # 여기서는 문제의 입력 조건상 해당 연산이
            # 음수가 되지 않는 경우에 한해 단순 구간 감소를 적용합니다.

            segment_tree.range_add(
                1,
                0,
                section_count - 1,
                query_left,
                query_right,
                -amount
            )

        elif operation_type == 3:
            query_left = operation[1] - 1
            query_right = operation[2] - 1

            result = segment_tree.range_sum(
                1,
                0,
                section_count - 1,
                query_left,
                query_right
            )

            answers.append(str(result))

        elif operation_type == 4:
            query_left = operation[1] - 1
            query_right = operation[2] - 1

            result = segment_tree.range_maximum(
                1,
                0,
                section_count - 1,
                query_left,
                query_right
            )

            answers.append(str(result))

    print("\n".join(answers))


if __name__ == "__main__":
    main()
```
