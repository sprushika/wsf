import React, { useState } from 'react';
import {
	Header,
	PlansContainerDiv,
	PlanDiv,
	PlanBilling,
	PlanOverViewDiv,
	PlanDetailsDiv,
	CenteredBtn
} from './PlansElements';
import { plansList } from '../../Global/Constant';
const Plans = () => {
	const [ data, setPlansList ] = useState(plansList);
	const handleClick = (index: number) => {
		debugger;
		let newPlansList = [ ...data ];
		newPlansList.forEach((plan) => {
			plan.isactive = false;
		});
		newPlansList[index].isactive = true;
		setPlansList(newPlansList);
	};
	const showResgisterBtn = (index: number) => {
		let newPlansList = [ ...data ];
		newPlansList[index].showHideBtn = true;
		setPlansList(newPlansList);
	};
	const hideResgisterBtn = (index: number) => {
		let newPlansList = [ ...data ];
		newPlansList[index].showHideBtn = false;
		setPlansList(newPlansList);
	};

	return (
		<div>
			<div>
				<Header>Our Pricing Model</Header>
			</div>

			<PlansContainerDiv>
				{plansList.map((plan, index) => (
					<PlanDiv
						key={plan.Title}
						active={plan.isactive}
						onClick={(e) => handleClick(index)}
						onMouseEnter={(e) => showResgisterBtn(index)}
						onMouseLeave={(e) => hideResgisterBtn(index)}>
						<PlanOverViewDiv style={{ backgroundColor: plan.backgroundColor }}>
							<p>{plan.Title}</p>
							<p>{plan.planOverview}</p>
							<PlanBilling>
								<span>{plan.planCurrency}</span>
								<span>{plan.planAmount}</span>
							</PlanBilling>
							<PlanBilling>{plan.planBilling}</PlanBilling>
						</PlanOverViewDiv>
						<PlanDetailsDiv>
							{plan.planBenefits.map((planbenefit) => <p>{planbenefit}</p>)}
							{plan.showHideBtn ? <CenteredBtn type="submit" text="Register" allowDisabledFocus /> : null}
						</PlanDetailsDiv>
					</PlanDiv>
				))}
			</PlansContainerDiv>
		</div>
	);
};

export default Plans;
