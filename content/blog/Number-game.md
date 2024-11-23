---
external : false
title : "Number game"
tag : [Programmers, Java]
date : 2024-11-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12987)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제는 숫자 게임에서 B팀이 최대한 높은 승점을 얻을 수 있도록 출전 순서를 정하는 방법을 찾는 문제입니다. 문제를 해결하기 위해 먼저 A팀과 B팀이 부여받은 숫자를 각각 오름차순으로 정렬합니다. 이렇게 하면 A팀의 출전 순서에 따라 B팀이 각 숫자를 어떻게 배치해야 승점을 최대화할 수 있는지 쉽게 계산할 수 있습니다.

A팀과 B팀의 숫자를 비교할 때, B팀의 숫자가 A팀의 숫자보다 클 경우 해당 경기에서 승점을 획득할 수 있습니다. 이를 위해 두 배열의 포인터를 사용하여 작은 숫자부터 차례대로 비교합니다. B팀의 숫자가 A팀의 숫자보다 크다면 B팀의 포인터를 다음 숫자로 이동시키고, 동시에 A팀의 포인터도 이동시켜 다음 비교를 준비합니다. 반면, B팀의 숫자가 A팀의 숫자보다 작거나 같다면 승점을 얻을 수 없으므로 B팀의 포인터만 이동하여 현재 숫자를 소모합니다. 이러한 과정을 배열의 끝까지 반복하면 B팀이 얻을 수 있는 최대 승점을 계산할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int[] A, int[] B) {
    // A팀과 B팀의 숫자를 정렬
    quickSort(A, 0, A.length - 1);
    quickSort(B, 0, B.length - 1);

    int aPointer = 0; // A팀의 현재 선수 인덱스
    int bPointer = 0; // B팀의 현재 선수 인덱스
    int score = 0;    // B팀의 승점

    // A팀과 B팀의 숫자를 비교하며 승점 계산
    while (aPointer < A.length && bPointer < B.length) {
      // B팀의 숫자가 A팀의 숫자보다 크면 승점 추가
      if (B[bPointer] > A[aPointer]) {
        score++;
        aPointer++; // 다음 A팀 선수로 이동
      }
      bPointer++;   // B팀 선수는 항상 다음으로 이동
    }

    return score; // B팀의 최종 승점 반환
  }

  // 퀵 정렬 함수
  private void quickSort(int[] array, int low, int high) {
    if (low < high) {
      // 배열을 두 부분으로 나누고 피벗 위치를 반환
      int pivotIndex = partition(array, low, high);
      // 피벗 기준으로 왼쪽 부분 정렬
      quickSort(array, low, pivotIndex - 1);
      // 피벗 기준으로 오른쪽 부분 정렬
      quickSort(array, pivotIndex + 1, high);
    }
  }

  // 배열을 피벗 기준으로 나누는 함수
  private int partition(int[] array, int low, int high) {
    int pivot = array[high]; // 마지막 요소를 피벗으로 설정
    int i = low - 1; // 작은 요소가 들어갈 위치를 추적

    for (int j = low; j < high; j++) {
      // 현재 요소가 피벗보다 작거나 같으면 교환
      if (array[j] <= pivot) {
        i++;
        swap(array, i, j);
      }
    }
    // 피벗을 올바른 위치로 이동
    swap(array, i + 1, high);
    return i + 1; // 피벗의 최종 위치 반환
  }

  // 배열의 두 요소를 교환하는 함수
  private void swap(int[] array, int i, int j) {
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
```
