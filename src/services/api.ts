import axios from 'axios';
import { Vehicle } from '../types/Vehicle';

export async function fetchVehiclesApi(): Promise<Vehicle[]> {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/vehicles');
      const vehicles: Vehicle[] = response.data._embedded.vehicleDtoes.map((vehicle: any) => {
        return {
          id: vehicle.id,
          vehicleType: vehicle.vehicleType,
          created: vehicle.created,
          mileage: vehicle.mileage,
          gearbox: vehicle.gearbox,
          owner: vehicle.owner,
          kwAndPs: vehicle.kwAndPs,
          hek: vehicle.hek,
          taxation: vehicle.taxation,
          delete: vehicle._links.delete.href
        };
      });
      return vehicles;
    } catch (error) {
      throw error;
    }
  }

export async function deleteVehicleApi(endpoint: string) {
  try {
    await axios.delete(endpoint);
  } catch (error) {
    throw error;
  }
}