import React, { useState } from 'react';
import {
	Header,
	PlansContainerDiv,
	PlanDiv,
	PlanBilling,
	PlanBenefits,
	PlanOverViewDiv,
	PlanDetailsDiv,
	CenteredBtn
} from './PlansElements';
import { plansList, planComponentHeader } from '../../Global/Constant';
const Plans = () => {
	const [ data, setPlansList ] = useState(plansList);
	const handleClick = (index: number) => {
		let newPlansList = [ ...data ];
		newPlansList.forEach((plan) => {
			plan.isactive = false;
		});
		newPlansList[index].isactive = true;
		setPlansList(newPlansList);
	};
	const showRegisterBtn = (index: number) => {
		let newPlansList = [ ...data ];
		newPlansList[index].showHideBtn = true;
		setPlansList(newPlansList);
	};
	const hideRegisterBtn = (index: number) => {
		let newPlansList = [ ...data ];
		newPlansList[index].showHideBtn = false;
		setPlansList(newPlansList);
	};
	return (
		<div>
			<div>
				<Header>{planComponentHeader}</Header>
			</div>
			<PlansContainerDiv>
				{plansList.map((plan, index) => (
					<PlanDiv
						key={plan.Title}
						active={plan.isactive}
						onClick={(e) => handleClick(index)}
						onMouseEnter={(e) => showRegisterBtn(index)}
						onMouseLeave={(e) => hideRegisterBtn(index)}>
						<PlanOverViewDiv backgroundColor={plan.backgroundColor}>
							<p>{plan.Title}</p>
							<p>{plan.planOverview}</p>
							<PlanBilling>
								<span>{plan.planCurrency}</span>
								<span>{plan.planAmount}</span>
							</PlanBilling>
							<PlanBilling>{plan.planBilling}</PlanBilling>
						</PlanOverViewDiv>
						<PlanBenefits>Benefits</PlanBenefits>
						<PlanDetailsDiv>
							{plan.planBenefits.map((planbenefit) => <p>{planbenefit}</p>)}
							{plan.showHideBtn && <CenteredBtn type="submit" text="Register" allowDisabledFocus />}
						</PlanDetailsDiv>
					</PlanDiv>
				))}
			</PlansContainerDiv>
		</div>
	);
};

export default Plans;
