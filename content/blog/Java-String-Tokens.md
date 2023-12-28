---
external: false
title: "Java String Tokens"
date: 2023-10-01
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-string-tokens/problem?isFullScreen=true)

## 2. 정답 코드 (Java)

```java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 사용자로부터 문장을 입력받습니다.
        String sentence = sc.nextLine();
        
        // 입력받은 문장이 1글자 이상이고 400,000글자 이하인 경우 실행됩니다.
        if (sentence.trim().length() >= 1 || sentence.trim().length() >= 400000) {
            // 입력받은 문장을 공백과 구두점을 기준으로 나누어 토큰 배열로 만듭니다.
            String[] token = sentence.trim().split("[ !,?._'@]+");
            // 토큰의 개수를 출력합니다.
            System.out.println(token.length);
            // 각 토큰을 출력합니다.
            for(int i=0; i<token.length; i++){
                System.out.println(token[i]);
            }
        } else {
            // 입력받은 문장이 유효하지 않은 경우 "0"을 출력합니다.
            System.out.println("0");
        }
        sc.close();
    }
}
```
