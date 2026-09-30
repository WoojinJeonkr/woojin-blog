---
external : false
title : "Library book return management"
tag : [Python]
date : 2026-09-30
---

## 1. Problem

도서관에서 대여한 책의 반납 기록을 관리하고 있다.

하루 동안 반납된 책의 수가 순서대로 주어졌을 때, **전체 반납 도서 수**와 **하루에 가장 많이 반납된 도서 수**를 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 기록할 날짜의 수 `N`이 주어진다.

두 번째 줄에 각 날짜에 반납된 도서의 수가 순서대로 주어진다.

### 출력

첫 번째 줄에 전체 반납 도서 수를 출력한다.

두 번째 줄에 하루 동안 반납된 도서 수의 최댓값을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 날짜의 반납 도서 수는 `0 <= BookCount <= 10,000`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
12 8 15 10 5
```

### Example 2

```text
6
20 7 13 18 9 11
```

## 3. Output example

### 3.1. Example 1

```text
50
15
```

### 3.2. Example 2

```text
78
20
```

## 4. Explanation

### 4.1. Example 1

각 날짜에 반납된 도서의 수는 다음과 같다.

`12, 8, 15, 10, 5`

전체 반납 도서 수는

`12 + 8 + 15 + 10 + 5 = 50`

권이다.

하루에 가장 많이 반납된 도서는 `15권`이다.

### 4.2. Example 2

각 날짜에 반납된 도서의 수는 다음과 같다.

`20, 7, 13, 18, 9, 11`

전체 반납 도서 수는

`20 + 7 + 13 + 18 + 9 + 11 = 78`

권이다.

하루에 가장 많이 반납된 도서는 `20권`이다.

## 5. Answer

```python
N = int(input())
book_counts = list(map(int, input().split()))

total_books = sum(book_counts)
maximum_books = max(book_counts)

print(total_books)
print(maximum_books)
```
