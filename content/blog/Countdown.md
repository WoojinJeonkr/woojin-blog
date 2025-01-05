---
external : false
title : "Countdown"
tag : [Programmers, Python]
date : 2025-01-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181899)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 먼저 주어진 start_num에서 end_num까지 1씩 감소하는 숫자를 담은 리스트를 생성해야 합니다. 이를 위해 range 함수를 활용할 수 있습니다.

range 함수는 시작값, 종료값, 증가나 감소의 간격을 설정할 수 있는 기능을 제공합니다. 여기서 시작값은 start_num, 종료값은 end_num - 1로 설정해야 합니다. 이는 range 함수가 종료값을 포함하지 않기 때문입니다. 감소의 간격은 -1로 설정하여 숫자가 1씩 감소하도록 만듭니다.

## 3. Answer

```python
def solution(start_num, end_num):
  # start_num에서 end_num까지 1씩 감소하는 수들의 리스트를 생성
  answer = list(range(start_num, end_num - 1, -1))
  return answer
```
