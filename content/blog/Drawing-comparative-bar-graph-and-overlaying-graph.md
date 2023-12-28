---
external: false
title : "Drawing comparative bar graph and overlaying graph"
date: 2022-09-19
---

## 1. 비교막대그래프

다음과 같이 데이터가 주어졌을 때 비교막대그래프를 그려보자.  

### 1-1. 데이터

![DataFrame](/images/dataframe_example.png)

### 1-2. 비교막대그래프 그리기

#### 1-2-1. 코드

{% githubgist id="120dd6e3a76f7bc26767a4fdef9b9dd5" /%}

#### 1-2-2. 결과

![comparison bar graph](/images/comparison_bar_graph.png)

### 1-3. 그래프 겹쳐 그리기

위의 데이터를 토대로 막대그래프와 꺾은선그래프를 한 화면에 그려보자.  

#### 1-3-1. 코드

{% githubgist id="939b79cac68b0aa5984d9a308ddec4c9" /%}

#### 1-4-1. 결과

![line bar cross plot](/images/line_bar_cross_plot.png)
