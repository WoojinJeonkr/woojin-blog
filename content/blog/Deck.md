---
external : false
title : "Deck"
tag : [Programmers, Python]
date : 2024-12-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/159994)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 두 카드 뭉치에서 주어진 목표 순서대로 단어들을 꺼내어 배열을 만들 수 있는지를 확인하는 문제입니다. 목표 배열을 만들기 위해서는 두 카드 뭉치에서 순서를 유지하며 단어를 하나씩 꺼내야 합니다. 각 카드 뭉치에서 한 번 꺼낸 단어는 다시 사용할 수 없고, 목표 배열의 단어들이 두 카드 뭉치에서 차례대로 나와야만 목표 배열을 만들 수 있습니다.

먼저, cards1과 cards2에서 각 단어들을 하나씩 꺼내는 과정에서 goal 배열에 등장하는 단어들이 그 순서대로 나오게끔 해야 합니다. 이때 중요한 점은 두 카드 뭉치에서 각 단어를 꺼내는 순서를 바꿀 수 없다는 것입니다. 즉, 카드 뭉치에서 나온 단어는 해당 카드에서만 사용할 수 있습니다. 목표 배열의 각 단어가 두 카드 뭉치 중 어느 하나에서 순차적으로 나올 수 있는지 확인해야 합니다.

이를 위해 각 카드 뭉치에서 단어를 하나씩 꺼내는 인덱스를 추적하는 두 개의 변수를 사용합니다. 목표 배열의 각 단어가 현재 카드 뭉치에서 나오면 해당 카드 뭉치의 인덱스를 증가시키고, 목표 단어를 처리합니다. 만약 두 카드 뭉치에서 현재 단어를 찾을 수 없다면, 목표 배열을 만들 수 없으므로 "No"를 반환합니다. 모든 목표 단어를 순차적으로 처리할 수 있으면 "Yes"를 반환합니다.

## 3. Answer

```java
def solution(cards1, cards2, goal):
  idx1, idx2 = 0, 0  # cards1과 cards2에서 사용할 인덱스 변수 초기화
  answer = ''  # 결과를 저장할 변수 초기화
  
  for word in goal:  # goal 배열을 순차적으로 처리
    # goal 단어가 cards1에서 나온다면
    if idx1 < len(cards1) and cards1[idx1] == word:
      idx1 += 1  # cards1에서 다음 단어로 이동
    # goal 단어가 cards2에서 나온다면
    elif idx2 < len(cards2) and cards2[idx2] == word:
      idx2 += 1  # cards2에서 다음 단어로 이동
    else:
      answer = "No"  # 목표 단어를 두 카드 뭉치에서 찾을 수 없으면 "No"로 설정
      return answer  # 바로 "No"를 반환하고 종료
  
  answer = "Yes"  # 모든 goal 단어를 성공적으로 처리했다면 "Yes"
  return answer  # 결과 반환
```
