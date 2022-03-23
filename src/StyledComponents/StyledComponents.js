import styled from "styled-components";
import { Input, Button, DropdownToggle } from "reactstrap";

export const TextInput = styled(Input)`
  background-color: #f8f8f8 !important;
  font-size: 15px;
  margin-left: 0px;
  color: var(--primary) !important;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 40px;
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  display: block;
  border: none;
`;

export const NumberInput = styled(Input)`
  display: flex;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 7px;
  background-color: #f8f8f8;
  color: var(--secondary);
  border: none;
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--secondary);
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-right: none;
  height: 40px;
  padding: 10px 40px 10px 40px;
  border-radius: 7px;
  display: block;
  border: none;
  float: right;
  margin-top: 20px;
`;

export const IconButton = styled(Button)`
  font-size: 20px;
  font-weight: bold;
  border-radius: 7px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 10px;
`;

export const CardButtonWithText = styled(Button)`
  font-size: 15px;
  font-weight: bold;
  color: var(--secondary)
  border-radius: 7px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 20px;
`;

export const StyledDropdownToggle = styled(DropdownToggle)`
  background-color: white;
  width: 100%;
  color: var(--primary);
  background-color: #f8f8f8
  text-align: left;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const UploadButton = styled(Input)`
  font-size: 15px;
  font-weight: bold;
  color: var(--secondary)
  border-radius: 7px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 20px;
`;
