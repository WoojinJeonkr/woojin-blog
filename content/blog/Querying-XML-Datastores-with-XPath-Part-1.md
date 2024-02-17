---
external : false
title : "Querying XML Datastores with XPath Part 1"
tag : [Hackerrank, Ruby]
date : 2024-02-17
---

## 1. Problem

- [Querying XML Datastores with XPath - 1](https://www.hackerrank.com/challenges/querying-xml-datastores-with-xpath-1/problem?isFullScreen=true)
- [Querying XML Datastores with XPath - 2](https://www.hackerrank.com/challenges/querying-xml-datastores-with-xpath-1-1/problem?isFullScreen=true)
- [Querying XML Datastores with XPath - 3](https://www.hackerrank.com/challenges/querying-xml-datastores-with-xpath-3/problem?isFullScreen=true)
- [Querying XML Datastores with XPath - 4](https://www.hackerrank.com/challenges/querying-xml-datastores-with-xpath-4/problem?isFullScreen=true)
- [Querying XML Datastores with XPath - 5](https://www.hackerrank.com/challenges/querying-xml-datastores-with-xpath-1-4/problem?isFullScreen=true)
- [Querying XML Datastores with XPath - 6](https://www.hackerrank.com/challenges/querying-xml-datastores-with-xpath-1-4/problem?isFullScreen=true)

## 2. XPath tutorial

XPath는 XML 문서의 일부를 지정하는 언어로, XPath의 표현식이 XML 외의 문맥에서도 사용할 수 있도록 설계된 문법을 사용합니다.

XPath는 1999년 11월에 XSLT와 동시에 정의되었습니다. 처음에는 XSLT와 XPointer(XML 포인터 언어로 XLink, XInclude 등에 사용)를 지원하기 위해 개발되었습니다. 오늘날에는 XQuery 및 다른 응용 프로그램에서도 사용됩니다.

XPath는 URI 및 XML 속성 값 내에서 XPath 사용을 용이하게 한다는 장점이 있으며 많은 프로그래밍 언어(ex. PHP5)가 XPath 라이브러리를 지원합니다.

XPath에 관한 더 자세한 정보는 [여기](https://developer.mozilla.org/ko/docs/Web/XPath)에서 확인하실 수 있습니다.

## 3. Task

```xml
<collection shelf="Classics">
  <movie title="The Enemy" shelf="A">
    <type>War, Thriller</type>
    <format>DVD</format>
    <year>2001</year>
    <rating>PG</rating>
    <popularity>10</popularity>
    <description>Talk about a war</description>
  </movie>
  <movie title="Transformers" shelf="B">
    <type>Science Fiction</type>
    <format>DVD</format>
    <year>1980</year>
    <rating>R</rating>
    <popularity>7</popularity>
    <description>Science Fiction</description>
  </movie>
    <movie title="Trigun" shelf="B">
    <type>Action</type>
    <format>DVD</format>
    <episodes>4</episodes>
    <rating>PG</rating>
    <popularity>10</popularity>
    <description>Quite a bit of action!</description>
  </movie>
  <movie title="Ishtar" shelf="A">
    <type>Comedy</type>
    <format>VHS</format>
    <rating>PG</rating>
    <popularity>2</popularity>
    <description>Boring</description>
  </movie>
</collection>
```

## 4. Solve

### 4-1. Querying XML Datastores with XPath - 1

해당 문제는 Task 값에서 각 영화의 title 값을 추출하는 코드를 작성해야 합니다.

```ruby
# XML 파싱을 위한 표준 루비 라이브러리
require 'rexml/document'
include REXML

# 여기에 코드를 입력하세요. 입력은 표준 입력에서 받고, 출력은 표준 출력에 합니다.
xmlText = ""

# 입력 XML 단편을 읽습니다.
while line = gets()
  xmlText += line
end

doc = Document.new xmlText

# 주어진 XML에서 발생하는 순서와 동일한 순서로 영화 제목을 나열하는 XPath 선택기입니다.
# 필요한 XPath 선택기 쿼리를 완성하려면 빈칸을 채우세요.
puts doc.elements.each("collection/movie/@title") {|element| puts element.value }
```

마지막 구문은 선택된 각 요소에 대해 실행될 코드를 정의합니다. 여기서는 각 요소의 값을 출력하는 블록을 정의합니다.

```ruby
puts doc.elements.each("collection/movie/@title") {|element| puts element.value }
```

- puts : Ruby에서 출력을 하는 메소드
- doc : XML 문서
- elements : XML 문서에서 특정 요소를 선택하기 위한 메소드
- each("collection/movie/@title") : 선택한 요소들 중에서 "collection" 요소 아래에 있는 "movie" 요소들의 "title" 속성을 선택
- {|element| puts element.value } : 선택한 각 title 속성의 값을 출력

### 4-2. Querying XML Datastores with XPath - 2

해당 문제는 Task 값에서 각 영화의 popularity 값을 추출하는 코드를 작성해야 합니다.

```ruby
# XML 파싱을 위한 표준 루비 라이브러리
require 'rexml/document'
include REXML

# 여기에 코드를 입력하세요. 표준 입력에서 입력을 읽고, 표준 출력에 출력합니다.
xmlText = "" 

# 입력 XML 단편을 읽습니다.
while line = gets()
  xmlText += line
end

doc = Document.new xmlText

# 주어진 XML에서 발생하는 것과 동일한 순서로 영화의 인기를 나열하는 XPath 선택기.
# 필요한 XPath 선택기 쿼리를 완성하기 위해 빈칸을 채워주세요.
doc.elements.each("collection/movie/popularity") {|element| puts element.text}
```

마지막 줄의 코드는 입력된 XML 문서에서 각 영화의 인기를 가져오기 위해 XPath를 사용하는 부분입니다.

```ruby
doc.elements.each("collection/movie/popularity") {|element| puts element.text}
```

- doc.elements.each("collection/movie/popularity") :  XPath 쿼리를 사용하여 XML 문서에서 "collection" 요소 아래에 있는 "movie" 요소의 "popularity" 하위 요소를 선택
- {|element| puts element.text} :  선택된 각 요소의 텍스트 값을 출력

### 4-3. Querying XML Datastores with XPath - 3

해당 문제는 Task 값에서 각 영화의 format 값을 중복 없이 추출하는 코드를 작성해야 합니다.

```ruby
# 표준 루비 라이브러리를 사용하여 XML 파싱
require 'rexml/document'
include REXML

# 여기에 코드를 입력하세요. 표준 입력에서 입력을 읽고 표준 출력에 출력합니다.
xmlText = "" 

# 입력 XML 단편을 읽습니다.
while line = gets()
  xmlText += line
end

doc = Document.new xmlText

# 주어진 XML에서 발생하는 순서대로 인기도가 8보다 작은 영화의 형식을 나열하는 XPath 선택기.
# 필요한 XPath 선택기 쿼리를 완성하세요.
unique_formats = Set.new

doc.elements.each("collection/movie/format") {|element| unique_formats.add(element.text)}

unique_formats.each {|format| puts format}
```

주어진 XML 문서에서 형식을 추출하여 고유한 값으로 수집하고, 이를 출력하는 기능을 수행하는 부분은 다음과 같습니다.

```ruby
# 고유한 형식을 저장하기 위한 빈 Set을 초기화
unique_formats = Set.new

# doc.elements.each 함수를 사용하여
# collection 요소 아래에 있는 모든 movie 요소의 format 자식 요소 선택 후
# 각 요소의 텍스트 값을 가져와서 unique_formats Set에 추가
doc.elements.each("collection/movie/format") {|element| unique_formats.add(element.text)}

# unique_formats Set의 각 요소를 반복하면서 각 형식 출력
unique_formats.each {|format| puts format}
```

### 4-4. Querying XML Datastores with XPath - 4

해당 문제는 Task 값에서 title 값이 Trigun인 영화를 찾아서 영화의 popularity 값을 추출하는 코드를 작성해야 합니다.

```ruby
# XML 파싱을 위한 표준 루비 라이브러리
require 'rexml/document'
include REXML

# 여기에 코드를 입력하세요. 입력은 표준 입력에서 읽으며 출력은 표준 출력에 인쇄합니다.
xmlText = "" 

# 입력 XML 조각을 읽습니다.
while line = gets()
  xmlText += line
end

doc = Document.new xmlText

# "Trigun" 제목의 영화의 인기를 선택하기 위한 XPath 선택기
# XML 문서에서 "Trigun" 제목을 가진 영화의 popularity 요소를 선택합니다.
# 선택된 요소의 텍스트 내용을 출력합니다.
puts doc.elements["collection/movie[@title='Trigun']/popularity"].text
```

### 4-5. Querying XML Datastores with XPath - 5

해당 문제는 Task에서 title 값이 Transformers라는 영화를 찾아서 영화의 shelf 값을 추출하는 코드를 작성해야 합니다.

```ruby
# XML 파싱을 위한 표준 루비 라이브러리
require 'rexml/document'
include REXML

# 입력을 STDIN에서 읽고 출력을 STDOUT로 출력합니다.
xmlText = "" 

# 입력 XML 단편을 읽습니다.
while line = gets()
  xmlText += line
end

doc = Document.new xmlText

# 'Transformers'라는 이름의 영화의 책장을 선택하기 위한 XPath 선택기
# 필요한 XPath 선택기 쿼리를 완성하십시오.
puts doc.elements["collection/movie[@title='Transformers']/@shelf"].value
```

### 4-6. Querying XML Datastores with XPath - 6

해당 문제는 Task에서 영화의 description에 bit이 들어간 영화의 title 값을 추출하는 코드를 작성해야 합니다.

```ruby
# XML 파싱을 위한 표준 루비 라이브러리
require 'rexml/document'
include REXML

# 입력, 출력 및 문서 생성을 다루기 위한 루비 코드가 이미 제공되었습니다.
# 여기에 코드를 입력하세요. STDIN에서 입력을 읽고, STDOUT로 출력합니다.
xmlText = "" 

# 입력 XML 단편을 읽습니다.
while line = gets()
	xmlText += line
end

doc = Document.new xmlText

# 'description'에 'bit'이 포함된 영화의 이름을 선택하기 위한 XPath 선택기
# 필요한 부분을 채워서 XPath 선택기 쿼리를 완성하세요
# 마지막 줄의 코드는 XPath 쿼리를 사용하여
# XML 문서에서 'description' 요소의 텍스트에 'bit'이 포함된 영화를 선택 후
# 선택된 영화의 'title' 속성 값을 출력합니다.
puts doc.elements["collection/movie[contains(description, 'bit')]/@title"].value
```
