import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
  
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;