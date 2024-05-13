---
external : false
title : "Students Marks Sum"
tag : [Hackerrank, C]
date : 2024-05-13
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/students-marks-sum/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
int marks_summation(int* marks, int number_of_students, char gender) {
  // 학생들의 총점을 계산하는 함수입니다.
  // marks: 학생들의 성적 배열
  // number_of_students: 학생의 수
  // gender: 성별 ('b'는 남자, 'g'는 여자)

  int sum = 0; // 성적 총합을 저장할 변수
  if (gender == 'b') { // 성별이 남자일 경우
    for(int i = 0; i < number_of_students; i+=2) { // 배열의 짝수 인덱스만 반복
      sum += marks[i]; // 짝수 인덱스의 성적을 총합에 더함
    }
  } else if (gender == 'g') { // 성별이 여자일 경우
    for(int i = 1; i < number_of_students; i+=2) { // 배열의 홀수 인덱스만 반복
      sum += marks[i]; // 홀수 인덱스의 성적을 총합에 더함
    }
  }
  return sum; // 총합 반환
}
```
