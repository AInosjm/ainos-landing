# AiNOS Landing Page Redesign Handoff

작성일: 2026-05-04  
대상: AiNOS public landing page  
작업 위치: `ainos-webpage`

## 1. 목적

현재 AiNOS 랜딩 페이지는 시각적으로 완성도는 높지만, 최근 Pre-A IR 덱에서 정리한 회사 포지셔닝과 다소 어긋나 있다. 이번 업데이트의 목적은 단순한 라이트 테마 적용이 아니라, 웹사이트가 IR 덱과 같은 회사를 말하도록 만드는 것이다.

핵심 전환은 다음과 같다.

- 기존 인상: 다크하고 추상적인 `Decision Operating System` 회사
- 목표 인상: 밝고 명료한 `Ontology-Driven Multimodal AI Infrastructure` 회사
- 기존 메시지: AI가 판단하는 운영체제
- 목표 메시지: 도메인별 고맥락을 온톨로지 기반 의미 구조로 바꾸고, LLM이 그 구조 위에서 정확하게 추론하게 만드는 인프라

프론트엔드 작업자는 이 문서를 기준으로 정보 구조, 카피, 비주얼 시스템, 컴포넌트 방향을 업데이트한다.

## 2. 현재 페이지 진단

### 현재 장점

- 다크 에디토리얼 톤의 완성도가 높다.
- `Hero`, `ArchitectureDiagram`, `AsymmetryDiagram`, `Reveal` 등 컴포넌트 구조가 이미 분리되어 있어 리디자인 기반으로 재사용할 수 있다.
- Vector Institute, University of Toronto 등 연구 기반 신뢰 요소가 이미 포함되어 있다.
- 온톨로지, LLM utilization, runtime이라는 기술 스택 구조가 이미 존재한다.

### 현재 문제

1. 첫 화면 포지셔닝이 최신 IR과 다르다.
   - 현재 H1은 `The Decision Operating System.`
   - 현재 메타 설명도 `Decision Operating System` 중심이다.
   - IR 덱에서는 AiNOS를 `Ontology-Driven Multimodal AI Infrastructure`로 설명했다.

2. 전체 무드가 너무 다크하다.
   - 현재 글로벌 토큰은 `--ink-900`, `--bone-50` 기반의 near-black 테마이다.
   - IR 덱은 밝은 porcelain/ice white 배경에 blue/violet accent를 사용한다.
   - 퍼블릭 랜딩에서는 현재 톤이 고급스럽지만, 투자자와 전략 파트너에게는 다소 폐쇄적이고 추상적으로 보일 수 있다.

3. 온톨로지 설명이 오해될 수 있다.
   - 현재 문구에는 “the engine that builds it is the same across every vertical” 표현이 있다.
   - 이 표현은 각 도메인의 온톨로지가 공통으로 공유되는 것처럼 읽힐 수 있다.
   - 정확한 메시지는 “도메인별 온톨로지는 다르지만, 그것을 설계, 배포, 진화시키는 코어 아키텍처가 누적 개선된다”이다.

4. 유스케이스와 확장 경로가 최신 회사 스토리와 맞지 않는다.
   - 현재 Deployments는 SmartPort, finance expansion, character AI, health 등이 섞여 있다.
   - 최신 IR에서는 다음 proof 및 expansion path가 중심이다.
     - Vitality: regulated insurance compliance / insurance AX
     - SAIRO 및 MMG: mental health platform ecosystem
     - Busan Smart Port 및 Fori: port central intelligence, logistics/physical operations
     - Vector Institute, University of Toronto: research foundation
     - Human Motion Language Model: physical AI phase로의 확장

5. 공개 웹사이트에서 파트너 노출 레벨이 정리되어야 한다.
   - 현재 blurred partner 처리는 흥미를 만들지만, public landing에서는 오히려 신뢰를 낮출 수 있다.
   - 공개 가능한 파트너와 confidential partner는 표현 방식을 분리해야 한다.

