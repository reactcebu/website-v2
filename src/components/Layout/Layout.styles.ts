import styled from "styled-components"

export const LayoutContainer = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
`

export const LayoutContainerMain = styled.div`
  min-height: calc(100vh - 256px);

  padding: 60px 40px;

  h1 {
    font-size: 48px;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 18px;
  }

  @media (min-width: 768px) {
    padding: 60px 40px;
    h1 {
      font-size: 60px;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 64px;
    }
    padding: 60px 20px;
  }

  @media (min-width: 1280px) {
    h1 {
      font-size: 72px;
    }
    padding: 80px 0;
  }
`
