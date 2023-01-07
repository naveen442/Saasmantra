import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import $ from 'jquery';
export const FormPage = () => {
    const clearData = {
        fullName: "",
        email: "",
        designation: "",
        contact: "",
    };

    let [formData, setFormData] = useState(clearData);
    const [formErrors, setErrors] = useState({});

    function formDataAdd(e) {
        e.preventDefault();
        setErrors(validate(formData));
        const formInfo = {
            fullName: formData.fullName,
            email: formData.email,
            designation: formData.designation,
            contact: formData.contact,
        };
        console.log(formInfo);
        //dummy data entry
        axios.post(`https://dummy.com/contact`, formInfo).then((response) => {
            console.log(response.data);
        });

        setFormData(clearData);
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const mobile = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (!values.fullName) {
            errors.fullName = "Username is required";
        }
        if (!values.email) {
            errors.email = "email is required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format";
        }
        if (!values.designation) {
            errors.designation = "designation is required";
        }
        if (!values.contact) {
            errors.contact = "contact is required";
        }
        else if (!mobile.test(values.contact)) {
            errors.contact = "mobile number is incorrect"
        }
        return errors;
    }
    return (
        <div>
            <Form>
                <div className="form-bg">
                    <div className="container">
                        <div>
                            <div className="row pt-5 pb-3 gy-5 justify-content-center">
                                <div className="col-lg-8 col-md-10 col-sm-12">
                                    <div className="row justify-content-center">
                                        <h2 className="text-center form-title">Lorem Ipsum</h2>
                                        <div className="col-md-6 col-sm-6">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        fullName: event.target.value
                                                    });
                                                }}
                                                type="text"
                                                className="form-style01"
                                                placeholder="Name"
                                                value={formData.fullName}
                                            />
                                            <p className="required">{formErrors.fullName}</p>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        email: event.target.value,
                                                    });
                                                }}
                                                type="email"
                                                className="form-style01"
                                                placeholder="Email"
                                                value={formData.email}
                                            />
                                            <p className="required">{formErrors.email}</p>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <Form.Label>Designation</Form.Label>
                                            <Form.Control
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        designation: event.target.value,
                                                    });
                                                }}
                                                type="text"
                                                className="form-style01"
                                                placeholder="Designation"
                                                value={formData.designation}
                                            />
                                            <p className="required">{formErrors.designation}</p>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <Form.Label>Contact</Form.Label>
                                            <Form.Control
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        contact: event.target.value,
                                                    });
                                                }}
                                                type="text"
                                                className="form-style01"
                                                placeholder="Contact"
                                                value={formData.contact}
                                            />
                                            <p className="required">{formErrors.contact}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center pb-5">
                            <button
                                type="button"
                                onClick={formDataAdd}
                                className="btn btn-info bg-gradient font-white"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

// .bg-info.bg-gradient
