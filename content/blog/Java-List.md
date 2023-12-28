---
external: false
title: "Java List"
date: 2023-09-27
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-list/problem?isFullScreen=true)

## 2. 정답 코드 (Java)

```java
// Java에서 필요한 라이브러리와 클래스를 가져오기 위한 import 문입니다.
import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class Solution {

    public static void main(String[] args) {
        // 입력을 위한 Scanner 객체를 생성합니다.
        Scanner sc = new Scanner(System.in);

        // 정수를 저장하는 ArrayList 객체를 생성합니다.
        ArrayList<Integer> L = new ArrayList<>();

        // 정수 N을 입력 받습니다.
        int N = sc.nextInt();

        // N번 반복하며 정수를 ArrayList L에 추가합니다.
        for (int i = 0; i < N; i++) {
            L.add(sc.nextInt());
        }

        // 정수 Q를 입력 받습니다.
        int Q = sc.nextInt();

        // 개행 문자를 읽어서 버립니다.
        sc.nextLine();

        // Q번 반복하며 입력된 명령어를 처리합니다.
        for (int j = 0; j < Q; j++) {

            // 명령어를 문자열로 입력 받습니다.
            String command = sc.next();

            // 만약 명령어가 "Insert"라면,
            if (command.equals("Insert")) {

                // 삽입할 위치(index)와 값을 입력 받습니다.
                int index = sc.nextInt();
                int value = sc.nextInt();

                // ArrayList L에 값을 삽입합니다.
                L.add(index, value);

            } else if (command.equals("Delete")) {
                // 명령어가 "Delete"라면,

                // 삭제할 위치(index)를 입력 받습니다.
                int index = sc.nextInt();

                // ArrayList L에서 해당 위치의 값을 삭제합니다.
                L.remove(index);
            }
        }

        // ArrayList L의 요소를 스트림으로 변환하고, 각 요소를 문자열로 매핑합니다.
        // 여기서 Object::toString은 요소를 문자열로 변환하는 메서드 레퍼런스입니다.
        // 이렇게 하면 ArrayList L의 각 요소가 문자열로 변환되어 스트림에 담깁니다.
        Stream<String> stringStream = L.stream().map(Object::toString);

        // 스트림 내의 문자열 요소들을 하나의 문자열로 결합합니다.
        // Collectors.joining(" ")은 각 문자열 요소 사이에 공백(" ")을 추가하여 결합하는 역할을 합니다.
        String result = stringStream.collect(Collectors.joining(" "));

        // 결과 문자열(result)은 ArrayList L의 요소들을 공백으로 구분한 문자열입니다.
        // 결과 문자열을 출력합니다.
        System.out.print(result);
    }
}
```
