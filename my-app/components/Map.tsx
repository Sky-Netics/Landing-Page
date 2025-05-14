import {
  Marker,
  TileLayer,
  MapContainer
} from "react-leaflet"
import React from "react"
import "leaflet/dist/leaflet.css"

export const Map: React.FC = () =>{
  const position= [37.7749, -122.4194]

  return (
    <MapContainer center={position} zoom={4} className="h-60 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={position}></Marker>
    </MapContainer>
  )
}