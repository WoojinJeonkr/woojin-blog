---
external: false
title: "Baekjoon 2156"
date: 2023-08-19
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2156)

## 2. 정답 코드 (C++17, memory: 2020KB, time: 4ms)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;  // 정수 n을 입력받음

    std::vector<int> array(10000, 0);  // 최대 10000개의 정수를 저장할 벡터를 생성하고 0으로 초기화
    for (int i = 0; i < n; ++i) {
        std::cin >> array[i];  // n개의 정수를 입력받아 벡터에 저장
    }

    std::vector<int> d(10000, 0);  // 최대 10000개의 정수를 저장할 벡터를 생성하고 0으로 초기화
    d[0] = array[0];  // 초기값 설정
    d[1] = array[0] + array[1];  // 초기값 설정
    d[2] = std::max({array[2] + array[0], array[2] + array[1], d[1]});  // 초기값 설정
    for (int i = 3; i < n; ++i) {
        // 현재 위치의 값과 이전 위치의 값들을 조합하여 최대값 계산
        d[i] = std::max({array[i] + d[i - 2], array[i] + array[i - 1] + d[i - 3], d[i - 1]});
    }

    // 계산된 최대값 출력
    std::cout << *std::max_element(d.begin(), d.begin() + n) << std::endl;
    return 0;
}
```
