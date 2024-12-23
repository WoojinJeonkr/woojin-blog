---
external : false
title : "QA and QC Roles and Differences in Software Development"
tag : [Study]
date : 2024-10-03
---

소프트웨어 개발에서 품질 관리의 중요성은 아무리 강조해도 지나치지 않습니다. 특히 **QA**(Quality Assurance)와 **QC**(Quality Control)는 제품의 품질을 보장하고 유지하는 핵심적인 활동입니다. 하지만 둘의 차이를 명확하게 이해하는 것은 쉽지 않습니다. 이 글에서는 QA와 QC의 개념, 업무 내용, 그리고 사용하는 도구의 차이에 대해 알아보겠습니다.

## 1. QA (Quality Assurance, 품질 보증)란?

**QA**(Quality Assurance)는 "Quality(품질)"와 "Assurance(보증)"의 합성어로, '품질이 특정 기준을 만족하도록 **확신**을 주는 활동'을 의미합니다. 즉, QA는 **전 과정에서 품질을 보장**하는 활동입니다. 어원적으로 "Assure"는 라틴어 "assecurare"에서 유래되었으며, "보증하다"라는 의미를 담고 있습니다. 이 개념은 주로 **예방적 관점**에서 제품과 프로세스를 관리하는 데 사용됩니다.

소프트웨어 개발에서 **QA**는 개발 프로세스 전반에서 **품질을 보증**하기 위한 활동입니다. 품질이 높은 제품이 만들어지려면, 처음부터 끝까지 체계적으로 관리된 프로세스를 따라야 하며, QA의 주요 목적은 이러한 프로세스를 개선하고 최적화하는 데 있습니다.

### 1-1. QA의 주요 업무

- **프로세스 개선**: 소프트웨어 개발 생명주기(SDLC)의 각 단계를 정의하고, 지속적으로 개선합니다.
- **품질 표준 수립**: 회사 내부 또는 국제 표준에 맞는 품질 관리 체계를 수립하고 유지합니다.
- **모니터링 및 감사**: 개발 프로세스가 정해진 품질 기준에 맞게 진행되는지 주기적으로 확인합니다.
- **리스크 관리**: 프로젝트 초기부터 품질과 관련된 리스크를 식별하고 예방합니다.
- **교육 및 문서화**: 팀원들에게 품질 표준을 교육하고, 이를 문서화하여 체계적으로 관리합니다.

### 1-2. QA에서 사용하는 도구

QA는 **프로세스 관리**에 중점을 두기 때문에 주로 프로젝트 관리와 프로세스 모니터링에 특화된 도구를 사용합니다.

