---
external: false
title: "Java String Reverse"
date: 2023-09-26
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-string-reverse/problem?isFullScreen=true)

## 2. 정답 코드 (Java)

```java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        // Scanner 객체를 생성하여 표준 입력(System.in)에서 데이터를 읽어옵니다.
        Scanner sc=new Scanner(System.in);
        
        // 사용자로부터 문자열 입력을 받습니다.
        String A=sc.next();
        
        // 입력된 문자열을 변경 가능한 문자열로 다루기 위해 StringBuffer를 사용합니다.
        // StringBuffer는 문자열을 수정할 수 있는 기능을 제공합니다.
        StringBuffer word = new StringBuffer(A);
        
        // StringBuffer를 사용하여 입력된 문자열을 역순으로 만듭니다.
        String rev = word.reverse().toString();
        
        // 만약 역순으로 만든 문자열이 원래 문자열과 같다면 "Yes" 출력
        if (rev.equals(A)) {
            System.out.print("Yes");
        } 
        // 그렇지 않으면 "No" 출력
        else {
            System.out.print("No");
        }
    }
}
```
