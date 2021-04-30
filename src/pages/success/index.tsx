import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Container } from './styles';

export default function Success() {
  const router = useRouter();
  console.log(router.query);

  return (
    <Container>
      <h2>Parabéns!</h2>
      <p>Sua assinatura foi realizada com sucesso.</p>
      <div className="card">
        <span>{router.query.title}</span> |{' '}
        <span>{router.query.description}</span>
      </div>
    </Container>
  );
}
