---
external : false
title : "Babbling"
tag : [Programmers, Python]
date : 2024-12-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/133499)에서 확인하실 수 있습니다.

## 2. Problem solving process

조카가 발음할 수 있는 단어를 판별하기 위해, 먼저 발음 가능한 네 가지 소리("aya", "ye", "woo", "ma")를 목록으로 정의합니다. 이 목록을 기반으로, 입력된 각 단어를 순회하며 발음 가능한 소리들이 사용되었는지 확인합니다. 각 단어는 조카가 발음할 수 있는지 판단하기 위해 두 가지 조건을 만족해야 합니다. 첫 번째는 같은 발음이 연속적으로 나타나지 않아야 하며, 두 번째는 발음 가능한 소리들을 제거한 결과 남는 문자열이 없어야 합니다.

각 단어에 대해 위의 조건을 검증하기 위해 발음 가능한 소리가 포함되어 있다면 이를 제거하며, 제거 도중 같은 발음이 연속된 경우 해당 단어를 검증 대상에서 제외합니다. 모든 발음을 제거한 후, 남은 문자열이 빈 문자열인 경우에만 조카가 발음할 수 있는 단어로 인정하고 카운트에 추가합니다. 이 과정을 모든 입력 단어에 대해 반복한 뒤, 최종적으로 조카가 발음할 수 있는 단어의 개수를 반환합니다.

## 3. Answer

```python
def solution(babbling):
  # 조카가 발음할 수 있는 단어 목록
  pronounceable = ["aya", "ye", "woo", "ma"]
  answer = 0

  for word in babbling:  # 입력된 각 단어에 대해 반복
    original_word = word
    for sound in pronounceable:  # 발음 가능한 단어들을 확인
      if sound * 2 in word:  # 같은 발음이 연속되는 경우 탐지
        break
      word = word.replace(sound, " ")  # 발음 가능한 단어를 공백으로 대체
    else:  # 모든 발음을 순회한 후
      if word.strip() == "":  # 남은 문자열이 빈 문자열이면 유효한 단어로 간주
        answer += 1

  return answer
```
