import Link from 'next/link';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link href="checkout">
        <div className="LinkBack"> teste</div>
      </Link>

      <img className="Brand" src="" alt="w" />
    </Container>
  );
}

export default Header;
