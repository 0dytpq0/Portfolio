# Joseph의 포트폴리오

## 안녕하세요, Joseph입니다 👋

제 개인 포트폴리오 웹사이트에 오신 것을 환영합니다! 이곳에서 저의 프로젝트, 기술 및 개발자로서의 여정을 소개합니다. 현대적인 기술과 아름다운 애니메이션으로 구축된 이 사이트는 제 기술적 능력과 창의적 비전을 모두 보여줍니다.

## 기술 스택

- **프레임워크**: [Next.js](https://nextjs.org) - 프로덕션용 React 프레임워크
- **애니메이션**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - 부드럽고 인상적인 애니메이션 구현
- **스타일링**: 반응형 디자인 원칙을 적용한 현대적인 CSS
- **배포**: [Vercel](https://vercel.com)

## 구현 목록

- GSAP을 활용한 네온사인 텍스트 및 메뉴 애니메이션 구현
- FSD 아키텍처 기반 폴더 구조 설계 및 UI/로직 분리
- 스냅 스크롤, 부드러운 섹션 이동, 반응형 웹 구현
- 서버 컴포넌트/클라이언트 컴포넌트 분리 및 타입 안전성 개선
-

## 기술적 의사결정

- **GSAP**: 복잡하고 정교한 네온 애니메이션 및 텍스트 효과 구현에 최적, 커스텀 훅 분리로 재사용성/유지보수성 향상
- **FSD(Feature-Sliced Design)**: UI/비즈니스 로직/데이터 계층 분리, 유지보수성/확장성 확보
- **Next.js App Router**: 서버/클라이언트 컴포넌트 분리, SSR/CSR 유연 적용, SEO/성능 최적화
- **Tailwind CSS**: 빠른 스타일링, 네온/글레이즈 UI, 반응형/다크모드 지원

## 트러블슈팅 & 문제 해결

- **GSAP 네온 애니메이션 구현**: 글자별 ref, useGSAP/react 활용로 flicker 효과 완성
- **FSD 아키텍처 적용**: 레이어 구분, 공통 컴포넌트화
- **서버 컴포넌트 params 타입 문제**: Promise<{ name: string }>로 수정
- **프로젝트 페이지 라우팅 시 스크롤 위치 고정**: GSAP ScrollTo 플러그인, 계산식 활용

## 배포 및 링크

- GitHub: [https://github.com/0dytpq0/portfolio](https://github.com/0dytpq0/portfolio)
- 배포 주소: [https://joseph-portfolio-eosin.vercel.app](https://joseph-portfolio-eosin.vercel.app)
- Notion: [https://skitter-tv-990.notion.site/Portfolio-1fef8391d64180c1b95fec84c8cb5a01?pvs=73](https://skitter-tv-990.notion.site/Portfolio-1fef8391d64180c1b95fec84c8cb5a01?pvs=73)
