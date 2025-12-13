---
external : false
title : "Parity Bit"
tag : [Baekjoon, Python]
date : 2025-12-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5343)에서 확인하실 수 있습니다.

## 2. Answer

```py
def count_parity_errors(bit_string):
    errors = 0  # 패리티 에러 개수 저장 변수

    # 전체 비트 문자열을 8비트씩 나누어 검사
    for i in range(0, len(bit_string), 8):
        block = bit_string[i:i+8]   # 8비트 블록
        data_bits = block[:7]       # 앞의 7비트 (데이터 비트)
        parity_bit = block[7]       # 마지막 1비트 (패리티 비트)

        # 데이터 비트에서 1의 개수 계산
        ones_count = data_bits.count('1')

        # 1의 개수가 홀수면 패리티 비트는 1, 짝수면 0
        expected_parity = '1' if ones_count % 2 == 1 else '0'

        # 실제 패리티 비트와 다르면 에러 발생
        if parity_bit != expected_parity:
            errors += 1

    return errors  # 총 패리티 에러 개수 반환


# 입력받을 데이터 줄 수
n = int(input().strip())

# 각 데이터 전송 라인에 대해 패리티 에러 개수 출력
for _ in range(n):
    line = input().strip()
    print(count_parity_errors(line))
```
