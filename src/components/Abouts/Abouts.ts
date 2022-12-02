import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

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
    url('/images/1.jpg');

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
    linear-gradient(90deg, white, white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  gap: 1.5rem;
  @media (max-width: 480px) {
    align-items: center;
  }

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
`;

export const Text = styled.p`
  color: var(--color-white);
  line-height: 1.5;
`;

export const InfoTitle = styled.h1`
  font-size: 3rem;
  color: var(--color-primary-dark);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const InfoText = styled.div`
  color: var(--color-gray);
  font-size: 1.1rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
  }

  &:nth-child(1) {
    margin-bottom: 0.5rem;
  }

  span:nth-child(1) {
    color: var(--color-primary);
  }

  span:nth-child(2) {
    font-weight: 700;
  }

  span:nth-child(3) {
    margin-left: 0.1rem;
    font-weight: 400;
  }
`;

export const Button = styled(LinkScroll)`
  color: white;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background: var(--color-primary);
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  width: 10rem;
  text-align: center;
  &:hover {
    cursor: pointer;
    background: var(--color-primary-dark);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CardNumber = styled.div`
  position: absolute;
  bottom: -2.5rem;
  right: -2.5rem;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: var(--color-primary);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  transition: transform 0.8s;
  * {
    position: absolute;
    bottom: 3.2rem;
    right: 3.5rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #1c1c24;
  z-index: 1;
  transition: color 0.5s;
`;

export const CardText = styled.p`
  color: var(--color-gray);
  z-index: 1;
  transition: color 0.5s;
`;

export const CardIcon = styled.div`
  font-size: 4rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: var(--color-gray-light);
  z-index: 1;
  transition: color 0.5s;
`;

export const Card = styled.div`
  padding: 40px;
  max-width: 350px;
  height: 200px;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  &:hover ${CardNumber} {
    transform: scale(8);
  }
  &:hover ${CardTitle} {
    color: var(--color-white);
  }
  &:hover ${CardText} {
    color: var(--color-white);
  }
  &:hover ${CardIcon} {
    color: var(--color-white);
  }
`;
