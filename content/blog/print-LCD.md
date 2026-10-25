---
external: false
title: "print LCD"
tag: [Arduino, C++]
date: "2022-09-10"
---

## ⛳️ 구현 목표

LCD(Liquid Crystal Display)에 문장을 출력한다.

## ⚙️ 사용 부품

|부품명|개수|
|------|---|
|Arduino UNO R3|&nbsp;&nbsp;&nbsp;1|
|Liquid Crystal Display 16 x 2 (I2C)|&nbsp;&nbsp;&nbsp;1|
|Jumper M/M|&nbsp;&nbsp;&nbsp;4|

## 👨‍💻 코드

```cpp
// LCD를 쉽게 제어할 수 있는 라이브러리 추가
#include <Adafruit_LiquidCrystal.h>

int seconds = 0; // seconds를 0으로 정의

Adafruit_LiquidCrystal lcd(0);

void setup()
{
  lcd.begin(16, 2);
  lcd.print("You got it!"); // LCD 판에 출력할 문장 입력
}

void loop()
{
  lcd.setCursor(0, 1); // 0번째줄 1번째 셀부터 입력
  lcd.print(seconds); // seconds값 출력
  lcd.setBacklight(1); // LCD 빛 켜기
  delay(500); // 0.5초 대기
  lcd.setBacklight(0); // LCD 빛 끄기
  delay(500); // 0.5초 대기
  seconds += 1; // seconds에 1 더하기
}
```

## 🖳 회로 연결 및 작동

![Print LCD](/images/video/Print-LCD.gif)