## 3. 목표 독자와 UX 기준

### 주요 독자

- 투자자
- 전략 파트너
- enterprise buyer 또는 innovation team
- frontier AI / ontology / infrastructure에 관심 있는 기술 인재

### 독자가 첫 10초 안에 이해해야 하는 것

1. AiNOS는 챗봇 회사가 아니라 AI 인프라 회사다.
2. 핵심은 도메인 고맥락을 온톨로지 기반 의미 구조로 바꾸는 것이다.
3. 이 구조 위에서 LLM이 더 정확하고 검증 가능하게 추론한다.
4. 이미 보험, 멘탈헬스, 항만/물리 운영 쪽 proof와 파트너 기반을 만들고 있다.
5. 장기적으로 physical AI와 motion language model로 확장한다.

### 감정적 목표

- 밝고 명료하다.
- 연구 기반 deeptech처럼 보인다.
- 기관 투자자와 대기업 파트너에게 신뢰를 준다.
- 너무 SaaS스럽거나 너무 어두운 sci-fi처럼 보이지 않는다.
- “작지만 굉장히 구조적인 회사를 보고 있다”는 느낌을 준다.

## 4. 시각 시스템 방향

### Visual Thesis

밝은 porcelain 기반의 institutional deeptech surface 위에, blue/violet semantic graph와 precise technical diagram이 얹힌 느낌.

### 컬러 토큰 제안

현재 다크 토큰을 완전히 제거할 필요는 없지만, 기본 페이지 배경은 라이트로 전환한다.

```css
:root {
  --bg: #f7f9fd;
  --surface: #ffffff;
  --surface-soft: #eef4ff;
  --surface-violet: #f3efff;
  --text: #101828;
  --text-muted: #5d6677;
  --text-soft: #7a8496;
  --blue: #1d6cff;
  --blue-soft: #6aa4ff;
  --violet: #7c3aed;
  --violet-soft: #a78bfa;
  --border: rgba(16, 24, 40, 0.12);
  --border-strong: rgba(29, 108, 255, 0.24);
  --graph-line: rgba(29, 108, 255, 0.18);
}
```

### 사용 방식

- 배경은 `#f7f9fd` 또는 white 기반.
- section마다 살짝 다른 온도감의 surface band를 사용한다.
- blue는 primary accent, violet은 ontology/reasoning accent로 사용한다.
- 다크 패널은 기술 다이어그램, code-like system panel, final contrast block 등 제한된 곳에서만 사용한다.
- 전체 페이지가 blue/purple만 반복되는 단조로운 팔레트가 되지 않도록 graphite, cool gray, white space를 충분히 사용한다.

### 타이포그래피

현재 `Instrument Serif`, `IBM Plex Sans`, `IBM Plex Mono` 조합은 유지 가능하다. 다만 현재 serif scale이 너무 editorial luxury에 가깝기 때문에, 라이트 테마에서는 다음처럼 조정한다.

- H1: serif display 유지 가능. 단, 내용은 기술적 명확성을 우선한다.
- Section heading: serif와 sans를 섞되, 너무 시적 표현을 줄인다.
- Body: IBM Plex Sans 중심.
- Technical label: IBM Plex Mono 유지.
- Letter spacing은 과하지 않게 줄인다. 현재 mono label은 분위기는 좋지만 가독성이 낮은 구간이 있다.

### 이미지와 그래픽

현재 hero image와 deployment triptych는 다크 톤에 맞춰 생성되어 있다. 라이트 전환 시 다음 중 하나를 선택한다.

1. 빠른 리디자인: 기존 이미지를 줄이고, CSS/SVG semantic graph와 diagram 중심으로 전환
2. 권장 리디자인: IR 덱과 같은 라이트 무드의 hero/section 이미지를 새로 생성

권장 이미지 방향:

