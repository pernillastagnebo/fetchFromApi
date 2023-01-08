import React from 'react';
import Select from 'react-select';
import clogo from '../images/centerpartiet-logo.jpeg';
import kdlogo from '../images/kristdemokraterna-logo.jpeg';
import llogo from '../images/liberalerna-logo.jpeg';
import mlogo from '../images/moderaterna-logo.jpeg';
import mplogo from '../images/miljopartiet-logo.jpeg';
import slogo from '../images/socialdemokraterna-logo.jpeg';
import sdlogo from '../images/sverigedemokraterna-logo.jpeg';
import vlogo from '../images/vansterpartiet-logo.jpeg';

const getSelectStyles = () => {
    return {
        placeholder: provided => ({
            ...provided,
            textAlign: 'left',
        }),
        menu: provided => ({
            ...provided,
            color: "#000",
            textAlign: "left"
        }),
        multiValue: provided => ({
            ...provided,
            backgroundColor: 'transparent',
        }),
        multiValueRemove: provided => ({
            ...provided,
            color: '#5C5B6A',
        }),
    };
};

const parties = [
    { value: 'C', label: 'Centerpartiet', image: clogo },
    { value: 'KD', label: 'Kristdemokraterna', image: kdlogo },
    { value: 'L', label: 'Liberalerna', image: llogo },
    { value: 'M', label: 'Moderaterna', image: mlogo },
    { value: 'MP', label: 'Miljöpartiet', image: mplogo },
    { value: 'S', label: 'Socialdemokraterna', image: slogo },
    { value: 'SD', label: 'Sverigedemokraterna', image: sdlogo },
    { value: 'V', label: 'Vänsterpartiet', image: vlogo },
];

const MultiSelect = ({ setFilteredParties }) => (
  <Select
    formatOptionLabel={party => (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={party.image} alt="party logo" width="30" height="30"/>
            <span style={{ marginLeft: '10px'}}>{party.label}</span>
        </div>
    )}
    isMulti
    name="parties"
    onChange={selectedParties => setFilteredParties(selectedParties.map(x => x.value))}
    options={parties}
    placeholder="Välj parti"
    styles={getSelectStyles()}
  />
);

export default MultiSelect;