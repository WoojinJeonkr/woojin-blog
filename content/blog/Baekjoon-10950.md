---
external: false
title: "Baekjoon 10950"
date: 2023-06-13
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10950)

## 2. Solution 1 (memory: 2020KB, time: 4ms)

```cpp
#include <iostream>
using namespace std;

int main() {
  int loop;
  cin >> loop;
  for (int i = 0; i < loop; i++) {
    int num1, num2;
    cin >> num1 >> num2;
    cout << num1 + num2 << "\n";
  }
  return 0;
}
```

## 3. Solution 2 (memory: 2020KB, time: 0ms)

위에서 작성한 코드를 실행시켰을 때 실행 시간이 4ms가 걸려서 이를 0ms로 줄여보고자 하였다.

```cpp
#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  
  int loop;
  cin >> loop;
  
  cout.rdbuf()->pubsetbuf(0, 0);
  
  for (int i = 0; i < loop; i++) {
    int num1, num2;
    cin >> num1 >> num2;
    cout << num1 + num2 << "\n";
  }
  
  cout.flush();
  return 0;
}
```

- ios_base::sync_with_stdio(false)  

C++의 입출력 버퍼와 C 표준 입출력 버퍼를 동기화하지 않도록 설정합니다. 이를 통해 C++의 입출력을 더 빠르게 만들 수 있지만 C 표준 입출력 함수와 C++의 입출력 함수를 혼용할 때 문제를 발생시킬 수 있으므로, C++만 사용하는 경우에만 권장됩니다.

- cin.tie(NULL)  

기본적으로 cin 객체와 cout 객체는 묶여 있어서 입력 작업을 수행할 때마다 출력 버퍼를 비우는 작업이 발생합니다. `cin.tie(NULL)`을 통해 cin 객체와 cout 객체를 분리하면 입출력 작업을 좀 더 빠르게 수행할 수 있습니다.

- cout.rdbuf()->pubsetbuf(0, 0)  

cout 객체의 출력 버퍼를 비워 출력 작업을 더 빠르게 수행할 수 있습니다.

- cout.flush()  

cout 객체는 출력 작업을 할 때마다 버퍼에 데이터를 모아둔 후에 한꺼번에 출력하기 때문에, flush() 함수를 호출하여 버퍼를 비워줘야 모든 출력이 즉시 화면에 나타납니다.
