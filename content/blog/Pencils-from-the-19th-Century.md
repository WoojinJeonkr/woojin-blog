---
external : false
title : "Pencils from the 19th Century"
tag : [Baekjoon, Python]
date : 2025-12-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/4486)에서 확인하실 수 있습니다.

## 2. Answer

```py
case_num = 1  # 테스트 케이스 번호

while True:
    # 연필 개수 N 입력
    N = int(input())
    
    # N이 0이면 입력 종료
    if N == 0:
        break

    # Case 번호 출력
    print(f"Case {case_num}:")
    print(f"{N} pencils for {N} cents")

    solutions = []  # 가능한 해를 저장할 리스트

    # x: 4센트짜리 연필 개수
    # 최소 1개 이상이어야 하므로 1부터 시작
    for x in range(1, N):
        # 가격 조건에서 유도된 식: y = 3N - 15x
        y = 3 * N - 15 * x

        # y는 2개에 1센트 연필 개수
        # 최소 1개 이상이어야 함
        if y <= 0:
            continue

        # 전체 개수 조건에서 z 계산
        z = N - x - y

        # z는 4개에 1센트 연필 개수
        # 최소 1개 이상이어야 함
        if z <= 0:
            continue

        # 조건을 만족하는 해 저장
        solutions.append((x, y, z))

    # 해가 없는 경우
    if not solutions:
        print("No solution found.")
    else:
        # 해가 여러 개인 경우
        for i, (x, y, z) in enumerate(solutions):
            print(f"{x} at four cents each")
            print(f"{y} at two for a penny")
            print(f"{z} at four for a penny")

            # 해와 해 사이에만 빈 줄 출력
            if i != len(solutions) - 1:
                print()

    # Case 사이 빈 줄 출력
    print()
    case_num += 1
```
