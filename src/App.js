import React, { useState } from 'react';
import styled from '@emotion/styled'
import ParliamentList from './components/parliament-list-component';
import MultiSelect from './components/multi-select-component';

const Header = styled.header`
  padding: 50px 10px;
  background-color: #5C5B6A;
  color: #fff;
  text-align: center;
`
const Main = styled.main`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  font-size: 12px;
`

const App = () => {
  const [filteredParties, setFilteredParties] = useState([]);
    return(
      <>
        <Header>
          <h1>
            Partier och medlemmar för Sveriges riksdag
          </h1>
          <MultiSelect setFilteredParties={setFilteredParties} />
        </Header>
        <Main>
          <ParliamentList filteredParties={filteredParties} />
        </Main>
      </>
    );
  };

export default App;
