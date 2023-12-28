---
external: false
title: "Utilization and Differences of the ceil and floor functions"
date: 2023-11-18
---

## 1. CEIL 함수

CEIL 함수는 주어진 숫자를 올림하여 다음 정수로 만드는 함수입니다. 주어진 값보다 크거나 같은 가장 작은 정수를 반환합니다.

```sql
SELECT CEIL(4.25) AS Result;
```

위의 SQL에서는 4.25를 5로 올림하여 반환합니다.

## 2. FLOOR 함수

FLOOR 함수는 주어진 숫자를 내림하여 이전 정수로 만드는 함수입니다. 주어진 값보다 작거나 같은 가장 큰 정수를 반환합니다.

```sql
SELECT FLOOR(4.75) AS Result;
```

위의 SQL에서는 4.75를 4로 내림하여 반환합니다.

## 3. 활용 예제

두 함수는 주로 소수점 이하의 값을 다룰 때 유용합니다. 예를 들어, 금액 계산이나 통계 분석에서 반올림이나 내림을 할 때 사용됩니다.

```sql
SELECT CEIL(23.45) AS RoundedUp, FLOOR(23.45) AS RoundedDown;
```

위의 SQL에서 23.45를 24로 올리고 23으로 내림하여 반환합니다.

## 4. 차이점

주의해야 할 중요한 차이점은 CEIL이 항상 값보다 크거나 같은 가장 작은 정수를 반환하며, FLOOR는 항상 값보다 작거나 같은 가장 큰 정수를 반환한다는 것입니다.
이러한 함수들은 데이터의 정확도를 유지하거나 특정 연산에 필요한 정수 값을 얻을 때 유용하게 사용됩니다.
