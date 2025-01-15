---
external : false
title : "Find point location"
tag : [Programmers, Python]
date : 2025-01-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=python3)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 3분
2. 문제 해결 시간: 9분
3. 디버깅 시간: 6분
4. 코드 시도 횟수: 1회

## 3. Problem solving process

문제를 해결하기 위해 좌표평면의 사분면을 판단하기 위해서는 주어진 점의 x좌표와 y좌표의 부호를 확인해야 합니다. 입력으로 받은 dot 배열의 첫 번째 원소는 x좌표, 두 번째 원소는 y좌표를 나타내므로, 이를 각각 변수로 분리하여 사용하면 편리합니다.

조건문을 사용하여 x와 y의 부호 조합에 따라 해당하는 사분면을 판단할 수 있습니다. x와 y가 모두 양수라면 제1사분면, x가 음수이고 y가 양수라면 제2사분면, x와 y가 모두 음수라면 제3사분면, 마지막으로 x가 양수이고 y가 음수라면 제4사분면입니다. 이러한 조건을 if-elif-else 구문으로 구현하여 해당하는 사분면 번호를 반환하면 됩니다.

## 4. Answer

```python
def solution(dot):
  # 입력받은 dot 배열에서 x, y 좌표를 분리
  x, y = dot
  
  # x, y 모두 양수인 경우 제1사분면
  if x > 0 and y > 0:
    return 1
  # x가 음수, y가 양수인 경우 제2사분면  
  elif x < 0 and y > 0:
    return 2
  # x, y 모두 음수인 경우 제3사분면
  elif x < 0 and y < 0:
    return 3
  # x가 양수, y가 음수인 경우 제4사분면
  else:
    return 4
```