- hero: 밝은 연구/인프라 공간 위에 semantic graph, ontology nodes, structured reasoning traces가 보이는 장면
- architecture: white/light technical blueprint, graph traversal, evidence subgraph, model reasoning path
- proof map: 세 개 도메인이 각각 다른 surface로 보이되, 동일한 architecture philosophy가 흐르는 느낌
- physical AI: human motion tokenization, skeletal motion trace, temporal token stream, motion vocabulary

피해야 할 것:

- generic AI brain
- neon cyberpunk
- dark sci-fi command center
- floating hologram 과다
- 무의미한 card grid
- purple/blue gradient만으로 채운 배경

## 5. 권장 정보 구조

현재 구조:

1. Hero
2. Thesis
3. Architecture
4. Deployments
5. Contrarian
6. Foundation
7. Closing

권장 구조:

1. Hero
2. Why Now
3. Ontology Reasoning Infrastructure
4. Proof Map
5. Technical Moat
6. Expansion Paths
7. Physical AI Bridge
8. Research Foundation
9. Contact / Partner CTA

이 구조는 IR 덱의 회사 스토리와 맞는다. 특히 `Contrarian` 섹션은 현재 사이트에서는 흥미롭지만 public landing의 핵심 메시지로는 다소 내부 전략 설명에 가깝다. 필요하다면 `Expansion Paths` 안에 흡수한다.

## 6. 섹션별 상세 핸드오프

### 6.1 Hero

#### 현재

- H1: `The Decision Operating System.`
- Eyebrow: `A Decision-Layer Company`
- Tone: dark architectural chamber

#### 목표

첫 화면에서 AiNOS가 무엇을 하는 회사인지 즉시 이해되어야 한다.

#### 추천 H1 옵션

옵션 A:

```text
Ontology-Driven
AI Infrastructure
```

옵션 B:

```text
The Semantic Infrastructure
for Domain AI
```

옵션 C:

```text
AI Infrastructure
for Domain Reasoning
```

옵션 A가 가장 IR 덱과 직접적으로 맞다. 옵션 B는 public landing에서 더 부드럽다. 권장은 옵션 B를 H1로 쓰고, supporting copy에서 ontology를 명확히 넣는 것이다.

#### 추천 Hero Copy

```text
AiNOS turns multimodal and operational signals into domain-specific semantic structures, enabling language models to reason with context, constraints, and evidence.
```

#### Hero support row

현재 `Ontology / Utilization / Runtime` 세 항목은 유지하되 표현을 업데이트한다.

- Domain Ontology
  - `Signal to semantic structure`
- Reasoning Architecture
  - `LLM × ontology traversal`
- Self-Evolving Runtime
  - `Feedback to architecture improvement`

#### CTA

- Primary: `Partner with AiNOS`
- Secondary: `View technical architecture`

#### Visual

- 밝은 배경 위에 semantic graph가 hero 전체에 얇게 깔린다.
- 화면 오른쪽 또는 중앙 후면에 ontology graph가 있고, 일부 path가 blue/violet으로 traversal되는 느낌.
- hero를 카드화하지 않는다.
- 첫 viewport는 하나의 poster-like composition이어야 한다.

### 6.2 Why Now

#### 목적

IR 덱의 2번 슬라이드 메시지를 웹으로 옮긴다.

핵심 메시지:

```text
LLMs are getting stronger. Domain work is not getting context-free.
```

#### 설명 방향

- LLM 성능은 계속 좋아진다.
- 하지만 regulated enterprise, clinical workflow, physical operations는 단순 prompt로 해결되지 않는다.
- 각 도메인에는 자체 엔티티, 상태, 관계, 제약, evidence chain, 책임 구조가 있다.
- 따라서 모델 위에 도메인 의미 구조가 필요하다.

#### 레이아웃

좌측에 큰 문장:

```text
Better models do not remove domain context.
They make structured context more valuable.
```

우측에 3개 friction block:

- Regulated Enterprise
  - Compliance, auditability, institutional constraints
- Clinical Workflow
  - Longitudinal context, clinician review, reasoning continuity
