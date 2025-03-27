import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Liste des Employés</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/add">Ajouter un Employé</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add" element={<EmployeeForm />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
