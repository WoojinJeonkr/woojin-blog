---
external : false
title : "Cache"
tag : [Programmers, Java]
date : 2024-09-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17680)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 LRU (Least Recently Used) 알고리즘을 사용해, 도시 이름을 검색할 때 캐시 히트나 캐시 미스 여부에 따라 실행 시간을 계산하는 것이 목표입니다. 캐시 히트는 찾는 도시 이름이 이미 캐시에 저장되어 있을 때 발생하며, 이 경우 빠르게 데이터를 찾을 수 있어 실행 시간이 1만큼만 추가됩니다. 즉, 캐시에 있던 데이터를 바로 사용하기 때문에 처리 속도가 빨라집니다.

반면, 캐시 미스는 찾는 도시 이름이 캐시에 없을 때 발생합니다. 이 경우, 데이터베이스에서 새로운 도시 정보를 불러와야 하기 때문에 실행 시간이 더 걸리며, 5만큼 시간이 추가됩니다. 또한 캐시가 꽉 찬 상태라면, 가장 오래 사용하지 않은 도시 데이터를 제거하고 새로운 데이터를 추가하는 방식으로 캐시를 업데이트합니다.

캐시의 크기가 0일 경우, 모든 요청이 캐시 미스로 처리되며 도시 배열의 길이에 5를 곱한 값이 총 실행 시간이 됩니다. 도시 이름은 대소문자를 구분하지 않기 때문에, 비교를 위해 모든 도시 이름을 소문자나 대문자로 변환한 후 처리해야 합니다.

캐시 크기가 1 이상일 경우에는 LinkedList와 같은 자료 구조를 사용해 LRU 방식으로 캐시를 관리하며, 최근에 사용된 데이터를 앞으로 배치하고, 캐시가 가득 차면 가장 오래된 데이터를 제거하는 방식으로 최종 실행 시간을 계산할 수 있습니다.

## 3. Answer

```java
import java.util.LinkedList;

class Solution {
  public int solution(int cacheSize, String[] cities) {
    // 캐시 크기가 0일 경우, 모든 요청이 캐시 미스
    if (cacheSize == 0) return cities.length * 5;
    
    LinkedList<String> cache = new LinkedList<>(); // LRU 캐시를 저장할 리스트
    int answer = 0; // 총 실행 시간을 저장할 변수
    
    for (String city : cities) {
      city = city.toLowerCase(); // 대소문자 구분하지 않기 위해 소문자로 변환
      
      if (cache.contains(city)) { // 캐시 히트
        cache.remove(city); // 해당 항목을 제거하고
        cache.addFirst(city); // 캐시의 가장 앞에 다시 추가 (최근 사용됨)
        answer += 1; // 캐시 히트 시 실행시간 1 추가
      } else { // 캐시 미스
        if (cache.size() == cacheSize) { // 캐시가 꽉 찬 경우
          cache.removeLast(); // 가장 오래된 항목 제거
        }
        cache.addFirst(city); // 새로운 항목을 캐시 앞에 추가
        answer += 5; // 캐시 미스 시 실행시간 5 추가
      }
    }
    
    return answer; // 총 실행시간 반환
  }
}
```
