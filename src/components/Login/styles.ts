import styled from 'styled-components'

import { Props } from '.'

export const LoginContainer = styled.div`
  max-width: 432px;
  width: 100%;
  margin: 80px auto;
  border-radiur: 16px;
  padding: 32px;
  padding-top: 8px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 16px;
  }
`

export const LoginForm = styled.form`
  max-width: 396px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  button {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #dddfe2;
    //background-color: #74b9ff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #add5ff;
    }
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 12px;
  padding: 16px;
  padding-right: 30px; /* Espaço para o ícone */
  border: 1px solid #dddfe2;
  border-radius: 6px;
  outline: none;
`

export const PasswordToggleIcon = styled.div<Props>`
  position: absolute;
  top: 50%;
  right: 10px;
  bottom: 0px;
  transform: translateY(-50%);
  cursor: pointer;
  display: ${(props) => (props.showIconPsw ? 'block' : 'none')};
`