- Physical Operations
  - Sensor signals, temporal state, operational consequence

카드는 쓰더라도 border/shadow가 강한 SaaS 카드가 아니라, 얇은 line-separated editorial block으로 처리한다.

### 6.3 Ontology Reasoning Infrastructure

#### 목적

AiNOS의 핵심 제품 철학을 한 섹션에서 설명한다.

#### 핵심 문장

```text
AiNOS builds the infrastructure that lets AI traverse domain meaning, not just retrieve context.
```

#### 반드시 전달해야 할 개념

- Raw signals are converted into typed entities, states, relations, constraints, and evidence.
- LLMs do not just receive flat context. They traverse structured ontology paths.
- The output is not just an answer. It is a reasoning path that can be inspected, improved, and operationalized.

#### 다이어그램 구조

권장 diagram:

```text
Multimodal / Operational Signals
        ↓
Domain-Specific Ontology
        ↓
Evidence Subgraph
        ↓
LLM Reasoning / Ontology Traversal
        ↓
Decision / Workflow / Action
        ↓
Feedback
        ↺ Core Ontology Architecture Improves
```

주의:

- 서로 다른 도메인의 온톨로지가 하나로 합쳐지는 것처럼 보이면 안 된다.
- `shared architecture`, `domain-specific ontology`, `architecture feedback loop`의 차이를 시각적으로 분리해야 한다.

### 6.4 Proof Map

#### 목적

AiNOS의 역량이 여러 실제 도메인에서 검증되고 있다는 것을 보여준다.

#### 권장 헤더

```text
Proof across domains where generic AI breaks first.
```

#### 3개 proof lane

1. Vitality / Insurance Compliance
   - Category: Regulated enterprise
   - What it proves: compliance-heavy reasoning, auditability, fragmented enterprise context
   - Expansion: Insurance AX full packet

2. SAIRO / MMG Mental Health Platform
   - Category: Clinical workflow and platform ecosystem
   - What it proves: longitudinal context, clinical reasoning continuity, clinician-facing workflow
   - Important nuance: SAIRO mental health workflow should not be described as multimodal by default. It is primarily prior session conversation, current session conversation, and patient-entered logs/notes organized into a clinical reasoning path.
   - Expansion: mental health platform ecosystem with MMG, LG, and additional healthcare/consumer partners where disclosure is approved

3. Busan Smart Port / Fori
   - Category: Physical operations
   - What it proves: central intelligence for port-side operations, logistics, physical infrastructure reasoning
   - Current status: ongoing PoC/proof, not overclaim as scaled production
   - Expansion: port-side logistics and physical manufacturing infrastructure management

#### Visual

세 도메인을 같은 카드 템플릿으로 넣되, “같은 ontology를 쓴다”가 아니라 “같은 reasoning philosophy와 core architecture가 도메인별로 배포된다”는 시각 구조가 필요하다.

권장 구조:

- 중앙: `Core Ontology Architecture`
- 좌/우/하단: 3개의 domain-specific deployment
- 각 deployment에는 별도 ontology node cluster
- 각 deployment에서 중앙으로 feedback line이 돌아온다.

### 6.5 Technical Moat

#### 목적

AiNOS가 단순 SI, consulting, chatbot wrapper가 아니라 기술적 코어가 있는 회사임을 보여준다.

#### 권장 헤더

```text
The moat is not one ontology.
It is the architecture that keeps producing better ones.
```

#### 3개 layer

1. Auto-Scaling Domain Ontology
   - raw signals to entities, states, relationships, constraints
   - ontology evolves as deployment data accumulates

2. LLM / Ontology Utilization Architecture
   - schema-aware reasoning
   - graph traversal
   - evidence-aware generation

3. Self-Evolving Runtime
   - deployment feedback
   - reasoning path review
   - ontology architecture improvement loop

#### 현재 ArchitectureDiagram 업데이트

