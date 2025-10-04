---
external: false
title: "Checking system load average"
tag: [PromLens, PromQL]
date: 2025-10-04
---

## 1. 문제 설명

서버의 시스템 부하는 CPU 사용량과 함께 서버 성능을 진단하는 데 중요한 지표입니다.  
Prometheus node exporter는 node_load1, node_load5, node_load15 메트릭을 제공하며, 이는 각각 1분, 5분, 15분 평균 부하를 의미합니다.  
이번 문제에서는 5분 평균 부하를 인스턴스별로 조회하는 PromQL 쿼리를 작성해보세요.

## 2. 요구사항

- node_load5 메트릭을 사용하세요
- 인스턴스별로 결과가 표시되어야 합니다
- 테이블에서 결과를 확인할 수 있어야 합니다

## 3. 풀이 과정

- 5분 평균 부하 메트릭 이름을 확인합니다.
- 실행하면 instance별 5분 평균 부하 값이 나옵니다.
- CPU 코어 수(node_cpu_seconds_total에서 count by(instance, cpu))와 비교하면 해석에 더 도움이 됩니다.

## 4. 정답

```sql
node_load5
```

## 5. 결과

### 1. Result

![PromLens 쿼리 결과](/images/PromQL/Checking-system-load-average-result.png)

### 2. Table

![PromLens 쿼리 테이블](/images/PromQL/Checking-system-load-average-table.png)

### 3. Graph

![PromLens 쿼리 결과 그래프](/images/PromQL/Checking-system-load-average-graph.png)

### 4. Explain

![PromLens 쿼리 설명](/images/PromQL/Checking-system-load-average-explain.png)

이 노드는 다음 조건을 모두 만족하는 시계열(series)에 대해, 최근 5분 이내의 최신(만료되지 않은) 샘플 값을 선택합니다.

- 메트릭 이름이 `node_load5`일 것.  
- 만약 어떤 시계열이 최근 5분 동안 값을 갖고 있지 않다면, 그 시계열은 결과에 포함되지 않습니다.
