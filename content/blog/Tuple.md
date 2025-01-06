---
external : false
title : "Tuple"
tag : [Programmers, Python]
date : 2025-01-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=python3)에서 확인하실 수 있습니다.

## 2. Problem solving process

먼저 주어진 문자열에서 중괄호로 둘러싸인 집합들을 추출합니다. 이를 위해 문자열의 맨 앞과 맨 뒤의 중괄호를 제거한 후, `},{` 를 구분자로 사용하여 문자열을 분할합니다. 각 분할된 문자열은 쉼표로 구분된 숫자들로 이루어져 있으므로, 이를 정수 집합으로 변환합니다.

다음으로, 추출된 집합들을 길이에 따라 오름차순으로 정렬합니다. 이는 튜플의 특성상 원소의 등장 순서가 집합의 크기와 연관되어 있기 때문입니다.

정렬된 집합들을 순회하면서 각 집합에서 이전에 나타나지 않은 새로운 원소를 찾아 결과 리스트에 추가합니다. 이 과정에서 set 연산을 활용하여 효율적으로 새로운 원소를 찾을 수 있습니다.

마지막으로, 완성된 결과 리스트를 반환하면 이것이 바로 원래의 튜플이 됩니다.

## 3. Answer

```python
def solution(s):
  # 입력 문자열에서 맨 앞의 '{{' 와 맨 뒤의 '}}' 제거
  s = s[2:-2]
  
  # 문자열을 집합으로 변환
  # '},{' 를 기준으로 분할하고, 각 그룹을 정수 집합으로 변환
  sets = [set(map(int, group.split(','))) for group in s.split('},{')]
  
  # 집합들을 길이에 따라 정렬
  sets.sort(key=len)
  
  result = []
  # 정렬된 집합들을 순회하며 튜플 재구성
  for s in sets:
    # 현재 집합에서 결과에 없는 새로운 요소를 찾아 추가
    new_element = (s - set(result)).pop()
    result.append(new_element)
  
  # 재구성된 튜플 반환
  return result
```
