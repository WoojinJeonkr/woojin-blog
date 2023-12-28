---
external: false
title: "Baekjoon 1268"
date: 2023-04-21
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1268)

## 2. Solution(Python, memory: 86116KB, time: 984ms)

```python
num_students = int(input())
scores = [list(map(int, input().split())) for _ in range(num_students)]

students_with_matching_scores = [set() for _ in range(num_students)]

score_columns = [[scores[row][col] for row in range(num_students)] for col in range(5)]

for col, column_scores in enumerate(score_columns):
    for row1, score1 in enumerate(column_scores):
        for row2, score2 in enumerate(column_scores):
            if score1 == score2:
                students_with_matching_scores[row1].add(row2)

most_similar_student_index, max_similarities = max(enumerate(students_with_matching_scores), key=lambda x: len(x[1]))
most_similar_student_index += 1

print(most_similar_student_index)
```
