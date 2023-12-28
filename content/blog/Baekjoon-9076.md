---
external: false
title: "Baekjoon 9076"
date: 2023-07-23
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/9076)

## 2. 처음 작성한 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 'lst'라는 리스트를 입력으로 받는 count_points 함수를 정의합니다.
def count_points(lst):
    # 리스트 'lst'에서 최댓값을 찾아 제거합니다.
    lst.remove(max(lst))
    # 리스트 'lst'에서 최솟값을 찾아 제거합니다.
    lst.remove(min(lst))
    # 수정된 'lst'에서 새로운 최댓값과 최솟값을 찾습니다.
    max_point, min_point = max(lst), min(lst) 
    # 최댓값과 최솟값의 차이가 4 이상인 경우 "KIN"을 출력하고, 그렇지 않은 경우 나머지 요소들의 합을 출력합니다.
    print("KIN") if max_point - min_point >= 4 else print(sum(lst))

# 테스트 케이스의 개수를 나타내는 정수 'T'를 입력으로 받습니다.
T = int(input())

# T번만큼 반복하면서 각 테스트 케이스를 처리합니다.
for _ in range(T):
    # 공백으로 구분된 정수 입력을 받고, 이를 리스트 'lst'로 변환합니다.
    lst = list(map(int, input().split()))
    # 입력된 리스트 'lst'를 count_points 함수로 전달하여 처리합니다.
    count_points(lst)
```

## 3. 수정한 코드 (Python, memory: 31256KB, time: 40ms)

```python
# 'lst'라는 리스트를 입력으로 받는 count_points 함수를 정의합니다.
def count_points(lst):
    # 입력된 리스트 'lst'를 정렬하여 'sorted_lst'에 저장합니다.
    sorted_lst = sorted(lst)
    # 'sorted_lst'의 길이가 4 이상인 경우에만 처리합니다.
    if len(sorted_lst) >= 4:
        # 'sorted_lst'에서 첫 번째와 마지막 요소를 제외한 부분을 다시 'sorted_lst'에 저장합니다.
        sorted_lst = sorted_lst[1:-1]
        # 새로운 'sorted_lst'에서 최댓값과 최솟값을 찾습니다.
        max_point, min_point = sorted_lst[-1], sorted_lst[0]
        # 최댓값과 최솟값의 차이가 4 이상인 경우 "KIN"을 출력하고, 그렇지 않은 경우 남은 요소들의 합을 출력합니다.
        print("KIN") if max_point - min_point >= 4 else print(sum(sorted_lst))
    else:
        print(sum(sorted_lst))

# 테스트 케이스의 개수를 나타내는 정수 'T'를 입력으로 받습니다.
T = int(input())

# 'T'번만큼 반복하면서 각 테스트 케이스를 처리합니다.
for _ in range(T):
    # 공백으로 구분된 정수 입력을 받고, 이를 리스트 'lst'로 변환합니다.
    lst = list(map(int, input().split()))
    # 입력된 리스트 'lst'를 count_points 함수로 전달하여 처리합니다.
    count_points(lst)
```
