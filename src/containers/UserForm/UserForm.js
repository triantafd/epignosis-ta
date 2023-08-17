import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { formFields } from '../../formConfigurations/usersProfile';
import { dynamicValidationSchema } from '../../utils/dynamicValidation';
import { useLoader } from '../../context/loaderContext';
import { updateUserProfile } from '../../services/userProfiles';

const initialValuesFromConf = formFields.reduce((acc, field) => {
  acc[field.name] = field.defaultValue || '';
  return acc;
}, {})

const UserForm = ({ selectedUser, setUsers, setSelectedUser }) => {
  const [isFormEdited, setIsFormEdited] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState(initialValuesFromConf);
  const validationSchema = dynamicValidationSchema(formFields)
  const { wrappedWithloader } = useLoader()

  React.useEffect(() => {
    setIsFormEdited(false);
    if (selectedUser && Object.keys(selectedUser).length !== 0) {
      setInitialValues(selectedUser);
    }
  }, [selectedUser]);

  const handleCancel = (resetForm) => {
    resetForm(initialValues);
    setIsFormEdited(false);
  };

  const handleFieldChange = (fieldId, value, setFieldValue) => {
    setFieldValue(fieldId, value);
    if (!isFormEdited) {
      setIsFormEdited(true);
    }
  };

  return (
    <div className="justify-center relative py-4 md:flex-1 w-full">
      <div className="flex justify-center items-center md:px-4 h-full  flex-col">
        <div className="w-full h-full flex flex-col">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setIsFormEdited(false);
              setSubmitting(true);
              try {
                const wrappedUpdateFuncwithLoader = wrappedWithloader(async (values) => {
                  const response = await updateUserProfile(values)
                  return response;
                });
                const updatedUser = await wrappedUpdateFuncwithLoader(values);
                setUsers((previousUsers) => previousUsers.map((user) => user.id === updatedUser.id ? updatedUser : user))
                setSelectedUser(updatedUser)
              } catch (error) {
                console.log(error)
              }
              finally {
                setIsFormEdited(false);
              }
            }}
            enableReinitialize={true}
          >
            {({ handleSubmit, resetForm, isSubmitting, errors, touched, setFieldValue }) => (
              <Form onSubmit={handleSubmit} className='h-full'>
                <div className='h-[80%]  overflow-y-auto scrollbar-hidden-all '>
                  {formFields.map((field, index) => (
                    <div className="flex flex-col my-4 mx-4 " key={field.id}>
                      <label className="mb-1 text-xs text-gray-500" htmlFor={field.id}>
                        {field.label}
                      </label>
                      <Field
                        className="text-sm py-[6px] pl-[6px] border-2 border-[#ececec]"
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={(event) =>
                          handleFieldChange(field.name, event.target.value, setFieldValue)
                        }
                      />
                      {errors[field.name] && touched[field.name] && (
                        <div className="text-red-500 mt-1 text-xs visible">{errors[field.name]}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end sticky pt-6 mr-4">
                  {!isSubmitting && isFormEdited && (
                    <button
                      type="button"
                      className="btn btn-cancel"
                      onClick={() => handleCancel(resetForm)}
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn btn-save"
                    disabled={isSubmitting || !isFormEdited}
                  >
                    {isSubmitting ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div >
  );
};

export default UserForm;
