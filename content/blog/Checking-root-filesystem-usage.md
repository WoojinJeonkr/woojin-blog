---
external: false
title: "Checking root filesystem usage"
tag: [PromLens, PromQL]
date: 2025-10-05
---

## 1. 문제 설명

서버의 디스크 공간 사용량은 시스템 안정성에 직결되는 중요한 지표입니다. Prometheus node exporter는 파일 시스템 관련 메트릭인 `node_filesystem_size_bytes`와 `node_filesystem_avail_bytes` 등을 제공합니다. `node_filesystem_size_bytes`는 마운트된 파일 시스템의 전체 크기를 바이트 단위로 나타냅니다.
이번 문제에서는 각 서버 인스턴스의 루트 파일 시스템 (`/`)의 전체 디스크 크기를 조회하는 PromQL 쿼리를 작성해보세요.

## 2. 요구사항

- `node_filesystem_size_bytes` 메트릭을 사용하세요.
- `mountpoint` 레이블 값이 `/`인 시계열만 선택해야 합니다.
- 결과는 인스턴스별로 표시되어야 합니다.

## 3. 풀이 과정

- `node_filesystem_size_bytes` 메트릭을 선택합니다.
- 파일 시스템의 마운트 지점(`mountpoint`) 레이블 중 `/` 값을 필터링합니다. 이는 시스템의 루트 파일 시스템을 의미합니다.
- 실행하면 인스턴스별 루트 파일 시스템의 전체 디스크 크기(바이트)가 나옵니다. 이 값을 `node_filesystem_avail_bytes`와 함께 사용하면 사용률을 계산할 수 있지만, 이 문제에서는 기본 메트릭 조회가 목적입니다.

## 4. 정답

```sql
node_filesystem_size_bytes{mountpoint="/"}
```
