import { Hearts } from 'react-loader-spinner';

import { Container, Link } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <h1>It's Phonebook application!</h1>
      <p>
        <Link to="/register">Register</Link> or{' '}
        <Link to="/login">Login</Link> if you already have an account.
      </p>
      <Hearts
        height="100"
        width="100"
        color="rgba(191, 122, 158, 0.8)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

export default Home;
