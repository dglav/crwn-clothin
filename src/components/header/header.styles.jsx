import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  align-items: center;
`;

// For attaching styles to a component
export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

// It's possible to share styles amongst different tags by defining the styles separately and importing them like so
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
