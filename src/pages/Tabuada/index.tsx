import { AdMobBanner } from "expo-ads-admob";
import React, {useState} from "react";
import { Modal } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { StyleSheet } from 'react-native';
import {BtnSquad, Container, SimpleText, TextButton, Title, ViewAds, ViewColumn, ViewModal, ViewRow} from './style'

function Tabuada({route, navigation}) {
    const {title, operator, bcolor1, bcolor2, btncolor} = route.params;
    const styles = StyleSheet.create({

        color1: {
            backgroundColor: bcolor2
        }, color2: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '60%',
        }, btn: {
            backgroundColor: btncolor
        }
    })
    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState <number>(0);

    function isOpera(o, x, y) {
        if(o === '+') {
            return x + y
        } else if( o === "-") {
            return x - y
        } else if( o === "X") {
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
        <Container style={styles.color1} >
            <LinearGradient  
            colors={[bcolor1, 'transparent']}
            style={styles.color2}/>
            <ViewColumn>
                <Title> {title} </Title>
                <ViewRow>
                    <BtnSquad style={styles.btn} onPress={() => openModal(1)}>
                        <TextButton> 1 </TextButton>
                    </BtnSquad>

                    <BtnSquad style={styles.btn} onPress={() => openModal(2)}>
                        <TextButton> 2 </TextButton>
                    </BtnSquad>

                    <BtnSquad style={styles.btn} onPress={() => openModal(3)}>
                        <TextButton> 3 </TextButton>
                    </BtnSquad>
                </ViewRow>
                
                <ViewRow>
                    <BtnSquad style={styles.btn} onPress={() => openModal(4)}>
                        <TextButton> 4 </TextButton>
                    </BtnSquad>

                    <BtnSquad style={styles.btn} onPress={() => openModal(5)}>
                        <TextButton> 5 </TextButton>
                    </BtnSquad>

                    <BtnSquad style={styles.btn} onPress={() => openModal(6)}>
                        <TextButton> 6 </TextButton>
                    </BtnSquad>
                </ViewRow>

                <ViewRow>
                    <BtnSquad style={styles.btn} onPress={() => openModal(7)}>
                        <TextButton> 7 </TextButton>
                    </BtnSquad>

                    <BtnSquad style={styles.btn} onPress={() => openModal(8)}>
                        <TextButton> 8 </TextButton>
                    </BtnSquad>

                    <BtnSquad style={styles.btn} onPress={() => openModal(9)}>
                        <TextButton> 9 </TextButton>
                    </BtnSquad>
                </ViewRow>

                <ViewRow>
                    <BtnSquad style={styles.btn} onPress={() => openModal(10)}>
                        <TextButton> 10 </TextButton>
                    </BtnSquad>
                </ViewRow>
            </ViewColumn>

            <ViewAds>
                <AdMobBanner
                   bannerSize="banner"

                   adUnitID="ca-app-pub-3940256099942544/6300978111"
                   servePersonalizedAds // true or false
                   onDidFailToReceiveAdWithError={err => console.log(err)}
                />
            </ViewAds>

            <Modal visible={showModal} transparent animationType="slide" onRequestClose={() => setShowModal(false)}>
                <ViewModal>
                    {
                    operator === "+" || operator === "X"  ?
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
                    <SimpleText> {number + 1} {operator} {number} = {isOpera(operator, number + 1, number)} </SimpleText>
                    <SimpleText> {number + 2} {operator} {number} = {isOpera(operator, number + 2, number)} </SimpleText>
                    <SimpleText> {number + 3} {operator} {number} = {isOpera(operator, number + 3, number)} </SimpleText>
                    <SimpleText> {number + 4} {operator} {number} = {isOpera(operator, number + 4, number)} </SimpleText>
                    <SimpleText> {number + 5} {operator} {number} = {isOpera(operator, number + 5, number)} </SimpleText>
                    <SimpleText> {number + 6} {operator} {number} = {isOpera(operator, number + 6, number)} </SimpleText>
                    <SimpleText> {number + 7} {operator} {number} = {isOpera(operator, number + 7, number)} </SimpleText>
                    <SimpleText> {number + 8} {operator} {number} = {isOpera(operator, number + 8, number)} </SimpleText>
                    <SimpleText> {number + 9} {operator} {number} = {isOpera(operator, number + 9, number)} </SimpleText>
                    <SimpleText> {number + 10} {operator} {number}  = {isOpera(operator, number + 10, number)} </SimpleText>
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