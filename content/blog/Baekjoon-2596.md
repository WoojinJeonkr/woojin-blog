---
external: false
title: "Baekjoon 2596"
date: 2023-08-23
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2596)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
def hamming_distance(str1, str2):
    return sum(s1 != s2 for s1, s2 in zip(str1, str2))

def find_closest_pattern(patterns, target):
    min_distance = float('inf')  # 가장 작은 거리를 초기화합니다.
    closest_index = -1  # 가장 가까운 패턴의 인덱스를 초기화합니다.

    for i, pattern in enumerate(patterns):
        distance = hamming_distance(pattern, target)  # 패턴과 대상 문자열 간의 해밍 거리를 계산합니다.
        if distance < min_distance:
            min_distance = distance  # 현재까지 최소 거리를 업데이트합니다.
            closest_index = i  # 가장 가까운 패턴의 인덱스를 갱신합니다.

    if min_distance == 1:
        return closest_index  # 해밍 거리가 1인 경우, 가장 가까운 패턴의 인덱스를 반환합니다.
    else:
        return -1  # 가까운 패턴이 없는 경우 -1을 반환합니다.

patterns = [
    '000000',  # A
    '001111',  # B
    '010011',  # C
    '011100',  # D
    '100110',  # E
    '101001',  # F
    '110101',  # G
    '111010'   # H
]

pattern_labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

n = int(input())  # 입력 개수를 받습니다.
arr = input().strip()  # 입력 문자열을 받고 공백을 제거합니다.
ans = []  # 변환된 라벨을 저장할 리스트를 초기화합니다.
err = False  # 오류 발생 여부를 나타내는 플래그를 초기화합니다.

while arr:
    found = False  # 패턴 매칭 성공 여부를 나타내는 플래그를 초기화합니다.

    for i, pattern in enumerate(patterns):
        if arr.startswith(pattern):
            ans.append(pattern_labels[i])  # 패턴에 해당하는 라벨을 결과 리스트에 추가합니다.
            arr = arr[len(pattern):]  # 이미 매칭된 부분은 입력 문자열에서 제거합니다.
            found = True  # 패턴 매칭 성공을 표시합니다.
            break

    if not found:
        closest_index = find_closest_pattern(patterns, arr[:6])  # 가장 가까운 패턴을 찾습니다.
        if closest_index == -1:
            err = True  # 가까운 패턴이 없는 경우 오류 플래그를 설정합니다.
            m = len(ans) + 1  # 변환된 라벨의 개수를 계산합니다.
            break
        else:
            ans.append(pattern_labels[closest_index])  # 가장 가까운 패턴의 라벨을 결과 리스트에 추가합니다.
            arr = arr[6:]  # 이미 매칭된 부분은 입력 문자열에서 제거합니다.

if err:
    print(m)  # 오류 발생 시 오류 메시지를 출력합니다.
else:
    print(''.join(ans))  # 변환된 라벨을 출력합니다.
```
