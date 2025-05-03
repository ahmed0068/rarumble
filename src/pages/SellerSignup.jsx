import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { getData } from 'country-list';
import "../public/SellerSignup.css"; // Add your CSS back!

const countries = getData().map((country) => ({
  value: country.code,
  label: country.name,
}));

function SellerSignup() {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <h1 className="form-title">Enter your details</h1>

        {/* First Name */}
        <div className="input-group">
          <label>First Name</label>
          <input 
            type="text"
            {...register("fname", { required: "First name is required" })}
            className="input-field"
          />
          {errors.fname && <p className="error-message">{errors.fname.message}</p>}
        </div>

        {/* Middle Name */}
        <div className="input-group">
          <label>Middle Name (if present)</label>
          <input 
            type="text"
            {...register("mname")}
            className="input-field"
          />
        </div>

        {/* Last Name */}
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            {...register("lname", { required: "Last name is required" })}
            className="input-field"
          />
          {errors.lname && <p className="error-message">{errors.lname.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="input-group">
          <label>Date of Birth</label>
          <div className="dob-group">
            <input
              type="text"
              placeholder="Year"
              {...register('year', { required: 'Year is required' })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Month"
              {...register('month', { required: 'Month is required' })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Day"
              {...register('day', { required: 'Day is required' })}
              className="input-field"
            />
          </div>
          {(errors.year || errors.month || errors.day) && <p className="error-message">Complete date of birth is required</p>}
        </div>

        {/* Nationality */}
        <div className="input-group">
          <label>Nationality</label>
          <Controller
            name="nationality"
            control={control}
            rules={{ required: "Nationality is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select options={countries} {...field} className="select-field" />
                {error && <p className="error-message">{error.message}</p>}
              </>
            )}
          />
        </div>

        {/* Country */}
        <div className="input-group">
          <label>Country</label>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select options={countries} {...field} className="select-field" />
                {error && <p className="error-message">{error.message}</p>}
              </>
            )}
          />
        </div>

        {/* Street Address */}
        <div className="input-group">
          <label>Street Address</label>
          <input
            type="text"
            {...register("street", { required: "Street address is required" })}
            className="input-field"
          />
          {errors.street && <p className="error-message">{errors.street.message}</p>}
        </div>

        {/* City */}
        <div className="input-group">
          <label>City</label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            className="input-field"
          />
          {errors.city && <p className="error-message">{errors.city.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="button-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default SellerSignup;
