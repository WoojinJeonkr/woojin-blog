---
external: false
title: "Java Datatypes"
date: 2023-10-04
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-datatypes/problem?isFullScreen=true)

## 2. 정답 코드 (Java)

```java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt(); // 테스트 케이스의 수를 입력받습니다.
        for(int i=0;i<T;i++) {
            try {
                long x = sc.nextLong(); // 정수 입력을 받습니다.
                System.out.println(x+"can be fitted in:");
                if(x>=-128 && x<=127) {
                    System.out.println("* byte"); // byte 타입으로 저장될 수 있습니다.
                }
                if(x>=-32768 && x<=32767){
                    System.out.println("* short"); // short 타입으로 저장될 수 있습니다.
                }
                if(x>=Math.pow(-2, 31) && x<=Math.pow(2,31)-1){
                    System.out.println("* int"); // int 타입으로 저장될 수 있습니다.
                }
                if(x>=Math.pow(-2, 63) && x<=Math.pow(2,63)-1){
                    System.out.println("* long"); // long 타입으로 저장될 수 있습니다.
                }
            } catch(Exception e) {
                System.out.println(sc.next()+"can't be fitted anywhere.");
            }
        }
    }
}
```
