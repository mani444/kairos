import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Dashboard.module.css";
import { useState, useContext, useEffect } from "react";
import Axios from "../../axios/Axios";
import Pagination from "../Pagination/Pagination";
const Dashboard = () => {
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    const obj = {
      address: address,
      phone: contact,
      length: 10,
      start: 0,
      draw: 1,
    };
    console.log("handleSubmit", address);
    Axios.post("/", obj)
      .then(async (res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  const handleData = () => {
    const obj = {
      address: address,
      phone: contact,
      length: 10,
      start: 0,
      draw: 1,
    };
    console.log("handleSubmit", address);
    Axios.post("/", obj)
      .then(async (res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleAddress = (event) => {
    console.log(event.target.value);
    setAddress(event.target.value);
    handleData();
  };

  const handleContact = (event) => {
    console.log(event.target.value);
    setContact(event.target.value);
    handleData();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    handleData();
  };

  const displaydata = () => {};
  return (
    <div className={styles.container}>
      <h1>SALES DASHBOARD</h1>
      <form
        onSubmit={handleSubmit}
        className={styles["form-container"]}
        autoComplete="off"
      >
        <div className={styles["input-container"]}>
          <Input
            classes="input-field"
            type="text"
            placeholder="Search by Address"
            onChange={handleAddress}
          />

          <Input
            classes="input-field"
            type="text"
            placeholder="Search by Contact No"
            onChange={handleContact}
          />
        </div>

        <Button
          classes="StartButtons login-button"
          icon={null}
          type="submit"
          text="Search"
          //   onClick={() => checkLogin("/finish")}
        />
      </form>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>Info</th>
              <th>Associated Contact No</th>
              <th>Customer</th>
              <th>Last Order</th>
              <th>Pending Order</th>
              <th>Total Order amount</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords
              ? currentRecords.map((info, index) => (
                  <tr key={index}>
                    <td>{info.Address}</td>
                    <td>{info.Info}</td>
                    <td>{info.AssociatedContact}</td>
                    <td>{info.Customer}</td>
                    <td>{info.DateOfLastOrder}</td>
                    <td>{info.PendingOrder}</td>
                    <td>{info.OrdersAmount}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
