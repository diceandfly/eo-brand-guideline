# Fonts

Founders Grotesk 는 유료 서체라 폰트 파일을 git 에 넣지 않습니다. 이 폴더의 woff2 는 `.gitignore` 로 제외되어 있고, 사이트는 이 폴더에 파일이 있어야 제대로 보입니다.

## 배포 담당자가 할 일
1. 이 저장소를 클론합니다.
2. 아래 6개 파일을 이 폴더(`public/fonts/`)에 그대로 넣습니다. 파일명이 같아야 합니다.
3. `npm install` → `npm run build` 를 실행하면 `dist/` 에 폰트가 포함된 정적 사이트가 만들어집니다. 그 `dist/` 를 배포합니다.

```
founders-grotesk-light.woff2
founders-grotesk-regular.woff2
founders-grotesk-medium.woff2
founders-grotesk-semibold.woff2
founders-grotesk-mono-regular.woff2
founders-grotesk-mono-medium.woff2
```

파일명이 다르면 `src/styles/fonts.css` 의 경로를 같이 고치세요. 폰트 파일과 빌드 결과물(`dist/`)은 공개 저장소에 올리지 마세요.
