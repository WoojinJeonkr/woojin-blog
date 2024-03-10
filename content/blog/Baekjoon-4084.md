---
external: false
title: "Baekjoon 4084"
tag: [Baekjoon, Python]
date : 2024-01-24
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/4084)에서 확인 가능합니다.

## 2. Solve (memory: 31120KB, time: 128ms)

```python
def convergence_steps(a, b, c, d):
  steps = 0
  while a != b or b != c or c != d:
    # 현재 네 정수로부터 새로운 네 정수를 계산합니다.
    a, b, c, d = abs(a - b), abs(b - c), abs(c - d), abs(d - a)
    steps += 1  # 수렴 단계를 증가시킵니다.
  return steps  # 수렴까지 걸린 단계를 반환합니다.

def main():
  while True:
    a, b, c, d = map(int, input().split())
    if a == 0 and b == 0 and c == 0 and d == 0:
      break  # 입력이 0 0 0 0이면 반복을 종료합니다.
    result = convergence_steps(a, b, c, d)
    print(result)  # 각 테스트 케이스에 대한 결과를 출력합니다.

if __name__ == "__main__":
  main()
```
