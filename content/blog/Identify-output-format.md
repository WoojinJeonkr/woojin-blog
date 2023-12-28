---
external: false
title: "Identify output format"
date: 2023-06-11
---

## 1. 헤더 파일 호출하기

```cpp
#include<stdio.h>
```

현재 작성 중인 소스코드에 표준 입출력과 관련된 stdio.h(헤더파일)을 호출하여 사용하겠다는 의미로, stdio.h는 C 언어의 표준 라이브러리 함수의 매크로 정의, 상수, 여러 형의 입출력 함수가 포함된 헤더 파일입니다.

## 2. 출력 구조 형태 파악하기

```cpp
#include<stdio.h>

int main(){
    printf("출력할 문구");
    return 0;
}
```

### 2-1. int main()

- 프로그램의 시작점을 정의하는 함수입니다.
- `int`는 `main`함수가 정수 값을 반환한다는 의미를 가지고 있습니다.

### 2-2. 중괄호({})

- 코드 블록을 나타냅니다.
- `main` 함수의 몸체는 중괄호로 둘러싸여 있으며, 이 안에 프로그램의 실행 코드를 작성합니다.

### 2-3. printf("출력할 문구")

- C++에서 텍스트를 출력하는 함수인 `printf`를 사용하여 "출력할 문구"를 출력합니다.
- `printf` 함수는 `<stdio.h>` 헤더 파일에 선언되어 있습니다.

#### 2-3-1. 문자열 출력

```cpp
printf("Hello World!");
```

#### 2-3-2. 정수 출력

```cpp
int num = 10;
printf("Print Number: %d", num);
```

#### 2-3-3. 부동소수점 출력

```cpp
float f = 3.14;
printf("Float value: %f", f);
```

#### 2-3-4. 문자 출력

```cpp
char c = 'A';
printf("Character: %c", c);
```

#### 2-3-5. 포인터 출력

```cpp
int* ptr = nullptr;
printf("Pointer address: %p", ptr); // Pointer address: 00000000
```

#### 2-3-6. 서식 지정 출력

```cpp
int num1 = 19;
int num2 = 3.14;
printf("Formatted: %d %.2f", num1, num2); // Formatted: 10, 3.14
```

#### 2-3-7. 다양한 변환 지정자와 플래그 사용

```cpp
int num = 42;
printf("Decimal: %d\n", num);   // 10진수 출력
printf("Hexadecimal: %x\n", num);  // 16진수 출력
printf("Octal: %o\n", num);   // 8진수 출력
printf("Unsigned: %u\n", num);  // 부호 없는 10진수 출력
printf("Floating point: %f\n", 3.14);  // 부동소수점 출력
printf("Scientific notation: %e\n", 0.0001);  // 지수 표기법 출력
```

### 2-4. return 0

- `main` 함수의 종료를 나타내며, 0을 반환하는 것으로 프로그램이 성공적으로 종료되었음을 의미합니다.
- 일반적으로 반환값 0은 프로그램의 정상 종료를 의미합니다.
