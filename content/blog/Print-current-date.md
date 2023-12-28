---
external: false
title: "Print current date"
date: 2023-06-11
---

## 1. time 헤더 파일 포함하기

```cpp
#include <stdio.h>
#include <time.h>
```

표준 입력/출력과 시간과 관련된 함수들을 포함하고 있는 헤더 파일들입니다.

## 2. 현재 시간을 변수로 저장하기

```cpp
int main() {
    time_t timer;
    struct tm* t;
    timer = time(NULL); // 1970년 1월 1일 0시 0분 0초부터 시작하여 현재까지의 초
    t = localtime(&timer); // 포맷팅을 위해 구조체에 넣기
}
```

- main 함수를 정의합니다
- time_t 타입의 timer 변수를 선언합니다. timer 변수에는 초 단위로 경과한 시간을 저장합니다.
- time(NULL) 함수를 사용하여 현재 시간을 초 단위로 얻어와 'timer' 변수에 저장합니다.
- localtime(&timer) 함수를 사용하여 timer에 저장된 시간을 로컬 시간으로 변환하여 'struct_m' 형식의 't' 포인터에 저장합니다.

## 3. 원하는 형태로 현재 시간 변환하기

```cpp
printf("유닉스 타임 (Unix Time): %lld 초\n\n", timer);
printf("현재 년: %d\n", t->tm_year + 1900);
printf("현재 월: %d\n", t->tm_mon + 1);
printf("현재 일: %d\n", t->tm_mday);
printf("현재 시: %d\n", t->tm_hour);
printf("현재 분: %d\n", t->tm_min);
printf("현재 초: %d\n", t->tm_sec);
printf("현재 요일: %d\n", t->tm_wday); // 일=0, 월=1, 화=2, 수=3, 목=4, 금=5, 토=6
printf("올해 몇 번째 날: %d\n", t->tm_yday); // 1월 1일은 0, 1월 2일은 1
printf("서머타임 적용 여부: %d\n", t->tm_isdst); // 실시 중이면 양수, 미실시면 0, 실시 정보가 없으면 음수
```

- printf 함수를 사용하여 출력합니다.
- "유닉스 타임 (Unix Time): %lld 초\n\n"는 'timer'변수에 저장된 유닉스 타임(초 단위 경과 시간)을 출력하는 포맷입니다.
- "올해 몇 번째 날: %d\n"과 같은 형태로 출력 포맷을 지정하여 't' 포인터가 가리키는 'struct tm' 구조체에 저장된 시간 정보를 출력합니다.
- `t->tm_year + 1900`는 현재 연도를 나타냅니다. `tm_year`는 1900년부터 현재까지의 연도를 나타내므로, 1900을 더해서 현재 연도를 산출합니다.
- `t->tm_mon + 1`는 현재 월을 나타냅니다. `tm_mon`는 0부터 11까지의 값을 가지므로, 1을 더해서 현재 월을 산출합니다.
- `t->tm_mday`, `t->tm_hour`, `t->tm_min`, `t->tm_sec`는 각각 현재 일, 시, 분, 초를 나타냅니다.
- `t->tm_wday`는 현재 요일을 나타냅니다. 일요일은 0, 월요일은 1, 화요일은 2, ..., 토요일은 6에 해당합니다.
- `t->tm_yday`는 올해의 몇 번째 날인지를 나타냅니다. 1월 1일은 0, 1월 2일은 1, ..., 12월 31일은 364 또는 365에 해당합니다.
- `t->tm_isdst`는 현재 서머타임(Daylight Saving Time)이 적용되는지 여부를 나타냅니다. 실시 중이면 양수, 미실시면 0, 실시 정보가 없으면 음수 값을 가집니다.
