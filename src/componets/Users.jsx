import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  // to use and update search params(same as query strings), react provides a hook called useSearchParams(). this hook is just like useState except that the value is stored iin the URL while the value for useState is stored in memory
  //this hook returns an array whose first element is an object(that contains all the query strings in a key:value pair) and a setter function to update the search params
  //this hook gives you access to fetch or update the search params, then depending on the value of object in time, you can conditionally render your components

  /*
        also note that you can type in query strings in the url and the searchParams object will be updated to those new values
        you can also add a button to the components that when clicked will call the setSearchParams method to update the searchParams object(which will update the url)

        STEPS
        import the useSearchParmac() hook
        call it and use the returned values accordingly
        update the object by getting one or more of the components to perform an action
        get the current value of the object and conditionally render the components based on that value
    */
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active"; //the query string key is filter and its value is active ==> ?filter=active
  return (
    <div>
      <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
      </div>
      {/* for the nested routes. so that the parent component can display the child components when the url is matched*/}
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {/* based on the value of the filter, conditionally render the components */}
      {showActiveUsers ? (
        <h1>Showing Active Users</h1>
      ) : (
        <h1>Showing All Users</h1>
      )}
    </div>
  );
};

export default Users;
