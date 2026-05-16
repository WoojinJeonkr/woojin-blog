---
external : false
title : "Next greater price"
tag :[Python]
date : 2026-05-16
---

## 1. Problem

온라인 쇼핑몰에서는 매일 다양한 상품의 가격이 변동된다.
관리자는 특정 기간 동안 가격이 얼마나 자주 상승했는지 분석하려고 한다.

N일 동안의 상품 가격이 주어질 때,
각 날짜마다 "자신보다 뒤에 있으면서 더 비싼 가격이 처음 등장하는 날짜"를 찾아라.

만약 그런 날짜가 없다면 `-1`을 출력한다.

예를 들어 가격 배열이 다음과 같다면:

`[5, 3, 8, 4, 10]`

- 5 → 뒤에서 처음 더 큰 값은 8
- 3 → 뒤에서 처음 더 큰 값은 8
- 8 → 뒤에서 처음 더 큰 값은 10
- 4 → 뒤에서 처음 더 큰 값은 10
- 10 → 더 큰 값 없음

따라서 결과는:

`8 8 10 10 -1`

## 2. Input

첫째 줄에 가격의 개수 `N`이 주어진다.

둘째 줄에 `N`개의 상품 가격이 공백으로 구분되어 주어진다.

## 3. Output

각 원소에 대해 오른쪽에서 처음 등장하는 더 큰 값을 공백으로 구분하여 출력한다.

없다면 `-1`을 출력한다.

## 4. Constraints

- `1 ≤ N ≤ 200,000`
- `1 ≤ 가격 ≤ 1,000,000,000`

## 5. Sample Input

```text
5
5 3 8 4 10
```

## 6. Sample Output

```text
8 8 10 10 -1
```

## 7. Explanation

배열을 왼쪽부터 보면 다음과 같다.

| 현재 값 | 오른쪽에서 처음 큰 값 |
| --- | --- |
| 5 | 8 |
| 3 | 8 |
| 8 | 10 |
| 4 | 10 |
| 10 | -1 |

마지막 원소인 10은 오른쪽에 더 큰 수가 없으므로 `-1`이다.

## 8. Related Algorithms

- 스택(Stack)
- 단조 스택(Monotonic Stack)
- 자료구조
- 선형 탐색 최적화

## 9. Answer

```py
import sys

input = sys.stdin.readline

# 입력
N = int(input())
prices = list(map(int, input().split()))

# 정답 배열
answer = [-1] * N

# 인덱스를 저장할 스택
stack = []

for i in range(N):
    # 현재 값이 스택 top 위치의 값보다 크면
    # 해당 위치의 오큰수를 현재 값으로 설정
    while stack and prices[stack[-1]] < prices[i]:
        idx = stack.pop()
        answer[idx] = prices[i]

    # 현재 인덱스 스택에 저장
    stack.append(i)

# 출력
print(*answer)
```
