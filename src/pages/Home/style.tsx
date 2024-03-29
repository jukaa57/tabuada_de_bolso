import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ['#fff', '#5BFFCE'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1}
})`
    flex: 1;
    padding-top: 35px;
    justify-content: flex-start;
`;

export const ViewColumn = styled.View`
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
    
export const ViewAds = styled.View`
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
`;
    
export const BtnRet = styled.TouchableOpacity`
    width: 80%;
    height: 85px;
    background-color: #fff;
    elevation: 4;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    margin-bottom: 35px;
    padding-left: 20px;
`;
    
export const Title = styled.Text`
    font-size: 48px;
    font-weight: 700;
    color: #666;
    text-align: center;
    margin-bottom: 75px;
`;

export const IconButton = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    text-align: center;
`;

export const TextButton = styled.Text`
    font-size: 34px;
    font-weight: 600;
    color: #fff;
    text-align: center;
`;

export const Icon = styled.Image`
    width: 80px;
    height: 80px;
`;