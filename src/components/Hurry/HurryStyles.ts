import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/images/3.jpg');
  background-position: center top;
  height: 30rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 2rem;
`;

export const SubTitle = styled.h3`
  color: var(--color-white-2);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 4rem;
    height: 2px;
    background: var(--color-primary);
    bottom: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Title = styled.div`
  color: var(--color-white);
  text-align: center;
  font-weight: 800;
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.div`
  color: white;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background: var(--color-primary);
  border: none;
  border-radius: 5px;
  transition: all 0.2s;

  text-align: center;
  align-self: center;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  &:hover {
    cursor: pointer;
    background: var(--color-gray);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const CPContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;

  span:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`;