기존 `ArchitectureDiagram.tsx`는 다크 blueprint라서 라이트 톤으로 다시 그리는 것이 좋다.

권장:

- white 또는 pale blue panel
- fine grid
- blue/violet traversal paths
- 각 layer의 관계를 더 명확히
- `LM × Schema`를 `LLM × Ontology Traversal`로 변경

### 6.6 Expansion Paths

#### 목적

현재 proof가 단발 PoC가 아니라 사업 확장의 leverage임을 보여준다.

#### 권장 헤더

```text
From proof surfaces to repeatable business systems.
```

#### 3개 path

1. Mental Health Platform Ecosystem
   - Starting leverage: MMG partnership, SAIRO clinical workflow
   - Direction: platform ecosystem for mental health services, DaaS/IaaS-style infrastructure opportunities
   - Partner context: MMG, LG, additional health/consumer partners where approved
   - Avoid: “SAIRO itself becomes the whole platform”처럼 들리면 안 된다. SAIRO는 proof/workflow이고, 플랫폼화의 중심은 MMG 및 파트너 생태계다.

2. Port Central Intelligence
   - Starting leverage: Busan Smart Port PoC/proof
   - Direction: port-side logistics and physical manufacturing infrastructure management system
   - Partner context: Fori and relevant port/infrastructure partners where approved
   - Long-term bridge: physical AI

3. Insurance AX Full Packet
   - Starting leverage: Vitality compliance / insurance context
   - Direction: full insurance AX packet across compliance, underwriting support, operational reasoning, enterprise knowledge workflows
   - Partner context: Vitality, WTW where disclosure is approved

#### 레이아웃

3-column 비교보다, “current leverage → expansion system → partner ecosystem” 흐름을 보여주는 horizontal journey가 좋다.

각 path는 다음 template을 사용한다.

```text
Current Leverage
↓
Repeatable System
↓
Expansion Surface
↓
Partner Ecosystem
```

### 6.7 Physical AI Bridge

#### 목적

Human Motion Language Model과 motionization이 장기 확장 방향임을 너무 과장하지 않고, 기술적으로 그럴듯하게 보여준다.

#### 권장 헤더

```text
The same reasoning philosophy extends from language to motion.
```

#### 핵심 개념

- Motionization: continuous human motion signals를 discrete or structured motion representations로 바꾸는 과정
- Motion tokens: pose, temporal dynamics, action primitives, behavioral state를 표현하는 단위
- Motion Language Model: motion sequence를 language-like representation으로 다루어 physical behavior, clinical condition, operational state를 추론하는 방향

#### 주의

- 아직 상용 제품처럼 과장하지 않는다.
- “frontier research direction” 또는 “Phase 2 research track”으로 표현한다.
- 의료 진단을 직접 수행하는 것처럼 표현하지 않는다.

#### Visual

```text
Motion Capture / Sensor Signals
        ↓
Motionization
        ↓
Motion Tokens / Temporal Vocabulary
        ↓
Motion Language Model
        ↓
Physical AI Reasoning
```

밝은 배경 위에 skeletal motion trace와 token stream을 사용한다.

### 6.8 Research Foundation

#### 목적

Vector Institute와 University of Toronto를 신뢰 anchor로 명확히 보여준다.

#### 현재 유지할 것

- Vector Institute logo
- University of Toronto logo

#### 개선할 것

- 지금처럼 다크 배경 위에 흰 박스 로고를 올리는 방식보다, 전체 섹션을 밝게 만들고 로고를 institutional partner wall처럼 정돈한다.
- 로고가 단순 장식이 아니라 “research foundation”과 직접 연결되도록 한다.

#### 추천 카피

```text
AiNOS is built with research foundations connected to the Vector Institute and the University of Toronto, grounding its ontology and motion-language research in one of the world’s strongest AI ecosystems.
```

주의:

- 공식 파트너십, 연구 협력, 생태계 연결 등 법적/계약적 표현 레벨은 내부 확인 후 확정한다.

### 6.9 Contact / Closing

