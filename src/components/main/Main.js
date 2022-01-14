import hello from '../../assets/hello.svg';
import map from '../../assets/map.svg';
import vendas from '../../assets/vendas.svg';
import gf1 from '../../assets/gf1.svg';
import gf2 from '../../assets/gf2.svg';
import gf3 from '../../assets/gf3.svg';
import visit from '../../assets/visit.svg';
import rosc from '../../assets/rosc.png';
//import LineGraph from '../charts/Chart';
//import Chart from '../../charts/Chart.';
import './Main.css';


const Main = ( ) => {
        return(
          <main>
            <div className="main__conteiner">
              < div className="main__title">
                <img src={hello} alt="hello"/>
                <div className="main__greeting">
                  <h1>Bem-vindo ao seu painel!</h1>
                  <p>Resumo</p>
                </div>
              </div>

              <div className="main__cards">
                <div  className="card">
                <i className="fa fa-file-text fa-2x text-lightblue"></i>
                <div className="card_inner">
                  <p className="text-primary-p">Média de valor de pedidos</p>
                  <spam className="font-bold text-title">R$ 578</spam>
                  <img src={gf1} alt="gf1"/>
              </div>
            </div>
            <div className="card">
                  <i className="fa fa-money fa-2x text-red"></i>
                  <div className="card_inner">
                    <p className="text-primary-p">Quantidade de pedidos</p>
                    <spam className="font-bold text-title"> 2467</spam>
                    <img src={gf2} alt="gf2"/>
                  </div>
                </div>
                <div className="card">
                  <i className="fa fa-archive fa-2x text-yellow"></i>
                  <div className="card_inner">
                    <p className="text-primary-p">Compras únicas</p>
                    <spam className="font-bold text-title">678</spam>
                    <img src={gf3} alt="gf3"/>
                </div>
              </div>
            </div>
            <div className="charts">
              <div className="charts__left">
              <div>
                    <h1>Vendas por país</h1>
            </div>
                <div className="charts__left__title">
                  <img src={map} alt="map"/>
                </div>
                <i className="fa fa-usd"></i>
              </div>
              </div>
              <div className="charts__right">
                <img src={visit} alt="visit"/>
                <div className="charts__rigth__title">
               <h1>Visitantes</h1>
                    <p>156.927</p> 
                
              </div>
              <i className="fa fa-area-chart"></i>
               </div>   
               
                 
                

                 <div className="card3">
                   <h1>Relatório de vendas</h1>
                   <p>Esperado</p>
                   <img src={vendas} alt="vendas"/>
                   </div>
                 
                 <div className="card4">
                   <h1>Vendas por tipo de produto</h1>
                    <img src={rosc} alt="rosc"/>
                   <p> Eletrônicos 50%</p>
                    <p>Mobilia 20%</p>
                    <p>Bolsas e pacotes 15%</p>
                    <p> Acessórios 15%</p>
                 </div>
              </div>
          
      </main>

    );

};

export default Main;