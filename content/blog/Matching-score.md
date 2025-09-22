---
external : false
title : "Matching score"
tag : [Programmers, Python]
date : 2025-09-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42893)에서 확인하실 수 있습니다.

## 2. Answer

```py
import re

def solution(word, pages):
    word = word.lower()  # 검색어를 소문자로 변환 (대소문자 구분 X)
    url_to_index = {}    # URL -> 페이지 인덱스 매핑
    page_infos = []      # 각 페이지의 정보 저장 리스트

    for i, html in enumerate(pages):
        # 현재 페이지의 URL 추출
        url = re.search(r'<meta[^>]*content="https://[^"]+"', html)
        url = re.search(r'https://[^"]+', url.group()).group()

        # 외부 링크(URL) 추출
        links = re.findall(r'<a href="https://[^"]+"', html)
        links = [re.search(r'https://[^"]+', link).group() for link in links]

        # <body> 태그 내부에서 본문 텍스트 추출
        body = re.split(r'<body.*?>', html, flags=re.IGNORECASE)[-1]
        body = re.split(r'</body>', body, flags=re.IGNORECASE)[0]

        # 알파벳 단어만 추출한 후 소문자로 변환
        words = re.findall(r'[a-zA-Z]+', body.lower())

        # 기본점수 계산 (검색어와 완전히 일치하는 단어의 개수)
        basic_score = sum(1 for w in words if w == word)

        # 페이지 정보 저장
        page_infos.append({
            "index": i,
            "url": url,
            "links": links,
            "basic_score": basic_score,
            "link_score": 0,
            "matching_score": 0,
        })

        # URL과 인덱스 연결
        url_to_index[url] = i

    # 링크 점수 계산
    for page in page_infos:
        if not page["links"]:
            continue
        # 링크 점수 = 기본점수 / 외부링크 수
        link_point = page["basic_score"] / len(page["links"])
        for link_url in page["links"]:
            if link_url in url_to_index:
                # 링크된 페이지에 점수 전달
                linked_page_index = url_to_index[link_url]
                page_infos[linked_page_index]["link_score"] += link_point

    # 매칭점수 계산 및 최고 점수 찾기
    max_score = -1
    answer_index = 0
    for page in page_infos:
        page["matching_score"] = page["basic_score"] + page["link_score"]
        if page["matching_score"] > max_score:
            max_score = page["matching_score"]
            answer_index = page["index"]

    return answer_index
```
