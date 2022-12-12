import { memo, ReactElement, ReactNode, SetStateAction, Dispatch, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';

import { PRIMARY_COLORS } from '@util/Constants';

import Button from '@components/Button';
import Text from '@components/Text';

import 'react-toastify/dist/ReactToastify.css';
import OverLay from './OverLay';
import wrapPromise from '@util/wrapPromise';
import { getModalValues } from '@util/Common';

const { offWhite, red, blue, darkGray, lightGray } = PRIMARY_COLORS;

interface WrapperProps {
  ref: any;
}

const Wrapper = styled.div<WrapperProps>`
  width: 50vw;
  left: 21vw;
  position: absolute;
  background-color: ${offWhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 20000000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 10px;

  input {
    width: 100%;
    color: ${darkGray};
    font-family: 'SanSerif';
    font-size: 15px;
    padding: 5px;
    border: 1px solid ${lightGray};
    border-radius: 5px;
    outline: none;
  }

  textarea {
    resize: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding-top: 15px;
  text-align: right;
  justify-content: flex-end;
`;

interface ModalProps {
  modalHeader: string;
  action: Function;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  ref?: MutableRefObject<HTMLElement | undefined>;
}

const Modal = ({ modalHeader, action, setIsModalOpen, children }: ModalProps): ReactElement => {
  const modalWrapper = useRef();

  const handleOnConfirm = (): void => {
    if (modalWrapper.current === undefined) {
      return;
    }
    const inputData = getModalValues(modalWrapper.current);
    wrapPromise(action(inputData, setIsModalOpen));
  };

  return (
    <OverLay setHasModal={setIsModalOpen}>
      <Wrapper ref={modalWrapper}>
        <Text text={modalHeader} fontFamily={'SanSerif'} fontSize={'24px'} fontWeight={'600'} />
        {children}
        <ButtonWrapper>
          <Button
            context={<Text text="취소" color={red} fontWeight={'700'} fontSize={'18px'} />}
            onClick={() => setIsModalOpen(false)}
          />
          <Button
            context={<Text text="확인" color={blue} fontWeight={'700'} fontSize={'18px'} />}
            onClick={handleOnConfirm}
          />
        </ButtonWrapper>
      </Wrapper>
    </OverLay>
  );
};

export default memo(Modal);