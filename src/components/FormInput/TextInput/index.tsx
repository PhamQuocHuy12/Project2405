import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import TextField from "@mui/material/TextField";

type TextInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  defaultValue: PathValue<T, Path<T>> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
};

function TextInput<T extends FieldValues>({
  name,
  control,
  label,
  defaultValue,
  type,
}: TextInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value },
        fieldState: { error },
        // formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          sx={{ marginBottom: 3 }}
          type={type}
        />
      )}
    />
  );
}

export default TextInput;
