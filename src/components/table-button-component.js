import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  font-weight: 600;
`

const TableButton = ({ label, onClick }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
        >
            {label}
        </Button>
    )

}

TableButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

export default TableButton;