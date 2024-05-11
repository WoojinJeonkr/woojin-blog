---
external : false
title : "How to use Spring Boot in Eclipse"
tag : [Hackerrank, Eclipse, Java]
date : 2024-05-11
---

이번 게시글에서는 이클립스를 설치하였다는 전제하에 이클립스에서 Spring Boot 프로젝트를 시작하기 위해 Spring Tool Suite 4를 설치하는 방법에 대해 알아보겠습니다.

## 1. Eclipse

이클립스는 프로그래밍 언어 개발에 사용되는 통합 개발 환경(IDE)으로, 주로 자바 개발에 사용되지만 플러그인을 통해 다른 프로그래밍 언어도 지원합니다.  
문법 강조, 코드 완성 및 프로젝트 관리 도구와 같은 기능을 제공하며, 다양한 개발 요구에 대응하기 위해 많은 플러그인이 제공되어 확장 가능성이 높습니다.

## 2. Spring Tool Suite 4

Spring Tool Suite 4는 스프링 기반 애플리케이션을 개발하기 위한 통합 개발 환경(IDE)입니다. 이클립스 기반으로 제공되며, 스프링 프레임워크 및 관련 기술 스택을 사용하는 개발자들이 애플리케이션을 더 효과적으로 개발할 수 있도록 도와줍니다.
스프링 부트와 같은 스프링 기술을 지원하고, 코드 작성, 디버깅, 테스팅 및 배포와 같은 다양한 개발 작업에 필요한 도구를 제공합니다. 이를 통해 스프링 기반 애플리케이션 개발의 생산성을 높일 수 있습니다.

## 3. How to install STS4 in Eclipse

먼저 설치해놓은 Eclipse를 엽니다. 이제 메뉴에서 Help > Eclipse Marketplace로 들어가줍니다.

Eclipse Marketplace 창이 정상적으로 열렸다면 검색 창에 'spring'이라고 입력해줍니다.

spring으로 입력하면 밑에 여러 목록이 표시되는데 그 중 'Spring Tools 4 (aka Spring Tool Suite 4) 4.22.1.RELEASE'의 install 버튼을 클릭합니다.

![Eclipse Marketplace](https://raw.githubusercontent.com/WoojinJeonkr/woojin-blog/fd671f56811e12b78a96d6e0a8deace11f98243f/public/images/eclipse_marketplace.png)

설치하는 과정에서 trust select가 나온다면 all select하고 next를 눌러서 계속 진행해주시면 됩니다.

Spring Tool Suite 4를 설치가 완료되었다면 Project Explorer에서 우클릭 후 New > Project...를 눌러 spring을 입력하시면 spring starter project를 클릭하시면 Spring Boot 프로젝트를 생성하실 수 있고 New Spring Start Project Dependencies에서 Lombok과 같은 의존성들을 추가시켜 프로젝트를 생성하실 수 있습니다.

## 4. Lombok error

프로젝트 생성할 때 Lombok을 추가했지만 Lombok이 작동하지 않는 경우가 종종 발생합니다.
이 경우 Help > Install New Software를 클릭한 뒤 'Work with:' 옆 input 창 옆의 `Add...` 버튼을 클릭하면 Add Repository라는 창이 나오게 됩니다.
창에서 Name의 input 칸에는 lombok, Location에는 `https://projectlombok.org/p2`을 입력해주시고 Add 버튼을 클릭합니다.
이제 `Add...` 버튼 옆 `Manage...` 버튼 밑의 Select All 버튼을 클릭해주시고 Next 버튼을 눌러 설치를 진행해주시면 됩니다. 여기서도 위와 동일하게 설치 진행 중 trust select와 같은 항목이 나온다면 trust select해주시고 next를 눌러서 계속 진행해주시면 됩니다.
설치가 완료되었다면 메뉴에서 Project > `clean...`으로 가셔서 해당 project를 선택 후(선택이 안 되시는 경우에는 Clean All Project 버튼을 클릭 해제하시면 선택하실 수 있습니다) Clean 버튼을 눌러주신 뒤 Lombok 오류가 나는 파일을 확인하시면 정상적으로 작동하는 것을 확인하실 수 있습니다.

## 5. Reference

- [Eclipse](https://www.eclipse.org/)
- [Spring](https://spring.io/)
