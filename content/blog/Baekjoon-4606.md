---
external: false
title: "Baekjoon 4606"
date: 2023-08-03
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4606)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 주어진 문자열을 percent-encoding 방식으로 변환하는 함수
def percent_encode(input_str):
    # URL 인코딩 테이블 정의
    encoding_table = { " ": "%20", "!": "%21", "$": "%24", "%": "%25", 
                       "(": "%28", ")": "%29", "*": "%2a" }
    # 결과를 저장할 빈 문자열 생성
    result = ""
    # 입력된 문자열의 각 문자를 순회
    for char in input_str:
        # 만약 문자가 인코딩 테이블에 포함되어 있는 경우, 해당 문자를 인코딩하여 결과에 추가
        if char in encoding_table:
            result += encoding_table[char]
        # 아닌 경우 그대로 결과에 추가
        else:
            result += char
    # 최종 결과 반환
    return result

# 사용자 입력을 받아서 percent-encoding을 수행하는 함수를 호출하는 메인 함수
def main():
    # 무한 루프를 돌면서 사용자 입력을 받음
    while True:
        # 사용자 입력을 받고 양쪽의 공백을 제거하여 input_str 변수에 저장
        input_str = input().strip()
        # 사용자가 "#"를 입력하면 루프를 종료하고 프로그램을 종료함
        if input_str == "#":
            break
        # percent_encode 함수를 호출하여 변환된 결과를 출력
        print(percent_encode(input_str))

# main 함수를 스크립트로 실행하기 위한 조건
if __name__ == "__main__":
    main()
```
