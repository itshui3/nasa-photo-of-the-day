import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default AsteroidModal;

const StyledButton = styled(Button)`
  width: 100%;
  height: auto;

`;

function AsteroidModal({ast}) {
  const { name, is_potentially_hazardous_asteroid } = ast;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{name}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>

          <h2>Name: {name}</h2>
          <h3>Potentially Hazardous: {is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</h3>

        </ModalBody>

      </Modal>
    </div>
  );
}
