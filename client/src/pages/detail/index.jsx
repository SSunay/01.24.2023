import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  const { _id } = useParams();
  const [detail, setdetail] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    let data = await axios.get(`http://localhost:8000/products/${_id}`);
    setdetail(await data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8000/products/${_id}`);
    let newList = detail.filter((q) => q._id !== _id);
    navigate('/')
    setdetail(newList);
  };

  return (
    <div className="detail-part">
      <div className="mainDetail">
        <div className="detailImg">
          <img src={detail.img} alt="" />
        </div>
        <div className="detailtext">
          <h1><span>Products name:</span><br/> {detail.name}</h1>
          <h3><span>Products catacory:</span><br/> {detail.catacory}</h3>
          <p><span>Products title:</span><br/>{detail.title}</p>

          <div className="detailButtons">
            <div className="deleteBtn">
              <button onClick={() => handleDelete(_id)}>Delete</button>{" "}
            </div>
            <div className="backBtn">
              <button onClick={() => navigate("/")}>Go Back</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
