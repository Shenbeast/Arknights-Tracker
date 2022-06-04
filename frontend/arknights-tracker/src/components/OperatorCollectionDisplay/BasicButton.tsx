import { Center } from "@chakra-ui/react";
import styled from "styled-components"
import { hoveredButtonColor, unselectedButtonBackgroundColor } from "../../constants"
interface BasicButtonProps {
  border: string;
  height: string;
  width: string;
  onClick: any;
  children: any;
}

const Wrapper = styled.button<{$border: string, $width: string, $height: string}> `
  border: ${props => props.$border};
  background-color: ${unselectedButtonBackgroundColor};
  border-radius: 15%;
  padding: 5px;
  &:hover {
    background-color: ${hoveredButtonColor};
  }
  height: ${props => props.$height};
  width: ${props => props.$width};
`

const BasicButton = ({border, height, width, onClick, children}: BasicButtonProps) => {
  return (
    <Wrapper $border={border} $height={height} $width={width} onClick={onClick}>
      <Center>
        {children}
      </Center>
    </Wrapper>
  )
}

export default BasicButton