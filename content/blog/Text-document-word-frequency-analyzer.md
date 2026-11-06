---
external: false
title: "Text document word frequency analyzer"
tag: [Python]
date: 2026-11-06
---

## 1. Problem

문서 분석 프로그램에서는 텍스트에 어떤 단어가 얼마나 자주 등장하는지 확인하는 기능을 제공한다.

영문 소문자로 구성된 단어들이 공백으로 구분되어 입력될 때, 단어별 등장 횟수를 계산하는 프로그램을 작성하시오.

다음 조건에 따라 결과를 출력한다.

- 각 단어가 등장한 횟수를 계산한다.
- 등장 횟수가 많은 단어부터 출력한다.
- 등장 횟수가 같으면 알파벳 순서가 빠른 단어부터 출력한다.
- 각 단어의 등장 횟수가 2회 이상이면 `REPEATED`, 1회이면 `SINGLE`로 분류한다.

### 입력

첫째 줄에 단어의 개수 \(N\)이 주어진다.

둘째 줄에 \(N\)개의 단어가 공백으로 구분되어 주어진다.

### 출력

각 단어의 이름, 등장 횟수, 분류를 공백으로 구분하여 한 줄씩 출력한다.

출력 순서는 등장 횟수 내림차순이며, 등장 횟수가 같으면 알파벳 오름차순이다.

### 제한사항

- \(1 \leq N \leq 1000\)
- 단어는 영문 소문자로만 구성된다.
- 단어의 길이는 1 이상 20 이하이다.
- 입력된 단어의 개수는 \(N\)개이다.

## 2. Input example

### Example 1

```text
8
apple banana apple orange banana apple grape orange
```

### Example 2

```text
7
python java c python java python ruby
```

## 3. Output example

### 3.1. Example 1

```text
apple 3 REPEATED
banana 2 REPEATED
orange 2 REPEATED
grape 1 SINGLE
```

### 3.2. Example 2

```text
python 3 REPEATED
java 2 REPEATED
c 1 SINGLE
ruby 1 SINGLE
```

## 4. Explanation

### 4.1. Example 1

입력된 단어는 다음과 같다.

`apple, banana, apple, orange, banana, apple, grape, orange`

단어별 등장 횟수는 다음과 같다.

- `apple`: 3회
- `banana`: 2회
- `orange`: 2회
- `grape`: 1회

등장 횟수가 많은 순서대로 정렬한다. `banana`와 `orange`는 등장 횟수가 같으므로 알파벳 순서에 따라 `banana`가 먼저 출력된다.

### 4.2. Example 2

단어별 등장 횟수는 다음과 같다.

- `python`: 3회
- `java`: 2회
- `c`: 1회
- `ruby`: 1회

`c`와 `ruby`는 등장 횟수가 같으므로 알파벳 순서에 따라 `c`가 먼저 출력된다.

## 5. Answer

```python
n = int(input())
words = input().split()

frequency = {}

for word in words:
    frequency[word] = frequency.get(word, 0) + 1

sorted_words = sorted(
    frequency.items(),
    key=lambda x: (-x[1], x[0])
)

results = []

for word, count in sorted_words:
    if count >= 2:
        status = "REPEATED"
    else:
        status = "SINGLE"

    results.append(f"{word} {count} {status}")

print("\n".join(results))
```
