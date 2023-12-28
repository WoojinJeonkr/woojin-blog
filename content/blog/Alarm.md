---
external: false
title: "Alarm"
date: 2022-09-08
---

## ⛳️ 구현 목표

버저를 사용하여 알람을 구현해본다.

## ⚙️ 사용 부품

|부품명|개수|
|------|---|
|Arduino UNO R3|&nbsp;&nbsp;&nbsp;1|
|Prototype Shield with Breadboard|&nbsp;&nbsp;&nbsp;1|
|Jumper M/M|&nbsp;&nbsp;&nbsp;2|
|Buzzer|&nbsp;&nbsp;&nbsp;1|

## 👨‍💻 코드

```cpp
float sinVal;
int toneVal;

void setup(){
  pinMode(8, OUTPUT);
}

void loop(){
  for (int x = 0; x < 180; x++){
    // 사인파의 각도를 라디안 측도로 변환
    sinVal = (sin(x*(3.1412/180)));
    
    // 정현파에 의해 다른 주파수의 소리 생성
    value
    toneVal = 2000 + (int(sinVal*1000));
    tone(8, toneVal);
    delay(10);
  }
}
```

## 🖳 회로 연결 및 작동

![Alarm](/public/images/video/Alarm.gif)
