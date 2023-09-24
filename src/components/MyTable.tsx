import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import Layout from '../layouts/Layout';
import VehicleTable from './VehicleTable';
import { Vehicle } from '../types/Vehicle';
import { fetchVehiclesApi, deleteVehicleApi } from '../services/api';


function MyTable() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const toastRef = useRef<Toast | null>(null);

  const getAndSetVehicles = async () => {
    try {
      const vehicleDtoes = await fetchVehiclesApi();
      console.log(vehicleDtoes);
      setVehicles(vehicleDtoes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAndSetVehicles();
  }, []);

  const deleteVehicle= async (id: number,endpoint: string) => {
    try {
      await deleteVehicleApi(endpoint);
      const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
      setVehicles(updatedVehicles);

      const deletedVehicle = vehicles.find((vehicle) => vehicle.id === id);
      if (deletedVehicle && toastRef.current) {
        toastRef.current.show({
          severity: 'success',
          summary: 'Success',
          detail: `Vehicle "${deletedVehicle.vehicleType}" was deleted.`,
          life: 5000,
        });
      }
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <Layout>
      <div>
        <Toast ref={toastRef} />
        <VehicleTable vehicles={vehicles} onDelete={deleteVehicle} />
      </div>
    </Layout>
  );
}

export default MyTable;
