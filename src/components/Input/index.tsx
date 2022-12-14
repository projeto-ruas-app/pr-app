import { Input as NativeBaseInput, IInputProps } from "native-base";

const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      bg="gray.100"
      height={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      color="#000"
      placeholderTextColor="gray.300"
      {...rest}
      _focus={{
        borderWidth: 1,
        borderColor: "gray.500",
        bg: "gray.700",
      }}
    />
  )
}

export default Input;