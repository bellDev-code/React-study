import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;

const App = () => {
  // "count"라는 새 상태 변수를 선언합니다.
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Container>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!!</button>
    </Container>
  );
};

export default App;
