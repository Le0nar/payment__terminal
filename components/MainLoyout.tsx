import Head from "next/head";
import { Container, StyledWrapper } from './../styles/MainLoyoutStyles';


export function MainLayout({ children, title = "Терминал оплаты" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <StyledWrapper>{children}</StyledWrapper>
      </Container>
    </>
  );
}
