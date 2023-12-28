---
external: false
title: "Collections OrderDicted()"
date: 2023-09-08
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/py-collections-ordereddict/problem?isFullScreen=true)

## 2. 정답 코드 1 (Python)

```python
# 사용자로부터 정수 N을 입력받습니다.
N = int(input())

# 모든 아이템과 각 아이템의 수량을 저장할 딕셔너리를 생성합니다.
all_items = {}

# N번 반복하여 아이템 정보를 입력받고 처리합니다.
for _ in range(N):
    # 사용자로부터 공백으로 구분된 문자열을 입력받고 리스트로 분할합니다.
    line = input().split()
    
    # 마지막 요소를 정수로 변환하여 수량(count)으로 저장합니다.
    count = int(line[-1])
    
    # 마지막 요소를 제외한 모든 요소를 하나의 문자열(item)로 결합합니다.
    item = ' '.join(line[:-1])
    
    # 만약 해당 아이템이 이미 all_items 딕셔너리에 존재한다면 수량을 누적합니다.
    if item in all_items:
        all_items[item] += count
    else:
        # 아이템이 처음 등장하는 경우, 새로운 아이템으로 추가합니다.
        all_items[item] = count

# 모든 아이템과 각 아이템의 최종 수량을 출력합니다.
for item, count in all_items.items():
    print(item, count)
```

## 3. 정답 코드 2 (Python)

```python
# OrderedDict 모듈을 가져옵니다. OrderedDict는 삽입 순서를 유지하는 딕셔너리입니다.
from collections import OrderedDict

# 사용자로부터 정수 N을 입력받습니다.
N = int(input())

# 모든 아이템과 각 아이템의 수량을 저장할 Ordered Dictionary를 생성합니다.
all_items = OrderedDict()

# N번 반복하여 아이템 정보를 입력받고 처리합니다.
for _ in range(N):
    # 사용자로부터 공백으로 구분된 문자열을 입력받고 리스트로 분할합니다.
    line = input().split()
    
    # 마지막 요소를 정수로 변환하여 수량(count)으로 저장합니다.
    count = int(line[-1])
    
    # 마지막 요소를 제외한 모든 요소를 하나의 문자열(item)로 결합합니다.
    item = ' '.join(line[:-1])
    
    # 만약 해당 아이템이 이미 all_items 딕셔너리에 존재한다면 수량을 누적합니다.
    if item in all_items:
        all_items[item] += count
    else:
        # 아이템이 처음 등장하는 경우, 새로운 아이템으로 추가합니다.
        all_items[item] = count

# 모든 아이템과 각 아이템의 최종 수량을 출력합니다.
for item, count in all_items.items():
    print(item, count)
```
