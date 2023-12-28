---
external: false
title: "Baekjoon 5586"
date: 2023-06-20
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5586)

## 2. Solution 1 (C++17, memory: 2024KB, time: 0ms)

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string input;
    std::getline(std::cin, input);  // 사용자로부터 입력 받기

    std::vector<char> li(input.begin(), input.end());  // 입력을 문자 벡터로 변환
    int a = 0, b = 0;  // 'JOI'와 'IOI'의 개수를 세기 위한 카운터 초기화

    for (int i = 0; i < li.size() - 2; i++) {
        // 현재 3글자로 이루어진 부분 문자열이 'JOI'와 같은지 확인
        if (std::string(li.begin() + i, li.begin() + i + 3) == "JOI") {
            a++;  // 'JOI' 카운터 증가
        }
        // 현재 3글자로 이루어진 부분 문자열이 'IOI'와 같은지 확인
        if (std::string(li.begin() + i, li.begin() + i + 3) == "IOI") {
            b++;  // 'IOI' 카운터 증가
        }
    }

    std::cout << a << " " << b;  // 'JOI'와 'IOI'의 개수 출력

    return 0;
}
```

## 3. Solution 2 (Python, memory: 31256KB, time: 44ms)

```cpp
li = list(input())  # 입력을 문자 리스트로 변환

# 리스트 컴프리헨션을 사용하여 'JOI'와 'IOI'의 개수 계산 및 True 값의 합을 구함
a, b = sum(''.join(li[i:i+3]) == 'JOI' for i in range(len(li)-2)), sum(''.join(li[i:i+3]) == 'IOI' for i in range(len(li)-2))

print(a, b)  # 'JOI'와 'IOI'의 개수 출력
```
