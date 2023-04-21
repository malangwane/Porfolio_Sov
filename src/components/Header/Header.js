import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import {HeaderContainer, Div1, Div2, NavLink} from './HeaderStyles';

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer sticky>
      {route === '/' ? (
        <Div1>
          <span style={{display: 'flex', alignItems: 'center'}}>
            WISEMAN
          </span>
        </Div1>
      ) : (
        <Div1>
          <Link href='/'>
            <a style={{display: 'flex', alignItems: 'center'}}>
              @Wiseman
            </a>
          </Link>
        </Div1>
      )
      }
      <Div2>
        <li>
          <Link href={ '#about'}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href={ '#tech'}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
