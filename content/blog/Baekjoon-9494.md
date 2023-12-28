---
external: false
title: "Baekjoon 9494"
date: 2023-11-03
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/9494)

## 2. 정답 코드 (Java, memory: 14200KB, time: 120ms)

```python
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        while (true) {
            // 테스트 케이스의 줄 수를 읽어옵니다.
            int n = Integer.parseInt(reader.readLine());
            // 입력이 0이면 프로그램을 종료합니다.
            if (n == 0) {
                break;
            }
            
            // 테스트 케이스의 각 줄을 저장할 배열을 초기화합니다.
            String[] lines = new String[n];
            // 각 줄의 텍스트를 읽어와 배열에 저장합니다.
            for (int i = 0; i < n; i++) {
                lines[i] = reader.readLine();
            }

            // 볼의 최종 위치를 계산하는 함수를 호출하고 결과를 출력합니다.
            int column = findBallColumn(lines);
            System.out.println(column);
        }
        
        reader.close();
    }

    // 볼의 최종 위치를 계산하는 함수입니다.
    private static int findBallColumn(String[] lines) {
        int lineIndex = 0; // 행 인덱스를 나타내는 변수입니다.
        int columnIndex = 0; // 열 인덱스를 나타내는 변수입니다.

        // 행 인덱스와 열 인덱스가 주어진 조건을 만족할 때까지 반복합니다.
        while (lineIndex < lines.length && columnIndex < 100) {
            // 현재 줄의 길이가 현재 열 인덱스보다 작거나 같으면 다음 줄로 이동합니다.
            if (lines[lineIndex].length() <= columnIndex) {
                lineIndex++;
                continue;
            }
            
            // 현재 문자가 공백이면 다음 줄로 이동합니다.
            if (lines[lineIndex].charAt(columnIndex) == ' ') {
                lineIndex++;
            } else {
                columnIndex++;
            }
        }

        // 최종 열 인덱스에 1을 더한 값을 반환합니다.
        return columnIndex + 1;
    }
}
```
