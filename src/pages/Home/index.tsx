import React from "react";
import {Container, ViewColumn, ViewAds, BtnRet, Title, TextButton, IconButton, Icon} from './style';
import { AdMobBanner } from 'expo-ads-admob';

function Home({navigation}) {

    return (
        <Container>
            <ViewColumn>
            <Icon
                source={require('../../../assets/adaptive-icon.png')}
            />
                <Title>Aprenda Tabuada</Title>

                <BtnRet activeOpacity={0.9} style={{backgroundColor: '#12EBBB'}} onPress={() => navigation.navigate("Tabuada", {title: 'Adição', operator: '+', bcolor1: '#12EBBB', bcolor2: '#008793', btncolor: '#12EBBB'})}>
                    <IconButton> ﹢ </IconButton>
                    <TextButton> Adição </TextButton>
                </BtnRet> 

                <BtnRet activeOpacity={0.9} style={{backgroundColor: '#F8A0DD'}} onPress={() => navigation.navigate("Tabuada", {title: 'Subtração', operator: '-', bcolor1: '#F8A0DD', bcolor2: '#A375EC', btncolor: '#12EBBB'})}>
                    <IconButton> ﹣ </IconButton>
                    <TextButton> Subtração </TextButton>
                </BtnRet> 

                <BtnRet activeOpacity={0.9} style={{backgroundColor: '#F9BC5E'}} onPress={() => navigation.navigate("Tabuada", {title: 'Multiplicação', operator: '×', bcolor1: '#F4F8A0', bcolor2: '#F9BC5E', btncolor: '#12EBBB'})}>
                    <IconButton> × </IconButton>
                    <TextButton> Multiplicação </TextButton>
                </BtnRet> 

                <BtnRet activeOpacity={0.9} style={{backgroundColor: '#5E87F9'}} onPress={() => navigation.navigate("Tabuada", {title: 'Divisão', operator: '/', bcolor1: '#A0DDF8', bcolor2: '#5E87F9', btncolor: '#12EBBB'})}>
                    <IconButton> ÷ </IconButton>
                    <TextButton> Divisão </TextButton>
                </BtnRet> 

                {/* <BtnRet activeOpacity={0.9}>
                    <TextButton> Tabuada Personalizada </TextButton>
                </BtnRet>  */}
            </ViewColumn>

            <ViewAds>
                <AdMobBanner
                   bannerSize="fullBanner"
                   adUnitID="ca-app-pub-3940256099942544/6300978111"
                   servePersonalizedAds // true or false
                   onDidFailToReceiveAdWithError={err => console.log(err)}
                />
            </ViewAds>
       
        </Container>
    )
}

export default Home;