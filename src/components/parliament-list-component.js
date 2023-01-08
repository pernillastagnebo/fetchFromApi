import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LoadingAnimation from './loading-component';
import ParliamentTable from './parliament-table-component';
import NoParties from './no-parties-component';

const handleFilterMembersByParty = (members, filteredParties) => {
  return members.filter(x => filteredParties.includes(x.parti));
}

const handleSortMembers = (members, column) => {
  if(column !== null) {
    members.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }
  return members;
}

const ParliamentList = ({filteredParties}) => {
  const [members, setMembers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState('parti');
  const [sortedMembers, setSortedMembers] = useState({});
  
  useEffect(() => {
    fetchMembers();
  },[]);

  useEffect(() => {
    if(members.length > 0){
      let sort = handleFilterMembersByParty(members, filteredParties);
      sort = handleSortMembers(sort, sortColumn);
      setSortedMembers(sort);
      setIsLoading(false);
    }
  },[members, sortColumn, setSortedMembers, filteredParties]);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(`https://data.riksdagen.se/personlista/?utformat=json`);
      setMembers(res.data.personlista.person);     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading ? (<LoadingAnimation label="Laddar in representanter..." />) : sortedMembers.length > 0 ? (
        <ParliamentTable data={sortedMembers} onSort={setSortColumn} />
      ) : <NoParties />}
    </>
  );
};

ParliamentList.propTypes = {
  filteredParties: PropTypes.array,
};

export default ParliamentList;
