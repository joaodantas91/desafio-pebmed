import { Container, Offer } from './styles';

import React from 'react';

export function PlanOffers({ offers, register, errors, formatter }) {
  return (
    <Container>
      <h2>Confira o seu plano:</h2>
      <p className="UserEmail">fulano@cicrano.com.br</p>

      {errors.offerId && <small>{errors.offerId.message}</small>}

      {offers ? (
        offers.map(e => (
          <Offer key={e.id}>
            <div>
              <h4>
                <span>{e.title}</span> | <span>{e.description}</span>
              </h4>
              <div>
                De {formatter.format(e.fullPrice)} | Por{' '}
                {formatter.format(e.fullPrice - e.discountAmmount)}{' '}
                <span className="Disccount">
                  -{(e.discountAmmount / e.fullPrice).toFixed(2)}%
                </span>
              </div>

              <div className="Installments">
                {e.installments}x de{' '}
                {formatter.format(
                  (e.fullPrice - e.discountAmmount) / e.installments,
                )}
                /mês
              </div>
            </div>

            <input
              type="radio"
              name="offer"
              value={e.id}
              {...register('offerId', {
                required: '*Este campo é obrigatório',
              })}
            />
          </Offer>
        ))
      ) : (
        <h2>a</h2>
      )}
    </Container>
  );
}
