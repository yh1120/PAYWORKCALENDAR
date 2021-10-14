<h1 align='middle'>
PAYWORKCALENAR</h1>
<p align='middle'> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/yh1120/PAYWORKCALENDAR?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/yh1120/PAYWORKCALENDAR">

<h2 align='middle'><a href='https://payworkcalendar.netlify.app/'>배포링크</a></h2>

## 📌 프로젝트 소개

### Typescript와 Recoil을 결함합 캘린더

<br/>

## 📑 구현 목록

`이번 달 캘린더 불러오기`

- 화면을 처음 불러오거나 새로고침 할 때, 이번 달 버튼을 누를 때 이번 달 캘린더 불러오기.

<br/>

`캘린더 이동`

- 캘린더 상단의 버튼을 클릭하여 지난 달 혹은 다음 달로 이동.
- 캘린더 내부의 이전 달 혹은 다음 달의 날짜를 클릭시 이동.

<br/>

`오늘 날짜 표시`

- 오늘 날짜를 자동으로 표시하여 확인 가능.

<br/>

`날짜 선택`

- 캘린더의 날짜를 클릭하면 다른 색깔로 클릭한 날짜 표시.
- 같은 날을 한번 더 누르면 표시 해제.
- 이전 달, 다음 달의 날짜를 누르면 이동과 동시에 날짜 표시.

<br/>

`Recoil`

- 현재 년, 월을 저장하는 atomYearMonth, 클릭한 날짜를 저장하는 atomClickedDate.
- atomYearMonth reset으로 이번달로 돌아오기.
- selector로 캘린더에 나타낼 DateList 가져오기.
- selector를 통해 이전 달, 다음 달 기능으로 atomYearMonth 변경.

<br/>

## 💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`

<br/>

## ⚙ 기술 스택

React, TypeScript, styled-components, Recoil
