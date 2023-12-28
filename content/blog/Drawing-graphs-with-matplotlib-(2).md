---
external: false
title : "drawing graphs with matplotlib (2)"
date: 2022-09-16
---

## 1. 선 그래프

수량을 점으로 표시하고 그 점들을 선분으로 이어 그린 그래프를 말한다.  

### 1-1. 장점

- 시간 경과에 따른 연속형 변수의 변동을 보여줄 때 효과적이다.
- 조사하지 않은 중간의 값도 대략 예측할 수 있다.

### 1-2. 코드

{% githubgist id="49776bfe4dfcc9d14276b20924a480fb" /%}

### 1-3. 결과

![lineplot](/images/lineplot.png)

**선 그래프에 대해 [자세히 알아보기](https://pythonbasics.org/matplotlib-line-chart/)**

## 2. 산점도

2개의 연속형 변수 간의 관계를 보기 위하여 직교 좌표의 평면에 관측점을 찍어 만든 통계 그래프
데이터 테이블의 각 행은 X축 및 Y축에 설정된 컬럼의 값에 따라 위치가 결정되는 마커로 표시된다

### 2-1. 장점

- 값 범위가 크게 다른 여러 마커를 비교하려는 경우 Y축에 여러 개의 척도를 사용 가능하다
- 추가 정보를 참조선이나 여러 곡선 유형에 표시 가능하다
- 특정 범주에 대한 값을 함께 결합하여 범주별로 하나의 마커를 표시하며 각 범주의 항목 수 또는 다른 컬럼을 기준으로 집계된 마커의 크기를 지정할 수 있다

### 2-2. 코드

{% githubgist id="84259697b26df0a8745300e83a196cb9" /%}

### 2-3. 결과

![scatterplot](/images/scatterplot.png)

**산점도에 대해 [자세히 알아보기](https://realpython.com/visualizing-python-plt-scatter/)**
