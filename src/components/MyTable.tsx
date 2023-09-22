import React from 'react';

import axios from 'axios';
import {useState, useEffect,useRef } from 'react';

import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Layout from './Layout'

interface Vehicle {
    id: number;
    vehicleType: string;
    created: string;
    mileage: string;
    gearbox: string;
    owner: number;
    kwAndPs: string;
    hek: number;
    taxation: string;
  }

function MyTable() {

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const toastRef = useRef<Toast | null>(null); ;

    const getVehicles = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/v1/vehicles");
          const vehicleDtoes = response.data._embedded.vehicleDtoes;
          console.log(vehicleDtoes);
          setVehicles(vehicleDtoes);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

     
    
        
        

      useEffect(() => {
        getVehicles();
      },[])

      

    function deleteCustomer(id: number): void {
        try {
            const response =  axios.delete("http://localhost:8080/api/v1/vehicles/" + id);
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
            console.error('Error fetching data:', error);
          }
    }

      return vehicles.length > 0 ? (
        <Layout>
        <div>
        <Toast ref={toastRef} />
          <table className="vehicles">
            <thead className='thead'>
              <tr>
                <th>Vehicle type</th>
                <th>Created</th>
                <th>mileage</th>
                <th>gearbox</th>
                <th>owner</th>
                <th>kwAndPs</th>
                <th>hek</th>
                <th>taxation</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.vehicleType}</td>
                  <td>{vehicle.created}</td>
                  <td>{vehicle.mileage}</td>
                  <td>{vehicle.gearbox}</td>
                  <td>{vehicle.owner}</td>
                  <td>{vehicle.kwAndPs}</td>
                  <td>{vehicle.hek}</td>
                  <td>{vehicle.taxation}</td>
                  <td>
                    <button className="deleteButton" onClick={(e) => deleteCustomer(vehicle.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </Layout>
      ) : null;
    }
  

export default MyTable;