- [**JIRA**](https://www.atlassian.com/ko/software/jira): 이슈 및 프로젝트 관리 도구로, 품질과 관련된 문제를 추적하고 관리합니다.
- [**Confluence**](https://www.atlassian.com/ko/software/confluence): 문서화 도구로, 품질 관리 절차와 표준을 문서화하여 팀과 공유합니다.
- [**TestRail**](https://www.testrail.com/): 테스트 프로세스를 관리하고, 테스트 계획이 효과적으로 실행되는지 확인합니다.
- [**SonarQube**](https://www.sonarsource.com/): 코드 품질을 자동으로 분석하여 코드 내 결함을 사전에 방지합니다.

---

## 2. QC (Quality Control, 품질 관리)란?

**QC**(Quality Control)는 "Quality(품질)"와 "Control(관리)"의 합성어로, '품질을 **통제**하여 문제가 발생했을 때 이를 찾아내고 수정하는 활동'을 의미합니다. "Control"의 어원은 라틴어 "contra rotulus"에서 유래된 프랑스어 "contrerôle"로, '상대 기록을 통해 확인하는 것'이라는 의미를 지니고 있습니다. QC는 **사후적인 관점**에서 제품의 결함을 관리하는 데 중점을 둡니다.

소프트웨어 개발에서 **QC**는 제품의 **결함을 식별하고 수정**하는 활동입니다. 소프트웨어가 개발되면 그 제품이 요구사항을 제대로 충족하는지 확인하고, 결함이 있는 부분을 찾아내는 것이 QC의 핵심입니다.

### 2-1. QC의 주요 업무

- **테스트 계획 수립 및 실행**: 요구 사항을 기반으로 테스트 케이스를 작성하고 실행하여 제품의 품질을 확인합니다.
- **버그 탐지 및 리포트**: 소프트웨어에서 발견된 버그를 기록하고, 이를 개발팀에 전달하여 수정이 이루어지도록 합니다.
- **기능 및 성능 테스트**: 소프트웨어가 기대하는 기능을 올바르게 수행하는지, 성능이 적절한지를 확인합니다.
- **회귀 테스트**: 결함이 수정된 후에도 다른 기능이 제대로 동작하는지 반복적으로 테스트합니다.

### 2-2. QC에서 사용하는 도구

QC는 **테스트와 결함 탐지**에 초점을 맞추므로, 주로 테스트 자동화와 결함 관리 도구를 사용합니다.

- [**Selenium**](https://www.selenium.dev/): 웹 애플리케이션의 기능 테스트를 자동화하는 도구로, 브라우저를 통해 애플리케이션의 동작을 확인합니다.
- [**Postman**](https://www.postman.com/): API 테스트 도구로, RESTful API의 요청과 응답을 검증합니다.
- [**JIRA**](https://www.atlassian.com/ko/software/jira): 이슈 관리 도구로, QC에서도 발견된 결함을 기록하고 관리합니다.
- [**LoadRunner**](https://www.perfmatrix.com/micro-focus-loadrunner-tutorial/): 성능 테스트 도구로, 다양한 부하 조건에서 애플리케이션의 성능을 평가합니다.

---

## 3. QA와 QC의 차이

QA와 QC는 모두 소프트웨어의 품질을 관리하는 역할을 하지만, **초점**과 **목표**가 다릅니다.

- **QA는 프로세스 중심**입니다. 품질 문제를 사전에 예방하기 위해 개발 프로세스를 체계적으로 관리하고 개선하는 데 중점을 둡니다.
- **QC는 제품 중심**입니다. 이미 개발된 제품에서 문제를 찾아내고, 결함을 수정하는 데 주력합니다.
- **QA는 예방적 활동**이고, **QC는 검사 및 수정 활동**입니다.

---

## 4. QA와 QC의 상호 보완 관계

QA와 QC는 서로 독립적인 활동이지만, 최종적으로는 **품질이 높은 제품**을 만들기 위해 협력하는 관계입니다. QA는 **오류를 예방**하고, QC는 **오류를 발견**하여 수정합니다.

- QA가 프로세스 개선을 통해 오류 발생 가능성을 줄이면, QC는 그만큼 결함을 적게 찾아낼 수 있습니다.
- QC가 결함을 찾아내면, QA는 이를 바탕으로 프로세스 개선을 도모할 수 있습니다.

이처럼 QA와 QC는 개발 프로세스와 제품 품질 모두를 최적화하는 데 중요한 역할을 합니다.

## 5. 결론

소프트웨어 개발에서 QA와 QC는 각각 다른 역할을 담당하며, 함께 작동할 때 가장 효과적입니다. QA는 전체 프로세스를 개선하고, QC는 그 결과물을 평가합니다. 두 활동이 잘 조화될 때, 개발 팀은 품질 높은 제품을 더 효율적으로 만들어낼 수 있습니다.

따라서 개발자는 QA와 QC의 차이를 이해하고, 이 둘을 적절히 활용하는 것이 중요합니다. 품질 관리는 단순히 테스트 단계에서만 이루어지는 것이 아니라, 전체 개발 과정에 걸쳐 지속적으로 이루어져야 한다는 점을 기억해야 합니다.
