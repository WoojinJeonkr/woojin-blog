---
external : false
title : "Dominant element"
tag : [Codechef, Python]
date : 2026-04-24
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/arrays-strings-sorting/INTARR01/problems/DOMINANT2)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
from collections import Counter

def solve():
    # 입력 속도를 위해 sys.stdin.read 사용
    input_data = sys.stdin.read().split()
    if not input_data:
        return

    t = int(input_data[0]) # 테스트 케이스 개수
    current_idx = 1

    results = []
    for _ in range(t):
        n = int(input_data[current_idx]) # 배열의 길이
        current_idx += 1

        # 배열 데이터 슬라이싱
        a = input_data[current_idx : current_idx + n]
        current_idx += n

        # 1. 각 숫자의 빈도수를 계산 (Counter 사용)
        counts = Counter(a)

        # 2. 빈도수 값들만 추출 (예: [2, 1, 1])
        freq_list = list(counts.values())

        # 3. 빈도수의 최댓값 찾기
        max_freq = max(freq_list)

        # 4. 최댓값이 몇 번 등장하는지 확인
        # 최댓값이 하나만 존재해야 그 원소가 'Dominant' 함
        if freq_list.count(max_freq) == 1:
            results.append("YES")
        else:
            results.append("NO")

    # 결과 출력
    print("\n".join(results))

if __name__ == "__main__":
    solve()
```
