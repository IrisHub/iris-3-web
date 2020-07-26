import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';

const CaseLine = styled.div`
    font-weight: normal;
    font-family: DM Sans;
    text-align: left;
    font-size: 24px;
    line-height: 34px;

    margin-top: 1em;
    margin-bottom: 1.5em;

    @media (max-width: 800px) {
       margin-left: 7vw;
       margin-right: 7vw;
        
      }

      @media (max-width: 500px) {
      font-size: 18px;
      line-height: 1.8;
         
       }

`;

const Line = ( {text, color} ) => {
  return(

    <CaseLine > {text} </CaseLine>
  )
}

export default Line;
