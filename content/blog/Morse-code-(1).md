---
external : false
title : "Morse code (1)"
tag : [Programmers, Python]
date : 2025-08-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120838)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(letter):
    # 모스부호와 영어 소문자 매핑 사전
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    
    # 입력 문자열을 공백으로 나누어 모스부호 단위로 분리
    codes = letter.split()
    
    # 분리된 모스부호를 대응하는 문자로 변환하고 이어붙이기
    answer = ''.join(morse[code] for code in codes)
    
    # 최종 해독된 문자열 반환
    return answer
```
