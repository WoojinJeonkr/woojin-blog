---
external : false
title : "Data analysis"
tag : [Programmers, Python]
date : 2024-12-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250121)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제를 해결하기 위해 먼저 데이터를 필터링하는 작업이 필요합니다. 이를 위해, 필터 조건인 ext와 val_ext를 사용하여 데이터 리스트에서 조건을 만족하는 항목만 추출합니다.

이때 열 이름(예: "code", "date", "maximum", "remain")을 인덱스로 변환하는 맵핑 정보를 활용하여 데이터를 효율적으로 접근합니다.

필터링이 완료된 후에는 정렬 기준인 sort_by에 따라 추출된 데이터를 정렬합니다. 정렬 시에도 동일한 맵핑 정보를 사용하여 지정된 열의 값을 기준으로 오름차순 정렬을 수행합니다.

마지막으로, 필터링되고 정렬된 데이터를 반환합니다.

## 3. Answer

```python
def solution(data, ext, val_ext, sort_by):
  # 열 이름과 인덱스를 매핑
  column_index = {"code": 0, "date": 1, "maximum": 2, "remain": 3}

  # ext 조건에 따라 val_ext보다 작은 데이터만 필터링
  filtered_data = [item for item in data if item[column_index[ext]] < val_ext]

  # sort_by 기준으로 오름차순 정렬
  sorted_data = sorted(filtered_data, key=lambda x: x[column_index[sort_by]])

  # 정렬된 결과 반환
  return sorted_data
```
