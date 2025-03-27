import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://employe-backend.azurewebsites.net/employe/get");
      setEmployees(response.data);
    } catch (error) {
      message.error("Erreur lors du chargement des employés");
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/employe/delete/${id}`);
      message.success("Employé supprimé");
      fetchEmployees();
    } catch (error) {
      message.error("Erreur lors de la suppression");
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Nom", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Âge", dataIndex: "age", key: "age" },
    { title: "Salaire", dataIndex: "salary", key: "salary" },
    {
      title: "Actions",
      render: (record) => (
        <>
          <Link to={`/edit/${record.id}`}>
            <Button type="primary" style={{ marginRight: 8 }}>Modifier</Button>
          </Link>
          <Button type="danger" onClick={() => deleteEmployee(record.id)}>
            Supprimer
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Liste des Employés</h2>
      <Table dataSource={employees} columns={columns} rowKey="id" />
    </div>
  );
};

export default EmployeeList;
