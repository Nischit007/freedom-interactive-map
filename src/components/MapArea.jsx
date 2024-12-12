import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MapArea({ SendDistrictDetails }) {
    const [districts, setDistricts] = useState([]);
    const [sortBy, setSortBy] = useState(''); // Default to empty string

    const provinces = [
        {
            name: "Koshi",
            coordinates: { longitude: 27.2911, latitude: 87.2960 },
        },
        {
            name: "Madhesh Province",
            coordinates: { longitude: 26.7317, latitude: 85.9250 },
        },
        {
            name: "Bagmati Province",
            coordinates: { longitude: 27.7172, latitude: 85.3240 },
        },
        {
            name: "Gandaki Province",
            coordinates: { longitude: 28.2639, latitude: 83.9721 },
        },
        {
            name: "Lumbini Province",
            coordinates: { longitude: 27.5291, latitude: 83.4480 },
        },
        {
            name: "Karnali Province",
            coordinates: { longitude: 29.1107, latitude: 82.6144 },
        },
        {
            name: "Sudurpashchim Province",
            coordinates: { longitude: 29.2740, latitude: 80.6380 },
        },
    ];

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const fetchdata = await axios.get('https://map-backend-eight.vercel.app/api/locations');
                const arr = fetchdata.data;

                const tempFormattedArr = arr.map(item => ({
                    name: item.district,
                    momentIssue: item.momentIssue,
                    actors: item.actors,
                    latitude: parseFloat(item.latitude),
                    longitude: parseFloat(item.longitude),
                    file: item.file,
                }));

                setDistricts(tempFormattedArr);
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        };

        fetchDistricts();
    }, []);

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleSelect = (e) => {
        const selectedValue = e.target.value;

        if (sortBy === 'province') {
            const provinceName = selectedValue.trim();
            const province = provinces.find(p => p.name === provinceName);

            if (province) {
                SendDistrictDetails({ province: province.name, coordinates: province.coordinates });
            }
        } else if (sortBy === 'district') {
            const [districtName, momentIssue] = selectedValue.split('|');
            const districtDetails = districts.find(d => d.name === districtName && d.momentIssue === momentIssue);

            if (districtDetails) {
                SendDistrictDetails(districtDetails);
            }
        }
    };

    return (
        <div className=' ml-7 text-center flex gap-2 '>
            <div>
            <label className='block mb-2 mt-2 text-[#9A1D20] text-base font-bold'>
                Sort By
            </label>
            <select
                className='border rounded-lg w-40 h-8 mb-4 text-gray-700 focus:outline-double focus:border-indigo-500'
                value={sortBy}
                onChange={handleSortByChange}
            >
                <option value="">Select Sort Option</option>
                <option value="province">Province</option>
                <option value="district">Movement</option>
            </select>
            </div>
            <div className='mt-2'>
            {sortBy && ( // Render only if sortBy is selected
                <>
                    <label className='block mb-2  text-[#9A1D20] text-base font-bold'>
                        Select {sortBy === 'province' ? 'Province' : 'Movement'}
                    </label>
                    <select
                        className='border rounded-lg w-40 h-8 text-gray-700 focus:outline-double focus:border-indigo-500'
                        onChange={handleSelect}
                    >
                        <option value=''>Select {sortBy === 'province' ? 'Province' : 'Movement'}</option>
                        {sortBy === 'province'
                            ? provinces.map((province, index) => (
                                  <option key={index} value={province.name}>
                                      {province.name}
                                  </option>
                              ))
                            : districts.map((district, index) => (
                                  <option key={index} value={`${district.name}|${district.momentIssue}`}>
                                      {district.name} - {district.momentIssue}
                                  </option>
                              ))}
                    </select>
                </>
            )}
            </div>
        </div>
    );
}

export default MapArea;
