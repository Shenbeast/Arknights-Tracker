import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from "@chakra-ui/react"
import { char_data } from "../assets/char_data";
import { cleanOperatorString } from "../utils";
import OperatorClassImage from "./OperatorClassImage";
import OperatorImage from "./OperatorImage";

interface OperatorViewProps {
  isOpen: boolean,
  onClose: () => void,
  operator: string,
  setSelectedOperator: React.Dispatch<React.SetStateAction<string>>;
}
const OperatorView = ({operator, isOpen, onClose, setSelectedOperator} : OperatorViewProps) => {
  const operatorData = char_data[operator]
  const handleClose = () => {
    onClose()
    setSelectedOperator("")
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent mt={[0, 350]}>
          <ModalHeader>
            <Flex>
              {operatorData?.name}
              <OperatorImage id={operator} name={operatorData?.name}/>
            </Flex>
          
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <p>{cleanOperatorString(operatorData?.description)}</p>
              <p>{operatorData?.position}</p>
              <p>{operatorData?.profession}</p>
              <OperatorClassImage className={operatorData?.profession}/>
            </Box>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default OperatorView