#### 현재

`Make better decisions inevitable.`

#### 목표

더 명확하고 partner/investor friendly하게 바꾼다.

#### 추천 카피

```text
Build domain AI infrastructure with AiNOS.
```

Supporting:

```text
We work with partners building regulated, clinical, and physical AI systems where domain context determines whether AI can be trusted.
```

CTA:

- `Partner with us`
- `hello@ainos.ai`

## 7. 파일별 작업 범위

### `app/globals.css`

해야 할 일:

- 라이트 테마 토큰 추가 또는 기존 토큰 교체
- `--ink-*`, `--bone-*` 중심 구조를 compatibility layer로 남기거나, 새 semantic token으로 정리
- scrollbar, selection, focus-visible도 라이트 테마에 맞게 수정
- grain 효과는 유지하되 너무 다크하게 보이지 않게 조정

주의:

- 전체 색상을 한 번에 바꾸면 기존 컴포넌트의 contrast가 깨질 수 있다.
- `text-bone-*`, `bg-ink-*` 클래스가 매우 많으므로, 단순 token swap만으로 끝내기보다 주요 section class를 함께 업데이트해야 한다.

### `app/_components/Hero.tsx`

해야 할 일:

- H1, eyebrow, supporting copy 전면 교체
- 다크 hero image overlay 제거 또는 라이트 자산으로 교체
- nav label 업데이트
  - `Thesis` → `Why Now`
  - `Core Technology` → `Architecture`
  - `Deployments` → `Proof`
  - `Foundation` → `Research`
- hero meta row 업데이트

### `app/page.tsx`

해야 할 일:

- 현재 `Thesis`를 `WhyNow`로 재정의
- `Architecture`를 `OntologyReasoningInfrastructure` 또는 `TechnicalMoat` 구조로 정리
- `Deployments`를 최신 proof map으로 재작성
- `Contrarian`은 삭제하거나 `ExpansionPaths`로 대체
- `Foundation`은 밝은 research foundation section으로 업데이트
- `Closing` 카피 업데이트

### `app/_components/ArchitectureDiagram.tsx`

해야 할 일:

- 다크 blueprint를 라이트 technical diagram으로 리디자인
- `Language-Model · Ontology Utilization`을 `LLM × Ontology Traversal` 쪽으로 명확화
- 도메인별 ontology와 shared core architecture의 차이를 시각적으로 표현

### `app/_components/AsymmetryDiagram.tsx`

현재 `build vs sell asymmetry` 논지는 public landing에서는 우선순위가 낮다. 완전히 제거하거나, expansion strategy 페이지에서만 사용한다.

### `app/layout.tsx`

해야 할 일:

- metadata 업데이트
- title/description/keywords에서 `Decision Operating System` 중심 표현을 줄이고 ontology infrastructure 중심으로 변경

추천 metadata:

```ts
title: "AiNOS — Ontology-Driven AI Infrastructure"
description:
  "AiNOS builds ontology-driven AI infrastructure that turns domain signals into semantic structures for reliable reasoning across regulated, clinical, and physical environments."
```

### `public/landing`

해야 할 일:

- 기존 다크 이미지들은 라이트 리디자인에서 직접 쓰기 어렵다.
- 새 hero/architecture/proof/physical AI 이미지를 생성하거나, SVG/CSS 기반 visual system으로 대체한다.
- 기존 이미지를 유지할 경우 전체 톤과 맞지 않으므로 opacity/background 처리로 보조 자료화해야 한다.

## 8. 공개 표현 주의사항

### 파트너 표기

공개 페이지에서는 파트너 표기 레벨을 반드시 확인해야 한다.

분류:

- 공개 가능: Vector Institute, University of Toronto, MMG, Fori 등 내부 확인된 항목
- 제한 표기: LG, WTW, Vitality 등 공개 가능 여부 확인 필요
- 비공개 또는 초기 논의: blurred text보다 `select strategic partners` 같은 표현 권장

### 유스케이스 단계 표현

- Busan Smart Port는 현재 `ongoing PoC/proof`로 표현한다.
- MMG mental health platform은 `preparing / building with partners` 쪽으로 표현한다.
- Vitality는 공개 가능 레벨에 따라 `partnership discussion`, `insurance AX collaboration`, `regulated enterprise proof` 중 선택한다.

### 의료/헬스케어 표현

- 진단, 치료 자동화처럼 보이는 표현을 피한다.
- clinician-facing workflow, clinical note continuity, patient-entered logs, longitudinal reasoning support처럼 표현한다.
- SAIRO는 멀티모달로 설명하지 않는다.

## 9. 구현 우선순위

### Phase 1: High Impact Refresh

- 라이트 컬러 시스템 적용
- Hero 포지셔닝 교체
- Metadata 교체
- Why Now / Architecture / Proof Map 카피 교체
- blurred partner list 정리

이 단계만 해도 IR 덱과의 불일치가 크게 줄어든다.

### Phase 2: Structural Redesign

- `Contrarian`을 `ExpansionPaths`로 교체
- `PhysicalAIBridge` 섹션 추가
- `ArchitectureDiagram` 라이트 버전 재제작
- proof map visual 제작

### Phase 3: Visual Polish

- hero 및 section 이미지 재생성
- desktop/mobile spacing 조정
- reveal motion 재조정
- browser screenshot QA
- contrast/accessibility 점검

## 10. Acceptance Criteria

완료 기준:

- 첫 화면만 보고 AiNOS가 ontology-driven AI infrastructure 회사임을 이해할 수 있다.
- 전체 톤이 IR 덱과 일관된 light, blue/violet, institutional deeptech 무드로 보인다.
- `Decision OS`는 primary positioning에서 빠지거나 secondary phrase로만 남는다.
- proof map이 Vitality, SAIRO/MMG, Busan Smart Port 중심으로 정리된다.
- domain-specific ontology와 shared core architecture의 차이가 명확하다.
- Busan/MMG/Vitality의 사업 단계가 과장되지 않는다.
- Vector Institute와 University of Toronto가 신뢰 anchor로 분명하게 보인다.
- mobile hero에서 텍스트가 겹치거나 지나치게 작아지지 않는다.
- 다크 섹션이 있더라도 전체 페이지의 기본 인상은 밝다.
- `npm run build` 또는 프로젝트 기준 lint/build 검증을 통과한다.

## 11. 참고 스크린샷

현재 리뷰용으로 생성된 스크린샷:

- `output/current-landing-review-desktop.png`
- `output/current-landing-review-mobile.png`
- `output/current-architecture-review.png`
- `output/current-deployments-review.png`
- `output/current-foundation-review.png`

이 스크린샷은 현재 페이지가 얼마나 다크하고 Decision OS 중심으로 보이는지 확인하기 위한 참고 자료다.

## 12. 최종 디자이너 브리프

AiNOS 랜딩 페이지를 기존 다크 에디토리얼 `Decision OS` 사이트에서, 밝고 명료한 `Ontology-Driven AI Infrastructure` 사이트로 전환한다. 목표는 IR 덱과 같은 회사처럼 보이게 만드는 것이다. 단순히 배경색을 밝게 바꾸는 것이 아니라, hero positioning, proof map, ontology architecture, expansion path, research foundation을 최신 회사 스토리에 맞춰 재구성한다.

디자인은 밝은 porcelain/white surface, electric blue/violet accent, semantic graph, technical diagram을 중심으로 한다. 전체 인상은 B2B SaaS 카드형 웹사이트가 아니라, 연구 기반 deeptech infrastructure company의 public front door여야 한다. 투자자와 파트너가 10초 안에 “이 회사는 모델 회사가 아니라 도메인 의미 구조를 만드는 AI 인프라 회사이고, 이미 보험/헬스케어/항만에서 proof를 만들고 있다”고 이해해야 한다.
