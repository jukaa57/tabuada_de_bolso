import React from "react";
import {Container, ViewColumn, ViewAds, BtnRet, Title, TextButton} from './style';


function Home({navigation}) {

    return (

        <Container>
            <ViewColumn>
                <Title>Title</Title>

                <BtnRet activeOpacity={0.9} onPress={() => navigation.navigate("Tabuada", {title: 'Adição', operator: '+'})}>
                    <TextButton> Tabuada de Adição </TextButton>
                </BtnRet> 

                <BtnRet activeOpacity={0.9} onPress={() => navigation.navigate("Tabuada", {title: 'Subtração', operator: '-'})}>
                    <TextButton> Tabuada de Subtração </TextButton>
                </BtnRet> 

                <BtnRet activeOpacity={0.9} onPress={() => navigation.navigate("Tabuada", {title: 'Multiplicação', operator: '*'})}>
                    <TextButton> Tabuada de Multiplicação </TextButton>
                </BtnRet> 

                <BtnRet activeOpacity={0.9} onPress={() => navigation.navigate("Tabuada", {title: 'Divisão', operator: '/'})}>
                    <TextButton> Tabuada de Divisão </TextButton>
                </BtnRet> 

                {/* <BtnRet activeOpacity={0.9}>
                    <TextButton> Tabuada Personalizada </TextButton>
                </BtnRet>  */}
            </ViewColumn>

            <ViewAds>
                {/* ADS */}
            </ViewAds>
       
        </Container>
    )
}

export default Home;