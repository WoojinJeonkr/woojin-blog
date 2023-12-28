---
external: false
title: "Baekjoon 4436"
date: 2023-07-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/4436)

## 2. 문제 접근 방법

- 숫자 0부터 9까지가 결과 숫자에 모두 나타나는지 확인하는 것이 문제의 핵심입니다.
- 데이터 구조를 사용하여 각 숫자가 나타났는지 여부를 저장하여 숫자의 나타남 여부를 추적합니다.
- 결과 숫자에 모든 숫자가 나타날 때까지 반복적인 과정을 수행해야 하므로 루프를 사용하여 숫자의 나타남 여부를 확인하고, 결과 숫자를 업데이트하며 반복적으로 수행합니다.

## 3. Solution 1 (Python, memory: 31256KB, time: 44ms)

```python
def find_smallest_k(n):
    # 각 숫자의 등장 여부를 추적하기 위한 딕셔너리입니다.
    # 초기에는 모든 값이 False로 설정됩니다.
    appear = {'0': False, '1': False, '2': False, '3': False, '4': False, '5': False, '6': False, '7': False, '8': False, '9': False}
    
    # 찾아야 할 남은 숫자의 개수를 추적합니다.
    rest = 10

    # 숫자의 합을 나타내는 변수 S와 걸린 단계 수를 추적하는 변수 k를 초기화합니다.
    S = k = 0

    while rest:
        # 단계 수를 증가시켜 걸린 단계 수를 추적합니다.
        k += 1

        # 각 단계에서 n을 S에 더합니다.
        S += n

        # 현재 S의 각 숫자에 대해 반복합니다.
        for m in str(S):

            # 해당 숫자가 이전에 등장하지 않았다면:
            if not appear[m]:

                # 해당 숫자가 등장했음을 표시합니다.
                appear[m] = True

                # 남은 숫자의 개수를 감소시킵니다.
                rest -= 1

                if not rest:
                    # 모든 숫자를 찾았다면 루프를 종료합니다.
                    break
    # 모든 숫자를 찾는 데 걸린 단계 수를 반환합니다.
    return k

# 프로그램의 진입점입니다.
if __name__ == "__main__":

    while True:
        try:
            # 사용자로부터 정수를 입력받습니다.
            n = int(input())
        except EOFError:
            # 더 이상 입력이 없을 경우 루프를 종료합니다.
            break

        # 입력을 사용하여 find_smallest_k 함수를 호출합니다.
        result = find_smallest_k(n)
        
        # 결과를 출력합니다.
        print(result)
```

### 3-1. 코드 개선 사항

- 숫자의 나타남 여부를 추적하기 위해 딕셔너리 대신 배열 또는 집합을 사용하는 것이 좋습니다. 딕셔너리의 경우 숫자의 존재 유무만 추적하고 있기 때문에 더 간단하고 가독성이 좋아집니다.
- 'appear' 딕셔너리는 현재 '0'부터 '9'까지의 키를 하드코딩하여 초기화하고 있습니다. 이를 입력된 숫자에 따라 동적으로 생성되도록 변경하면 더 유연한 코드가 될 것입니다.
- 'for' 루프 내부의 'break' 문을 Boolean 플래그로 대체하면, 각 반복에서 조건을 확인할 필요가 없어져 성능이 약간 향상됩니다.
- 'k' 변수를 0이 아닌 1로 초기화하는 것이 좋습니다. 첫 번째 반복은 최종 결과에 계산되지 않기 때문입니다.

## 4. Solution 2 (Python, memory: 31256KB, time: 44ms)

```python
def find_smallest_k(n):
    # 각 숫자의 등장 여부를 추적하기 위한 리스트입니다.
    # 초기에는 모든 값이 False로 설정됩니다.
    appear = [False] * 10

    # 찾아야 할 남은 숫자의 개수를 추적합니다.
    rest = 10

    # 각 단계에서의 숫자의 합을 나타내는 변수 S와 걸린 단계 수를 추적하는 변수 k를 초기화합니다.
    S = k = 0

    while rest:
        # 단계 수를 증가시켜 걸린 단계 수를 추적합니다.
        k += 1

        # 각 단계에서 n을 S에 더합니다.
        S += n

        for m in str(S):
            # 현재 S의 각 숫자에 대해 반복하면서 정수로 변환합니다.
            digit = int(m)

            if not appear[digit]:
                # 해당 숫자가 이전에 등장하지 않았다면:
                appear[digit] = True
                # 해당 숫자가 등장했음을 표시합니다.

                # 남은 숫자의 개수를 감소시킵니다.
                rest -= 1

                if not rest:
                    # 모든 숫자를 찾았다면 루프를 종료합니다.
                    break

    # 모든 숫자를 찾는 데 걸린 단계 수를 반환합니다.
    return k

# 프로그램의 진입점입니다.
if __name__ == "__main__":

    while True:
        try:
            # 사용자로부터 정수를 입력받습니다.
            n = int(input())
        except EOFError:
            # 더 이상 입력이 없을 경우 루프를 종료합니다.
            break

        # 입력을 사용하여 find_smallest_k 함수를 호출합니다.
        result = find_smallest_k(n)

        # 결과를 출력합니다.
        print(result)
```

## 5. Solution 3 (Python, memory: 31256KB, time: 48ms)

```python
def find_smallest_k(n):
    # 각 숫자의 등장 여부를 추적하기 위한 리스트입니다.
    # 초기에는 모든 값이 False로 설정됩니다.
    appear = {str(i): False for i in range(10)}

    # 찾아야 할 남은 숫자의 개수를 추적합니다.
    rest = 10

    # 각 단계에서의 숫자의 합을 나타내는 변수 S와 걸린 단계 수를 추적하는 변수 k를 초기화합니다.
    S = k = 0

    while rest:
        # 단계 수를 증가시켜 걸린 단계 수를 추적합니다.
        k += 1

        # 각 단계에서 n을 S에 더합니다.
        S += n

        for m in str(S):
            # 현재 S의 각 숫자에 대해 반복하면서 정수로 변환합니다.
            digit = int(m)

            if not appear[digit]:
                # 해당 숫자가 이전에 등장하지 않았다면:
                appear[digit] = True
                # 해당 숫자가 등장했음을 표시합니다.

                # 남은 숫자의 개수를 감소시킵니다.
                rest -= 1

                if not rest:
                    # 모든 숫자를 찾았다면 루프를 종료합니다.
                    break

    # 모든 숫자를 찾는 데 걸린 단계 수를 반환합니다.
    return k

# 프로그램의 진입점입니다.
if __name__ == "__main__":

    while True:
        try:
            # 사용자로부터 정수를 입력받습니다.
            n = int(input())
        except EOFError:
            # 더 이상 입력이 없을 경우 루프를 종료합니다.
            break

        # 입력을 사용하여 find_smallest_k 함수를 호출합니다.
        result = find_smallest_k(n)

        # 결과를 출력합니다.
        print(result)
```
