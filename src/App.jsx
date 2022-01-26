import "./App.css";
import Input from "./Input.jsx";
import List from "./List.jsx";
import Error from "./Error.jsx";
import { useState, useRef } from "react";

const App = () => {
  /* 1. App에 전역으로 객체를 담는 배열을 만든다 - 이것이 List에 들어가서 출력됨
    2. todos에 할 일을 넣어주는 addTodos 함수를 만들어서 Input으로 보낸다 ㅇ
    3. Input에서는 input태그에 적히는 내용을 onChange로 감시하다가 변경될때마다 todo 상태를 setTodo로 바꿔준다
    4. 엔터나 제출버튼을 누르면 addTodo 함수에 의해 App의 todos 객체에 새로운 요소가 들어간다
    5. todos에 할 일을 삭제하는 deleteTodos 함수를 만들어서 List로 보낸다
    6. List에서는 todos에 들어간 요소들을 출력한다. (todos도 List에 전달한다)
      - 출력할 때 옆에 각 num에 삭제버튼을 달아주어서 삭제작업이 이루어질 수 있도록 구현한다.
      - 체크박스도 넣고 num과 연결한다.
    7. todos에는 key값으로 num(번호), what(할일), done(완료, 미완료)가 들어가게 된다
      - num은 겹치지 않는 난수여야 하는데.. 별도의 변수를 하나 만들고 1씩 추가하면서 key값을 설정하는 식으로 임시대처한다 (원래라면 해시값..)
    8. 엔터키를 눌렀을 때 input창에 아무것도 없으면 오류를 출력한다
    9. 잘 추가됐으면 추가, 삭제했으면 삭제를 창에 3초간 띄웠다가 없앤다.
  */
  const [todos, setTodos] = useState([]);
  const [toast, setToast] = useState("");
  const [toastOn, setToastOn] = useState(false);
  const hash = useRef(0);
  const toastEvent = useRef();

  const onToast = () => {
    clearTimeout(toastEvent.current);
    setToastOn(true);
    toastEvent.current = setTimeout(() => {
      setToastOn(false);
    }, 1500);
  };

  return (
    <div className="App">
      <h2>TodoList</h2>
      <Input
        todos={todos}
        setTodos={setTodos}
        setToast={setToast}
        onToast={onToast}
        hash={hash}
      />
      <List
        todos={todos}
        setTodos={setTodos}
        setToast={setToast}
        onToast={onToast}
      />
      <Error toast={toast} toastOn={toastOn} />
    </div>
  );
};

export default App;
