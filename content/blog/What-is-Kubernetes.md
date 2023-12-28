---
external: false
title : "What is Kubernetes"
description : Let's find about Kubernetes
date: 2022-10-17
---

## 1. What is Kubernetes?

K8s라고도 알려진 Kubernetes는 컨테이너화된 애플리케이션의 배포, 확장 및 관리를 자동화하기 위한 오픈 소스 시스템이다.
간편한 관리 및 검색을 위해 애플리케이션을 구성하는 컨테이너를 논리 단위로 그룹화한다.
Kubernetes는 Google에서 15년 간의 프로덕션 워크로드 실행 경험 과 커뮤니티의 최고의 아이디어 및 사례를 기반으로 구축되었다.

## 2. Kubernetes history

### 2-1. 2003년 ~ 2004년 : 보그 시스템의 탄생

- Google의 새 검색 엔진의 새 버전과 협업하여 소규모 프로젝트로 시작
- Borg는 각각 최대 수만 대의 머신이 있는 여러 클러스터에서 수천 개의 서로 다른 애플리케이션에서 수십만 개의 작업을 실행하는 대규모 내부 클러스터 관리 시스템이었다.

### 2-2. 2013년 : 보그에서 오메가로

Google에서 대규모 컴퓨팅 클러스터를 위한 유연하고 확장 가능한 스케줄러인 Omega 클러스터 관리 시스템을 도입

### 2-3. 2014년 : Google에서 Kubernetes 출시

- 2014년 중반 Borg의 오픈 소스 버전으로  Kubernetes를 도입
- 2014년 07월 10일 Microsoft, RedHat, IBM, Docker가 Kubernetes 커뮤니티에 합류

### 2-4. 2015년 : Kube v1.0 및 CNCF의 해

- Google은 Linux Foundation과 협력하여 CNCF(Cloud Native Computing Foundation, 지속 가능한 생태계를 구축하고 마이크로서비스 아키텍처의 일부로 컨테이너를 조정하는 고품질 프로젝트를 중심으로 커뮤니티를 육성하는 것을 목표로 삼고 있음) 구성
- 2015년 11월 03일 Deis, OpenShift, Huawei 및 Gondor이 Kubernetes 에코시스템에 가입
- 2015년 11월 09일 Kubernetes 1.1의 주요 성능 업그레이드, 향상된 도구 및 애플리케이션을 훨씬 더 쉽게 구축 및 배포할 수 있도록 하는 새로운 기능을 제공
- 2015년 11월 09일 ~ 11일 KubeCon 2015 샌프란시스코에서 개최

### 2-5. 2016년 : Kubernetes가 주류가 됨

- 2016년 02월 23일 Kubernetes의 패키지 관리자인 Helm 릴리즈
- 2016년 02월 24일 KubeCon EU 2016 개최
- 프로덕션 등급 Kubernetes 클러스터를 관리하기 위한 공식 Kubernetes 프로젝트인 Kops 발표
- Monzo에서 Kubernetes를 사용하여 처음부터 은행 시스템을 구축하는 방법에 대한 사례 연구 발표
- Pokémon GO Kubernetes 사례 연구 발표
- 2016년 11월 8~9일 CloudNativeCon + KubeCon 2016 개최
- Kubernetes 1.2 ~ 1.5 발표
- API 공급자가 운영 및 모델을 정의하고 개발자가 도구를 자동화할 수 있도록 하는 OpenAPI를 Kubernetes가 지원

### 2-6. 2017년 : 기업 채택 및 지원의 해

- Kubernetes 1.6 ~ 1.9 발표
- 2017년 03월 29일 ~ 30일 CloudNativeCon + KubeCon 개최
- Google과 IBM에서 플랫폼, 소스 또는 공급업체에 관계없이 다양한 마이크로서비스의 네트워크를 원활하게 연결, 관리 및 보호하는 방법을 제공하는 개방형 기술인 Istio를 발표
- Kubernetes Hard Way(Kubernetes 클러스터를 부트스트랩하는 데 필요한 각 작업을 이해하기 위해 긴 경로를 택해야 함, Kubernetes 학습에 최적화) 발표
- Cloud Native Computing Foundation에서 기업이 Kubernetes를 성공적으로 채택하도록 지원한 풍부한 경험을 보유한 사전 자격을 갖춘 조직인 22개 이상의 Kubernetes 인증 서비스 제공업체(KCSP)의 창립 클래스인 최초의 Kubernetes 인증 서비스 제공업체를 발표
- Oracle이 Cloud Native Computing Foundation에 합류
- Docker가 Kubernetes를 완전히 수용
- Microsoft에서 AKS(개발자 및 클러스터 운영자를 위한 Azure 호스팅 제어 평면, 자동화된 업그레이드, 자가 복구, 손쉬운 확장 및 간단한 사용자 환경을 제공) 미리보기를 소개
- Amazon, Kubernetes용 Elastic Container Service 발표
- 2017년 12월 6~8일 KubeCon + CloudNativeCon 개최
- Kubernetes 1.9 출시
- Kubeflow(Kubernetes용으로 구축된 구성 가능하고 이식 가능하며 확장 가능한 기계 학습 스택) 발표

### 2-7. 2018년 : KubeCon + CloudNativeCon Europe 2018 코펜하겐에서 개최

- Google에서 Craig Box에서 호스팅하는 Kubernetes Podcast를 출시
- 2018년 05월 02일 ~ 04일 KubeCon + CloudNativeCon Europe 2018 개최
- DigitalOcean Kubernetes(기존 클라우드 컴퓨팅 및 스토리지 옵션에 무료 서비스로 컨테이너 관리 및 오케스트레이션 플랫폼을 제공) 발표
- Kubeflow 0.1 발표(ML 개발, 교육 및 배포를 시작하기 위한 최소한의 패키지 세트를 제공)
- Google Kubernetes Engine 1.10(공유 가상 사설 클라우드, 지역 영구 디스크 및 지역 클러스터, 노드 자동 복구 GA 및 자동화를 위한 맞춤형 수평 포드 자동 확장 처리 가능)이 일반 공급되고 기업용으로 준비
- Kubernetes Containerd 통합이 GA로 이동
- Amazon EKS, AKS(Azure Kubernetes Service)가 일반 공급
- Kubernetes 1.10 ~ 1.11 발표

## 3. Why we use Kubernetes?

- 서비스 검색 및 로드 밸런싱 제공
- 스토리지 오케스트레이션 제공
- 자동화된 롤아웃 및 롤백 제공
- 자동 빈 포장 제공
- 자가 치유(실패한 컨테이너를 다시 시작하고, 컨테이너를 교체하고, 사용자 정의 상태 확인에 응답하지 않는 컨테이너를 종료하고, 서비스를 제공할 준비가 될 때까지 이를 클라이언트에 알리지 않음)
- 비밀번호, OAuth 토큰, SSH 키와 같은 민감한 정보를 저장하고 관리 가능

## 4. Kubernetes Basic Modules

[Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
![Kubernetes Basic Modules](/images/Kubernetes_Basic_Modules.png)

## 5. Kubernetes course

[Kubernetes 학습하러 가기](https://kubernetes.io/training/)

## 6. 참고 자료

- [Kubernetes](https://kubernetes.io/)
- [The History of Kubernetes on a Timeline](https://blog.risingstack.com/the-history-of-kubernetes/)
- [Kubernetes Documentation / Concepts / Overview](https://kubernetes.io/docs/concepts/overview/)
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- [Take a free course on edX](https://kubernetes.io/training/)
