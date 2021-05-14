import { PrimaryButton, Stack, TextField, values } from '@fluentui/react';
import { useForm } from 'react-hook-form';
import { ErrorMsg, FormContainer } from './ContactUsElements';
import {mailConstants} from '../../Global/Constant';


import emailjs from 'emailjs-com';
import React from 'react';
type FormData = {
	fullName: string;
	mobileNumber: number;
	emailID: string;
	userQuery: string;
};
const ContactUs = (props: any) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  var templateParams = {
    to_name: 'xyz',
    from_name: 'abc',
    message_html: 'Please Find out the attached file'
  };
  
	const onSubmit = (data: FormData,e:any) => {
   console.log(data);
   console.log(e.target);
   data.fullName = '';
   reset();
    e.target.reset();

    e.preventDefault();

    emailjs.sendForm(mailConstants.serviceID, mailConstants.templateID, e.target, mailConstants.userID)
      .then((result) => {
          console.log(result);
          alert('Mail sent')
      }, (error) => {
          console.log(error.text);
      });
    
  };

	return (
    <FormContainer 
    // onReset={reset(onReset)} 
    onSubmit={handleSubmit(onSubmit)}>
      <Stack>
			<TextField type="text" label="Name" errorMessage={errors.fullName?.message} {...register('fullName', {  required: "Name is Mandatory"})} />
		   
			<TextField
				type="number"
				label="Mobile No."
        errorMessage={errors.mobileNumber?.message}
				{...register('mobileNumber', { required: "Invalid mobile number", minLength: 10, maxLength: 10 })}
			/>
	

			<TextField
				type="text"
				label="Email ID"
        errorMessage={errors.emailID?.message}
				{...register('emailID', {
					pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, message: 'Enter a valid Email ID' },
					required: 'Email ID is Mandatory'
				})}
			/>
      </Stack>
			<TextField
				multiline
				rows={3}
				placeholder="Type your query"
				label="Input your Inquiry"
        errorMessage={errors.userQuery?.message}
				{...register('userQuery', { required: "Query is Mandatory" })}
			/>
        <Stack horizontal horizontalAlign="center">
			<PrimaryButton type="submit" text="Contact Us" allowDisabledFocus />
      {/* <PrimaryButton type="submit" text="Contact Us" allowDisabledFocus /> */}
      </Stack>
		</FormContainer>
	);
};

export default ContactUs;