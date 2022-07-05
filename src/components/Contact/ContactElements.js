import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        margin-right: 0;
    }
`
 
export const ContactSubmit = styled.input`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 14px 48px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    display: block;
    margin: 20px auto;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
    }
`