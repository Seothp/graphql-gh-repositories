type Props = {
  message: string;
};

export const UnauthorizedErrorMessage = ({ message }: Props) => {
  return (
    <>
      <h4>{message}</h4>
      <div>Error while getting data from the server</div>
      <div>What to do?</div>
      <ul>
        <li>Check your internet connection</li>
        <li>Reload page</li>
        <li>
          <div>Check if you added a github token to sessionStorage</div>
          <div>Type command below in console. TOKEN - is your github token</div>
          <code>window.sessionStorage.setItem("gh-test-token", "TOKEN")</code>
        </li>
      </ul>
    </>
  );
};
