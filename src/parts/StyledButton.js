import { Button } from "@chakra-ui/react";
import { forwardRef } from "react";

const StyledButton = forwardRef((props, ref) => {
  return <Button px="8" py="5" borderRadius="full" ref={ref} {...props} />;
});

StyledButton.displayName = "StyledButton";

export default StyledButton;
