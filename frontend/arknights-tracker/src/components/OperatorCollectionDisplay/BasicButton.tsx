import { Center } from "@chakra-ui/react";
import styled from "styled-components"
import { hoveredButtonColor, unselectedButtonBackgroundColor } from "../../constants"
interface BasicButtonProps {
  border: string;
  height: string;
  width: string;
  onClick: any;
  children: any;
  enabledOpacity?: number | undefined;
  disabled?: boolean;
}

const Wrapper = styled.button<{$border: string, $width: string, $height: string, $enabledOpacity: number | undefined}> `
  border: ${props => props.$border};
  background-color: ${unselectedButtonBackgroundColor};
  border-radius: 15%;
  padding: 5px;
  &:hover {
    background-color: ${props => props.disabled ? unselectedButtonBackgroundColor : hoveredButtonColor};
    opacity:  ${props => props.disabled ? 0.3 : 1.0};
  }
  height: ${props => props.$height};
  width: ${props => props.$width};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity: ${props => props.disabled ? 0.3 : typeof(props.$enabledOpacity) === "number" ? props.$enabledOpacity: 1.0};
`

const BasicButton = ({border, height, width, enabledOpacity, onClick, disabled, children}: BasicButtonProps) => {
  return (
    <Wrapper $border={border} $height={height} $width={width} $enabledOpacity={enabledOpacity} disabled={disabled} onClick={onClick}>
      <Center>
        {children}
      </Center>
    </Wrapper>
  )
}

export default BasicButton