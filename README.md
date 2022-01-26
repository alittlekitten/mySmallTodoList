## 🎈CRA로 TodoList 만들기

판사스터디의 라이브코딩 연습 과정 중 이것저것 다양하게 시도하면서 React CRA로 TodoList를 만들었습니다!

<br />

## 🖼사진

![image](https://user-images.githubusercontent.com/14370441/151214032-3190da08-3260-4860-b809-0393ab8074b6.png)

<br />

## 🔑고민한 것

### onClick이벤트에 매개변수 담기

- 요소 삭제를 위해 onClick에 key값을 건네줘서 확인하는 절차를 거쳤습니다.
- 함수를 직접 넣는 대신 익명함수를 사용해서 필요한 매개변수를 전달했습니다.

<br />

### 인라인 스타일

- 인라인으로 스타일을 넣음으로써 조건에 따른 스타일 변경을 구현했습니다.
- 중괄호와 삼항연산자(?)를 통해 구현할 수 있었습니다.
- CSS의 text-decoration은 HTML inline에서는 textDecoration으로 사용할 수 있습니다.

<br />

### 토스트 메시지 띄우기

- 전역에서 onToast함수를 만들고 각 컴포넌트로 props를 전달했습니다.
- onToast함수에서는 toast 상태에 따라 className에 on을 붙임으로써 조건별 스타일을 적용하도록 설정했습니다.
- setTimeout과 clearTimeout, useRef를 이용해서 중복된 이벤트가 처리되지 않도록 만들었습니다.
- toast는 상태메시지를 저장하기 위해, toastOn은 toast의 상태를 관리하기 위해, toastEvent는 setTimeout을 하나의 변수로 처리하기 위하여 사용했습니다.
- 토스트메시지는 transition을 통해 1.5초간 점차 보여졌다가 사라지는 방식으로 동작합니다.

<br />

### 데이터 관리

- form태그를 이용하여 전송 이벤트를 감지하게 하였고, onChange이벤트를 통해서 input태그 내의 내용이 변경될 때마다 감지했습니다.
- addTodo함수 내에서는 form태그의 기본 동작을 막고(preventDefault), input태그 내의 내용은 useRef로 관리했습니다.
- 처음에는 useState를 사용했으나, 매번 input안에 내용을 작성할 때마다 렌더링이 될 필요는 없다고 생각했기 때문에 useRef로 구조를 변경하여 input태그 내의 내용을 관리했습니다.
- List.jsx에서는 삭제와 상태변화를 각각 filter와 map+삼항연산자를 통해서 구현하였습니다.
- 삭제 및 상태변화에 필요한 key값 전달은 onClick이벤트가 발생했을 때 실행되는 콜백함수에 key를 담는 방식으로 해결하였습니다. (위에 서술)
