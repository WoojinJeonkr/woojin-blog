---
external: false
title: "Angry Professor"
tag: [Hackerrank, Java]
date : 2024-01-19
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true)에서 확인 가능합니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

  // 학생들의 도착 시간과 취소 임계값을 고려하여 강의가 취소되는지 여부를 결정하는 메서드
  public static String angryProfessor(int k, List<Integer> a) {
    // 학생들의 도착 시간을 검사하는 스트림.
    // filter 함수를 사용하여 도착 시간이 0 이하인 학생만 필터링.
    // 이것은 도착이 정시 이전인 학생들을 찾는 것이며, 즉각적인 출석을 한 학생들을 세기 위해 사용.
    // 결과적으로, onTimeStudents에는 정시 이전에 도착한 학생의 수가 저장.
    long onTimeStudents = a.stream().filter(time -> time <= 0).count();
    return onTimeStudents < k ? "YES" : "NO";
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 테스트 케이스의 수를 입력 받음
    int t = Integer.parseInt(bufferedReader.readLine().trim());

    // 각 테스트 케이스에 대해 반복 수행
    for (int tItr = 0; tItr < t; tItr++) {
      // 학생 수와 취소 임계값을 입력 받음
      String[] firstMultipleInput = bufferedReader.readLine().split(" ");
      int n = Integer.parseInt(firstMultipleInput[0]);
      int k = Integer.parseInt(firstMultipleInput[1]);

      // 각 학생의 도착 시간을 입력 받아 리스트로 저장
      List<Integer> a = Arrays.stream(bufferedReader.readLine().split(" "))
        .map(Integer::parseInt)
        .collect(Collectors.toList());

      // 결과를 계산하고 출력
      String result = Result.angryProfessor(k, a);
      bufferedWriter.write(result);
      bufferedWriter.newLine();
    }

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
