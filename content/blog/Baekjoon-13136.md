---
external: false
title: "Baekjoon 13136"
date: 2023-06-21
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/13136)

## 2. Solution (Python, memory: 31256KB, time: 56ms)

```python
for _ in range(int(input())): print('god' + ''.join(input().split()[1:]))
```

## 3. 코드 실행 과정

### 3-1. for _ in range(int(input()))

- 사용자로부터 입력받은 횟수만큼 반복하는 루프입니다.
- 루프 변수 _는 실제로 루프 내에서 사용되지 않을 때 사용됩니다.

### 3-2. print('god' + ''.join(input().split()[1:]))

- input().split()은 문자열을 공백을 기준으로 분할하여 개별 단어의 리스트로 반환합니다.
- input().split()[1:]는 리스트에서 인덱스 1부터 시작하는 모든 요소를 가져옵니다. 이로써 첫 번째 단어는 제외됩니다.
- ''.join(...)은 리스트의 남은 단어를 구분자 없이 하나의 문자열로 결합합니다.
- 'god' + ...은 문자열 'god'와 결합하여 결과를 출력합니다.
