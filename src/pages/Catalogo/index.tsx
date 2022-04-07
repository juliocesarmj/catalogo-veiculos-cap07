import { CardCar } from '../../components/CardCar';
import './styles.css';

export const Catalogo = () => {
  return (
    <section>
      <div className="container">
        <div className="row"></div>
        <div className="filtro-busca my-5">
          <input
            type="text"
            placeholder="Digite sua busca"
            className="form-control"
          />
          <button className="btn btn-default-filtro">buscar</button>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>
        </div>
      </div>
    </section>
  );
};
