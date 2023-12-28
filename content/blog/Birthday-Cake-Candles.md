---
external: false
title: "Birthday Cake Candles"
date: 2023-12-23
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true)

## 2. 정답 코드 (python)

```python
#!/bin/python3
import os

#
# 'birthdayCakeCandles' 함수를 완성하세요.
#
# 함수는 주어진 케이크 초 배열에서 가장 높은 초의 개수를 반환합니다.
# 함수는 'candles'라는 매개변수를 받습니다.
#

def birthdayCakeCandles(candles):
    # 초기 카운터를 0으로 설정합니다.
    count = 0
    # 주어진 초 배열에서 가장 높은 초를 찾습니다.
    maxCandle = max(candles)
    # 초 배열을 순회하며 가장 높은 초와 일치하는 경우 카운터를 증가시킵니다.
    for i in range(len(candles)):
        if candles[i] == maxCandle:
            count += 1
    # 최종적으로 가장 높은 초의 개수를 반환합니다.
    return count

if __name__ == '__main__':
    # 출력 결과를 저장할 파일을 엽니다.
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # 초 개수를 입력으로 받습니다.
    candles_count = int(input().strip())

    # 각 초의 높이를 입력으로 받아 정수 배열로 변환합니다.
    candles = list(map(int, input().rstrip().split()))

    # birthdayCakeCandles 함수를 호출하여 결과를 얻고, 파일에 쓰기 위해 문자열로 변환합니다.
    result = birthdayCakeCandles(candles)
    fptr.write(str(result) + '\n')

    # 파일을 닫습니다.
    fptr.close()
```
