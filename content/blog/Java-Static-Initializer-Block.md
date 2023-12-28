---
external: false
title: "Java Static Initializer Block"
date: 2023-11-01
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-static-initializer-block/problem?isFullScreen=true)

## 2. 정답

```java
    // 너비, 높이 및 값이 양수인지 확인하는 플래그를 저장하는 정적 변수 선언.
    static boolean flag;
    static int B;
    static int H;
    
    // 정적 블록에서 사용자로부터 너비와 높이 값을 읽어옵니다.
    static {
        Scanner scanner = new Scanner(System.in);
        B = scanner.nextInt(); // 너비를 입력으로 읽어옴
        H = scanner.nextInt(); // 높이를 입력으로 읽어옴
        
        // 입력된 너비와 높이가 양수인지 확인합니다. 양수라면 플래그를 true로 설정하고, 그렇지 않으면 오류 메시지를 출력합니다.
        if (B > 0 && H > 0) {
            flag = true;
        } else {
            System.out.println("java.lang.Exception: 너비와 높이는 양수여야 합니다.");
            flag = false;
        }
        
        scanner.close(); // 자원 누수를 방지하기 위해 스캐너를 닫습니다.
    }
```

## 3. 전체 코드

```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    // 너비, 높이 및 값이 양수인지 확인하는 플래그를 저장하는 정적 변수 선언.
    static boolean flag;
    static int B;
    static int H;
    
    // 정적 블록에서 사용자로부터 너비와 높이 값을 읽어옵니다.
    static {
        Scanner scanner = new Scanner(System.in);
        B = scanner.nextInt(); // 너비를 입력으로 읽어옴
        H = scanner.nextInt(); // 높이를 입력으로 읽어옴
        
        // 입력된 너비와 높이가 양수인지 확인합니다. 양수라면 플래그를 true로 설정하고, 그렇지 않으면 오류 메시지를 출력합니다.
        if (B > 0 && H > 0) {
            flag = true;
        } else {
            System.out.println("java.lang.Exception: 너비와 높이는 양수여야 합니다.");
            flag = false;
        }
        
        scanner.close(); // 자원 누수를 방지하기 위해 스캐너를 닫습니다.
    }

    // 너비와 높이가 양수일 때 직사각형의 넓이를 계산하고 출력하는 메서드입니다.
    public static void main(String[] args){
        if(flag){
            int area = B * H; // 직사각형의 넓이를 계산합니다.
            System.out.print(area); // 넓이를 출력합니다.
        }
    }

}
```
