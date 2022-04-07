import './styles.css';
import CarImage from '../../assets/images/car.png';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <div className="card-home-container my-4">
              <div className="home-image-container">
                <img src={CarImage} alt="Carro home" />
              </div>
              <div className="text-center text-white content-container-body">
                <h4>O carro perfeito para você</h4>
                <p>
                  Conheça nossos carros e dê mais um passo na realização do seu
                  sonho
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="container-info">
              <Link to="/products">
                <button className="btn btn-default">VER CATÁLOGO</button>
              </Link>
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
