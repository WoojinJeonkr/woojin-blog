---
external: false
title: "Time Conversion"
date: 2023-12-22
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true)

## 2. 정답 코드 (python)

```python
#!/bin/python3
import os

# timeConversion 함수는 12시간 형식의 시간 문자열을 받아와 24시간 형식으로 변환합니다.
def timeConversion(s):
    # 입력 문자열에서 기간(AM 또는 PM)을 추출합니다.
    period = s[-2:]
    # 입력 문자열에서 기간을 제외한 시간 부분을 추출합니다.
    time_part = s[:-2]
    # 시간 부분을 시, 분, 초로 분리합니다.
    hour, minute, second = map(int, time_part.split(':'))

    # 기간에 따라 24시간 형식으로 변환합니다.
    if period == 'PM' and hour != 12:
        hour += 12

    if period == 'AM' and hour == 12:
        hour = 0

    # 결과를 시, 분, 초를 포함한 24시간 형식의 문자열로 포맷팅합니다.
    result = "{:02d}:{:02d}:{:02d}".format(hour, minute, second)
    
    return result

if __name__ == '__main__':
    # 출력을 위한 파일을 쓰기 모드로 엽니다.
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # 12시간 형식의 시간을 입력합니다.
    s = input()

    # timeConversion 함수를 호출하고 결과를 얻습니다.
    result = timeConversion(s)

    # 결과를 출력 파일에 작성하고 파일을 닫습니다.
    fptr.write(result + '\n')
    fptr.close()
```
