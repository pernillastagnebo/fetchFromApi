import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const spin = keyframes`
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    } 
`;

const Loader = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    border-top: 2px solid transparent;
    border-left: 2px solid #012D2F;
    border-bottom: 2px solid #1F5B5E;
    border-right: 2px solid #377174;
    margin-right: 10px;
`;

const LoadingAnimation = ({ label }) => {
    return (
        <Wrapper>
            <Loader/>
            {label}
        </Wrapper>
    )

}

LoadingAnimation.propTypes = {
    label: PropTypes.string,
};

export default LoadingAnimation;