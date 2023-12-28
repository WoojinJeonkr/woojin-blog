---
external: false
title: "Baekjoon 1068"
date: 2023-11-20
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1068)

## 2. 정답 코드 (python3, memory: 31120KB, time: 40ms)

```python
import sys
input = sys.stdin.readline

# 주어진 노드를 제거하고 해당 노드의 하위 노드 중 리프 노드의 개수를 세는 함수
def remove_node_and_count_leaves(target_node):
    tree[target_node] = -2  # 대상 노드를 제거하기 위해 -2로 설정
    for i in range(num_nodes):
        if target_node == tree[i]:
            remove_node_and_count_leaves(i)

# 노드의 개수 입력
num_nodes = int(input())
# 트리의 구조를 나타내는 리스트 입력
tree = list(map(int, input().split()))
# 제거할 노드 입력
node_to_remove = int(input())

# 주어진 노드를 제거하고 리프 노드의 개수를 계산
remove_node_and_count_leaves(node_to_remove)
leaf_node_count = 0

# 각 노드에 대해 -2가 아니고 부모가 없는 경우 리프 노드로 간주하고 개수 증가
for i in range(num_nodes):
    if tree[i] != -2 and i not in tree:
        leaf_node_count += 1

# 결과 출력
print(leaf_node_count)
```
