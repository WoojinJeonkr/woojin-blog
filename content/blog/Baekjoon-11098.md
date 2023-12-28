---
external: false
title: "Baekjoon 11098"
date: 2023-05-20
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11098)

## 2. Solution

### 1. Python (memory: 31256KB, time: 308ms)

```python
n = int(input())
for _ in range(n):
    p = int(input())
    print(max((input().split() for _ in range(p)), key=lambda x: int(x[0]))[1])
```

### 2. Explanation

```python
n = int(input())
```

> input() 함수를 사용하여 사용자로부터 입력을 받고, int()를 사용하여 입력 값을 정수로 변환합니다. 이 값은 외부 루프의 반복 횟수를 나타냅니다.

```python
for _ in range(n):
```

> 입력받은 n만큼 아래의 코드를 반복합니다. _ 변수는 루프 변수가 사용되지 않는다는 것을 나타내는 관례적인 표기법입니다.

```python
p = int(input())
```

> input()을 사용하여 사용자로부터 입력을 받고, int()를 사용하여 입력 값을 정수로 변환합니다. 이 값은 현재 반복에서의 아이템 수를 나타냅니다.

```python
print(max((input().split() for _ in range(p)), key=lambda x: int(x[0]))[1])
```

> (input().split() for _ in range(p))는 p번 반복되는 제너레이터 표현식입니다. 제너레이터 표현식은 사용자로부터 각 아이템에 대한 입력을 받고, .split()을 사용하여 입력을 문자열 리스트로 분할합니다.
> 제너레이터 표현식은 max() 함수의 인자로 전달되어 가장 높은 가격을 가진 아이템을 찾습니다. key 매개변수는 정렬 기준을 지정합니다. 이 경우, lambda x: int(x[0])는 각 아이템의 첫 번째 요소(가격)를 추출하고 정수로 변환하여 비교하는 람다 함수입니다.
> max()의 결과는 가장 높은 가격을 가진 아이템을 나타내는 튜플입니다. [1]은 튜플의 두 번째 요소에 접근하는 데 사용되며, 해당 아이템의 이름입니다.
> print()을 사용하여 가장 높은 가격을 가진 아이템의 이름을 출력합니다.

다음 포스트에서는 제너레이터 표현식에 대해 더욱 자세히 알아보도록 하겠습니다.
