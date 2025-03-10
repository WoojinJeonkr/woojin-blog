---
external : false
title : "Swap elements at indices"
tag : [Programmers, Python]
date : 2025-03-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120895)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 먼저 문자열의 특성을 이해해야 합니다. 문자열은 불변객체이므로, 직접 수정할 수 없습니다. 따라서 문자열을 리스트로 변환하여 수정할 수 있는 상태로 만드는 것이 첫 번째 단계입니다.

문자열을 리스트로 변환한 후, 주어진 인덱스에 해당하는 문자를 교환하는 과정이 필요합니다. 이는 리스트의 인덱싱 기능을 활용하여 쉽게 수행할 수 있습니다.

마지막으로, 수정된 리스트를 다시 문자열로 변환하여 결과를 반환해야 합니다. 이 과정에서 join() 메소드를 사용하여 리스트의 요소를 문자열로 결합합니다.

## 3. Answer

```python
def solution(my_string, num1, num2):
  # 문자열을 리스트로 변환하여 수정 가능하게 만듭니다.
  my_list = list(my_string)
  
  # 인덱스 num1과 num2에 해당하는 문자를 교환합니다.
  my_list[num1], my_list[num2] = my_list[num2], my_list[num1]
  
  # 리스트를 다시 문자열로 변환하여 결과를 반환합니다.
  answer = ''.join(my_list)
  
  return answer
```
