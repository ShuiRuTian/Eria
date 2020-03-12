import ReactDOM from 'react-dom';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { action } from '@storybook/addon-actions';

interface ModalExampleProp{
  buttonLabel?: string;
  className?: string;
}
// (props: ModalExampleProp) => JSX.Element
const ModalExample: FC<ModalExampleProp> = (props: ModalExampleProp) => {
  const { buttonLabel } = props;
  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

  const ButtonB = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  // A new component based on Button, but with some override styles
  const ButtonD = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

  const Component1 = ({ className: classNameTmp }: {
    className?: any;
  }) => (
    <div className={classNameTmp}>
        Wrapper
      <span>
          Inner
      </span>
    </div>
  );

  const StyledComponent1 = styled(Component1)`
  div{
    color: blue;
  };
  span{
    color: red;
  };
  color: palevioletred;
  font-weight: bold;
`;

  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const toggleSortBy = () => { setIsSortByOpen((pre) => !pre); };
  const MyDropDown = ({ className: classNameTmp }: {
    className?: any;
  }) => (
    <div className={classNameTmp}>
      <Dropdown isOpen={isSortByOpen} toggle={toggleSortBy}>
        <DropdownToggle caret color="light">
          <span>Do you hear</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem key="1">choice1</DropdownItem>
          <DropdownItem key="2">choice2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
  const StyledMyDropDown = styled(MyDropDown)`
      .dropdown-toggle{
        width: 75%;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        display: flex;
        align-items: center;
        text-align:left;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .dropdown-toggle:focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6) !important;
      }

      .dropdown-toggle::after{
        float:right;
      }
      .dropdown-toggle span{
        width: 100%;
      }
      .dropdown-menu{
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top:0px;
        width:74%;
      }
      .dropdown-item{
        padding-top: 3px;
        padding-bottom: 3px;
      }
      .dropdown-item:hover{
        background-color: #f5fbff;
      }
      font-size: 14px;
        `;
  return (
    <div>
      {/* <MyDropDown /> */}
      <StyledMyDropDown />
      <ButtonB>Base</ButtonB>
      <ButtonD>Drived</ButtonD>
      <MyButton>Styled Button</MyButton>
      <Button color="danger" onClick={toggle}>
Label:
        {buttonLabel}
, Const:Hello
      </Button>
      <br />
      <Component1 />
      <StyledComponent1 />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
          {' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <ModalExample />;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  name: 'with emoj2i',
};

export const MyDom = () => {
  function clickCallBack1() {
    ReactDOM.render((<span>Hello</span>), document.querySelector('#drilldown-container'));
  }
  function clickCallBack2() {
    const ele = document.querySelector('#drilldown-container');
    if (ele === null) { return; }
    ReactDOM.unmountComponentAtNode(ele);
  }

  return (
    <>
      <Button onClick={clickCallBack1}>Add</Button>
      <Button onClick={clickCallBack2}>Remove</Button>
      <div id="drilldown-container">Container</div>
    </>
  );
};

MyDom.story = {
  name: 'ReactDOM',
};
