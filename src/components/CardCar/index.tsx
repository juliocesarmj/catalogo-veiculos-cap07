import { ButtonComprar } from '../ButtonComprar';
import ImageCardCar from 'assets/images/car-card.png';
import './styles.css';

export const CardCar = () => {
  return (
    <div className="card-car">
      <div className="image-card">
        <img src={ImageCardCar} alt="Imagem de Carro catalogo de carros" />
      </div>
      <div className="content-card-body">
        <h6 className="text-center">Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <ButtonComprar />
      </div>
    </div>
  );
};
