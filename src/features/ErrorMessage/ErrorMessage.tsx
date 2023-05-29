import type { ApolloError } from "@apollo/client";

import { ErrorMessageContainer } from "./ErrorMessageContainer";
import { UnauthorizedErrorMessage } from "./messages/UnauthorizedErrorMessage";

type Props = {
  error: ApolloError;
};

export const ErrorMessage = ({ error }: Props) => {
  if (error?.message.includes("401")) {
    return (
      <ErrorMessageContainer>
        <UnauthorizedErrorMessage message={error.message} />
      </ErrorMessageContainer>
    );
  }

  return (
    <ErrorMessageContainer>
      Uncaught error
    </ErrorMessageContainer>
  );
};
