---
external : false
title : "Calculating memory usage"
tag : [PromLens, PromQL]
date : 2025-10-01
---

## 1. Problem

PromLens 데모 환경에서 다음과 같은 메트릭이 있다고 하자.

- node_memory_MemTotal_bytes — 시스템 전체 메모리 용량 (bytes)
- node_memory_MemAvailable_bytes — 사용 가능한 메모리 용량 (bytes)

이 두 메트릭을 이용해서 전체 메모리 대비 사용 중인 메모리 비율(%) 을 계산하는 PromQL 쿼리를 작성하라.

## 2. Concept

1. Gauge 타입 메트릭

    메모리 용량 같은 값은 누적되지 않고 변할 수 있으므로 Counter가 아니라 Gauge로 취급된다.
    rate() 같은 함수 사용 대상이 아니다.

2. 수식 계산 (Arithmetic operator)

    PromQL에서는 -, /, * 와 같은 산술 연산자를 사용할 수 있다.

3. 집계 연산자 (optional)

    여러 노드가 있다면 avg(...) 등을 사용해 평균 비율을 구할 수도 있다.

## 3. Process

- 사용 중인 메모리 계산

    ```sql
    node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
    ```

- 비율 계산 (퍼센트로 변환)

    ```sql
    (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100
    ```

- 필요 시 노드별 평균: 여러 노드가 있다면 avg(...) 또는 sum(...)을 감싸서 집계가 가능하다.

## 4. Answer

`(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100`

![Calculating-memory-usage-answer-result](https://github.com/WoojinJeonkr/woojin-blog/blob/main/public/images/PromQL/Calculating-memory-usage-answer-result.png)

## 5. Result

1. Table

    ![Calculating-memory-usage-answer-table](https://github.com/WoojinJeonkr/woojin-blog/blob/main/public/images/PromQL/Calculating-memory-usage-answer-table.png)

2. Graph

    ![Calculating-memory-usage-answer-graph](https://github.com/WoojinJeonkr/woojin-blog/blob/main/public/images/PromQL/Calculating-memory-usage-answer-graph.png)
