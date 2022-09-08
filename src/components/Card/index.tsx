import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h3>Digite seus dados para doação</h3>
          <h3>cpf: {dados.cpf}</h3>
          <h3>Número do cartão: {dados.numero_cartao}</h3>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
