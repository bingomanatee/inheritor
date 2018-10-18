import styled from 'styled-components';


export default styled.div`margin: 1rem;
padding: 1rem;
background-color: ${props => props.bg || 'white'};
border: 2px solid ${props => props.color || 'black'}`;
