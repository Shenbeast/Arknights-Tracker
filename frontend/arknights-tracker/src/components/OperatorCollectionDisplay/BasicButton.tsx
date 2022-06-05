import { Center } from "@chakra-ui/react";
import styled from "styled-components"
import { hoveredButtonColor, unselectedButtonBackgroundColor } from "../../constants"
interface BasicButtonProps {
  border: string;
  height: string;
  width: string;
  onClick: any;
  children: any;
  disabled?: boolean;
}

const Wrapper = styled.button<{$border: string, $width: string, $height: string}> `
  border: ${props => props.$border};
  background-color: ${unselectedButtonBackgroundColor};
  border-radius: 15%;
  padding: 5px;
  &:hover {
    background-color: ${props => props.disabled ? unselectedButtonBackgroundColor : hoveredButtonColor};
  }
  height: ${props => props.$height};
  width: ${props => props.$width};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity: ${props => props.disabled ? 0.3 : 1};
`

const BasicButton = ({border, height, width, onClick, disabled, children}: BasicButtonProps) => {
  return (
    <Wrapper $border={border} $height={height} $width={width} disabled={disabled} onClick={onClick}>
      <Center>
        {children}
      </Center>
    </Wrapper>
  )
}

export default BasicButton