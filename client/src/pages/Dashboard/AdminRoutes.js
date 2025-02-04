import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import AdminStudentView from "../../components/StudentPublic/AdminStudentView";
import AdminCompanyView from "../../components/CompanyPublic/AdminCompanyView";
import AdminCompanyProjects from "../AdminCompanyProjects/AdminCompanyProjects";

const AdminRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
  
        <Route path={`${path}/CompanyProjects`} exact component={AdminCompanyProjects} />
        <Route path={`${path}/search/:id`} component={AdminStudentView} />
        <Route
          path={`${path}/projects/:project`}
          render={(props) => <AdminCompanyView {...props} />}
        />
      </Switch>
    </div>
  );
};

export default AdminRoutes;