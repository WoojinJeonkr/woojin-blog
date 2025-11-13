---
external : false
title : "Keylogger"
tag : [Baekjoon, Java]
date : 2025-11-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5397)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim()); // 테스트 케이스 수 입력

        StringBuilder out = new StringBuilder();
        for (int tc = 0; tc < T; tc++) {
            String line = br.readLine();
            if (line == null) line = "";
            int n = line.length();

            // 왼쪽, 오른쪽 스택 역할을 할 배열 생성
            char[] left = new char[n];
            char[] right = new char[n];
            int leftSize = 0;  // 왼쪽 스택의 크기
            int rightSize = 0; // 오른쪽 스택의 크기

            // 문자열 한 글자씩 처리
            for (int i = 0; i < n; i++) {
                char c = line.charAt(i);
                if (c == '<') { // 커서를 왼쪽으로 이동
                    if (leftSize > 0) {
                        right[rightSize++] = left[--leftSize];
                    }
                } else if (c == '>') { // 커서를 오른쪽으로 이동
                    if (rightSize > 0) {
                        left[leftSize++] = right[--rightSize];
                    }
                } else if (c == '-') { // 백스페이스: 왼쪽 문자 삭제
                    if (leftSize > 0) {
                        leftSize--;
                    }
                } else { // 일반 문자 입력
                    left[leftSize++] = c;
                }
            }

            // 왼쪽 스택 + 오른쪽 스택(역순)으로 결과 문자열 생성
            out.append(left, 0, leftSize);
            for (int i = rightSize - 1; i >= 0; i--) {
                out.append(right[i]);
            }
            out.append('\n');
        }

        System.out.print(out.toString()); // 결과 출력
    }
}
```
