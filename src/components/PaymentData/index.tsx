import { Container } from './styles';
import Image from 'next/image';
import { useState } from 'react';

export function PaymentData({ offers, register, errors }) {
  return (
    <Container>
      <h2>Estamos quase lá!</h2>
      <p>Insira seus dados de pagamento abaixo:</p>

      <div className="FlagsWrapper">
        <div>
          <Image
            src="/img/flag1.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag2.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag3.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag4.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag5.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="iugu">
        Pagamentos por
        <div>
          <Image src="/img/iugu.png" layout="fill" objectFit="contain" />
        </div>
      </div>

      <label>
        <div>
          Número do Cartão{' '}
          {errors.creditCardNumber && (
            <small>{errors.creditCardNumber.message}</small>
          )}
        </div>
        <input
          {...register('creditCardNumber', {
            required: '*Este campo é obrigatório',
            minLength: {
              value: 13,
              message: 'Número de caracteres inválidos',
            },
            maxLength: {
              value: 19,
              message: 'Número de caracteres inválidos',
            },
          })}
          type="text"
          placeholder="0000 0000 0000 0000"
        />
      </label>

      <div className="InputGroup">
        <label>
          <div>
            Validade{' '}
            {errors.creditCardExpirationDate && (
              <small>{errors.creditCardExpirationDate.message}</small>
            )}
          </div>
          <input
            {...register('creditCardExpirationDate', {
              required: '*Este campo é obrigatório',
              maxLength: {
                value: 4,
                message: 'Número de caracteres inválidos',
              },
            })}
            type="number"
            placeholder="MM/AA"
          />
        </label>

        <label>
          <div>
            CVV{' '}
            {errors.creditCardCVV && (
              <small>{errors.creditCardCVV.message}</small>
            )}
          </div>
          <input
            type="tel"
            {...register('creditCardCVV', {
              required: '*Este campo é obrigatório',
              minLength: {
                value: 3,
                message: 'Número de caracteres inválidos',
              },
              maxLength: {
                value: 3,
                message: 'Número de caracteres inválidos',
              },
            })}
            placeholder="000"
          />
        </label>
      </div>

      <label>
        <div>
          Nome impresso no cartão{' '}
          {errors.creditCardHolder && (
            <small>{errors.creditCardHolder.message}</small>
          )}
        </div>
        <input
          type="text"
          {...register('creditCardHolder', {
            required: '*Este campo é obrigatório',
          })}
          placeholder="Seu nome"
        />
      </label>

      <label>
        <div>
          CPF{' '}
          {errors.creditCardCPF && (
            <small>{errors.creditCardCPF.message}</small>
          )}
        </div>
        <input
          type="string"
          {...register('creditCardCPF', {
            required: '*Este campo é obrigatório',
            minLength: {
              value: 11,
              message: 'Número de caracteres inválidos',
            },
            maxLength: {
              value: 14,
              message: 'Número de caracteres inválidos',
            },
          })}
          placeholder="000.000.000-00"
        />
      </label>

      <label>
        Cupom
        <input
          type="text"
          {...register('couponCode', { required: false })}
          placeholder="Insira aqui"
        />
      </label>

      <label>
        <div>
          Número de parcelas{' '}
          {errors.creditCardCPF && (
            <small>{errors.creditCardCPF.message}</small>
          )}
        </div>
        <select
          {...register('installments', {
            required: '*Este campo é obrigatório',
          })}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </label>

      <button type="submit">Finalizar pagamento</button>
    </Container>
  );
}
