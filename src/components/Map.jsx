import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import axios from 'axios';
import Modal from './Modal'; // Adjust the path as needed
import mapicon from '../images/image.png';
import './styles.css';

const LeafletMap = ({ district, momentIssue, actors, latitude, longitude }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const isMobile = window.innerWidth <= 768;
  const initialZoom = isMobile ? 4 : 6;
  useEffect(() => {
    if (!mapInstance.current) {
      // Initialize map

      mapInstance.current = L.map(mapRef.current, {
        center: [28.3949, 84.1240], // Default center: Nepal
        zoom: initialZoom,
        dragging: true,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
      });

      // Add base tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(mapInstance.current);

      // Remove geocoder control to hide search button
      // L.Control.geocoder().addTo(mapInstance.current); // Comment out or remove this line

      // Load GeoJSON for provinces
      fetch('/nepal_provinces.geojson')
        .then(response => response.json())
        .then(data => {
          L.geoJSON(data, {
            style: {
              color: '#800000',
              weight: 0.5,
              fillOpacity: 0,
            },
            onEachFeature: (feature, layer) => {
              layer.bindPopup(`Province: ${feature.properties.name}`);
            },
          }).addTo(mapInstance.current);

          mapInstance.current.fitBounds(L.geoJSON(data).getBounds());
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
    }

    // Fetch locations from backend
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/locations');
        setLocations(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [initialZoom]);

  useEffect(() => {
    if (mapInstance.current) {
      // Remove existing markers
      mapInstance.current.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          mapInstance.current.removeLayer(layer);
        }
      });

      // Create custom icon
      const customIcon = L.icon({
        iconUrl: mapicon,
        iconSize: [22, 22],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Add markers for each location
      locations.forEach(location => {
        const marker = L.marker([parseFloat(location.longitude), parseFloat(location.latitude)], { icon: customIcon });

        const hoverPopup = `
          <div class="popup-outer">
            <div class="popup-inner">
              <span>${location.district || 'Unknown District'}</span> /
              <span>${location.momentIssue || 'No Issue'}</span>
            </div>
          </div>
        `;

        marker.bindPopup(hoverPopup, { closeButton: false }).addTo(mapInstance.current);

        marker.on('click', () => {
          setSelectedLocation(location);
        });

        marker.on('mouseover', function () {
          this.openPopup();
        });

        marker.on('mouseout', function () {
          this.closePopup();
        });

        // Bind lat/lon popup to existing marker when zooming to a specific district
        if (parseFloat(parseFloat(location.longitude) === longitude && location.latitude) === latitude ) {
          setTimeout(() => {
            marker.bindPopup(`${district}, ${momentIssue}`).openPopup();
          }, 1500); // Open popup after flyTo completes
        }
      });
    }
  }, [locations, latitude, longitude]);

  useEffect(() => {
    if (mapInstance.current && latitude && longitude) {
      // Zoom-out animation before zooming in
      const currentZoom = mapInstance.current.getZoom();
      mapInstance.current.flyTo([longitude, latitude], currentZoom - 2, { duration: 1 });

      setTimeout(() => {
        mapInstance.current.flyTo([longitude, latitude], district ? 10 : 8, { duration: 1.5 });
      }, 1000); // Delay before final zoom-in
    }
  }, [latitude, longitude]);

  return (
    <>
      <div ref={mapRef} id="map" className="relative z-10" style={{ height: '700px' }}></div>
      {selectedLocation && (
        <Modal 
          isOpen={!!selectedLocation}
          onClose={() => setSelectedLocation(null)}
          location={selectedLocation}
        />
      )}
    </>
  );
};

export default LeafletMap;
