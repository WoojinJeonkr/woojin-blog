---
external: false
title: "Baekjoon 1592"
date: 2023-08-06
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1592)

## 2. 정답 코드 (Python, memory: 31256KB, time: 48ms)

```python
# 함수 정의: M번 받기까지 공을 던지는 횟수를 계산하는 함수
def calculate_throw_count(N, M, L):
    # 초기화: 각 자리에 공을 받은 횟수를 저장하는 리스트, 공을 던진 횟수, 현재 위치 인덱스
    positions = [0] * N
    throw_count = i = 0

    # M번 받기까지 반복
    while positions[i] < M - 1:
        # 현재 위치에 공 받은 횟수를 1 증가시키고 공 던진 횟수도 1 증가
        positions[i] += 1
        throw_count += 1
        # 홀수 번째로 공을 받았으면 시계 방향으로 L번째 있는 사람에게, 짝수 번째로 공을 받았으면 반시계 방향으로 L번째 있는 사람에게 공을 던짐
        i = (i + L) % N if positions[i] % 2 == 1 else (i - L) % N

    # 공을 던진 횟수를 리턴
    return throw_count

# 프로그램 시작
if __name__ == "__main__":
    # N, M, L을 입력받음
    N, M, L = map(int, input().split())
    # calculate_throw_count 함수를 호출하여 결과를 얻고 출력
    result = calculate_throw_count(N, M, L)
    print(result)
```
