---
external: false
title: "Grading Students"
tag: [Hackerrank, Java]
date : 2024-01-08
---

## 1. Problem

해당 문제는 [Grading Students](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)에서 확인 가능합니다.

## 2. Solution

```java
import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

  // 학생들의 성적을 반올림하는 함수
  public static List<Integer> gradingStudents(List<Integer> grades) {
    List<Integer> roundedGrades = new ArrayList<>();
    for (int grade : grades) {
      // 성적이 38 이상인 경우에만 반올림을 진행
      if (grade >= 38) {
        // 5의 배수와의 차이가 3 이상인 경우에만 반올림
        if (grade % 5 >= 3) {
          grade = grade / 5 * 5 + 5;
        }
      }
      roundedGrades.add(grade);
    }
    return roundedGrades;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 학생 수 입력
    int gradesCount = Integer.parseInt(bufferedReader.readLine().trim());

    // 학생들의 성적 입력
    List<Integer> grades = IntStream.range(0, gradesCount).mapToObj(i -> {
      try {
        return bufferedReader.readLine().replaceAll("\\s+$", "");
      } catch (IOException ex) {
        throw new RuntimeException(ex);
      }
    })
        .map(String::trim)
        .map(Integer::parseInt)
        .collect(toList());

    // 반올림된 성적 계산
    List<Integer> result = Result.gradingStudents(grades);

    // 결과 출력
    bufferedWriter.write(
        result.stream()
            .map(Object::toString)
            .collect(joining("\n"))
            + "\n"
    );

    // 입력 스트림 닫기
    bufferedReader.close();
    // 출력 스트림 닫기
    bufferedWriter.close();
  }
}
```
