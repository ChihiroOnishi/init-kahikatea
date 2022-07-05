import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    background: rgba(147, 172, 112, 0.6);
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const UploadForm = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;

    @media screen and (max-width: 400px) {
        padding: 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #010101;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #010101;
`

export const FormFile = styled.input`
    margin-bottom: 20px;
`
export const FormTextarea = styled.textarea`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #93ac70;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #010101;
    font-size: 14px;
`

export const FormPreviewImg = styled.img`
    width: 200px;
    display: block;
    margin: 10px auto;
`
