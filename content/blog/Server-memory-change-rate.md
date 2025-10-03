---
external: false
title: "Server memory change rate"
tag: [PromLens, PromQL]
date: 2025-10-03
---

## 1. 문제 설명

운영 서버마다 node_memory_Active_bytes라는 메트릭이 수집되고 있습니다.  
이 값은 각 인스턴스의 현재 활성 메모리 사용량(바이트)이며, 게이지 유형 메트릭입니다.  
최근 10분 동안 서버별 메모리의 증가 또는 감소 속도를 확인하기 위한 PromQL 쿼리를 작성해보세요.

## 2. 요구사항

- 서버(instance)별로 최근 10분 동안의 메모리 사용량 변화율을 계산합니다.
- 변화율은 초당 바이트 단위로 표현합니다.
- 각 서버별 하나의 값이 나오도록 합니다.

## 3. 풀이 과정

- 게이지 타입 메트릭은 increase()보다 deriv()를 써야 한다.
- `deriv(node_memory_Active_bytes[10m])`를 사용하면, 최근 10분간의 곡선 변화 기울기(=초당 변화율)를 구할 수 있다.
- 결과 값은 평균적으로 메모리 사용량이 늘고 있는지(양수), 줄고 있는지(음수)를 판단하게 해준다.

## 4. 정답

```sql
deriv(node_memory_Active_bytes[10m])
```

## 5. 결과

### 1. Result

![PromLens 쿼리 결과](/images/PromQL/server-memory-change-result.png)

### 2. Table

![PromLens 쿼리 테이블](/images/PromQL/server-memory-change-table.png)

### 3. Graph

![PromLens 쿼리 결과 그래프](/images/PromQL/server-memory-change-graph.png)

### 4. Explain

![PromLens 쿼리 설명](/images/PromQL/server-memory-change-explain.png)

이 노드는 제공된 입력값에 대해 [deriv()](https://prometheus.io/docs/prometheus/latest/querying/functions/#deriv) 함수를 호출합니다.  
deriv는 [단순 선형 회귀](https://en.wikipedia.org/wiki/Simple_linear_regression)를 사용하여 범위 벡터 v에 있는 시계열의 초당 도함수를 계산합니다.  
deriv 함수는 반드시 게이지 타입에서만 사용해야 합니다.
