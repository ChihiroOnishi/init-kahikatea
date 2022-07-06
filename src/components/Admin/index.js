import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { FormContainer, UploadForm, FormButton, FormH1, FormFile, FormLabel, FormTextarea, Icon, Text, FormPreviewImg } from './AdminElements';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('story');
    // const [fileInput, setFileInput] = useState('');
    // const [selectedFile, setSelectedFile] = useState('');
    // const [textInput, setTextInput] = useState('');
    // const [successMsg, setSuccessMsg] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const fileSelectedHandler = (event) => {
    //     previewFile(event.target.files[0]);
    //     setFileInput(event.target.value);
    // };
    // const textHandler = (event) => {
    //     setTextInput(event.target.value);
    // }

    // const previewFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setSelectedFile(reader.result);
    //     };
    // };

    // const fileUploadHandler = (event) => {
    //     event.preventDefault();
    //     if (!selectedFile) return;
    //     uploadImage(selectedFile, textInput);
    // };

    // const uploadImage = async (base64EncodedImage, text) => {
    //     try {
    //         await fetch('/api/upload', {
    //             method: 'POST',
    //             body: JSON.stringify({ data: base64EncodedImage, caption: text }),
    //             headers: { 'Content-Type': 'application/json' },
    //         });
    //         setFileInput('');
    //         setSelectedFile('');
    //         setSuccessMsg('Image uploaded successfully');
    //     } catch (err) {
    //         console.error(err);
    //         setErrMsg('Something went wrong!');
    //     }
    // };   

    return (
        <>
            <FormContainer>
                    <Icon to="/">admin</Icon>
                    <Container>
                    <Tabs
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        className="mb-3">
                        <Tab eventKey="story" title="Story">
                        </Tab>
                        <Tab eventKey="photo" title="Gallery Photo">
                        </Tab>
                        <Tab eventKey="video" title="Gallery Video">
                            <button>Create Video</button>
                        </Tab>
                    </Tabs>
                    </Container>
            </FormContainer>
        </>
    )
}

export default Admin;
