---
external : false
title : "Crawling Web with Jsoup"
tag : [Java]
date : 2024-04-07
---

## 1. 웹 크롤링(Web Crawling)

웹 크롤링은 인터넷 상에 있는 웹 페이지를 자동으로 탐색하여 정보를 수집하는 작업을 의미합니다. 이를 통해 웹 페이지에서 데이터를 추출하고 분석할 수 있습니다. 주로 정보 수집, 검색 엔진 인덱싱, 가격 비교 등 다양한 목적으로 사용됩니다.

## 2. Jsoup을 활용한 웹 사이트 크롤링

Jsoup은 Java로 작성된 HTML 파싱 및 조작을 위한 강력한 라이브러리입니다. 웹 크롤링 작업에 Jsoup을 사용하면 HTML 문서를 쉽게 파싱하고 원하는 정보를 추출할 수 있습니다.

### 2-1. Jsoup의 기능

1. HTML 파싱: Jsoup을 사용하여 HTML 문서를 쉽게 파싱할 수 있습니다.
2. DOM 조작: 파싱한 HTML 문서를 DOM으로 표현하여 요소를 선택하고 조작할 수 있습니다.
3. CSS 선택자 지원: CSS 선택자를 사용하여 HTML 문서의 요소를 쉽게 선택할 수 있습니다.
4. HTML 요소 추출: Jsoup을 사용하여 HTML 문서에서 특정한 요소를 추출할 수 있습니다.

### 2-2. 예시: 위키피디아에서 제목 추출하기

다음은 Jsoup을 사용하여 위키피디아에서 제목을 추출하는 간단한 예시 코드입니다.

```java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class JsoupCrawler {

  public static void main(String[] args) {

    try {
      // 웹사이트 주소
      String url = "https://en.wikipedia.org/";

      // 웹 페이지 가져오기
      Document doc = Jsoup.connect(url).get();

      // 제목 확인하기 
      System.out.println("Title: " + doc.title());

      // 선택자를 사용하여 최근 뉴스 헤드라인 요소를 선택합니다.
      Elements newsHeadlines = doc.select("#mp-itn b a");

      // 선택된 각 뉴스 헤드라인 요소에 대해 반복합니다.
      for (Element headline : newsHeadlines) {
        // 각 뉴스 헤드라인의 제목과 URL을 출력합니다.
        System.out.println(String.format("%s\n  %s", headline.attr("title"), headline.absUrl("href")));
      }
    } catch (Exception e) {
      System.err.println("An error occurred: " + e.getMessage());
    } 
  }
}
```

### 2-3. 크롤링 결과

위 코드를 실행하여 크롤링한 결과는 다음과 같습니다.

```textile
Title: Wikipedia, the free encyclopedia
2024 Hualien earthquake
	https://en.wikipedia.org/wiki/2024_Hualien_earthquake
2024 Israeli bombing of the Iranian embassy in Damascus
	https://en.wikipedia.org/wiki/2024_Israeli_bombing_of_the_Iranian_embassy_in_Damascus
Mohammad Reza Zahedi
	https://en.wikipedia.org/wiki/Mohammad_Reza_Zahedi
2024 Mmamatlakala bus crash
	https://en.wikipedia.org/wiki/2024_Mmamatlakala_bus_crash
Francis Scott Key Bridge collapse
	https://en.wikipedia.org/wiki/Francis_Scott_Key_Bridge_collapse
2024 Senegalese presidential election
	https://en.wikipedia.org/wiki/2024_Senegalese_presidential_election
Portal:Current events
	https://en.wikipedia.org/wiki/Portal:Current_events
Deaths in 2024
	https://en.wikipedia.org/wiki/Deaths_in_2024
Wikipedia:In the news/Candidates
	https://en.wikipedia.org/wiki/Wikipedia:In_the_news/Candidates
```

## 3. 결론

웹 크롤링은 인터넷 상에서 원하는 정보를 수집하고 분석하는 유용한 작업입니다. Java 개발자들은 이를 위해 Jsoup과 같은 강력한 라이브러리를 활용할 수 있습니다. Jsoup은 HTML 문서를 파싱하고 웹 페이지를 크롤링하는데 도움이 되는 도구로, 웹 크롤링 작업을 보다 쉽고 효율적으로 수행할 수 있도록 지원합니다.

## 4. Reference

- [jsoup: Java HTML Parser](https://jsoup.org/)
