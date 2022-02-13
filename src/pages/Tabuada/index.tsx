import React, {useState} from "react";
import { Modal } from "react-native";
import {BtnSquad, Container, SimpleText, TextButton, Title, ViewAds, ViewColumn, ViewModal, ViewRow} from './style'

function Tabuada({route, navigation}) {

    const {title, operator} = route.params;
    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState <number>(0);


    function isOpera(o, x, y) {
        if(o === '+') {
            return x + y
        } else if( o === "-") {
            return x - y
        } else if( o === "*") {
            return x * y
        } else if( o === "/") {
            return x / y
        }
    }

  
    function openModal(num: any) {
        !showModal? setShowModal(!showModal): setShowModal(!showModal)
        setNumber(num)
    }

    return (
        <Container>
            <ViewColumn>
                <Title> {title} </Title>
                <ViewRow>
                    <BtnSquad onPress={() => openModal(1)}>
                        <TextButton> 1 </TextButton>
                    </BtnSquad>

                    <BtnSquad onPress={() => openModal(2)}>
                        <TextButton> 2 </TextButton>
                    </BtnSquad>

                    <BtnSquad onPress={() => openModal(3)}>
                        <TextButton> 3 </TextButton>
                    </BtnSquad>
                </ViewRow>
                
                <ViewRow>
                    <BtnSquad onPress={() => openModal(4)}>
                        <TextButton> 4 </TextButton>
                    </BtnSquad>

                    <BtnSquad onPress={() => openModal(5)}>
                        <TextButton> 5 </TextButton>
                    </BtnSquad>

                    <BtnSquad onPress={() => openModal(6)}>
                        <TextButton> 6 </TextButton>
                    </BtnSquad>
                </ViewRow>

                <ViewRow>
                    <BtnSquad onPress={() => openModal(7)}>
                        <TextButton> 7 </TextButton>
                    </BtnSquad>

                    <BtnSquad onPress={() => openModal(8)}>
                        <TextButton> 8 </TextButton>
                    </BtnSquad>

                    <BtnSquad onPress={() => openModal(9)}>
                        <TextButton> 9 </TextButton>
                    </BtnSquad>
                </ViewRow>

                <ViewRow>
                    <BtnSquad onPress={() => openModal(10)}>
                        <TextButton> 10 </TextButton>
                    </BtnSquad>
                </ViewRow>
            </ViewColumn>

            <ViewAds>

            </ViewAds>

            <Modal visible={showModal} transparent animationType="slide" onRequestClose={() => setShowModal(false)}>
                <ViewModal>
                    {
                    operator === "+" || operator === "*"  ?
                    <>
                    <SimpleText> {number} {operator} 1 = {isOpera(operator,number, 1)} </SimpleText>
                    <SimpleText> {number} {operator} 2 = {isOpera(operator,number, 2)} </SimpleText>
                    <SimpleText> {number} {operator} 3 = {isOpera(operator,number, 3)} </SimpleText>
                    <SimpleText> {number} {operator} 4 = {isOpera(operator,number, 4)} </SimpleText>
                    <SimpleText> {number} {operator} 5 = {isOpera(operator,number, 5)} </SimpleText>
                    <SimpleText> {number} {operator} 6 = {isOpera(operator,number, 6)} </SimpleText>
                    <SimpleText> {number} {operator} 7 = {isOpera(operator,number, 7)} </SimpleText>
                    <SimpleText> {number} {operator} 8 = {isOpera(operator,number, 8)} </SimpleText>
                    <SimpleText> {number} {operator} 9 = {isOpera(operator,number, 9)} </SimpleText>
                    <SimpleText> {number} {operator} 10 = {isOpera(operator,number, 10)} </SimpleText>
                    </>
                      : operator === "-"  ?
                    <>
                    <SimpleText>  1 {operator} {number} = {isOpera(operator, 1, number)} </SimpleText>
                    <SimpleText>  2 {operator} {number} = {isOpera(operator, 2, number)} </SimpleText>
                    <SimpleText>  3 {operator} {number} = {isOpera(operator, 3, number)} </SimpleText>
                    <SimpleText>  4 {operator} {number} = {isOpera(operator, 4, number)} </SimpleText>
                    <SimpleText>  5 {operator} {number} = {isOpera(operator, 5, number)} </SimpleText>
                    <SimpleText>  6 {operator} {number} = {isOpera(operator, 6, number)} </SimpleText>
                    <SimpleText>  7 {operator} {number} = {isOpera(operator, 7, number)} </SimpleText>
                    <SimpleText>  8 {operator} {number} = {isOpera(operator, 8, number)} </SimpleText>
                    <SimpleText>  9 {operator} {number} = {isOpera(operator, 9, number)} </SimpleText>
                    <SimpleText> 10 {operator} {number}  = {isOpera(operator, 10, number)} </SimpleText>
                    </>
                    :
                    <>
                    <SimpleText> {number * 1} / {number} = {isOpera(operator, number * 1, number)} </SimpleText>
                    <SimpleText> {number * 2} / {number} = {isOpera(operator, number * 2, number)} </SimpleText>
                    <SimpleText> {number * 3} / {number} = {isOpera(operator, number * 3, number)} </SimpleText>
                    <SimpleText> {number * 4} / {number} = {isOpera(operator, number * 4, number)} </SimpleText>
                    <SimpleText> {number * 5} / {number} = {isOpera(operator, number * 5, number)} </SimpleText>
                    <SimpleText> {number * 6} / {number} = {isOpera(operator, number * 6, number)} </SimpleText>
                    <SimpleText> {number * 7} / {number} = {isOpera(operator, number * 7, number)} </SimpleText>
                    <SimpleText> {number * 8} / {number} = {isOpera(operator, number * 8, number)} </SimpleText>
                    <SimpleText> {number * 9} / {number} = {isOpera(operator, number * 9, number)} </SimpleText>
                    <SimpleText> {number * 10} / {number} = {isOpera(operator, number * 10, number)} </SimpleText>
                    </>
                    }




                </ViewModal>
                
            </Modal>
        </Container>
    )
}

export default Tabuada;