## ๐CRA๋ก TodoList ๋ง๋ค๊ธฐ

**์ต์  ์๋ฐ์ดํธ ๋ ์ง : `2022.02.07`**

- [ํ์ฌ์คํฐ๋](https://github.com/BoostUpStudy/PangyoHunter)์ ๋ผ์ด๋ธ์ฝ๋ฉ ์ฐ์ต ๊ณผ์  ์ค ์ด๊ฒ์ ๊ฒ ๋ค์ํ๊ฒ ์๋ํ๋ฉด์ React CRA๋ก TodoList๋ฅผ ๋ง๋ค์์ต๋๋ค!
- [๋ฌธ์  ์กฐ๊ฑด](https://jealous-seaplane-c2f.notion.site/To-do-list-0ba2e16ad2604559a93ccab33f174beb)์ ๋งํฌ๋ก ๋ฌ์์ต๋๋ค :)

## ๐ ๋ฐฐํฌ ํ์ด์ง
[๐ ๋ฐ๋ก๊ฐ๊ธฐ](https://alittlekitten.github.io/mySmallTodoList/)

<br />

## ๐ง ๊ธฐ์ ์คํ

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Create_React_App-09D3AC?style=flat-square&logo=Create+React+App&logoColor=white"/>
</div>

<br />

## ๐ผ์ฌ์ง

![image](https://user-images.githubusercontent.com/14370441/151214032-3190da08-3260-4860-b809-0393ab8074b6.png)

<br />

## ๐๊ณ ๋ฏผํ ๊ฒ

### onClick์ด๋ฒคํธ์ ๋งค๊ฐ๋ณ์ ๋ด๊ธฐ

- ์์ ์ญ์ ๋ฅผ ์ํด onClick์ key๊ฐ์ ๊ฑด๋ค์ค์ ํ์ธํ๋ ์ ์ฐจ๋ฅผ ๊ฑฐ์ณค์ต๋๋ค.
- ํจ์๋ฅผ ์ง์  ๋ฃ๋ ๋์  ์ต๋ชํจ์๋ฅผ ์ฌ์ฉํด์ ํ์ํ ๋งค๊ฐ๋ณ์๋ฅผ ์ ๋ฌํ์ต๋๋ค.

<br />

### ์ธ๋ผ์ธ ์คํ์ผ

- ์ธ๋ผ์ธ์ผ๋ก ์คํ์ผ์ ๋ฃ์์ผ๋ก์จ ์กฐ๊ฑด์ ๋ฐ๋ฅธ ์คํ์ผ ๋ณ๊ฒฝ์ ๊ตฌํํ์ต๋๋ค.
- ์ค๊ดํธ์ ์ผํญ์ฐ์ฐ์(?)๋ฅผ ํตํด ๊ตฌํํ  ์ ์์์ต๋๋ค.
- CSS์ text-decoration์ HTML inline์์๋ textDecoration์ผ๋ก ์ฌ์ฉํ  ์ ์์ต๋๋ค.

<br />

### ํ ์คํธ ๋ฉ์์ง ๋์ฐ๊ธฐ

- ์ ์ญ์์ onToastํจ์๋ฅผ ๋ง๋ค๊ณ  ๊ฐ ์ปดํฌ๋ํธ๋ก props๋ฅผ ์ ๋ฌํ์ต๋๋ค.
- onToastํจ์์์๋ toast ์ํ์ ๋ฐ๋ผ className์ on์ ๋ถ์์ผ๋ก์จ ์กฐ๊ฑด๋ณ ์คํ์ผ์ ์ ์ฉํ๋๋ก ์ค์ ํ์ต๋๋ค.
- setTimeout๊ณผ clearTimeout, useRef๋ฅผ ์ด์ฉํด์ ์ค๋ณต๋ ์ด๋ฒคํธ๊ฐ ์ฒ๋ฆฌ๋์ง ์๋๋ก ๋ง๋ค์์ต๋๋ค.
- toast๋ ์ํ๋ฉ์์ง๋ฅผ ์ ์ฅํ๊ธฐ ์ํด, toastOn์ toast์ ์ํ๋ฅผ ๊ด๋ฆฌํ๊ธฐ ์ํด, toastEvent๋ setTimeout์ ํ๋์ ๋ณ์๋ก ์ฒ๋ฆฌํ๊ธฐ ์ํ์ฌ ์ฌ์ฉํ์ต๋๋ค.
- ํ ์คํธ๋ฉ์์ง๋ transition์ ํตํด 1.5์ด๊ฐ ์ ์ฐจ ๋ณด์ฌ์ก๋ค๊ฐ ์ฌ๋ผ์ง๋ ๋ฐฉ์์ผ๋ก ๋์ํฉ๋๋ค.
- 3์ด๊ฐ ๋๋ฌด ๊ธธ์ด์ 1.5์ด๋ก ์ค์์ต๋๋ค...

<br />

### ๋ฐ์ดํฐ ๊ด๋ฆฌ

- formํ๊ทธ๋ฅผ ์ด์ฉํ์ฌ ์ ์ก ์ด๋ฒคํธ๋ฅผ ๊ฐ์งํ๊ฒ ํ์๊ณ , onChange์ด๋ฒคํธ๋ฅผ ํตํด์ inputํ๊ทธ ๋ด์ ๋ด์ฉ์ด ๋ณ๊ฒฝ๋  ๋๋ง๋ค ๊ฐ์งํ์ต๋๋ค.
- addTodoํจ์ ๋ด์์๋ formํ๊ทธ์ ๊ธฐ๋ณธ ๋์์ ๋ง๊ณ (preventDefault), inputํ๊ทธ ๋ด์ ๋ด์ฉ์ useRef๋ก ๊ด๋ฆฌํ์ต๋๋ค.
- ์ฒ์์๋ useState๋ฅผ ์ฌ์ฉํ์ผ๋, ๋งค๋ฒ input์์ ๋ด์ฉ์ ์์ฑํ  ๋๋ง๋ค ๋ ๋๋ง์ด ๋  ํ์๋ ์๋ค๊ณ  ์๊ฐํ๊ธฐ ๋๋ฌธ์ useRef๋ก ๊ตฌ์กฐ๋ฅผ ๋ณ๊ฒฝํ์ฌ inputํ๊ทธ ๋ด์ ๋ด์ฉ์ ๊ด๋ฆฌํ์ต๋๋ค.
- List.jsx์์๋ ์ญ์ ์ ์ํ๋ณํ๋ฅผ ๊ฐ๊ฐ filter์ map+์ผํญ์ฐ์ฐ์๋ฅผ ํตํด์ ๊ตฌํํ์์ต๋๋ค.
- ์ญ์  ๋ฐ ์ํ๋ณํ์ ํ์ํ key๊ฐ ์ ๋ฌ์ onClick์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๋ ์คํ๋๋ ์ฝ๋ฐฑํจ์์ key๋ฅผ ๋ด๋ ๋ฐฉ์์ผ๋ก ํด๊ฒฐํ์์ต๋๋ค. (์์ ์์ )
