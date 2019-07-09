import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li `
    &:not(:last-child) {
        margin-right: 16px;
    }
`;

const Link = styled.a `
    color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
    color: ${props => props.theme.darkGrayColor};
`;

export default () => (
    <Footer>
    <List>
      <ListItem>
        <Link href="#">NISEGRAMについて</Link>
      </ListItem>
      <ListItem>
        <Link href="#">サポート</Link>
      </ListItem>
      <ListItem>
        <Link href="#">プレス</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">求人</Link>
      </ListItem>
      <ListItem>
        <Link href="#">プライバシー</Link>
      </ListItem>
      <ListItem>
        <Link href="#">利用規約</Link>
      </ListItem>
      <ListItem>
        <Link href="#">ディレクトリ</Link>
      </ListItem>
      <ListItem>
        <Link href="#">プロフィール</Link>
      </ListItem>
      <ListItem>
        <Link href="#">ハッシュタグ</Link>
      </ListItem>
      <ListItem>
        <Link href="#">言語</Link>
      </ListItem>
    </List>
    <Copyright>&copy; {new Date().getFullYear()} NISEGRAM</Copyright>
  </Footer>
);