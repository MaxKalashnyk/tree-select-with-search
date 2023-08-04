import { Button as MuiButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { NestedSingleSelect } from './components/NestedSingleSelect';

// Update this interface according to your form and move it outside this file
interface FormData {
  locations: {
    id: number;
    city: string;
    country: string;
    name: string;
  } | null;
}

const defaultValues = {
  locations: null,
};

export const Form = () => {
  const [result, setResult] = useState<FormData | null>(null);
  const methods = useForm<FormData>({
    defaultValues,
    // resolver: yupResolver(schema), TODO: update resolver here
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit = (data) => {
    console.log('data', data);
    setResult(data);
  };

  const locationValue = watch('locations');

  const locations = [
    {
      id: 1,
      city: 'Berlin',
      country: 'Germany',
      name: 'Test 1',
    },
    {
      id: 2,
      city: 'WASHINGTON, DC',
      country: 'USA',
      name: 'Test 2',
    },
    {
      id: 3,
      city: 'WASHINGTON, DC',
      country: 'USA',
      name: 'Test 3',
    },
    {
      id: 4,
      city: 'Tel Aviv',
      country: 'Israel',
      name: 'Test 4',
    },
    {
      id: 5,
      city: 'Warsaw',
      country: 'Poland',
      name: 'Test 5',
    },
    {
      id: 6,
      city: 'London',
      country: 'Great Britain',
      name: 'Test 6',
    },
    {
      id: 7,
      city: 'UTRECHT',
      country: 'Netherlands',
      name: 'Test 7',
    },
    {
      id: 8,
      city: 'Dusseldorf',
      country: 'Germany',
      name: 'Test 8',
    },
    {
      id: 9,
      city: 'Kyiv',
      country: 'Ukraine',
      name: 'Test 9',
    },
    {
      id: 11,
      city: 'Miami',
      country: 'USA',
      name: 'Test 10',
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack width="400px" margin="auto">
        <Stack direction="row" mb={2}>
          <NestedSingleSelect
            id="locations"
            name="locations"
            control={control}
            option={locationValue}
            options={locations}
            inputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <MuiButton type="submit" variant="contained">
            Submit
          </MuiButton>
        </Stack>
        <Stack>
          <Typography>Form result:</Typography>
          <code>{JSON.stringify(result)}</code>
        </Stack>
      </Stack>
    </form>
  );
};
