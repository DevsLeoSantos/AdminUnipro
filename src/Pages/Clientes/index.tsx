//Estilos
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-enterprise';
import { useCallback, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Clientes.css"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Clientes = () => {

    const gridRef = useRef<AgGridReact>(null);
    const onBtnExport = useCallback(() => {
        gridRef.current!.api.exportDataAsCsv();
    }, []);


    const [columnName] = useState([
        { field: 'Nome', filter: true },
        { field: 'Telefone', filter: true },
        { field: 'Email', filter: true },
        { field: 'Cidade', filter: true }
    ]);


    const [rowData] = useState([
        { Nome: "Lucas", Telefone: "111111111", Email: "lucas@teste.com", Cidade: "Marilia" },
        { Nome: "Leonardo", Telefone: "222222222", Email: "leonardo@teste.com", Cidade: "Marilia" },
        { Nome: "Joao", Telefone: "333333333", Email: "joao@teste.com", Cidade: "Marilia" }
    ]);



    return (
        <Tabs>
            <TabList>
                <Tab>Clientes</Tab>
                <Tab>Usuarios</Tab>
                <Tab>Cadastros</Tab>
            </TabList>

            <TabPanel>
                <div className="ag-theme-alpine">
                    <div>
                        <button
                            onClick={onBtnExport}
                            style={{ marginBottom: '5px', fontWeight: 'bold' }}
                        >
                            Export to Excel
                        </button>
                    </div>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnName}
                        suppressExcelExport={true}
                        ref={gridRef}>
                    </AgGridReact>
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    )
}

export default Clientes;