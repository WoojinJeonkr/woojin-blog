---
external : false
title : "Expressible binary tree"
tag : [Programmers, Python]
date : 2025-08-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/150367)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(numbers):
    def check(tree: str) -> bool:
        # 트리 문자열이 유효한지 확인하는 함수
        if len(tree) == 1:
            return True
        mid = len(tree) // 2
        root = tree[mid]
        left = tree[:mid]
        right = tree[mid+1:]
        # 루트가 0인데 자식 중에 1이 있으면 불가능
        if root == '0':
            if '1' in left or '1' in right:
                return False
        # 왼쪽, 오른쪽 서브트리를 재귀적으로 검사
        return check(left) and check(right)

    def to_full_binary(num: int) -> str:
        # 숫자를 2진수로 변환하고 포화 이진트리 길이에 맞춰 0으로 패딩
        b = bin(num)[2:]
        length = len(b)
        full_len = 1
        while full_len < length:
            full_len = full_len * 2 + 1
        return b.zfill(full_len)

    answer = []
    for num in numbers:
        # 포화 이진트리에 맞는 2진수 문자열 생성
        tree = to_full_binary(num)
        # 유효성 검사 결과에 따라 1 또는 0 추가
        if check(tree):
            answer.append(1)
        else:
            answer.append(0)
    return answer
```
