import React, { ReactElement } from 'react';

import CodeOfConductPage from './CodeOfConductPage';
import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
import styled from 'styled-components';

// 최상위 컨테이너
const Container = styled.div`
  display: flex;
  width: 100vw;
  align-self: stretch;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const MenubarTemp = styled.div`
  height:120px;
  width:100%;
`;

function People(): ReactElement {
  return (
    <Container>

      <MenuBar/>

      <MenubarTemp/>

      <CodeOfConductPage/>

      <Footer/>

    </Container>
  );
}

export default People;