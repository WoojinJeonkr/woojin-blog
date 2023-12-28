---
external: false
title: "Baekjoon 10545"
date: 2023-09-09
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/10545)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
# 각 알파벳 문자에 대한 숫자 시퀀스를 매핑하는 딕셔너리입니다.
letter_to_sequence = {
    'a': '2', 'b': '22', 'c': '222', 'd': '3', 'e': '33', 'f': '333',
    'g': '4', 'h': '44', 'i': '444', 'j': '5', 'k': '55', 'l': '555',
    'm': '6', 'n': '66', 'o': '666', 'p': '7', 'q': '77', 'r': '777',
    's': '7777', 't': '8', 'u': '88', 'v': '888', 'w': '9', 'x': '99',
    'y': '999', 'z': '9999'
}

# 숫자 대체를 위한 딕셔너리 초기화 및 입력 받기
number_substitution = {}
substitution_values = input().split(' ')

# 1에서 9까지의 숫자에 대한 알파벳 대체 값을 딕셔너리에 저장합니다.

for i in range(1, 10):
    number_substitution[substitution_values[i - 1]] = str(i)

# 사용자로부터 입력 메시지를 받습니다.
input_message = input()
converted_message_temp = ''

# 입력 메시지를 변환합니다. 연속된 같은 숫자의 경우 '#'으로 구분합니다.

for i in range(len(input_message)):
    if i > 0 and letter_to_sequence[input_message[i]][0] in letter_to_sequence[input_message[i - 1]]:
        # 이전 문자와 현재 문자가 동일한 숫자로 대체되면 '#'을 추가하여 구분합니다.
        converted_message_temp += '#'
    converted_message_temp += letter_to_sequence[input_message[i]]

final_message = ''

# 변환된 메시지를 숫자로 대체하고 최종 메시지를 생성합니다.
for c in converted_message_temp:
    if c == '#':
        final_message += '#'
    else:
        final_message += number_substitution[c]

# 최종 메시지를 출력합니다.
print(final_message)
```
