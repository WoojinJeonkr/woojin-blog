---
external : false
title : "String compression"
tag : [Programmers, Java]
date : 2024-10-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/60057)에서 확인하실 수 있습니다.

## 2. Problem solving process

문자열을 압축하여 가장 짧은 길이를 찾는 문제는, 먼저 문자열을 다양한 단위 길이로 나누어 각 단위마다 반복되는 패턴을 찾아 압축하는 과정을 거친다. 이를 위해 문자열의 단위를 1부터 `s.length() / 2`까지의 길이로 설정하고, 각 단위 길이에서 문자열을 잘라 순차적으로 비교해 나간다. 문자열이 반복되면 그 반복 횟수를 압축된 결과에 포함시키고, 반복이 끝나는 시점에 압축된 형식으로 저장한다.

압축 과정에서 같은 문자열 블록이 연속으로 나타날 때마다 반복 횟수를 증가시키고, 새로운 문자열이 나타나면 이전 블록과 반복 횟수를 압축된 결과에 추가한다. 이때 마지막 남은 문자열 블록도 함께 처리해 완성된 압축 문자열의 길이를 계산한다. 이렇게 여러 단위로 압축을 시도하며 가장 짧은 압축 문자열의 길이를 찾아 최소값을 반환한다. 이를 통해 문자열을 가장 효율적으로 압축할 수 있는 길이를 결정할 수 있다.

## 3. Answer

```java
class Solution {
  public int solution(String s) {
    int minCompressedLength = s.length();  // 압축된 문자열의 최소 길이 초기화

    // 단위 길이를 1부터 s 길이의 절반까지 순차적으로 설정
    for (int len = 1; len <= s.length() / 2; len++) {
      StringBuilder compressed = new StringBuilder();  // 압축 결과를 저장할 StringBuilder
      String prev = s.substring(0, len);  // 첫 번째 단위 블록
      int count = 1;  // 반복 횟수 초기화

      // len 단위로 문자열을 순차적으로 비교하여 압축
      for (int i = len; i < s.length(); i += len) {
        String current;
        
        // i + len이 s의 길이 이내라면 다음 블록 추출
        if (i + len <= s.length()) {
          current = s.substring(i, i + len);
        } else {  // 남은 문자열이 단위 길이보다 짧을 경우 남은 부분 그대로 사용
          current = s.substring(i);
        }

        // 이전 블록과 현재 블록이 동일하면 반복 횟수 증가
        if (prev.equals(current)) {
          count++;
        } else {
          // 동일하지 않으면 반복 횟수를 포함하여 압축 문자열에 추가
          if (count > 1) compressed.append(count);
          compressed.append(prev);
          
          // 새로운 블록으로 prev와 count 초기화
          prev = current;
          count = 1;
        }
      }

      // 마지막 남은 블록 처리
      if (count > 1) compressed.append(count);
      compressed.append(prev);
      
      // 압축된 문자열의 길이를 갱신하여 최소 길이 계산
      minCompressedLength = Math.min(minCompressedLength, compressed.length());
    }

    return minCompressedLength;  // 가장 짧은 압축 문자열의 길이 반환
  }
}
```
