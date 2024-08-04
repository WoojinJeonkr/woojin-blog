---
external : false
title : "Swagger 3 Parameter"
tag : [Java, Swagger]
date : 2024-08-04
---

## 1. 개요

Swagger 2와 Swagger 3 (OpenAPI 3.0) 간의 주요 변화 중 하나는 주석 관련 API 문서화 어노테이션의 변경입니다. Swagger 2에서 사용되던 @ApiParam 어노테이션은 Swagger 3에서 @Parameter로 변경되었습니다. 이러한 변화는 주로 어노테이션의 사용 방식과 기능 향상에 기인합니다. 자세한 내용은 아래에서 설명하겠습니다.

## 2. @Parameter 변경 시점

@Parameter는 OpenAPI 3.0의 출시에 맞춰 2019년 1월 이후부터 사용되기 시작했습니다.

## 3. @ApiParam

@ApiParam 어노테이션은 API 문서화에서 매개변수(parameter)의 세부 정보를 추가하는 데 사용됩니다. 이 어노테이션을 통해 각 매개변수에 대한 설명을 제공할 수 있으며, 매개변수가 필수인지 선택적인지, 기본값이 무엇인지 등을 명시할 수 있습니다.
해당 어노테이션은 메소드의 매개변수에 적용되어, 매개변수에 대한 자세한 정보를 문서화하는 데 도움을 줍니다. 구체적으로는 매개변수의 설명, 기본값, 필수 여부 등을 포함할 수 있습니다. 예를 들어, 메소드에서 사용하는 변수에 @ApiParam을 붙여 해당 변수의 용도와 요구 사항을 명확히 할 수 있습니다.

```java
@ApiOperation(value = "Get user by ID")
@GetMapping("/users/{id}")
public User getUserById(
    @ApiParam(value = "ID of the user to fetch", required = true) @PathVariable Long id) {
    // method implementation
}
```

## 4. @Parameter

@Parameter 어노테이션은 Swagger 2에서 사용되던 @ApiParam을 대체하며, 매개변수에 대한 더 세밀하고 구체적인 설명을 지원합니다. OpenAPI 3.0에서는 @Parameter를 사용하여 매개변수를 표준화된 방식으로 설명할 수 있습니다. 이 어노테이션은 API 문서화에서 매개변수를 명확하고 일관되게 정의하는 데 유용합니다.
해당 어노테이션은 메소드의 매개변수뿐만 아니라 필드와 같은 다양한 위치에도 적용할 수 있습니다. 이를 통해 매개변수에 대한 설명을 추가하고, 해당 매개변수가 필수인지 선택적인지, 기본값이 무엇인지 등 여러 속성을 설정할 수 있습니다. 따라서 @Parameter는 매개변수의 세부 사항을 더욱 정확하게 문서화할 수 있는 기능을 제공합니다.

```java
@Operation(summary = "Get user by ID", description = "Returns a single user")
@GetMapping("/users/{id}")
public User getUserById(
    @Parameter(description = "ID of the user to fetch", required = true) @PathVariable Long id) {
    // method implementation
}
```

## 5. 주요 변경 사항

OpenAPI 3.0에서는 @Parameter 어노테이션을 통해 API 문서화에 대한 표준화된 접근 방식을 제공합니다. 이는 Swagger 2의 @ApiParam과 비교하여 매개변수를 더욱 일관되게, 체계적으로 설명할 수 있게 해줍니다. @Parameter는 다양한 API 문서에서 통일된 형식으로 매개변수를 정의함으로써 문서화의 일관성을 높이고 품질을 향상시킵니다.
또한, OpenAPI 3.0은 매개변수에 대한 설명을 넘어서 여러 속성을 설정할 수 있는 기능을 추가로 제공합니다. 이를 통해 문서화는 더 확장성과 유연성을 갖추게 되며, 매개변수의 형식, 기본값, 제약 조건 등 세밀한 사항을 정의할 수 있습니다. 이 확장성 덕분에 API 문서화는 더욱 상세하고 포괄적으로 이루어질 수 있습니다.
마지막으로, @Parameter 어노테이션은 OpenAPI 3.0의 구조에 맞춰 설계되어, API 문서화를 더 정교하고 체계적으로 지원합니다. OpenAPI 3.0의 구조적 특성에 맞게 설계된 이 어노테이션은 매개변수의 세부 사항을 보다 정확하고 체계적으로 표현할 수 있도록 돕습니다. 결과적으로, API 문서화는 더욱 명확하고 일관된 정보를 제공하게 됩니다.

## 6. 마이그레이션 시 유의사항

Swagger 2에서 @ApiParam을 사용하고 있었다면, OpenAPI 3.0으로 마이그레이션할 때 @Parameter로 교체해야 합니다. 마이그레이션 후 API 문서를 검토하여 모든 매개변수가 적절하게 문서화되었는지 확인하는 것이 중요합니다. Swagger 2에서 작성된 문서와 OpenAPI 3.0 문서 간의 호환성을 고려하여 문서화 전략을 재검토할 필요가 있습니다.

## 7. 참조

- [9. Migrating from SpringFox](https://springdoc.org/#swagger-ui-properties)
- [Documenting a Spring REST API Using OpenAPI 3.0](https://www.baeldung.com/spring-rest-openapi-documentation)
