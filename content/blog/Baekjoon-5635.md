---
external: false
title: "Baekjoon 5635"
date: 2023-10-02
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/5635)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
people = []  # 빈 리스트를 생성하여 사람들의 정보를 저장할 준비를 합니다.
for _ in range(int(input())):  # 사용자로부터 몇 명의 정보를 입력받을지 물어봅니다.
    name, day, month, year = input().split()  # 이름과 생년월일을 입력받습니다.
    birthdate = [name, int(day), int(month), int(year)]  # 이름과 생년월일을 리스트로 묶어 저장합니다.
    people.append(birthdate)  # 각 사람의 정보를 리스트에 추가합니다.

people.sort(key=lambda x: (x[3], x[2], x[1]))  # 생년월일 기준으로 사람들을 정렬합니다.
print(people[-1][0])  # 가장 나이가 많은 사람의 이름을 출력합니다.
print(people[0][0])  # 가장 어린 사람의 이름을 출력합니다.
```
