import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import {
  Button,
  InputLabel,
  MenuItem,
  Grid,
  FormControl,
  Paper,
  FormHelperText,
  Box,
  Typography,
  ThemeProvider,
} from '@material-ui/core';
import { useTheme, Theme } from '@material-ui/core/styles';
import { BounceLoader } from 'react-spinners';
import * as Yup from 'yup';

// const fields = [
//   {
//     name: 'email',
//     type: 'email',
//     label: 'Email',
//     initialValue: '',
//     componentType: 'TextField',
//   },
//   {
//     name: 'checked',
//     label: 'Checkbox label',
//     initialValue: '',
//     componentType: 'CheckboxWithLabel',
//   },
//   {
//     name: 'activity',
//     initialValue: '',
//     componentType: 'RadioGroup',
//     items: [
//       {
//         value: 'painting',
//         label: 'Painting',
//         disabled: false,
//       },
//       {
//         value: 'drawing',
//         label: 'Drawing',
//         disabled: false,
//       },
//       {
//         value: 'none',
//         label: 'None',
//         disabled: true,
//       },
//     ],
//   },
//   {
//     name: 'age',
//     initialValue: '',
//     componentType: 'Select',
//     inputProps: {
//       id: 'age-simple',
//     },
//     items: [
//       {
//         value: 10,
//       },
//       {
//         value: 20,
//       },
//       {
//         value: 30,
//       },
//     ],
//   },
// ];
type DynamicFormProps = {
  disableButtonOnLoad: boolean;
  fields: Array<object>;
  validationSchema: any;
  onSubmitForm: Function;
  title: string;
};

const DynamicFormStyle = {
  mainTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#00A4EC',
    textAlign: 'center',
  },
};

const DynamicForm = ({
  disableButtonOnLoad = true,
  fields = [],
  validationSchema = Yup.object(),
  onSubmitForm = () => {},
  title = '',
}: DynamicFormProps) => {
  const theme: Theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Box p={4}>
          {title && (
            <Box pb={2}>
              <Typography variant="h1" style={{ textAlign: 'center' }}>
                {title}
              </Typography>
            </Box>
          )}
          <Formik
            initialValues={fields.reduce((accumulator, element: any = {}) => {
              accumulator = {
                ...accumulator,
                [element.name]: element.initialValue,
              };
              return accumulator;
            }, {})}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await onSubmitForm(values);
              setTimeout(() => {
                setSubmitting(false);
              }, 2000);
            }}
            isInitialValid={!disableButtonOnLoad}
          >
            {({ errors, isSubmitting, submitForm, isValid, touched }) => (
              <Form style={{ padding: 16 }}>
                {isSubmitting && (
                  <Box height={240} display="flex" alignItems="center">
                    <Grid container alignItems={'center'} justify={'center'}>
                      <BounceLoader size={40} color={'#00A4EC'} />
                    </Grid>
                  </Box>
                )}
                {!isSubmitting && (
                  <Grid container>
                    {fields.map((item: any = {}, i) => {
                      if (item.componentType === 'TextField') {
                        return (
                          <Grid
                            item
                            xs={item.fullWidth ? 12 : 6}
                            key={`item-${item.name}=${i}`}
                          >
                            <Field
                              multiline={item.multiline}
                              component={TextField}
                              name={item.name}
                              type={item.type}
                              label={item.label}
                              style={{ width: '100%' }}
                            />
                            <br />
                          </Grid>
                        );
                      }

                      if (item.componentType === 'Select') {
                        return (
                          <Grid
                            item
                            xs={item.fullWidth ? 12 : 6}
                            key={`item-${item.name}=${i}`}
                          >
                            <FormControl style={{ width: '100%' }}>
                              {item.hasOwnProperty('label') && (
                                <InputLabel
                                  className={
                                    errors.hasOwnProperty('country') &&
                                    touched.hasOwnProperty('country')
                                      ? 'Mui-error'
                                      : ''
                                  }
                                  htmlFor={item.inputProps.id}
                                >
                                  {item.label}
                                </InputLabel>
                              )}
                              <Field
                                className={
                                  errors.hasOwnProperty('country') &&
                                  touched.hasOwnProperty('country')
                                    ? 'Mui-error'
                                    : ''
                                }
                                component={Select}
                                name={item.name}
                                inputProps={item.inputProps}
                                children={item.items.map((selectItem, i) => (
                                  <MenuItem
                                    key={`selectItem-${selectItem.name}-${i}`}
                                    value={selectItem.value}
                                  >
                                    {selectItem.name}
                                  </MenuItem>
                                ))}
                              ></Field>
                              {errors.hasOwnProperty('country') &&
                                touched.hasOwnProperty('country') && (
                                  <FormHelperText required error>
                                    Required
                                  </FormHelperText>
                                )}
                            </FormControl>
                            <br />
                          </Grid>
                        );
                      }
                      return 0;
                    })}

                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      disabled={!isValid}
                      onClick={submitForm}
                      style={{
                        marginTop: '1rem',
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                )}
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default DynamicForm;
