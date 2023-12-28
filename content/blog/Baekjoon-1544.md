---
external: false
title: "Baekjoon 1544"
date: 2023-10-18
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1544)

## 2. 정답 코드 (Python, memory: 31120KB, time: 100ms)

```python
N = int(input())  # 사용자로부터 입력을 받아 N에 저장합니다. N은 단어의 개수입니다.
normalized_words = []  # 정규화된 단어들을 저장할 빈 리스트를 생성합니다.

def normalize(word):
    rotated_words = []  # 회전한 단어들을 저장할 빈 리스트를 생성합니다.
    for _ in range(len(word)):  # 입력된 단어의 길이만큼 반복합니다.
        word = word[1:] + word[0]  # 단어를 한 글자 오른쪽으로 회전합니다.
        rotated_words.append(word)  # 회전한 단어를 리스트에 추가합니다.
    return rotated_words  # 모든 회전한 단어들을 반환합니다.

for _ in range(N):  # N번 반복합니다.
    flag = False  # 중복된 단어가 있는지 확인하기 위한 플래그 변수를 초기화합니다.
    word = input().strip()  # 사용자로부터 입력을 받아 공백을 제거한 후 word에 저장합니다.
    rotated_words = normalize(word)  # 현재 단어의 모든 회전된 형태를 가져옵니다.
    for words in normalized_words:  # 이미 정규화된 단어들을 순회합니다.
        if any(rotated_word in words for rotated_word in rotated_words):
            # 만약 현재 회전된 단어가 이미 저장된 단어 중 하나에 포함되어 있다면
            flag = True  # 중복된 단어가 있음을 나타내는 플래그를 True로 설정합니다.
            break  # 반복문을 종료합니다.
    if flag:  # 중복된 단어가 있을 경우
        continue  # 다음 반복으로 넘어갑니다.
    normalized_words.append(rotated_words)  # 중복된 단어가 없으면 현재 회전된 단어들을 정규화된 단어 리스트에 추가합니다.

print(len(normalized_words))  # 정규화된 단어의 개수를 출력합니다.
```
