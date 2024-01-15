---
external: false
title: "Counting Valleys"
tag: [Hackerrank, Python]
date: 2024-01-15
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true)에서 확인 가능합니다.

## 2. Approach

해당 문제는 주어진 문자열을 살펴보며 산과 계곡을 계산하는 문제입니다.  
문자열을 순회하면서 'U'는 위로 올라가는 단계를 나타내고 'D'는 아래로 내려가는 단계를 나타내며 여행을 마치면서 0으로 돌아온 경우, 즉 해수면에 도착한 경우를 계곡으로 간주합니다.  
따라서 다음과 같은 접근 방법으로 코드를 작성할 수 있습니다.

1. 변수 count를 사용하여 현재 위치를 추적합니다. 'U'인 경우 1을 더하고 'D'인 경우 1을 뺍니다.
2. 변수 valley_flag를 사용하여 계곡에 들어간 상태를 추적합니다.
3. 'U' 단계에서 들어간 계곡을 나타내는 조건을 검사합니다. count가 0이 되면서 valley_flag가 참인 경우에 계곡으로 간주하고 valley_count를 증가시킵니다.
4. 'D' 단계에서 계곡에 들어간 상태를 나타내는 조건을 검사합니다. count가 0보다 작아지면서 valley_flag가 거짓인 경우에 valley_flag를 참으로 설정합니다.

이러한 방식으로 문자열을 순회하면서 산과 계곡을 정확하게 계산할 수 있습니다.

## 3. Solve

다음은 위에서 소개한 접근 방법을 통해 작성한 코드입니다.

```python
#!/bin/python3
import os

#
# 아래는 countingValleys 함수입니다.
# 이 함수는 다음과 같은 매개변수를 받습니다:
#  1. INTEGER steps - 총 단계 수
#  2. STRING path - U(위로 올라가는 단계)와 D(아래로 내려가는 단계)로 이루어진 문자열
#

def countingValleys(steps, path):
  count, valley_count, valley_flag = 0, 0, False
  
  for i in range(steps):
    count += 1 if path[i] == 'U' else -1
      
    # 현재 위치가 0이 되면서 valley_flag가 참인 경우, 계곡으로 간주하고 valley_count를 증가시킵니다.
    if count == 0 and valley_flag:
      valley_count += 1
      valley_flag = False
    # 현재 위치가 0보다 작아지면서 valley_flag가 거짓인 경우, valley_flag를 참으로 설정합니다.
    elif count < 0 and not valley_flag:
      valley_flag = True
    
  return valley_count

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')

  # 사용자로부터 입력을 받아 변수에 저장합니다.
  steps = int(input().strip())
  path = input()

  # countingValleys 함수를 호출하고 결과를 출력 파일에 씁니다.
  result = countingValleys(steps, path)
  fptr.write(str(result) + '\n')

  # 파일을 닫습니다.
  fptr.close()
```
