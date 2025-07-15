---
external : false
title : "Babbling (1)"
tag : [Programmers, Python]
date : 2025-07-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120956)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(babbling):
    answer = 0
    # 조카가 발음할 수 있는 네 가지 기본 발음
    pronounceable_words = ["aya", "ye", "woo", "ma"]

    for word in babbling:
        temp_word = word
        
        # 각 발음 가능한 단어를 특수 문자로 치환
        # 이렇게 하면 같은 발음이 연속으로 오는 경우를 방지할 수 있습니다.
        # 예: "woowo" -> "11wo" (잘못된 처리)
        # 따라서, 한 번 치환된 부분은 다시 치환되지 않도록 처리해야 합니다.
        # 더 간단한 방법은 각 발음 단어를 먼저 공백으로 치환하고,
        # 최종적으로 공백만 남는지 확인하는 것입니다.
        for p_word in pronounceable_words:
            temp_word = temp_word.replace(p_word, ' ') # 발음 가능한 부분을 공백으로 치환

        # 공백을 제거한 후 남은 문자가 없으면 발음 가능한 단어
        if temp_word.strip() == '':
            answer += 1
            
    return answer
```
