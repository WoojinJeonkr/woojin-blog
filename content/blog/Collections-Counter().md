---
external: false
title: "Collections Counter()"
date: 2023-09-06
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/collections-counter/problem?isFullScreen=true)

## 2. 정답 코드 1 (Python)

```python
# 신발의 개수를 입력받는다.
X = int(input())

# 신발 사이즈를 리스트에 집어 넣는다.
shoe_sizes = list(map(int, input().split()))

# 고객 수를 입력받는다.
N = int(input())

# 가격의 합계를 정의한다.
sum = 0

# for문을 통해 고객이 사려는 신발이 신발 리스트에 있는지 확인하고
# 있다면 sum에 가격을 더하고 고객이 구매한 신발 사이즈를 리스트에서 제거하고
# 없다면 다음 고객을 확인한다.
for _ in range(N):
    size, price = map(int, input().split())
    if size in shoe_sizes:
        sum += price
        shoe_sizes.remove(size)

# 최종 합계를 출력한다.
print(sum)
```

## 3. 정답 코드 2 (Python)

```python
# collections 모듈에서 Counter 클래스를 가져옵니다.
from collections import Counter

# X에 정수를 입력받습니다.
X = int(input())

# 신발 사이즈를 입력받아 Counter 객체로 저장합니다.
shoe_sizes = Counter(list(map(int, input().split())))

# N에 정수를 입력받습니다.
N = int(input())

# 구매한 신발의 총 가격을 저장할 변수를 초기화합니다.
sum = 0

# N번 반복합니다.
for _ in range(N):
    # 신발 사이즈와 가격을 입력받습니다.
    size, price = map(int, input().split())
    
    # 만약 신발 사이즈가 남아있다면 가격을 더하고 재고를 1 감소시킵니다.
    if shoe_sizes[size] > 0:
        sum += price
        shoe_sizes[size] -= 1

# 최종 총 가격을 출력합니다.
print(sum)
```
