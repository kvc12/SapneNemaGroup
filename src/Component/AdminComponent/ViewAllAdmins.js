import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'

export default function ViewAllAdmin() {
    const [data, setData] = useState([])
    const columns = [
        { field: 'adminId', title: 'ADMIN ID' },
        { field: 'adminName', title: 'ADMIN NAME' },
        { field: 'adminUsername', title: 'ADMIN USERNAME' },
    ]
    useEffect(() => {
        fetch(`http://localhost:9090/GharKaKhana-api/admins/viewAllAdmin`)
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }, [])
    const tablestyle = {
        color: "#000",
        backgroundColor: "#e1e5ea",
        border:"2px"     
    }
    return (
        <div className="container">
            <h2 className="text-center">ADMIN DETAILS</h2>
            <Link className="btn btn-info btn-lg mb-3" to="/admindashboard">Back</Link>
            <MaterialTable
                style={tablestyle}
                title="Admin Data"
                data={data}
                columns={columns}
                options={{
                    search: false,
                    paging: true,
                    filtering: false,
                    sorting: true
                }}
            />
        </div>
    );
}