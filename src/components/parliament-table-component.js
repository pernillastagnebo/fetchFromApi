import React from 'react';
import PropTypes from 'prop-types';
import TableButton from './table-button-component';
import styled from '@emotion/styled'

const ListRow = styled.tr`
  text-align: left;
  border-bottom: 5px solid red;
`
const ListHeaderItem = styled.th`
  padding: 10px;
  font-size: 12px;
`
const ListItem = styled.td`
  padding: 10px;
  font-size: 12px;
`

const ParliamentTable = ({ data, onSort }) => {
  return (
    <table>
        <thead>
            <ListRow>
                <ListHeaderItem>
                <TableButton
                    label='Parti'
                    onClick={() => onSort('parti')}
                />
                </ListHeaderItem>
                <ListHeaderItem>
                <TableButton
                    label='Namn'
                    onClick={() => onSort('tilltalsnamn')}
                />
                </ListHeaderItem>
                <ListHeaderItem>
                <TableButton
                    label='Status'
                    onClick={() => onSort('status')}
                />
                </ListHeaderItem>
                <ListHeaderItem>
                <TableButton
                    label='Valkrets'
                    onClick={() => onSort('valkrets')}
                />
                </ListHeaderItem>
            </ListRow>
        </thead>
        <tbody>
        {data.map((x, index) => (
            <ListRow key={index}>
            <ListItem>{x.parti}</ListItem>
            <ListItem>{`${x.tilltalsnamn} ${x.efternamn}`}</ListItem>
            <ListItem>{x.status}</ListItem>
            <ListItem>{x.valkrets}</ListItem>
            </ListRow>
        ))}
        </tbody>
    </table>
  );
};

TableButton.propTypes = {
  data: PropTypes.array,
  onSort: PropTypes.func,
};

export default ParliamentTable;
