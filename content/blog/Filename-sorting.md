---
external : false
title : "Filename sorting"
tag : [Programmers, Java]
date : 2024-09-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17686?language=java)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 파일명을 HEAD, NUMBER, TAIL로 나눈 후, 각 부분을 기준으로 정렬하는 문제입니다. HEAD는 대소문자를 구분하지 않고 사전순으로 정렬하고, NUMBER는 숫자로 변환하여 크기 순으로 정렬합니다. 마지막으로 HEAD와 NUMBER가 동일한 경우에는 원래 입력된 순서를 유지해야 합니다.

이를 구현하기 위해 먼저 파일명을 HEAD, NUMBER, TAIL로 분리하는 함수가 필요합니다. 자바의 Comparator를 사용하여, 파일명을 HEAD와 NUMBER를 기준으로 정렬하며, HEAD는 소문자로 변환하여 비교하고, NUMBER는 정수로 변환하여 크기를 비교하는 방식으로 문제를 해결할 수 있습니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  // 파일명에 대한 커스텀 정렬을 위한 Comparator 구현
  public String[] solution(String[] files) {
    Arrays.sort(files, new Comparator<String>() {
      @Override
      public int compare(String file1, String file2) {
        // 파일명을 HEAD, NUMBER, TAIL로 분리
        String[] parts1 = splitFileName(file1);
        String[] parts2 = splitFileName(file2);

        // HEAD를 대소문자 구분 없이 비교
        int headCompare = parts1[0].toLowerCase().compareTo(parts2[0].toLowerCase());
        if (headCompare != 0) {
          return headCompare; // HEAD가 다르면 그에 따라 정렬
        }

        // HEAD가 같으면 NUMBER를 숫자 크기 기준으로 비교
        int num1 = Integer.parseInt(parts1[1]);
        int num2 = Integer.parseInt(parts2[1]);

        return Integer.compare(num1, num2);
      }
    });

    return files;
  }

  // 파일명을 HEAD, NUMBER, TAIL로 나누는 함수
  private String[] splitFileName(String file) {
    String head = "";
    String number = "";
    String tail = "";

    int i = 0;
    // HEAD 추출: 숫자가 나오기 전까지의 문자를 HEAD로 본다
    while (i < file.length() && !Character.isDigit(file.charAt(i))) {
      head += file.charAt(i);
      i++;
    }

    // NUMBER 추출: 연속된 숫자를 NUMBER로 본다
    while (i < file.length() && Character.isDigit(file.charAt(i))) {
      number += file.charAt(i);
      i++;
    }

    // TAIL 추출: 남은 부분을 TAIL로 저장 (필요하지 않지만 구분을 위해)
    if (i < file.length()) {
      tail = file.substring(i);
    }

    return new String[] {head, number, tail};
  }
}
```
