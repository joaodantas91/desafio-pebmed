import React from 'react';
import { PaymentData } from '../../components/PaymentData';
import { PlanOffers } from '../../components/PlanOffers';
import { Container } from './styles';

export default function Checkout() {
  return (
    <Container>
      <PaymentData />

      <PlanOffers />
    </Container>
  );
}
