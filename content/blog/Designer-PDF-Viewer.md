---
external : false
title : "Designer PDF Viewer"
tag : [Hackerrank, Java]
date : 2024-03-29
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static int designerPdfViewer(List<Integer> h, String word) {
  // 최대 높이 변수 초기화
  int max_i = 0;
  
  // 단어의 각 문자에 대해 반복
  for (int i = 0; i < word.length(); i++) {
    // 문자의 ASCII 값을 가져와서 'a'의 ASCII 값(97)을 뺌으로써 인덱스를 계산
    int charIndex = (int) word.charAt(i) - 97;
    
    // 현재 문자의 높이가 최대 높이보다 큰지 확인
    if (max_i < h.get(charIndex)) {
      // 최대 높이를 현재 문자의 높이로 업데이트
      max_i = h.get(charIndex);
    }
  }
  
  // 최대 높이와 단어의 길이를 곱하여 결과 반환
  return max_i * word.length();
}
```
