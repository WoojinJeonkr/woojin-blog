---
external: false
title: "learning solutions from errors"
date: 2023-03-09
---

## 1. 'yarn'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다

- 원인: yarn이 설치되어 있지 않은 상태에서 yarn script 실행 시 볼 수 있다.
- 해결: yarn을 설치해준다. (터미널에서 yarn 입력 후 Enter)

## 2. 'cross-env'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다

- 원인: yarn이나 npm이 설치되어 있지 않은 상태에서 cross-env script 실행 시 볼 수 있다.
- 해결: npm을 설치하거나 yarn을 설치한 뒤 재부팅하면 정상적으로 작동한다.

## 3. IntelliJ gradle 설정 방법

1. [Intellij community Edition 설치](https://www.jetbrains.com/ko-kr/idea/download/#section=windows)
2. setting > Build, Execution, Deployment > Build tools > Gradle에서 gradle 설정하기

## 4. http 주소로 git clone 하기

1. git remote add origin [http 주소] : orgin을 직접 등록
2. git clone [http 주소] : http 주소의 code들을(파일들을) 현재 폴더에 복사

즉, http 주소로 git clone하려면 git clone [복사하고자 하는 파일들이 있는 http 주소] 명령어를 사용하면 된다.

## 5. vite 명령어

| JavaScript | TypeScript |
|:----------:|:----------:|
|   vanilla  | vanilla-ts |
|     vue    |   vue-ts   |
|    react   |  react-ts  |
|   preact   |  preact-ts |
|     lit    |   lit-ts   |
|   svelte   |  svelte-ts |

- 빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구
- 개발 시 네이티브 ES Module을 넘어 더욱 다양한 기능을 제공
- 번들링 시, Rollup 기반의 다양한 빌드 커맨드를 사용 가능 => 높은 수준으로 최적화된 정적(Static) 리소스들 배포 가능, 미리 정의된 설정(Pre-configured) 제공
