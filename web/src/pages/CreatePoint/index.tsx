import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface UF {
  id: number;
  sigla: string;
  nome: string;
}

interface City {
  id: number;
  nome: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<UF[]>([]);
  const [cities, setCities] =useState<City[]>([]);

  const [selectedUf, setSelectedUf] = useState<string>('0');
  const [selectedCity, setSelectedCity] = useState<string>('0');

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        setUfs(response.data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => setCities(response.data))
      .catch(console.error);
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUf(event.target.value);
  };

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(event.target.value);
  };

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/" >
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Cadastro do <br/> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidate</label>
            <input
              type="text"
              name="name"
              id="name"
            />
         </div>

         <div className="field-group">
          <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
              />
          </div>

          <div className="field">
              <label htmlFor="whatsapp">Whastapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
          </div>
         </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-19.0653151,-42.541153]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-19.0653151,-42.541153]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectedUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectedCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city.id} value={city.nome}>{city.nome}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">Cadatrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
