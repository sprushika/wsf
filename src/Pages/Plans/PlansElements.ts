
import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react';
interface IProps {
    active?: boolean;
    backgroundColor?:string;
};

export const Header = styled.h1`
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const PlansContainerDiv = styled.div`
    display: flex;
    gap: 60px;
` 
export const PlanDiv = styled.div`
    position: ${(props:IProps) => props.active  ? `relative;
    ` : 'auto'};
    top: ${(props:IProps) => props.active  ? `-20px;
    ` : '0'};
    box-shadow:2px 2px 4px rgb(0 0 0 / 40%),-2px -2px 4px rgb(0 0 0 / 40%);
    background-color: #f1f1f1;
    height:550px;
    border-radius:25px;
`
export const PlanOverViewDiv=styled.div`
    background-color:${(props:IProps) => props.backgroundColor}; 
    padding: 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    text-align:center;
        > p:nth-child(1)
        {
            font-size: 16px;
            font-weight: 600;
        }
        > p:nth-child(2)
        {
            font-size: 13px;
        }
`

export const PlanBilling = styled.p`
    text-align:center;
    font-size: 12px;
        > span:nth-child(1) {
            font-size: 1em ;
            vertical-align: top;
        } 
        > span:nth-child(2){
            font-size: 35px ; 
            line-height: 25px;
        }
` 

export const PlanBenefits = styled.p`
    text-align:center;
    font-size: 14px;
    font-weight: 600;
`
export const PlanDetailsDiv=styled.span`
    background-color: #f1f1f1;
    height: 550px;
    border-radius: 25px;
    text-align: center;
        > p
        {
            font-size: 14px;
        }
`

export const CenteredBtn=styled(PrimaryButton)`
    margin-left: 80px;
`







