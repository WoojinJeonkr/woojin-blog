---
external: false
title: "Baekjoon 11006"
date: 2023-11-29
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/11006)

## 2. 문제 해석

1. 주어진 방정식을 사용하여 닭의 다리 수 t를 계산합니다.

    1. t + u = m        (방정식 1, 총 닭의 수)
    2. 2t + u = n       (방정식 2, 총 다리의 수)

2. 위의 방정식을 풀기 위해 방정식 1을 2로 곱하고 방정식 2를 빼서 u를 제거합니다.

    - 2(t + u) - (2t + u) = 2m - n
    - 2t + 2u - 2t - u = 2m - n

3. u = 2m - n

## 3. 정답 코드 (python3, memory: 31120KB, time: 52ms)

```python
def calculate_cut_and_whole_chickens(total_legs, total_chickens):
    # 닭의 다리 수와 전체 닭 수를 입력받아
    # 잘린 닭의 수와 멀쩡한 닭의 수를 계산합니다.
    cut_chickens = 2 * total_chickens - total_legs
    whole_chickens = total_chickens - cut_chickens
    return cut_chickens, whole_chickens

def main():
    # 테스트 케이스의 개수를 입력받습니다.
    num_test_cases = int(input())

    # 각 테스트 케이스에 대해 반복합니다.
    for _ in range(num_test_cases):
        # 닭의 다리 수와 전체 닭 수를 입력받습니다.
        legs, chickens = map(int, input().split())

        # 결과를 계산하고 출력합니다.
        result = calculate_cut_and_whole_chickens(legs, chickens)
        print(*result)

if __name__ == "__main__":
    main()
```
