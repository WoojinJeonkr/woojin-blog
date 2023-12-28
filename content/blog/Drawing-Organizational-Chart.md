---
external: false
title : "Drawing Organizational Chart"
date: 2022-09-23
---

## 1. Organization chart의 정의

조직도(Organization chart)는 조직 구조와 관계, 그리고 상대적 순위나 직위를 보여주는 다이어그램이다.

## 2. 설치

```bash
pip install pandas
pip install networkx
pip install pydot
pip install graphviz
```

## 3. Python을 통해 Org chart 그려보기

### 3-1. 사용한 데이터베이스

[여기](https://www.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip)를 클릭하신 뒤 zip파일 안의 .db 파일을 사용하시면 됩니다.

```python
# 데이터베이스 연결 및 직원 세부 정보 가져오기
import sqlite3, pandas as pd

con=sqlite3.connect('chinook.db')
qry="""
SELECT EmployeeId, FirstName, ReportsTo
FROM employees
"""

emps=pd.read_sql(qry, con)
```

### 💡 sqlite3

SQL 언어의 비표준 변형을 사용하여 데이터베이스에 엑세스할 수 있는 경량 디스크 기반 데이터베이스를 제공하는 라이브러리이다.

- 특징
  1. 별도의 서버 프로세스가 필요없다
  2. 데이터베이스를 .db 확장자를 가지는 단일 파일로 저장한다.

```python
# edgelist 생성
edgelist=pd.merge(emps, emps, left_on='EmployeeId', right_on='ReportsTo')
edgelist.rename(
    columns={'FirstName_x' :'from', 'FirstName_y' :'to'},
    inplace=True
)
edgelist=edgelist[['from', 'to']]
```

```python
# networkx 그래프 객체 생성
import networkx as nx

orgchart=nx.from_pandas_edgelist(edgelist, 
source='from', target='to')
```

### 💡 networkx

복잡한 네트워크의 구조, 역학 및 기능의 생성, 조작 및 연구를 위한 Python 패키지이다.
그래프, 이중 그래프 및 다중 그래프의 데이터 구조, 많은 표준 그래프 알고리즘 등을 표현할 수 있다.

```python
# 그래프 시각화 및 이미지 저장
p=nx.drawing.nx_pydot.to_pydot(orgchart)
p.write_png('orgchart.png')
```

### 3-2. 결과

![Org Chart](/images/orgchart.png)

### 3-3. 다른 언어로 조직도 그리는 법

위와 같이 파이썬을 통해 조직도를 그리는 법에 대해 알아보았다.
이외에도 [R](https://towardsdatascience.com/create-organization-diagrams-in-a-few-lines-of-code-the-5-minute-learn-dcca81dac3a2)이나 [Java](https://developers.google.com/chart/interactive/docs/gallery/orgchart)로도 조직도를 그릴 수 있다.

### 4. 참고 자료

- [Create organization diagrams in a few lines of code (The 5-minute learn)](https://towardsdatascience.com/create-organization-diagrams-in-a-few-lines-of-code-the-5-minute-learn-dcca81dac3a2)
- [Google chart - Organization Chart](https://developers.google.com/chart/interactive/docs/gallery/orgchart)
- [Daleseo - [파이썬] sqlite3 모듈 사용법](https://www.daleseo.com/python-sqlite3/)
- [NetworkX - NetworkX documentation](https://networkx.org/)
