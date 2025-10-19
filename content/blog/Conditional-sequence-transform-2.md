---
external : false
title : "Conditional sequence transform 2"
tag : [Programmers, Python]
date : 2025-10-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181881)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr):
    answer = 0  # 몇 번 반복했는지를 세기 위한 변수 (x 값)

    while True:
        new_arr = []  # 변환된 값을 저장할 새 배열

        # arr의 각 원소에 대해 규칙에 따라 변환
        for x in arr:
            if x >= 50 and x % 2 == 0:
                # 50 이상이면서 짝수인 경우 → 2로 나눈다
                new_arr.append(x // 2)
            elif x < 50 and x % 2 == 1:
                # 50 미만이면서 홀수인 경우 → 2를 곱하고 1을 더한다
                new_arr.append(x * 2 + 1)
            else:
                # 그 외의 경우(변화 없음) → 그대로 유지
                new_arr.append(x)

        # 변환 결과가 이전과 동일하면 반복 종료 (arr(x) = arr(x+1))
        if new_arr == arr:
            return answer  # 현재까지의 반복 횟수 반환

        # 다음 반복을 위해 arr를 갱신
        arr = new_arr
        answer += 1  # 반복 횟수 증가
```
