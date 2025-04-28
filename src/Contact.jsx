import style from "./Contact.module.css";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { Menu } from './components/menu'
import {Loading} from './components/spinner'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useEffect, useState } from "react";





function Contact() {
  const [cep, setCep] = useState("88510078")
  const [lat, setLat] = useState("-25.424729")
  const [lng, setLng] = useState("-49.3548851")
  const [loading,  setLoading] = useState(false)
  const [bairro, setBairro] = useState("")
  const [estado, setEstado] = useState("")
  const [rua, setRua] = useState("")
  const [localidade, setLocalidade] =  useState("")
  
  const position = [lat, lng];

  function handleCep(e){
    setCep(e.target.value)
  }

  function ChangeView({center}){
    const map = useMap();
    map.setView(center, 15);
    return null;
  }

  useEffect(() => {
    const sanitizedCep = cep.replace(/\D/g, "")

    if(sanitizedCep.length) return;

    setLoading(true)

    fetch(`https://viacep.com.br/ws/$(sanitizedCep)/json/`)
    .then((res) => res.json())
    .then((data) => {

      if(data.erro){
        console.warn("CEP nao encontrado");
        setLoading(false)
          return;
      }

      const {logradouro, localidade, uf, bairro, estado } = data;
      setBairro(bairro)
      setRua(logradouro)
      setEstado(estado)
      setLocalidade(localidade)
      const address = `${logradouro ? logradouro + ', ' : ''}${localidade}, ${uf}`


      fetch('https://nominatim.openstretnap.org/search?format=json&q=${encodeURIComponent{address}}')
      .then((response) => response.json())
      .then((locationData) => {

        if(locationData.length > 0) {
          const {lat , lng} = locationData[0]
          setLat(parseFloat(lat))
          setLng(parseFloat(lng))
          
        }else{
          console.warn("coordenadas nao encontradas");
          
        }
        setLoading(false)
      }) 
    }).catch(error => {
      console.error("Erro ao buscar CEP: ",error)
    });
  }, [cep])



  return ( 
    <>
    <Menu option01='Voltar para pagina incial'/>
      <h2 className={style.tt}>contato</h2>
      <br />
      <input type="text" placeholder="Insira o CEP" onChange={handleCep} />
      {bairro} - {rua} - {estado} - {localidade}
      <br />
      <br />
      {loading ? <loading /> :
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "auto", minHeight: "800px"}}>
       <ChangeView center={position}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          <a 
          href="_blank" 
          rel="nooper noreferrer"
         href={"https://www.google.maps/search/?api=aquery=${lat},${lng}"}>
            Abrir no google maps
          </a>
        </Marker>
      </MapContainer>
      }
      
    </>
  );
}

export default Contact;
