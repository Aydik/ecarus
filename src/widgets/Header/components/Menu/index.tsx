import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Menu: FC<Props> = ({ isOpened, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div></div>
    </Modal>
  );
};
