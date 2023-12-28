---
external: false
title: "Baekjoon 1072"
date: 2023-09-07
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1072)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
def find_minimum_additional_points(x, y):
    # 승률 계산
    z = (100 * y) // x
    # 이분 탐색을 위한 초기 설정
    left = 0
    right = x
    res = x

    # 승률이 99% 이상인 경우 -1 반환
    if z >= 99:
        return -1
    else:
        # 이분 탐색 수행
        while left <= right:
            mid = (left + right) // 2
            # 새로운 승률 계산 및 조건 비교
            if (100 * (y + mid)) // (x + mid) > z:
                res = mid
                right = mid - 1
            else:
                left = mid + 1

        return res

# 사용자로부터 입력을 받아 함수 호출
x, y = map(int, input().split())
print(find_minimum_additional_points(x, y))
```
