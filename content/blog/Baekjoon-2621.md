---
external: false
title: "Baekjoon 2621"
tag: [Baekjoon, Python]
date : 2024-01-29
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2621)에서 확인하실 수 있습니다.

## 2. Solve (memory: KB, time: ms)

```python
cards = [input().split() for _ in range(5)]
colors = [i[0] for i in cards]
numbers = [int(i[1]) for i in cards]
cnt_color = {'R': 0, 'B': 0, 'Y': 0, 'G': 0}
cnt_num = [0 for _ in range(11)]

# 색깔과 숫자를 카운트하는 루프
for i in range(5):
  color, number = cards[i][0], int(cards[i][1])
  cnt_color[color] += 1
  cnt_num[number] += 1

sort_nums = numbers.copy()
sort_nums.sort()

# 규칙에 따라 점수 계산
if 5 in cnt_color.values() and sort_nums[0]+1 == sort_nums[1] and sort_nums[1]+1 == sort_nums[2] and sort_nums[2]+1 == sort_nums[3] and sort_nums[3]+1 == sort_nums[4]:
  # Rule 1
  score = max(numbers) + 900
elif 4 in cnt_num:
  # Rule 2
  score = cnt_num.index(4) + 800
elif 3 in cnt_num and 2 in cnt_num:
  # Rule 3
  score = cnt_num.index(3)*10 + cnt_num.index(2) + 700
elif 5 in cnt_color.values():
  # Rule 4
  score = max(numbers) + 600
elif sort_nums[0]+1 == sort_nums[1] and sort_nums[1]+1 == sort_nums[2] and sort_nums[2]+1 == sort_nums[3] and sort_nums[3]+1 == sort_nums[4]:
  # Rule 5
  score = max(numbers) + 500
elif 3 in cnt_num:
  # Rule 6
  score = cnt_num.index(3) + 400
elif 2 in cnt_num:
  first = cnt_num.index(2)
  num1 = numbers.copy()
  for i in num1:
    if i == first:
      numbers.remove(i)
  cnt_num[first] = 0
  if 2 in cnt_num:
    # Rule 7
    second = cnt_num.index(2)
    score = max(first, second)*10 + min(first, second) + 300
  else:
    # Rule 8
    score = first + 200
else:
  # Rule 9
  score = max(numbers) + 100

print(score)
```
