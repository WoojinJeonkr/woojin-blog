---
external: false
title: "Baekjoon 14656"
date: 2023-12-17
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1205)

## 2. 정답 코드 (python3, memory: 33164KB, time: 48ms)

```python
def count_students_to_be_punished(n, students):
  punished_students = 0

  # 학생들의 번호와 현재 줄 서 있는 순서를 비교하여
  # 번호 순서와 다른 학생들의 수 계산
  for i in range(n):
    # 학생의 번호가 (인덱스 + 1)과 다르다면
    # 번호 순서와 다른 위치에 서 있는 것이므로 맞게 됨
    if students[i] != i + 1:
      punished_students += 1

  return punished_students

if __name__ == "__main__":
  # 입력 받기
  n = int(input())
  students = list(map(int, input().split()))

  # 맞게 될 학생들의 수 계산
  result = count_students_to_be_punished(n, students)

  # 결과 출력
  print(result)
```
