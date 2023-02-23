import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupLaptopAndUp>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupLaptopAndUp>
        <Logo />
        <ActionGroupVerticalLaptopAndUp>
          <Button>
            Subscribe
          </Button>
          <LogInButton>
            Already a subscriber?
          </LogInButton>
        </ActionGroupVerticalLaptopAndUp>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupLaptopAndUp = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const ActionGroupVerticalLaptopAndUp = styled(ActionGroupLaptopAndUp)`
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-self: end;
`;

const MainHeader = styled(MaxWidthWrapper)`
  --margin-top: 32px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: var(--margin-top);
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    --margin-top: 48px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    --margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const LogInButton = styled.button`
  font-style: italic;
  text-decoration: underline;
  font-size: ${14 / 16}rem;
`;

export default Header;
