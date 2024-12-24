---
external : false
title : "Remove string ad"
tag : [Programmers, Java]
date : 2024-07-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181870)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Arrays;

class Solution {
  public String[] solution(String[] strArr) {
    // "ad"를 포함하는 문자열을 필터링하여 제거합니다.
    return Arrays.stream(strArr)  // 배열을 스트림으로 변환합니다.
                  .filter(s -> !s.contains("ad"))  // "ad"를 포함하지 않는 문자열만 유지합니다.
                  .toArray(String[]::new);  // 결과를 새로운 배열로 수집합니다.
    }
}
```
