---
external: false
title: "Baekjoon 17293"
date: 2023-07-30
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/17293)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
def print_beer(n):
    # range() 함수를 사용하여 n부터 1까지 (1을 포함하여) -1 간격으로 반복합니다.
    for i in range(n, 0, -1):
        # 현재 i 값에 따라 "bottle"의 복수형을 정합니다. 즉, i 값에 따라 "bottle" 또는 "bottles" 중 하나를 선택합니다.
        bottles = "bottle" if i == 1 else "bottles"
        next_bottles = "bottle" if i - 1 == 1 else "bottles"

        # 현재 병의 개수로 노래의 첫 번째 구절을 출력합니다.
        print(f"{i} {bottles} of beer on the wall, {i} {bottles} of beer.")
        
        # 다음 병의 개수로 노래의 두 번째 구절을 출력합니다.
        # 만약 i가 1보다 크다면, 다음 병의 개수로 i-1을 사용합니다.
        # 그렇지 않으면 "no more"를 사용하여 더 이상 병이 없음을 표시합니다.
        print(f"Take one down and pass it around, {i-1 if i > 1 else 'no more'} {next_bottles} of beer on the wall.\n")

    # 더 이상 맥주 병이 없는 경우의 노래의 마지막 구절을 출력합니다.
    print("No more bottles of beer on the wall, no more bottles of beer.")
    
    # 상점에서 더 많은 병을 사야하는 경우의 마지막 문장을 출력합니다.
    # 원래 n 값으로 구매할 병의 개수를 나타냅니다.
    print(f"Go to the store and buy some more, {n} {'bottle' if n == 1 else 'bottles'} of beer on the wall.")

# 사용자로부터 병의 개수를 입력받습니다.
N = int(input())

# print_beer 함수를 호출하여 N 개의 병으로 맥주 노래를 출력합니다.
print_beer(N)
```
