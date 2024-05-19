---
external : false
title : "Sorting Array of Strings"
tag : [Hackerrank, C]
date : 2024-05-19
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/sorting-array-of-strings/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
int lexicographic_sort(const char* a, const char* b) {
  return strcmp(a, b);
}

// 두 문자열을 사전순으로 정렬합니다.
int lexicographic_sort(const char* a, const char* b) {
  return strcmp(a, b);
}

// 두 문자열을 사전순의 역순으로 정렬합니다.
int lexicographic_sort_reverse(const char* a, const char* b) {
  return strcmp(b, a);
}

// 두 문자열을 서로 다른 문자 수로 정렬합니다.
int sort_by_number_of_distinct_characters(const char* a, const char* b) {
  int count_a = 0, count_b = 0;
  int freq_a[26] = {0}, freq_b[26] = {0};

  // 첫 번째 문자열의 각 문자의 빈도수를 계산합니다.
  for (int i = 0; i < strlen(a); i++) {
    if (freq_a[a[i] - 'a'] == 0) {
      count_a++;
      freq_a[a[i] - 'a'] = 1;
    }
  }

  // 두 번째 문자열의 각 문자의 빈도수를 계산합니다.
  for (int i = 0; i < strlen(b); i++) {
    if (freq_b[b[i] - 'a'] == 0) {
      count_b++;
      freq_b[b[i] - 'a'] = 1;
    }
  }

  // 서로 다른 문자 수가 같으면 사전순으로 정렬하고, 그렇지 않으면 서로 다른 문자 수로 정렬합니다.
  return count_a == count_b ? strcmp(a, b) : (count_a - count_b);
}

// 두 문자열을 길이로 정렬합니다.
int sort_by_length(const char* a, const char* b) {
  int len_a = strlen(a);
  int len_b = strlen(b);
  return len_a == len_b ? strcmp(a, b) : (len_a - len_b);
}

// 주어진 비교 함수에 따라 문자열 배열을 정렬합니다.
void string_sort(char** arr,const int len,int (*cmp_func)(const char* a, const char* b)){
  for (int i = 0; i < len; i++) {
    for (int j = i + 1; j < len; j++) {
      if (cmp_func(arr[i], arr[j]) > 0) {
        // 두 문자열의 순서를 바꿉니다.
        char* temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
```
