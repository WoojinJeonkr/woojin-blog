---
external: false
title: "Baekjoon 10825"
date: 2022-12-25
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10825)

## 2. Solution

```python
students = []

for _ in range(int(input())):
    students.append(list(input().split()))

[print(student[0]) for student in sorted(students, key = lambda s: (-int(s[1]), int(s[2]), -int(s[3]), s[0]))]
```
