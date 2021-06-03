import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAdmins } from "../../Redux/Admin/adminActions";
// A router allows your application to navigate between different components, changing the browser URL


// Stateless components are simple functional component without having a local state
export function AdminRedux({ history, adminsData, fetchAdmins }) {
  useEffect(() => {
    if (sessionStorage.getItem("admin") != null) {
      alert(JSON.stringify('hello'));
      history.push("/reduxadmin");
    }

    fetchAdmins();
  }, []);

  return adminsData.loading ? (
    <h2>Loading</h2>
  ) : adminsData.error ? (
    <h2>{adminsData.error}</h2>
  ) : (
    <div className="container">

      <Link to="/logout" className="btn btn-primary mb-3">
        Logout
      </Link>

      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Admin Id</th>
            <th scope="col">Admin Name</th>
            <th scope="col">Admin Username</th>
          </tr>
        </thead>
        <tbody>

          {/* { The map() function is used to iterate over an array and manipulate or change data items. */}
          {adminsData.admins.map((admin, index) => (
            <tr>
              <td>{admin.adminId}</td>
              <td>{admin.adminName}</td>
              <td>{admin.adminUsername}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs
const mapStateToProps = (state) => {
  return {
    adminsData: state.admins,
  };
};

// the mapDispatchToProps argument is responsible for enabling a component to dispatch actions.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmins: () => dispatch(fetchAdmins()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRedux);