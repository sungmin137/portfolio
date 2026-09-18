# 최성민 웹 포트폴리오 — Claude Code 작업 컨텍스트

이 파일은 Cowork에서 진행한 작업을 Claude Code로 옮기기 위해 정리한 컨텍스트다.
저장소 루트(= `portfolio_web/` 내용이 올라가는 `sungmin137/portfolio`)에 `CLAUDE.md`로 두고 `claude`를 실행하면 자동으로 읽는다.

---

## 1. 프로젝트 개요

- 주인공: **최성민 (Choi Sungmin)** — 연세대 임상병리학과 2026.08 졸업 예정(학점 4.04/4.5), 임상병리사 면허, 오즈코딩스쿨 AI 헬스케어 부트캠프(넥스트러너스 "헬스케어 데이터 기반 인공지능 디지털 의료 웹 서비스 개발자 양성과정" 6차수, K-디지털 트레이닝) 수료.
- 연락처: sungminchoib@gmail.com · 010-8252-6075 · github.com/sungmin137
- **지원 방향 = AI 서비스 기획 / PM.** 개발자 트랙이 아니다. 모든 문구는 "기획·데이터 분석·프로젝트 리드" 관점으로 쓴다.
- 목적: 앞으로도 계속 수정·확장할 수 있는 정적 웹 포트폴리오. 프레임워크 없이 순수 HTML/CSS/JS 단일 파일 구조를 유지한다(빌드 도구 도입 금지).

## 2. 저장소 / 배포

- GitHub: `sungmin137/portfolio` → GitHub Pages `https://sungmin137.github.io/portfolio`
- 로컬 원본(= git 작업 폴더): `~/Desktop/자소서 작성/자소서 베이스/sungmin portfolio/` — 이력서 등 참고 자료는 `자료/`에 두고 `.gitignore`로 배포 제외
- 배포는 main 브랜치 push = 자동 반영. 커밋 전 반드시 아래 "검증" 절차를 거친다.

## 3. 파일 구성

```
index.html                     메인. 섹션 id 순서: job / about / education / experience / skills / certs / projects / contact
project_sanjae_oneshot.html    산재원샷 — 제8회 K-디지털 트레이닝 해커톤 최우수상(고용노동부 장관상, 2026.09)
project_cancer_subtype.html    유전자 변이 기반 암 아형 26종 분류 — AI 헬스케어 6기 최종 해커톤 (2026.09.09~18, Public LB 0.49598 팀 최고)
project_119_ars.html           119 보이는 ARS(firstview) — 제6회 소방안전 빅데이터 경진대회
project_infertility_ai.html    난임 임신 성공 예측 AI — DACON 해커톤 최종 2위
portfolio_seongmin.html        건강지표 기반 흡연 분석 — 부트캠프 팀 프로젝트 1위 (사이드바 레이아웃, Chart.js CDN 사용)
img/sanjae/                    산재원샷 이미지 (logo.png + screen/fig jpg 7장)
```

- 모든 상세 페이지는 index.html의 프로젝트 카드에서 링크된다. 프로젝트 카드 순서: 산재원샷 → 암 아형 분류 → 119 ARS → 흡연 분석 → 난임 AI.
- 외부 의존성은 `portfolio_seongmin.html`의 Chart.js(cdnjs) 하나뿐. 새로 추가하지 않는다.

## 4. 프로젝트 확정 수치 (검증된 값 — 임의로 바꾸지 말 것)

| 프로젝트 | 역할 | 핵심 수치 |
|---|---|---|
| 산재원샷 | 팀장·기획 총괄 | 생성형 AI + OCR로 산재 신청서 자동 작성, Pydantic 스키마 검증 설계. 제8회 KDT 해커톤 최우수상(고용노동부 장관상) |
| 암 아형 분류 (최종 해커톤) | 주 파이프라인 설계·구현, 검증 체계, 팀 문서·저장소 운영 (3인 팀: 성민·혜림·혜성) | 유전자 4,384열·26클래스, train 6,201 / test 2,546, Macro F1. Public LB 0.49598(32차, 팀 최고), 시작 0.415. 쌍둥이 중복 KIPAN↔KIRC 276쌍·GBMLGG↔LGG 173쌍 → 그룹 K-fold(정직 CV 0.5433). 도약 16차 0.456 / 23차 0.475 / 32차 0.496, 혜림 NB 파트너 26차 0.480. 최종 v21 = XGB 4개(.10/.45/.20/.15) + NB .10 → 배율 26개 → 쌍둥이 규칙. 근거: `~/Desktop/oz/final_hakaton/2. team/PORTFOLIO_PROMPT.md`, `FINAL_REPORT_2026-09-18.md` |
| 119 보이는 ARS (firstview) | PM / 기획·데이터 분석, 팀 Everon | 구급 신고 13년간 57% 증가(204만→320만), 강서구 53,988건 1위, 세종시 14,314건 유형 분석. 추천모델 정확도 CPR 83% / 하임리히 99% / 뇌졸중 87% / 화상 87%. 프로토타입 sungmin137.github.io/119-project |
| 난임 임신 성공 예측 AI | 데이터 분석·모델링 | DACON 최종 2위. 25.6만 건, 피처 67→243, ROC-AUC 0.7423 |
| 건강지표 흡연 분석 | 팀 프로젝트 1위 | 12개 지표, t-test · 카이제곱 · ANOVA |

미확인(추정치로 기입되어 있음): 연세대 입학 연도(2020.03 가정), 부트캠프 정확한 기간, 각 프로젝트 기간. 사용자가 확인해 주기 전까지 그대로 둔다.

## 5. 한글 줄바꿈 규칙 (필수 — 모든 페이지 공통)

**규칙: 4글자 이하 어절은 절대 줄 끝에서 끊기지 않게 한다.**

구현은 5개 HTML 모두에 동일하게 들어가 있다:

1. CSS: `word-break: keep-all;` 전역, 제목 `text-wrap: balance;`, 본문 `text-wrap: pretty;`
2. `</body>` 직전 스크립트: 페이지 로드 후 텍스트 노드를 공백 단위로 쪼개 `MAX`(=4) 글자 이하 토큰을 `<span class="nb">`(white-space: nowrap)로 감싼다. 기준 글자 수는 `MAX` 상수 하나로 조정.
3. 스타일 맨 끝에 `span.nb, span.nb-box { all: unset !important; }` 리셋 + 각각에 `white-space: nowrap` 재지정.

**새 페이지를 만들 때는 기존 페이지(예: `project_sanjae_oneshot.html`)에서 이 CSS 블록과 스크립트를 그대로 복사해 넣는다.**

### 이 스크립트 때문에 실제로 겪은 함정

- **flex/grid 부모 안의 텍스트 노드**: 조각들이 각각 flex 아이템이 되어 가로 오버플로가 난다. → 부모 `display`가 flex/grid면 조각 전체를 `<span class="nb-box">` 하나로 감싼다(스크립트에 이미 반영됨).
- **`.foo span { ... }` 같은 하위 span 셀렉터**: 주입된 span이 걸려 스타일이 깨진다. → 새 CSS를 쓸 때 `span` 태그 셀렉터를 쓰지 말고 클래스로 지정한다.
- **nowrap이 되면 flex 아이템이 더 이상 축소되지 않는다**: 모바일 레이아웃이 깨진다. → index.html 네비는 760px 이하 가로 스크롤, `portfolio_seongmin.html`은 860px 이하 사이드바 숨김, `project_infertility_ai.html`은 그리드 자식 `min-width:0` + 테이블 축소로 해결되어 있다. 새 레이아웃을 추가할 때 같은 문제를 확인한다.

## 6. 검증 (커밋 전 필수)

Playwright(headless chromium)로 **390px / 1280px** 두 뷰포트에서 각 페이지를 렌더하고 `document.documentElement.scrollWidth <= window.innerWidth`를 확인한다. 가로 스크롤이 생기면 실패.

```js
// check.mjs 예시
import { chromium } from 'playwright';
const pages = ['index.html','project_sanjae_oneshot.html','project_119_ars.html','project_infertility_ai.html','portfolio_seongmin.html'];
const browser = await chromium.launch();
for (const w of [390, 1280]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const p of pages) {
    await page.goto('file://' + process.cwd() + '/' + p);
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    console.log(w, p, sw <= w ? 'OK' : `OVERFLOW ${sw}`);
  }
}
await browser.close();
```

추가로 4글자 이하 어절이 줄 끝에서 끊긴 곳이 없는지 스크린샷으로 눈으로 확인한다.

## 7. 작업 규칙

- 사실관계·수치는 4절의 표를 기준으로 하고, 새 수치는 사용자가 준 자료에서만 가져온다. 추정값을 만들어 넣지 않는다.
- 톤: 기획자/PM 포트폴리오. 기술 스택 나열보다 "문제 정의 → 데이터로 근거 → 기획·실행 → 결과" 흐름.
- 디자인·색상·폰트는 기존 index.html 스타일을 따른다. 페이지마다 다른 디자인 시스템을 만들지 않는다.
- 이미지는 `img/<프로젝트명>/` 아래에 두고 상대경로로 참조.
- 커밋 메시지는 한국어로 간단히 (예: `산재원샷 상세 페이지 수상 내역 반영`).

## 8. 관련 로컬 자료 (필요 시 사용자에게 요청)

- 이력서 산출물: `자료/AI헬스케어2기_이력서_최성민.{docx,pdf}` (이 폴더 안)
- 기존 이력서 3종: `~/Desktop/자소서 작성/{카카오헬스케어,넛지 헬스케어,네이버}/`
- 119 기획서: `~/Downloads/서비스개발_firstview(119 보이는 ARS)_최성민_1.docx`
- 오즈 부트캠프 자료: `~/Desktop/oz/`, 소방 해커톤: `~/Desktop/대회/소방청 해커톤/`
- KDT 산재원샷 자료: `/Users/mac/Claude/Projects/KDT_ReWork LAB` (바탕화면의 "통합폴더 열기" 항목은 바로가기라 직접 못 읽음)

## 9. 로컬 구동 / 검증 도구 (VS Code)

- 의존성: `npm install` 후 `npx playwright install chromium` (한 번만). `node_modules/`, `shots/`는 git 제외.
- `npm run serve` → http://localhost:5500 정적 서버. VS Code 기본 빌드 작업(⇧⌘B)과 동일.
- `npm run check` → `check.mjs`로 390/1280px 오버플로 검증. VS Code 기본 테스트 작업(⇧⌘P → "Run Test Task")과 동일. 커밋 전 필수.
- `npm run shots` → 검증 + `shots/`에 전체 페이지 스크린샷 저장(4글자 이하 어절 줄바꿈 육안 확인용).
- F5(실행 및 디버그) → 서버 자동 기동 후 Chrome에서 열림. Live Server 확장이 있으면 index.html 우클릭 → "Open with Live Server"도 가능.
