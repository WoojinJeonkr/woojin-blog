---
external: false
title: "Baekjoon 5218"
date: 2023-07-11
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/5218)

## 2. 풀이 (Python, memory: 31256KB, time: 40ms)

```python
# 해당 알파벳에 대한 거리를 찾을 수 있도록
# {'A': 1, 'B': 2, ..., 'Z': 26} 형태의 dictionary를 생성합니다.
alphabet_dict = {}
for i in range(26):
    alphabet_dict[chr(ord('A') + i)] = i + 1

# 테스트 케이스의 개수를 입력받습니다.
T = int(input())

# 테스트케이스의 수만큼 반복하며 거리를 구합니다.
for _ in range(T):
    # # 두 단어를 입력받습니다.
    word1, word2 = input().split()

    # 각 글자의 알파벳 거리를 저장할 리스트를 생성합니다.
    distance_list = []
    
    # 두 단어의 길이가 동일하므로 단어의 길이만큼 반복하며 비교하여 거리를 구합니다.
    for i in range(len(word1)):

        # 첫 번째 단어의 i번째 글자의 숫자 거리를 구합니다.
        distance1 = alphabet_dict[word1[i]]

        # 두 번째 단어의 i번째 글자의 숫자 거리를 구합니다.
        distance2 = alphabet_dict[word2[i]]

        # 두 번째 단어의 숫자 거리가 첫 번째 단어의 숫자 거리보다 크거나 같은 경우
        # 두 숫자의 차이를 거리로 저장합니다.
        if distance2 >= distance1: 
            distance_list.append(distance2 - distance1)

        # 첫 번째 단어의 숫자 거리가 두 번째 단어의 숫자 거리보다 큰 경우
        # 두 숫자의 차이에 26을 더한 뒤 첫 번째 숫자 거리를 빼서 거리로 저장합니다.
        elif distance1 > distance2:
            distance_list.append((distance2+26)-distance1)
    
    # 각 글자의 알파벳 거리를 출력합니다.
    print('Distances:', *distance_list)
```
