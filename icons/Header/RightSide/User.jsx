
const UserIcon = (props) => {
  return (
    <svg
      height="20px"
      width="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      className={`fill-current ${props.color}`}>
      <path
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4c2.2 0 4 2.2 4 5s-1.8 5-4 5-4-2.2-4-5 1.8-5 4-5zm6.6 15.5C16.9 21 14.5 22 12 22s-4.9-1-6.6-2.5c-.4-.4-.5-1-.1-1.4 1.1-1.3 2.6-2.2 4.2-2.7.8.4 1.6.6 2.5.6s1.7-.2 2.5-.6c1.7.5 3.1 1.4 4.2 2.7.4.4.4 1-.1 1.4z"
        fill="currentColor"></path>
    </svg>
  );
};
export default UserIcon;
