import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const InteractiveMapBlock: React.FC<any> = ({ title, destinations }) => {
  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="h-[400px]">
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {destinations.map((destination, index) => (
            <Marker key={index} position={[destination.latitude, destination.longitude]}>
              <Popup>
                <h3 className="font-bold">{destination.name}</h3>
                <p>{destination.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}
