---
external: false
title : "tenant, region, Availability Zone"
date: 2022-11-03
---

## 1. tenant

테넌트(tenant)는 클라우드 서비스 이용자가 가지게 되는 자신만의 환경을 의미한다.

### 1-1. 테넌트의 특징

- 테넌트별로 리소스의 사용량이 합산되어 사용료가 청구된다.
- 테넌트별로 사용 가능한 리소스의 상한선이 정해져 있다.
- 같은 테넌트에 속한 가상 네트워크, 가상 인스턴스, 가상 스토리지끼리만 서로 연결될 수 있다.
- 프로젝트 팀이 개발하고 관리하는 애플리케이션 시스템을 같은 테넌트에 넣는 것이 일반적이다.
- 가상 네트워크 기능을 사용해서 독립된 네트워크 환경을 갖추기 위해 네트워크 세그먼트를 분할하기도 한다.
- AWS에서는 테넌트에 기본 설정된 관리자 계정을 부여하지 말고, 목적에 맞는 IAM 사용자나 그룹을 만들어 쓰는 것을 권장하고 있다.

## 2. region

AWS에서 지리적으로 멀리 떨어진 지역에 여러 개의 클라우드 인프라를 분산 운영하는 것을 말한다.

### 2-1. 리전의 특징

- 여러 리전에 걸친 가상 네트워크는 만들지 못한다.
- 리전별로 가상 네트워크 구성이 가능하다.
- 사용자 계정이나 테넌트 정보는 리전별로 관리되는 것이 아니라 여러 리전에 걸쳐 사용이 가능하다.
- 오브젝트 스토리지는 모든 리전에 공통으로 사용할 수 있게 만들어져 있다.
- 여러 나라, 각 지역 단위로 서로 다른 리전을 구성할 수 있다. 단, 국내에 여러 개의 데이터 센터를 두고 데이터 센터별로 리전을 구성할 수 있다.

## 3. Availability Zone

가용영역은 리전 안에 속하는 개념으로 리전 내의 데이터 센터라고 볼 수 있다.
클라우드 인프라 환경이 리전별로 구성되어 있기 때문에 어떤 리전을 사용하느냐에 따라 가상머신 인스턴스의 실행 위치가 다르다.

## 4. 3가지 개념 한 눈에 보기

![Cloud Environment](/images/Cloud_Environment.png)

## 5. Reference

- [MULTI-TENANT ARCHITECTURE AND NEXT PLM BACKBONE](https://beyondplm.com/2018/09/14/multi-tenant-architecture-next-plm-backbone/)
- [AWS Global Infrastructure: Availability Zones, Regions, Edge Locations, Regional Edge Caches](https://cloudacademy.com/blog/aws-global-infrastructure/)
- [Understanding the Difference Between Single-Tenant and Multi-Tenant Cloud](https://blog.loginradius.com/identity/single-tenant-vs-multi-tenant/)
