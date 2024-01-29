import { FormEvent, useState } from 'react'
import * as S from './styles'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useLoginMutation } from '../../services/api'

export type Props = {
  showIconPsw: boolean
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [login, { data, isLoading, isSuccess }] = useLoginMutation()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const authenticate = (e: FormEvent) => {
    e.preventDefault()
    console.log('Autenticar')
    console.log('email: ' + email)
    console.log('senha: ' + password)

    login({
      username: email,
      password: password
    })
  }

  return (
    <S.LoginContainer>
      <h2>React Auth</h2>
      <S.LoginForm onSubmit={authenticate}>
        <S.Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></S.Input>
        <S.InputContainer>
          <S.Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></S.Input>
          <S.PasswordToggleIcon
            showIconPsw={password.length > 0}
            onClick={handleTogglePassword}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </S.PasswordToggleIcon>
        </S.InputContainer>
        <button type="submit">Acessar</button>
      </S.LoginForm>
    </S.LoginContainer>
  )
}

export default Login
