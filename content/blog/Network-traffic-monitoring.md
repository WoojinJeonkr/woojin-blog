---
external: false
title: "Network traffic monitoring"
tag: [PromLens, PromQL]
date: 2025-10-02
---

## 1. 문제 설명

서버의 네트워크 인터페이스별 수신(bytes received) 속도를 확인하려고 합니다.
Prometheus 노드 익스포터(Node Exporter)에서 제공하는
`node_network_receive_bytes_total` 메트릭은 인터페이스별 누적 수신 바이트를 기록합니다.

이를 활용해, 각 네트워크 인터페이스(`device` 라벨)별 초당 수신되는 트래픽 양을 계산하세요.

## 2. 요구사항

- `node_network_receive_bytes_total` 메트릭을 사용하세요.
- 초당 수신 속도를 계산해야 합니다.
- 최근 5분 동안의 평균 속도를 확인하세요.

## 3. 풀이 과정

1. 메트릭 확인하기

    node_network_receive_bytes_total은 누적 값(counter)입니다.
    따라서 바로 그래프에 찍으면 단순히 계속 증가하는 곡선이 보입니다.
    우리가 원하는 것은 증가율(초당 변화량) 입니다.

2. rate 함수 사용하기

    PromQL의 rate() 함수는 지정한 시간 구간 동안의 초당 평균 증가율을 계산합니다.
    즉, counter 타입 메트릭의 속도를 구할 때 반드시 사용해야 하는 함수입니다.

3. 5분 구간 지정하기

    rate(node_network_receive_bytes_total[5m])
    → 최근 5분 동안의 초당 수신 속도를 계산합니다.

## 4. 정답

```sql
rate(node_network_receive_bytes_total[5m])
```

## 5. 결과

### 1. Result

![PromLens 쿼리 결과](/images/PromQL/network-traffic-monitoring-result.png)

### 2. Table

![PromLens 쿼리 테이블](/images/PromQL/network-traffic-monitoring-table.png)

### 3. Graph

![PromLens 쿼리 결과 그래프](/images/PromQL/network-traffic-monitoring-graph.png)

### 4. Explain

![PromLens 쿼리 설명](/images/PromQL/network-traffic-monitoring-explain.png)

이 노드는 입력된 값들에 대해 rate() 함수를 호출합니다.

`rate(v range-vector)`는 range vector 내 시계열이 증가하는 평균 속도를 초당 단위로 계산합니다.  
단조 증가가 깨지는 경우(예: 대상이 재시작되면서 `counter`가 리셋되는 경우)도 자동으로 조정됩니다.  
또한 계산 과정에서 누락된 스크랩이나 스크랩 주기와 범위 시간이 완벽하게 일치하지 않는 경우를 보완하기 위해,  
범위의 시작과 끝 구간은 누락된 스크랩을 고려해 추정값을 계산합니다.

다음 예시 표현식은 최근 5분 동안의 HTTP 요청 건수를 초당 증가율로 반환합니다.  
이는 range vector 내 각 시계열별로 계산됩니다.

`rate(http_requests_total{job="api-server"}[5m])`

`rate`는 오직 `counter` 메트릭에만 사용해야 합니다.  
특히 알림이나 느리게 증가하는 `counter`를 그래프로 시각화할 때 가장 적합합니다.

참고로 `rate()`를 집계 연산자(예: `sum()`)나 시간 단위 집계 함수(`_over_time`으로 끝나는 함수)와 함께 사용할 때는,  
반드시 먼저 `rate()`를 적용한 후에 집계해야 합니다.  
그렇지 않으면 대상이 재시작할 때 발생하는 `counter` 리셋을 `rate()`가 제대로 감지할 수 없습니다.
