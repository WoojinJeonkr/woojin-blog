---
external: false
title: "Apple and Orange"
tag: [Hackerrank, Python]
date: 2024-01-12
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Approach

해당 문제는 사과나무와 오렌지나무가 있는 위치, 그리고 각각의 사과와 오렌지가 나무에서 떨어진 위치를 나타내는 배열이 주어졌을 때, 주어진 영역 [s, t] 내에 떨어진 사과와 오렌지의 개수를 세는 countApplesAndOranges 함수를 구현하는 것입니다.  
여기서 s와 t는 집을 나타내는 좌표이며, a와 b는 각각 사과나무와 오렌지나무의 위치를 나타냅니다. apples 배열은 각 사과가 나무에서 떨어진 위치를, oranges 배열은 각 오렌지가 나무에서 떨어진 위치를 나타냅니다.  
함수의 주요 목표는 나무에서 떨어진 각 사과와 오렌지의 위치가 주어진 영역 [s, t] 내에 있는지를 확인하고, 그 개수를 세도록 작성해야 합니다.

1. `사과와 오렌지의 위치 확인`: 각 사과와 오렌지의 위치를 나타내는 배열을 순회하면서, 해당 과일이 주어진 영역 내에 떨어졌는지를 확인합니다. 위치 확인에는 s와 t를 이용하며, 떨어진 위치가 [s, t]에 속한다면 해당 과일이 영역 내에 떨어진 것으로 간주합니다.
2. `개수 세기`: 영역 내에 떨어진 각 사과와 오렌지를 찾을 때마다 카운터를 증가시킵니다.
3. `결과 출력`: 최종적으로 센 사과와 오렌지의 개수를 출력합니다.

## 3. Solve

위의 Approach 부분에서 정의한 접근 방식을 통해 countApplesAndOranges 함수를 다음과 같이 작성할 수 있습니다.

```python
def countApplesAndOranges(s, t, a, b, apples, oranges):
  apple_count = 0
  orange_count = 0
  
  for i in range(len(apples)):
    if a + apples[i] >= s and a + apples[i] <= t:
      apple_count += 1
  
  for j in range(len(oranges)):
    if b + oranges[j] >= s and b + oranges[j] <= t:
      orange_count += 1
  
  print(apple_count)
  print(orange_count)
```

위의 코드에 대해 리팩토링하여 리스트 컴프리헨션(List Comprehension)과 sum 함수를 사용함으로써 반복문을 더 간결하게 표현할 수 있습니다.

```python
def countApplesAndOranges(s, t, a, b, apples, oranges):
  # 사과의 개수를 계산합니다.
  apple_count = sum(1 for apple in apples if s <= a + apple <= t)
  # 오렌지의 개수를 계산합니다.
  orange_count = sum(1 for orange in oranges if s <= b + orange <= t)

  # 결과를 출력합니다.
  print(apple_count)
  print(orange_count)
```

### 3-1. List Comprehension

리스트 컴프리헨션은 파이썬에서 리스트를 생성하는 간결하고 효율적인 방법 중 하나입니다. 일반적으로 반복문과 조건문을 결합하여 리스트를 만들 수 있습니다.  
리스트 컴프리헨션의 기본 구조는 다음과 같습니다.

```python
new_list = [expression for item in iterable if condition]
```

1. `expression`: 각 요소에 대한 표현식입니다.
2. `item`: 반복 가능한(iterable) 객체의 각 요소입니다.
3. `iterable`: 반복 가능한 객체(리스트, 튜플, 문자열 등)입니다.
4. `condition` (옵션): 필터링을 위한 조건입니다. 이 조건이 참인 경우에만 expression이 적용됩니다.

예를 들어, 1부터 5까지의 숫자 중에서 짝수만 포함하는 리스트를 만들다고 가정해보겠습니다.
기존의 반복문 안에 조건문을 작성하면 다음과 같이 작성할 수 있습니다.

```python
even_numbers = []
for i in range(1, 6):
  if i%2 == 0:
    even_numbers.append(i)
print(even_numbers)
```

이 코드는 `[2, 4]`를 출력합니다. 여기서 x가 각각 1부터 5까지의 숫자를 나타내며, `x % 2 == 0` 조건에 맞는 경우에만 리스트에 포함됩니다.  
이제 리스트 컴프리헨션을 사용하여 코드를 다시 작성해보겠습니다.

```python
even_numbers = [x for x in range(1, 6) if x % 2 == 0]
print(even_numbers)
```

5줄이던 코드가 2줄로 축소된 것을 확인할 수 있습니다.  
이처럼 리스트 컴프리헨션을 사용하면 코드를 간결하게 작성할 수 있으며, 가독성을 높일 수 있습니다.

## 4. Total Code

```python
#!/bin/python3

# 
# 아래 코드는 사과와 오렌지의 갯수를 계산하는 함수를 구현한 것입니다.
# 

def countApplesAndOranges(s, t, a, b, apples, oranges):
  # 사과의 개수를 계산합니다.
  apple_count = sum(1 for apple in apples if s <= a + apple <= t)
  # 오렌지의 개수를 계산합니다.
  orange_count = sum(1 for orange in oranges if s <= b + orange <= t)

  # 결과를 출력합니다.
  print(apple_count)
  print(orange_count)
      
if __name__ == '__main__':
  # 집의 위치를 나타내는 변수들을 입력받습니다.
  s, t = map(int, input().rstrip().split())

  # 사과나 오렌지 나무의 위치를 나타내는 변수들을 입력받습니다.
  a, b = map(int, input().rstrip().split())

  # 사과와 오렌지의 갯수를 나타내는 변수들을 입력받습니다.
  m, n = map(int, input().rstrip().split())

  # 각각의 사과의 위치를 입력받습니다.
  apples = list(map(int, input().rstrip().split()))

  # 각각의 오렌지의 위치를 입력받습니다.
  oranges = list(map(int, input().rstrip().split()))

  # 함수를 호출하여 사과와 오렌지의 갯수를 출력합니다.
  countApplesAndOranges(s, t, a, b, apples, oranges)
```
