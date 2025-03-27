import React, { useState } from "react";
import { Form, Input, Button, InputNumber, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("https://employe-backend.azurewebsites.net/employe", values);
      message.success("Employé ajouté avec succès");
      navigate("/");
    } catch (error) {
      message.error("Erreur lors de l'ajout de l'employé");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ajouter un Employé</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Nom" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Âge" rules={[{ required: true, type: "number", min: 18 }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="salary" label="Salaire" rules={[{ required: true, type: "number", min: 0 }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Ajouter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeForm;
