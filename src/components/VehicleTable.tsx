import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Vehicle } from '../types/Vehicle';



function VehicleTable({ vehicles, onDelete }: { vehicles: Vehicle[]; onDelete: (id: number, endpoint: string) => void }) {
    const columns = [
      { field: 'vehicleType', header: 'Vehicle type' },
      { field: 'created', header: 'Created' },
      { field: 'mileage', header: 'Mileage' },
      { field: 'gearbox', header: 'Gearbox' },
      { field: 'owner', header: 'Owner' },
      { field: 'kwAndPs', header: 'Kw & Ps' },
      { field: 'hek', header: 'Hek' },
      { field: 'taxation', header: 'Taxation' },
    ];
  
    return (
      <DataTable value={vehicles} tableStyle={{ minWidth: '50rem' }}>
        {columns.map((col) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
        <Column
          field="actions"
          header="Actions"
          body={(rowData: Vehicle) => (
            <Button
            icon="pi pi-trash"
            className="p-button-danger"
            onClick={() => onDelete(rowData.id,rowData.delete)}
          />
          )}
        />
      </DataTable>
    );
  }

  
export default VehicleTable;