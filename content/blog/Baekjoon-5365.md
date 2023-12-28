---
external: false
title: "Baekjoon 5365"
date: 2023-08-01
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/5365)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 이 함수는 주어진 암호화된 메시지를 해독하는 기능을 합니다.
def decode_message(coded_message):
    # 입력받은 암호화된 메시지를 공백을 기준으로 단어들로 분리하고, 이를 리스트로 저장합니다.
    words = coded_message.split()

    # 해독된 메시지를 저장하는 변수를 첫 번째 단어의 첫 글자로 초기화합니다.
    decoded_message = words[0][0]

    # 메시지의 나머지 단어들을 처리하기 위해 반복문을 실행합니다.
    for i in range(1, len(words)):
        # 이전 단어의 길이가 현재 단어의 길이보다 작거나 같다면,
        # 현재 단어의 (이전 단어의 길이 - 1)번째 글자를 해독된 메시지에 추가합니다.
        # 그렇지 않다면, 공백을 추가하여 빈 칸을 나타냅니다.
        decoded_message += words[i][len(words[i - 1]) - 1] if len(words[i - 1]) <= len(words[i]) else ' '

    # 최종 해독된 메시지를 반환합니다.
    return decoded_message


if __name__ == "__main__":
    # 사용자로부터 양의 정수를 입력받아 변수 'n'에 저장합니다.
    n = int(input())

    # 사용자로부터 암호화된 메시지를 입력받아 변수 'coded_message'에 저장합니다.
    coded_message = input()

    # 'decode_message' 함수를 호출하여 암호화된 메시지를 해독하고, 결과를 출력합니다.
    print(decode_message(coded_message))
```
