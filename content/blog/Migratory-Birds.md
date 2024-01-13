---
external: false
title: "Migratory Birds"
tag: [Hackerrank, Python]
date: 2024-01-13
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. collections.Counter

Counter는 해시 가능한 객체를 세는 데 사용되는 dict 하위 클래스로, 요소가 딕셔너리 키로 저장되고 해당 요소의 개수가 딕셔너리 값으로 저장되는 컬렉션입니다. 개수는 Counter 객체에서 각 요소의 출현 횟수를 말하며 제로 또는 음수일 수 있는 모든 정수 값이 허용됩니다.  
기본 구조는 다음과 같습니다.

```python
import collections

collections.Counter([iterable-or-mapping])
```

여기서 `[iterable-or-mapping]`은 세어야 하는 요소의 반복 가능한 컬렉션이나 매핑을 의미합니다.  
위의 코드는 다음과 같이 줄여서 사용할 수도 있습니다.

```python
from collections import Counter

Counter([iterable-or-mapping])
```

Counter의 요소는 iterable로부터 계산되거나 다른 매핑(또는 다른 Counter 객체)에서 초기화됩니다.

```python
c = Counter()                           # 새로운 빈 카운터
c = Counter('gallahad')                 # 반복 가능한 객체로부터의 새로운 카운터
c = Counter({'red': 4, 'blue': 2})      # 매핑으로부터의 새로운 카운터
c = Counter(cats=4, dogs=8)             # 키워드 인자로부터의 새로운 카운터
```

Counter 객체는 누락된 항목에 대해 KeyError를 발생시키는 대신 0을 반환한다는 점을 제외하고 딕셔너리 인터페이스를 갖습니다.

```python
c = Counter(['eggs', 'ham'])
c['bacon']                              # 누락된 요소의 개수는 0입니다
```

개수를 0으로 설정해도 Counter 객체에서 요소가 제거되지 않으므로 완전히 제거하려면 del을 사용해야 합니다.

```python
c['sausage'] = 0                        # 개수가 0인 카운터 항목 추가
del c['sausage']                        # 'sausage' 키와 관련된 항목이 c에서 삭제
```

### 2-1. Feature

1. 순서 보존: 삽입 순서를 기억하고 Counter 객체에 대한 수학 연산도 순서를 보존합니다. 결과는 왼쪽 피연산자에서 요소가 처음으로 만나진 순서대로 정렬되며, 그 다음에는 오른쪽 피연산자에서 만난 순서대로 정렬됩니다.
2. 메서드 지원: Counter 객체는 모든 딕셔너리에서 사용 가능한 메서드 이외에도 추가적인 메서드를 지원합니다.

### 2-2. Types of Method

**elements()**: 개수만큼 반복되는 요소에 대한 이터레이터를 반환합니다. 요소는 처음 발견되는 순서대로 반환하며 개수가 0인 요소는 elements()의 반환값에 포함되지 않습니다.

```python
c = Counter(a = 4, b = 2, c = 0, d = -2)
sorted(c.elements()) # ['a', 'a', 'a', 'a', 'b', 'b']
```

**most_common([n])**: n 개의 가장 흔한 요소와 그 개수를 가장 흔한 것부터 가장 적은 것 순으로 나열한 리스트를 반환합니다. n이 생략되거나 None이면, most_common()은 계수기의 모든 요소를 반환되며 개수가 같은 요소는 처음 발견된 순서를 유지합니다.

```python
Counter('abracadabra').most_common(3) # [('a', 5), ('b', 2), ('r', 2)]
```

**subtract([iterable-or-mapping])**: iterable이나 다른 매핑(또는 Counter 객체)으로부터 온 요소들을 뺍니다. dict.update()와 비슷하지만 교체하는 대신 개수를 빼며 입력과 출력 모두 0이나 음수일 수 있습니다.

```python
c = Counter(a=4, b=2, c=0, d=-2)
d = Counter(a=1, b=2, c=3, d=4)
c.subtract(d)
c # Counter({'a': 3, 'b': 0, 'c': -3, 'd': -6})
```

**update([iterable-or-mapping])**: Counter 객체를 갱신하는 데 사용되는 메서드입니다. 이 메서드는 다양한 인자를 받아서 Counter의 요소를 갱신하며 다수의 iterable을 동시에 전달할 수 있습니다.

```python
from collections import Counter

c = Counter({'a': 2, 'b': 1, 'c': 3})
c.update(['a', 'b', 'c', 'd']) # Counter({'a': 3, 'b': 2, 'c': 4, 'd': 1})
```

## 3. Solve

해당 문제는 주어진 새의 배열에서 가장 빈번하게 등장하는 새의 종류를 찾는 함수를 구현하면 됩니다.
저는 Counter를 사용하여 배열에서 새의 종류별 등장 횟수를 계산하고, most_common 메서드를 사용하여 등장 횟수에 따라 내림차순으로 정렬한 뒤 등장 횟수가 가장 높은 새 중에서 가장 작은 종류를 찾아 반환하도록 작성했습니다.

```python
#!/bin/python3
import os
from collections import Counter

# 'migratoryBirds' 함수 정의
def migratoryBirds(arr):
  # 배열에서 새의 종류별 등장 횟수를 세는 Counter 생성
  bird_count = Counter(arr)
  
  # 등장 횟수에 따라 새의 종류를 내림차순으로 정렬
  most_common_birds = bird_count.most_common()
  
  # 가장 빈번하게 등장하는 새의 종류의 등장 횟수
  max_freq = most_common_birds[0][1]
  
  # 가장 빈번하게 등장하는 새 중에서 가장 작은 종류를 찾음
  min_bird = min((bird for bird, freq in most_common_birds if freq == max_freq), default=float('inf'))
  
  # 결과로 찾은 가장 빈번하게 등장하는 새의 종류 반환
  return min_bird

# 메인 함수
if __name__ == '__main__':
  # 출력 결과를 저장할 파일 열기
  fptr = open(os.environ['OUTPUT_PATH'], 'w')

  # 입력으로 받은 배열의 길이를 읽어옴
  arr_count = int(input().strip())

  # 배열의 원소들을 읽어와서 정수로 변환하여 리스트로 저장
  arr = list(map(int, input().rstrip().split()))

  # migratoryBirds 함수 호출하여 결과 얻기
  result = migratoryBirds(arr)

  # 결과를 파일에 쓰기
  fptr.write(str(result) + '\n')

  # 파일 닫기
  fptr.close()
```

## 4. Reference

- [collections - Python docs](https://docs.python.org/ko/3/library/collections.html#collections.Counter)
