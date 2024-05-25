---
external : false
title : "MapReduce Advanced Relational Join"
tag : [Hackerrank, C]
date : 2024-05-25
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/map-reduce-advanced-relational-join/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
def mapper(record):
  fields = record.replace('\n', '').split(',')
  
  if fields[0] == 'Employee':
    personName = fields[1]  # 직원 이름 추출
    ssn = fields[2]  # 주민등록번호 추출
    mapReducer.emitIntermediate(ssn, (fields[0], personName))
  else:
    ssn = fields[1]  # 주민등록번호 추출
    departmentName = fields[2]  # 부서 이름 추출
    mapReducer.emitIntermediate(ssn, (fields[0], departmentName))

def reducer(key, list_of_values):
  personNames = []  # 직원 이름 리스트
  departmentNames = []  # 부서 이름 리스트
  for label, value in list_of_values:
    if label == 'Employee':
      personNames.append(value)  # 직원 이름 추가
    else:
      departmentNames.append(value)  # 부서 이름 추가
  
  for personName in personNames:
    for departmentName in departmentNames:
      mapReducer.emit((key, personName, departmentName))
```
