---
external: false
title: "Baekjoon 4539"
date: 2023-08-09
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4539)

## 2. 정답 코드 (Python, memory: 31256KB, time: 48ms)

```python
def round_up(x):
    power_of_10 = 10  # 초기 10의 거듭제곱을 나타내는 변수 설정
    while x >= power_of_10:  # x가 현재 10의 거듭제곱 이상인 동안 반복
        x_digit = x % power_of_10  # x의 현재 자릿수(10의 거듭제곱 단위)를 계산
        if x_digit >= power_of_10 // 2:  # 현재 자릿수의 중간보다 크거나 같으면
            x = ((x // power_of_10) + 1) * power_of_10  # x의 현재 자릿수를 올림 처리
        else:  # 그렇지 않으면
            x = (x // power_of_10) * power_of_10  # x의 현재 자릿수를 내림 처리
        power_of_10 *= 10  # 다음 자릿수(10의 거듭제곱)로 이동
    return x  # 모든 자릿수 처리가 끝난 x 반환

def main():
    n = int(input())  # 테스트 케이스의 수 입력
    for _ in range(n):
        x = int(input())  # 숫자 x 입력
        rounded_x = round_up(x)  # 입력된 숫자 x를 올림 처리한 값으로 변환
        print(rounded_x)  # 올림 처리된 값을 출력

if __name__ == "__main__":
    main()  # 프로그램의 시작점인 main 함수 호출
```
