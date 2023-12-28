---
external: false
title: "Baekjoon 1392"
date: 2023-08-02
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1392)

## 2. 정답 코드 (Python, memory: 31256KB, time: 80ms)

```python
# 음표 번호를 찾는 함수를 정의합니다.
def find_note_number(N, time_list, query_list):
    result = []  # 결과를 담을 리스트 초기화
    cumulative_time = [0] * N  # 누적된 시간을 저장할 리스트 초기화
    
    # 누적된 시간을 계산합니다.
    for i in range(N):
        # i번째 누적 시간 = 현재 시간(time_list[i]) 또는 이전 누적 시간(cumulative_time[i-1]) + 현재 시간(time_list[i])
        cumulative_time[i] = time_list[i] if i == 0 else cumulative_time[i-1] + time_list[i]
    
    # 각 쿼리에 대해 해당하는 음표 번호를 찾는 과정
    for t in query_list:
        for i in range(N):
            if t < cumulative_time[i]:
                result.append(i + 1)  # 누적 시간이 쿼리 시간보다 크면 해당하는 음표 번호를 결과 리스트에 추가
                break

    return result  # 최종 결과 리스트 반환

# N과 Q 값을 입력받습니다.
N, Q = map(int, input().split())

# 각 음표의 시간 정보를 입력받아 리스트로 저장합니다.
time_list = [int(input()) for _ in range(N)]

# 쿼리 시간들을 입력받아 리스트로 저장합니다.
query_list = [int(input()) for _ in range(Q)]

# find_note_number 함수를 호출하여 결과 리스트를 얻습니다.
result = find_note_number(N, time_list, query_list)

# 결과 리스트에 있는 음표 번호들을 출력합니다.
for note_number in result:
    print(note_number)
```
