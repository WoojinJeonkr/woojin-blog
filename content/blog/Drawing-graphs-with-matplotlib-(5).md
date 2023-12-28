---
external: false
title : "drawing graphs with matplotlib (5)"
date: 2022-09-27
---

## 1. 시계열 데이터

시간 순서로 배열된 데이터의 한 종류로 시간에 걸쳐 순차적으로 기록된다. 다음과 같은 데이터를 시계열 데이터로 볼 수 있다:

- 주식수익률 데이터를 포함한 재무데이터
- 인플레이션, 소비자 물가를 포함한 각종 경제 관련 데이터
- 시간 순으로 기록된 정당 지지율

## 2. 시계열 데이터를 시각화하는 방법

시계열 도표는 주어진 메트릭이 시간에 따라 어떻게 변하는지 시각화하는 데 사용됩니다. 시계열 도표를 그리는 방법은 다음과 같습니다:

- 선 그래프
- 히스토그램과 밀도 분포
- 상자 수염 그림
- 히트맵
- 시차 도표 또는 산점도
- 자기상관도표

## 3. 시계열 도표

이 문서에서는 선 그래프를 통해 시계열 데이터를 다루는 방법에 대해 알아본다.

### 3-1. 코드

```python
# 라이브러리 불러오기
import pandas as pd
import matplotlib.pyplot as plt

# 데이터 가져오기
df = pd.read_csv('https://github.com/mwaskom/seaborn-data/raw/master/flights.csv')

# 영어로 된 달 이름을 수로 바꾸기
month2int = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
}

# 컬럼의 값 일괄 변환
df['month'] = df['month'].map(month2int)

# 날짜 형식 변환
df['day'] = 1
df['date'] = pd.to_datetime(df[['year', 'month', 'day']])

# 시각화
# 12개월 단위로 이동평균 구하기
df['1y'] = df['passengers'].rolling(window=12).mean()
# 월별 승객 수(passengers)의 그래프에 12개월 이동 평균선을 빨간색으로 표시
ax = df.plot(x='date', y='passengers')
df.plot(x='date', y='1y', color='red', ax=ax)
plt.tight_layout()
plt.savefig('time_series_line_plot.png')
```

### 3-2. 결과

![Time Series Line Plot](/images/time_series_line_plot.png)

## 4. 참고 자료

- [데이터 과학 – 금융(Finance) > 시계열 데이터 다루기(padr, tibbletime, lubridate)](http://aispiration.com/finance/stat-time-series-basics.html)
- [18. 시계열 데이터](https://mindscale.kr/course/pandas-basic/timeseries/)
- [Top 50 matplotlib Visualizations – The Master Plots (with full python code)](https://www.machinelearningplus.com/plots/top-50-matplotlib-visualizations-the-master-plots-python/#2.-Bubble-plot-with-Encircling)
- [Time Series Data Visualization with Python](https://machinelearningmastery.com/time-series-data-visualization-with-python/)
