# SUBSET_FONT_CONVERTER

특정 문자만 포함된 **서브셋 폰트(.woff2)** 파일을 생성하여 **용량을 최적화**하는 간단한 CLI 도구입니다.

## 📦 기능

- 불필요한 글리프 제거
- `glyphs.txt` 파일에 정의된 문자만 포함하여 폰트 서브셋 생성
- 가변 폰트 축(`wght`) 범위 설정 가능
- `.ttf` `.otf` → `.woff2` 형식 변환

## 🚀 사용 방법

```bash
npm run convert
```

이 명령어는 다음을 수행합니다:

> 예시로 사용한 폰트는 FreesentationVF.ttf 입니다.

1. `./src/FreesentationVF.ttf` 원본 폰트를 읽고
2. `./src/glyphs.txt`에 정의된 문자만 포함한 서브셋 폰트를 생성한 후
3. 결과 파일 `./src/converted.woff2`로 저장합니다

예시 폰트를 바꾸어서 변환을 하시면 됩니다.
**폰트의 라이센스를 확인하신 후, 수정이 가능한 폰트에 한해 변환하시는 것을 권장드립니다.**

## 📂 폴더 구조

```
src/
├── FreesentationVF.ttf     # 예제 폰트
├── glyphs.txt              # 포함할 문자 정의
└── converted.woff2     # 출력될 폰트
```

## ⚙️ 설정 옵션

```ts
subsetFont(src, chars, {
  targetFormat: "woff2",
  variationAxes: {
    wght: { min: 100, max: 900 },
  },
});
```

- `targetFormat`: 출력 형식 (`woff2`, `woff`, `ttf` 등)
- `variationAxes`: 가변 폰트 지원 시 축 범위 설정

## 📌 필요 패키지

- [`subset-font`](https://www.npmjs.com/package/subset-font)
- Node.js 18+

## 예시 폰트

- [Freesentation](https://freesentation.blog/)
