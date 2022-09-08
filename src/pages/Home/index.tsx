import React from "react";
import carrousel from "assets/img/Frame 1.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
      </picture>
      <h1>This is a website to support Ukraine.<br></br>
      We direct donations directly to our main headquarters in Kiev. <br></br>
                        Any amount is welcome!!!</h1>
      <aside>
        {dados && dados.map((item) => <CardComponent dados={item}/>)}
      </aside>
    </S.Home>
  );
};

export default Home;
