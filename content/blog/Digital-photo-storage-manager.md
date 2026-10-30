---
external: false
title: "Digital clock synchronization"
tag: [Python]
date: 2026-10-30
---

## 1. Problem

디지털 사진을 저장하는 서비스에서는 사진 파일의 용량을 관리하기 위해 파일 크기를 확인한다.

여러 장의 사진 파일 크기(MB)가 주어졌을 때, 저장 공간을 효율적으로 관리하기 위한 프로그램을 작성하시오.

다음 조건에 따라 결과를 계산한다.

- 전체 사진 파일의 개수
- 전체 파일 용량의 합
- 가장 큰 파일의 용량
- 용량이 10MB 이상인 파일의 개수
- 파일 용량이 작은 순서대로 정렬한 결과

파일 용량은 모두 정수이며, 정렬 결과는 공백으로 구분하여 출력한다.

### 입력

첫째 줄에 사진 파일의 개수 \(N\)이 주어진다.

둘째 줄에 각 사진 파일의 용량이 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 전체 사진 파일의 개수를 출력한다.

둘째 줄에 전체 파일 용량의 합을 출력한다.

셋째 줄에 가장 큰 파일의 용량을 출력한다.

넷째 줄에 10MB 이상인 파일의 개수를 출력한다.

다섯째 줄에 파일 용량을 오름차순으로 정렬한 결과를 출력한다.

### 제한사항

- \(1 \leq N \leq 1000\)
- 파일 용량은 1 이상 500 이하의 정수이다.
- 입력된 파일 용량의 개수는 \(N\)개이다.

## 2. Input example

### Example 1

```text
5
12 3 25 8 15
```

### Example 2

```text
6
4 4 20 7 10 2
```

## 3. Output example

### 3.1. Example 1

```text
5
63
25
3
3 8 12 15 25
```

### 3.2. Example 2

```text
6
47
20
2
2 4 4 7 10 20
```

## 4. Explanation

### 4.1. Example 1

사진 파일의 용량은 `12, 3, 25, 8, 15`이다.

- 전체 파일 개수: 5개
- 전체 용량: 12 + 3 + 25 + 8 + 15 = 63MB
- 가장 큰 파일: 25MB
- 10MB 이상인 파일: 12MB, 25MB, 15MB로 총 3개
- 오름차순 정렬 결과: `3 8 12 15 25`

### 4.2. Example 2

사진 파일의 용량은 `4, 4, 20, 7, 10, 2`이다.

- 전체 파일 개수: 6개
- 전체 용량: 4 + 4 + 20 + 7 + 10 + 2 = 47MB
- 가장 큰 파일: 20MB
- 10MB 이상인 파일: 20MB, 10MB로 총 2개
- 오름차순 정렬 결과: `2 4 4 7 10 20`

## 5. Answer

```python
n = int(input())
sizes = list(map(int, input().split()))

total_size = sum(sizes)
max_size = max(sizes)

large_count = 0

for size in sizes:
    if size >= 10:
        large_count += 1

sorted_sizes = sorted(sizes)

print(n)
print(total_size)
print(max_size)
print(large_count)
print(*sorted_sizes)
```
