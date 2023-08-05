'use client'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Challenge = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const validationSchema = Yup.object({
    picture: Yup.mixed().required('Please upload a picture'),
    name: Yup.string().required('Please enter your name'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmittedData(values);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-auto mt-24">
      <div className="w-full max-w-md flex">
        <div className="w-3/3 border p-8 rounded-l-lg shadow-md">
          {!submittedData ? (
            <Formik
              initialValues={{
                picture: null,
                name: '',
                phoneNumber: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="picture" className="block text-gray-700 text-sm font-bold mb-2">
                      User Details
                    </label>
                    <input
                      type="file"
                      name="picture"
                      id="picture"
                      className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(event) => setFieldValue('picture', event.target.files[0])}
                    />
                    <ErrorMessage
                      name="picture"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                     Specify your Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      disabled={isSubmitting}
                    >
                      Save Data
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="w-1/3 p-8 rounded-r-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{submittedData.name} Information:</h2>
              <div className="mb-4">
                
                {submittedData.picture && (
                  <img
                    src={URL.createObjectURL(submittedData.picture)}
                    alt="Uploaded"
                    className="block w-full h-full my-2 rounded"
                  />
                )}
              </div>
              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Challenge;

