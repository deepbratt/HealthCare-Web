import TextField, { TextFieldProps } from "@mui/material/TextField";

const InputField: React.FC<TextFieldProps> = (props) => {
  const {
    value,
    fullWidth,
    placeholder,
    name,
    variant,
    size,
    error = null,
    onChange,
  } = props;
  return (
    <TextField
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...props}
    />
  );
};

InputField.defaultProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined",
};

export default InputField;
