import styled from 'styled-components'

const LogoContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
min-height: 30px;

`;
const Title = styled.h1`
color: #fff;
`

const Logo = () => {
  return (
    <LogoContainer>
        <Title>BRAND</Title>
    </LogoContainer>
  )
}

export default Logo