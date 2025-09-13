---
external : false
title : "Table merge"
tag : [Programmers, Python]
date : 2025-09-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/150366)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(commands):
    parent = dict()  # 각 셀의 부모 셀 정보를 저장 (병합 그룹 관리용)
    value = dict()   # 병합 그룹의 대표 셀에만 값을 저장

    # 셀의 대표(parent) 셀을 찾는 함수
    def find(cell):
        if cell not in parent:
            parent[cell] = cell
            return cell
        if parent[cell] != cell:
            parent[cell] = find(parent[cell])  # 경로 압축
        return parent[cell]

    # 두 셀을 병합하는 함수
    def union(cell1, cell2):
        root1 = find(cell1)
        root2 = find(cell2)
        if root1 == root2:
            return  # 이미 같은 그룹이면 무시
        parent[root2] = root1  # root2를 root1에 병합
        # 값 병합 처리: root1에 값이 없고 root2에 있으면 복사
        if root1 not in value and root2 in value:
            value[root1] = value[root2]
        # 병합된 후 root2 값은 삭제
        if root2 in value:
            del value[root2]

    # 특정 셀을 기준으로 병합된 셀들을 모두 분리하는 함수
    def unmerge(cell):
        root = find(cell)
        # 같은 그룹에 속한 셀들 찾기
        group_cells = [c for c in parent if find(c) == root]
        # 대표 셀의 값을 임시 저장
        current_value = value.get(root, None)
        # 모든 셀의 병합을 해제하고, 개별 셀로 복원
        for c in group_cells:
            parent[c] = c
        # 병합된 그룹의 값 제거
        if root in value:
            del value[root]
        # 선택한 셀에만 값을 유지
        if current_value:
            value[cell] = current_value

    answer = []

    for cmd in commands:
        parts = cmd.split()
        if parts[0] == "UPDATE":
            if len(parts) == 4:
                # UPDATE r c value: 셀 하나의 값을 변경
                r, c, val = int(parts[1]), int(parts[2]), parts[3]
                root = find((r, c))
                value[root] = val
            else:
                # UPDATE value1 value2: 전체 값 변경
                val1, val2 = parts[1], parts[2]
                for cell in list(value.keys()):
                    if value[cell] == val1:
                        value[cell] = val2

        elif parts[0] == "MERGE":
            # MERGE r1 c1 r2 c2: 셀 병합
            r1, c1 = int(parts[1]), int(parts[2])
            r2, c2 = int(parts[3]), int(parts[4])
            union((r1, c1), (r2, c2))

        elif parts[0] == "UNMERGE":
            # UNMERGE r c: 셀 병합 해제
            r, c = int(parts[1]), int(parts[2])
            unmerge((r, c))

        elif parts[0] == "PRINT":
            # PRINT r c: 셀 값 출력
            r, c = int(parts[1]), int(parts[2])
            root = find((r, c))
            val = value.get(root, "EMPTY")
            answer.append(val)

    return answer
```
