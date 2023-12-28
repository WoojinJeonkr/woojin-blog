---
external: false
title: "Baekjoon 2789"
date: 2023-06-23
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2789)

## 2. Solution (C++17, memory: 2024KB, time: 0ms)

```cpp
#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string userInput;
    std::getline(std::cin, userInput);

    const std::string charactersToRemove = "CAMBRIDGE";
    for (char character : charactersToRemove) {
        userInput.erase(std::remove(userInput.begin(), userInput.end(), character), userInput.end());
    }

    std::cout << userInput;
    return 0;
}
```
