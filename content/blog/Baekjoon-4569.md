---
external: false
title: "Baekjoon 4569"
date: 2023-10-05
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4569)

## 2. 정답 코드 (Python, memory: 31256KB, time: 48ms)

```python
def is_acceptable(s):
    # 모음 리스트
    vowel = ['a', 'e', 'i', 'o', 'u']
    v_cnt = 0  # 연속된 모음의 개수
    v_repeat, c_repeat = 0, 0  # 연속된 자음 또는 모음의 반복 횟수
    last = ''  # 이전 문자
    flag = True  # 문자열이 acceptable한지 판별하는 플래그

    # 문자열을 한 글자씩 확인
    for i in s:
        if i in vowel:  # 만약 현재 문자가 모음이라면
            # 연속된 모음이 2회 이상이거나 (v_repeat) 
            # 'e'나 'o'가 아닌 모음에서 이전 문자와 같은 경우 (i != 'e' and i != 'o' and last == i) 
            # 또는 이전 문자와 현재 문자가 같은 경우 flag를 False로 설정하고 반복문을 빠져나감
            if v_repeat == 2 or ((i != 'e' and i != 'o') and last == i):
                flag = False
                break
            else:
                v_repeat += 1  # 연속된 모음의 개수를 증가
                c_repeat = 0  # 연속된 자음의 개수 초기화
                v_cnt += 1  # 모음 개수 증가
                last = i  # 이전 문자를 현재 문자로 업데이트

        else:  # 현재 문자가 자음일 경우
            # 연속된 자음이 2회 이상이거나 (c_repeat)
            # 이전 문자와 현재 문자가 같은 경우 flag를 False로 설정하고 반복문을 빠져나감
            if c_repeat == 2 or last == i:
                flag = False
                break
            else:
                c_repeat += 1  # 연속된 자음의 개수를 증가
                v_repeat = 0  # 연속된 모음의 개수 초기화
                last = i  # 이전 문자를 현재 문자로 업데이트
    
    # 모음이 하나도 없거나 (v_cnt == 0)
    # 모음과 자음이 규칙에 맞게 나열되어 있지 않은 경우 (flag가 False로 설정된 경우) 
    # 문자열은 acceptable하지 않음
    if v_cnt == 0:
        flag = False

    if flag:  # 최종적으로 flag가 True라면 문자열은 acceptable함
        return True
    else:
        return False

while True:
    s = input()  # 사용자로부터 문자열 입력 받음
    if s == "end":  # 사용자가 'end'를 입력하면 루프 종료
        break
    if is_acceptable(s):  # is_acceptable 함수를 사용하여 문자열이 acceptable한지 확인
        print("<{}> is acceptable.".format(s))  # acceptable한 경우 메시지 출력
    else:
        print("<{}> is not acceptable.".format(s))  # acceptable하지 않은 경우 메시지 출력
```
