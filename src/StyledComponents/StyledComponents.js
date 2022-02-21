import styled from "styled-components";
import { Input, Button } from "reactstrap";

export const TextInput = styled(Input)`
  background-color: #f5f5f5;
  font-size: 15px;
  margin-left: 0px;
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
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 70px;
  width: 70px;
  padding: 10px;
  border-radius: 7px;
  border: 2px solid var(--secondary);
  color: var(--secondary);
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
`;
