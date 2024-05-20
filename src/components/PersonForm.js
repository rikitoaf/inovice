import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const PersonForm = () => {
  const { control, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Render the list of people */}
      <ul>
        <Controller
          name="people"
          control={control}
          render={({ field }) => (
            <>
              {field.map((person, index) => (
                <li key={index}>
                  <input
                    {...register(`people[${index}].name`)}
                    placeholder="Name"
                  />
                  <input
                    {...register(`people[${index}].age`)}
                    placeholder="Age"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    {...register(`people[${index}].image`)}
                  />
                </li>
              ))}
            </>
          )}
        />
      </ul>

      <button type="submit">Submit</button>
    </form>
    </>
    
  );
};

export default PersonForm;
