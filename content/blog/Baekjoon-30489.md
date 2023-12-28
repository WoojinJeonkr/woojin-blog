---
external: false
title: "Baekjoon 30489"
date: 2023-11-07
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/30489)

## 2. 정답 코드 (Python, memory: 42036KB, time: 88ms)

```python
# 입력값을 받아옵니다
# n: 업그레이드할 패키지의 수, m: 현재 다운로드가 완료된 패키지의 수,
# k: 병렬 다운로드 가능한 패키지의 수.
n, m, k = map(int, input().split())

# 각 패키지의 크기를 리스트로 받아옵니다.
sizes = list(map(int, input().split()))

# 패키지 크기를 내림차순으로 정렬합니다.
sizes.sort(reverse=True)

# 현재까지 다운로드된 패키지들과 병렬로 다운로드되고 있는 패키지들의 총 크기를 계산합니다.
total_size = sum(sizes[:m]) + sum(sizes[m:m+k])

# 최대 다운로드 완료율을 계산하고 출력합니다. 
# .15f는 고정 소수점 표기법으로 출력하며 소수점 이하 15자리까지 출력합니다.
# .15g는 유효 숫자 표기법으로 출력하며 필요한 자릿수까지만 출력하고 불필요한 0을 제거합니다.
# 여기서는 최대 15자리까지 출력이 필요하므로 .15g를 사용합니다.
max_percentage = (total_size / sum(sizes)) * 100
print("{:.15g}".format(max_percentage))
```
