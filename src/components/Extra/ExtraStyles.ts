import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const Image = styled.div`
  width: 50%;

  background: linear-gradient(
      45deg,
      rgba(150, 40, 27, 0.4),
      rgba(207, 0, 15, 0.4)
    ),
    url('/images/2.jpg');

  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const Info = styled.div`
  width: 50%;
  background-image: radial-gradient(
      circle at 40% 91%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 50%,
      rgba(229, 229, 229, 0.04) 50%,
      rgba(229, 229, 229, 0.04) 100%
    ),
    radial-gradient(
      circle at 66% 97%,
      rgba(36, 36, 36, 0.04) 0%,
      rgba(36, 36, 36, 0.04) 50%,
      rgba(46, 46, 46, 0.04) 50%,
      rgba(46, 46, 46, 0.04) 100%
    ),
    radial-gradient(
      circle at 86% 7%,
      rgba(40, 40, 40, 0.04) 0%,
      rgba(40, 40, 40, 0.04) 50%,
      rgba(200, 200, 200, 0.04) 50%,
      rgba(200, 200, 200, 0.04) 100%
    ),
    radial-gradient(
      circle at 15% 16%,
      rgba(99, 99, 99, 0.04) 0%,
      rgba(99, 99, 99, 0.04) 50%,
      rgba(45, 45, 45, 0.04) 50%,
      rgba(45, 45, 45, 0.04) 100%
    ),
    radial-gradient(
      circle at 75% 99%,
      rgba(243, 243, 243, 0.04) 0%,
      rgba(243, 243, 243, 0.04) 50%,
      rgba(37, 37, 37, 0.04) 50%,
      rgba(37, 37, 37, 0.04) 100%
    ),
    linear-gradient(90deg, rgba(150, 40, 27), rgba(207, 0, 15));

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    width: 100%;

    padding: 2rem;
  }
`;

export const SubTitle = styled.h3`
  color: var(--color-white);
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: var(--color-white);
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  color: var(--color-white);
  line-height: 1.5;
`;
