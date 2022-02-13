import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

// styled(LinearGradient).attrs({
//     colors: ['#10953D', '#5BFFCE'],
//     start: { x: 0, y: 0 },
//     end: { x: 0, y: 1}
// })`

export const Container = styled.View`
    flex: 1;
    padding-top: 35px;
    justify-content: flex-start;
`;

export const ViewColumn = styled.View`
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    width: 100%;
    height: 15%;
    margin-top: 20px;
    justify-content: center;
`;

export const ViewAds = styled.View`
    width: 100%;
    height: 10%;
    align-items: center;
    justify-content: center;
`;

export const BtnSquad = styled.TouchableOpacity`
    width: 30%;
    height: 100%;
    margin: 0 5px;
    background-color: #52D800;
    elevation: 6;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 35px;
    border: 1px solid #10953D;
`;

export const Title = styled.Text`
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 75px;
`;

export const TextButton = styled.Text`
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-align: center;
`;

export const SimpleText = styled.Text`
    font-size: 34px;
    color: #666;
    elevation: 6;
`;

export const ViewModal = styled.View`
    width: 95%;
    height: 80%;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    background-color: #fff;
    align-self: center;
    margin-top: 40%;
    elevation: 4;
`;