import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media (max-width: 1000px) {
    padding: 10px 40px;
  }

  @media (max-width: 600px) {
    padding: 5px 20px;
  }
`;
