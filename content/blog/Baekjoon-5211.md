---
external: false
title: "Baekjoon 5211"
date: 2023-12-14
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/5211)

## 2. 정답 코드 (python3, memory: 31120KB, time: 40ms)

```python
# 사용자로부터 입력을 받아 '|'를 기준으로 음계를 분리합니다.
music_notes = input().strip().split("|")

# A, D, E 음계를 포함하는 Ade minor 및 C, F, G 음계를 포함하는 Cfg major 중심음계를 정의합니다.
ade_minor_centers = ['A', 'D', 'E']
cfg_major_centers = ['C', 'F', 'G']

# 각 음계 타입에 대한 카운트를 초기화합니다.
ade_minor_count = 0
cfg_major_count = 0

# 각 마디에 대해 음계를 확인하고 해당하는 음계 타입의 카운트를 증가시킵니다.
for measure in music_notes:
  if measure[0] in ade_minor_centers:
    ade_minor_count += 1
  if measure[0] in cfg_major_centers:
    cfg_major_count += 1

# 마지막 마디의 마지막 음계가 Cfg major에 속하는지 확인하고, 해당하면 카운트를 증가시킵니다.
if ade_minor_count == cfg_major_count:
  if music_notes[-1][-1] in cfg_major_centers:
    cfg_major_count += 1
  # 마지막 마디의 마지막 음계가 Ade minor에 속하는지 확인하고, 해당하면 카운트를 증가시킵니다.
  if music_notes[-1][-1] in ade_minor_centers:
    ade_minor_count += 1

# Ade minor과 Cfg major의 카운트를 비교하여 결과를 출력합니다.
if ade_minor_count < cfg_major_count:
  print("C-major")
else:
  print("A-minor")
```
