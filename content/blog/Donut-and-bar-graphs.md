---
external : false
title : "Donut and bar graphs"
tag : [Programmers, Python]
date : 2025-06-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/258711)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(edges):
  # 각 노드의 out-degree, in-degree를 계산하는 함수
  def get_degrees(edges):
    degrees = {}
    for src, dst in edges:
      if not degrees.get(src):
        degrees[src] = [0, 0]
      if not degrees.get(dst):
        degrees[dst] = [0, 0]
      degrees[src][0] += 1  # src에서 나가는 간선 수 증가
      degrees[dst][1] += 1  # dst로 들어오는 간선 수 증가
    return degrees

  # 그래프의 종류별 개수와 생성한 정점 번호를 판별하는 함수
  def classify_graphs(degrees):
    result = [0, 0, 0, 0]
    for node, (outd, ind) in degrees.items():
      # 생성한 정점: out-degree가 2 이상, in-degree가 0
      if outd >= 2 and ind == 0:
        result[0] = node
      # 막대 그래프의 끝점: out-degree가 0, in-degree가 1 이상
      elif outd == 0 and ind > 0:
        result[2] += 1
      # 8자 그래프의 결합점: out-degree, in-degree 모두 2 이상
      elif outd >= 2 and ind >= 2:
        result[3] += 1
    # 도넛 그래프의 개수 = 생성한 정점의 out-degree - 막대 개수 - 8자 개수
    result[1] = degrees[result[0]][0] - result[2] - result[3]
    return result

  degrees = get_degrees(edges)
  answer = classify_graphs(degrees)
  return answer
```
