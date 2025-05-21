---
external : false
title : "Kakao path finding game"
tag : [Programmers, Python]
date : 2025-05-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42892)에서 확인하실 수 있습니다.

## 2. Answer

### 방법 1

재귀 함수로 트리 삽입과 순회를 구현한 풀이입니다.
트리의 깊이가 깊어질 수 있으므로 sys.setrecursionlimit()으로 재귀 한도를 높여줍니다.
각 노드는 리스트로 관리하고, 전위/후위 순회 결과를 answer에 담아 반환합니다.

```py
import sys
sys.setrecursionlimit(10000) # 재귀 깊이 한도 증가

def solution(nodeinfo):
    answer = [[]]

    # 노드 정보에 번호를 붙여 리스트로 저장
    nodes = []
    for idx, (x, y) in enumerate(nodeinfo):
        nodes.append([x, y, idx+1])

    # y 내림차순, x 오름차순 정렬
    nodes.sort(key=lambda n: (-n[1], n[0]))

    # 트리 삽입 (재귀)
    def insert(parent, child):
        if child[0] < parent[0]:
            if parent[3] is None:
                parent[3] = child
            else:
                insert(parent[3], child)
        else:
            if parent[4] is None:
                parent[4] = child
            else:
                insert(parent[4], child)

    # 각 노드에 왼쪽/오른쪽 자식 공간 추가
    for node in nodes:
        node += [None, None]  # [x, y, idx, left, right]

    root = nodes[0]
    for node in nodes[1:]:
        insert(root, node)

    # 전위 순회 (재귀)
    def preorder(node, result):
        if node:
            result.append(node[2])
            preorder(node[3], result)
            preorder(node[4], result)

    # 후위 순회 (재귀)
    def postorder(node, result):
        if node:
            postorder(node[3], result)
            postorder(node[4], result)
            result.append(node[2])

    pre, post = [], []
    preorder(root, pre)
    postorder(root, post)

    answer.append(pre)
    answer.append(post)
    answer = answer[1:]  # 첫 번째 빈 리스트 제거

    return answer
```

### 방법 2

반복문(스택)으로 트리 삽입과 순회를 구현한 비재귀 풀이입니다.
재귀 한도 설정 없이도 깊은 트리에서도 안전하게 동작합니다.
트리 삽입, 전위/후위 순회를 모두 반복문으로 처리합니다.

```py
def solution(nodeinfo):
    answer = [[]]
    nodes = []

    # 노드 정보에 번호를 붙여 리스트로 저장
    for idx, (x, y) in enumerate(nodeinfo):
        nodes.append([x, y, idx+1])
    # y 내림차순, x 오름차순 정렬
    nodes.sort(key=lambda n: (-n[1], n[0]))
    # 각 노드에 왼쪽/오른쪽 자식 공간 추가
    for node in nodes:
        node += [None, None]  # [x, y, idx, left, right]
    root = nodes[0]
    for node in nodes[1:]:
        # 반복문으로 트리 삽입
        current = root
        while True:
            if node[0] < current[0]:
                if current[3] is None:
                    current[3] = node
                    break
                else:
                    current = current[3]
            else:
                if current[4] is None:
                    current[4] = node
                    break
                else:
                    current = current[4]

    # 반복문(스택)으로 전위 순회
    def iterative_preorder(root):
        result = []
        stack = []
        if root:
            stack.append(root)
        while stack:
            node = stack.pop()
            result.append(node[2])
            # 오른쪽 자식을 먼저 넣고, 왼쪽 자식을 나중에 넣어야 왼쪽부터 방문
            if node[4]:
                stack.append(node[4])
            if node[3]:
                stack.append(node[3])
        return result

    # 반복문(스택)으로 후위 순회
    def iterative_postorder(root):
        result = []
        stack = []
        if root:
            stack.append(root)
        while stack:
            node = stack.pop()
            result.append(node[2])
            # 왼쪽 자식을 먼저 넣고, 오른쪽 자식을 나중에 넣음
            if node[3]:
                stack.append(node[3])
            if node[4]:
                stack.append(node[4])
        return result[::-1]  # 결과 뒤집기

    pre = iterative_preorder(root)
    post = iterative_postorder(root)
    
    answer.append(pre)
    answer.append(post)
    answer = answer[1:]  # 첫 번째 빈 리스트 제거
    return answer
```
