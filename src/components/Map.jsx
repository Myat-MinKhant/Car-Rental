import { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { getUserPosition } from './getUserPosition';
import PlacesAutocomplete from './PlacesAutoComplete';

export default function Home() {
    const API_KEY = 'AIzaSyAMUS_eH_E0_qPzIuweJL_NWuRKoI8lj0w'
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries: ['places'],
    })
    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [selected, setSelected] = useState(null);
    const [currentAddress, setCurrentAddress] = useState('');

    useEffect(() => {
        getUserPosition(setCenter)
    }, []);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${center.lat},${center.lng}&key=${API_KEY}`);
                const data = await response.json();
                if (data.results.length > 0) {
                    setCurrentAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                console.error('Error fetching address:', error);
            }
        };

        fetchAddress();
    }, [center]);

    const handleLoad = (map) => {
        setMap(map);
    };

    const handleDragEnd = () => {
        if (map) {
            const newCenter = map.getCenter();
            setCenter({ lat: newCenter.lat(), lng: newCenter.lng() });
            setSelected({ lat: newCenter.lat(), lng: newCenter.lng() })
        }
    };


    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className=' relative'>
            <div className='absolute top-2.5 left-[39%] z-10'>
                <PlacesAutocomplete setSelected={setSelected} setCenter={setCenter} />
            </div>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '90vh' }}
                zoom={18}
                center={center}
                onLoad={handleLoad}
                onDragEnd={handleDragEnd}
            >
                <Marker
                    position={selected || center}
                />
            </GoogleMap>
            <div>Current Address: {currentAddress}</div>
        </div>
    )
}