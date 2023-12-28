---
external: false
title: "Baekjoon 20259"
date: 2023-07-17
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/20259)

## 2. 풀이 (Python, memory: 38708KB, time: 3244ms)

```python
import sys

# 세 개의 MBTI 유형을 입력으로 받아서 그들 사이의 심리적인 거리를 계산합니다.
# 네 가지 척도에 대해 각 유형들의 분류가 다른 경우 거리를 1 증가시킵니다.
# 최종 거리를 반환합니다.
def calc_distance(p1, p2, p3):
    distance = 0
    for i in range(4):
        distance += (1 if p1[i] != p2[i] else 0)
        distance += (1 if p2[i] != p3[i] else 0)
        distance += (1 if p3[i] != p1[i] else 0)
    return distance

# 주어진 N명의 학생들의 MBTI 유형 리스트에서 가장 가까운 세 학생 사이의 심리적인 거리를 계산하는 함수입니다.
# 세 개의 반복문을 통해 가능한 모든 세 학생 조합을 검사하며, calc_distance 함수를 호출하여 거리를 계산합니다.
# 최소 거리를 찾아 min_distance 변수에 업데이트합니다.
# 만약 최소 거리가 0이라면 이미 가장 가까운 거리이므로 함수에서 바로 0을 반환하고 그렇지 않다면 최소 거리를 반환합니다.
def find_closest_distance(N, mbti_list):
    min_distance = float('inf')
    for i in range(N):
        for j in range(i + 1, N):
            for k in range(j + 1, N):
                distance = calc_distance(mbti_list[i], mbti_list[j], mbti_list[k])
                min_distance = min(min_distance, distance)
                if min_distance == 0:
                    return 0
    return min_distance

# 테스트 케이스의 수를 입력받고 각 테스트 케이스에 대해 학생의 수와 MBTI 유형 리스트를 입력받습니다.
# find_closest_distance 함수를 호출하여 가장 가까운 세 학생 사이의 심리적인 거리를 계산하고 결과를 출력합니다.
def main():
    T = int(input())
    for _ in range(T):
        N = int(input())
        mbti_list = input().split()
        result = find_closest_distance(N, mbti_list)
        print(result)

if __name__ == '__main__':
    main()
```
