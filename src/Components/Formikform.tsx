import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName : Yup.string()
        .max(15, 'Must be Upper Case')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      dateOfBirth: Yup.number()
        .required('Required'),
      streetAddress: Yup.string()
        .required('Required'),
      city: Yup.string()
        .required('Required'),
      state: Yup.string()
        .required('Required'),
      zipCode: Yup.string()
        .matches(/^\d{5}$/, 'Invalid zip code')
        .required('Required'),
      username: Yup.string()
        .max(8, 'Must be Upper Case')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be Upper Case and number')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

const [count, setCount] = useState <number>(0);

function handleClickNext() {
  setCount(revNum => {
    if (revNum === 2) return 2
    return revNum +1
  });
}
function handleClickPrevious() {
  setCount(revNum => {
    if (revNum === 0) return 0
    return revNum -1 
  });
}
  return (
    <form onSubmit={formik.handleSubmit}
      className='my-6'>
      {
        count === 0 && (

      <fieldset className='flex flex-col item-start text-2xl'>
        <legend className='text-3xl mb-8'>
          Personal Information
        </legend>
      <label htmlFor="fullName" className='text-left mt-3 '>Full Name</label>
      <input
        className='border-b-2'
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
        onBlur={formik.handleBlur}
        /> 
      {formik.touched.fullName && formik.errors.fullName ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.fullName}</p>
      ) : null}

      <label htmlFor="email" className='text-left mt-3'>Email Address</label>
      <input
        className='border-b-2'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.email}</p>
      ) : null}

      <label htmlFor="dateOfbirth" className='text-left mt-3'>Date of Birth</label>
      <input
        className='border-b-2'
        id="dateOfBirth"
        name="dateOfBirth"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
        onBlur={formik.handleBlur}
      />
      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.dateOfBirth}</p>
      ) : null}
        <div className='flex gap-5 my-3'>
          <button onClick={handleClickNext} 
          type="button" 
          className='text-center border-black border-solid border-2 w-20'
          >Next</button>
        </div>
      </fieldset>
        )
      }
      {
        count === 1 && (

      <fieldset className='flex flex-col item-start text-2xl'>
        <legend className='text-3xl mb-8'>
          Address Information
        </legend>
      <label htmlFor="streetAddress" className='text-left mt-3'>Street Address</label>
      <input
        className='border-b-2'
        id="streetAddress"
        name="streetAddress"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.streetAddress}
        onBlur={formik.handleBlur}
      /> 
      {formik.touched.streetAddress && formik.errors.streetAddress ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.streetAddress}</p>
      ) : null}

      <label htmlFor="city" className='text-left mt-3'>City</label>
      <input
        className='border-b-2'
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
        onBlur={formik.handleBlur}
      />
      {formik.touched.city && formik.errors.city ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.city}</p>
      ) : null}

      <label htmlFor="state" className='text-left mt-3'>State</label>
      <input
        className='border-b-2'
        id="state"
        name="state"
        type="state"
        onChange={formik.handleChange}
        value={formik.values.state}
        onBlur={formik.handleBlur}
      />
      {formik.touched.state && formik.errors.state ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.state}</p>
      ) : null}

      <label htmlFor="zipCode" className='text-left mt-3'>Zip Code</label>
      <input
        className='border-b-2'
        id="zipCode"
        name="zipCode"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.zipCode}
        onBlur={formik.handleBlur}
      />
      {formik.touched.zipCode && formik.errors.zipCode ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.zipCode}</p>
      ) : null}

        <div className='flex gap-5 my-3'>
          <button onClick={handleClickPrevious} type="button" className='text-center border-black border-solid border-2 w-40'>Previous</button>
          <button onClick={handleClickNext} type="button" className='text-center border-black border-solid border-2 w-20'>Next</button>
        </div>
      </fieldset>
        )
      }
      {
        count === 2 && (

      <fieldset className='flex flex-col item-start text-2xl'>
        <legend className='text-3xl mb-8'>
          Account Information
        </legend>
      <label htmlFor="username" className='text-left mt-3'>Username</label>
      <input
        className='border-b-2'
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        onBlur={formik.handleBlur}
      /> 
      {formik.touched.username && formik.errors.username ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.username}</p>
      ) : null}
          
      <label htmlFor="password" className='text-left mt-3'>Password</label>
      <input
        className='border-b-2'
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <p className='text-xs text-left text-red-600'>{formik.errors.password}</p>
      ) : null}

        <div className='flex gap-5 my-3'>
          <button onClick={handleClickPrevious} type="button" className='text-center border-black border-solid border-2 w-40'>Previous</button>
          <button type="submit" className='text-center border-black border-solid border-2 w-28'
          onClick={() => {
            alert("Thank you for your time!")
          }} >Submit</button>
        </div>
      </fieldset>
        )
      }
    </form>
  );
};
export default SignupForm