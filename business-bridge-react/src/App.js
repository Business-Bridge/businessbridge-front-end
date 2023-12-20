import './css/Sales.css';
import './css/loginform.css';
import './css/Header.css';
import './css/MyPage.css';
import './css/EmployeeRegistrationNavbar.css'
import './css/approval.css';
import './css/AddressBook.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/businessbridge/employee/Login";

import FindPassword from "./pages/businessbridge/employee/FindPassword";
import ProtectedRoute from "./components/router/ProtectedRoute";
import Error from "./pages/error/Error";
import MyPage from "./pages/businessbridge/employee/MyPage";
import EmployeeRegistrationLayout from "./layouts/EmployeeRegistrationLayout";
import EmployeeRegistrationList from "./pages/businessbridge/employee/EmployeeRegistrationList";
import SalesLayout from "./layouts/SalesLayout";
import SalesList from "./pages/businessbridge/sales/SalesList";
import SalesDetail from "./pages/businessbridge/sales/SalesDetail";
import SalesRegist from "./pages/businessbridge/sales/SalesRegist";
import SalesModify from "./pages/businessbridge/sales/SalesModify";
import SalesStatistics from "./pages/businessbridge/sales/SalesStatistics";
import ApprovalLayout from "./layouts/ApprovalLayout";
import AppMain from "./pages/businessbridge/approval/AppMain";
import ReceiveApps from "./pages/businessbridge/approval/ReceiveApps";
import ReceiveAppsByStatus from "./pages/businessbridge/approval/ReceiveAppsByStatus";
import UpcomingApps from "./pages/businessbridge/approval/UpcomingApps";
import AppDetail from "./pages/businessbridge/approval/AppDetail";
import DraftApps from "./pages/businessbridge/approval/DraftApps";
import DraftAppsByStatus from "./pages/businessbridge/approval/DraftAppsByStatus";
import DraftCollect from "./pages/businessbridge/approval/DraftCollect";
import TempStorageApps from "./pages/businessbridge/approval/TempStorageApps";
import ApproveApps from "./pages/businessbridge/approval/ApproveApps";
import ApproveAppsByStatus from "./pages/businessbridge/approval/ApproveAppsByStatus";
import ERWriteForm from "./components/form/approvalForm/ERWriteForm";
import WriteBusinessDraft from "./pages/businessbridge/approval/Write-BusinessDraft";
import AddressBookMain from "./pages/businessbridge/addressBook/AddressBookMain";
import AddressBookLayout from "./layouts/AddressBookLayout";
import AddressBookDepartment from "./pages/businessbridge/addressBook/AddressBookDepartment";
import AddressDetail from "./pages/businessbridge/addressBook/AddressDetail";
import AddressAdminItem from "./components/items/AddressAdminItem";
import ProductManagement from "./pages/businessbridge/products/admin/ProductManagement";
import ProductLayout from "./layouts/ProductsLayout";
import React from "react";
import CategoryMain from "./pages/businessbridge/products/employee/CategoryMain";
import ProductRegist from "./pages/businessbridge/products/admin/ProductRegist";
import ProductMain from "./pages/businessbridge/products/employee/ProductMain";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ProtectedRoute loginCheck={true}><Layout/></ProtectedRoute> }>
                <Route index element={<tMain/>}/>
                {/* 마이페이지*/}
                <Route path="emp/employee/mypage" element={  <MyPage/> }/>
                <Route path="emp/employee" element={ <EmployeeRegistrationLayout/>}>
                    {/*<Route path="registrationList" element={ <EmployeeRegistration/>}/> */}
                </Route>
                <Route path="sales" element={<SalesLayout/>}>
                    <Route index element={ <Navigate to="/sales/salesList/0" replace/>}/>
                    <Route path="salesList/:salesStatus" element={ <SalesList/> }/>
                    <Route path=":salesCode" element={ <SalesDetail/> }/>
                    <Route path="sales-regist" element={ <SalesRegist/> }/>
                    <Route path="sales-modify/:salesCode" element={ <SalesModify/> }/>
                    <Route path="salesStatistics" element={ <SalesStatistics/> }/>
                </Route>
                <Route path="sales" element={<SalesLayout/>}>
                    <Route index element={ <Navigate to="/sales/salesList/1" replace/>}/>
                    <Route path="salesList/:salesStatus" element={ <SalesList/> }/>
                    <Route path=":salesCode" element={ <SalesDetail/> }/>
                </Route>
                {/* == 전자결재 시작 == */}
                <Route path="/approval"element={<ApprovalLayout/>}>
                    <Route path="home" element={<AppMain/>}/>
                    <Route path="receive-approvals/all" element={<ReceiveApps/>}/>
                    <Route path="receive-approvals/:approvalStatus" element={<ReceiveAppsByStatus/>}/>
                    <Route path="upcoming-approvals" element={<UpcomingApps/>}/>
                    <Route path="draft-approvals/all" element={<DraftApps/>}/>
                    <Route path="draft-approvals/:docStatus" element={<DraftAppsByStatus/>} />
                    <Route path="draft-collects" element={<DraftCollect/>}/>
                    <Route path="temp-storages" element={<TempStorageApps/>}/>
                    <Route path="approve-approvals/all" element={<ApproveApps/>}/>
                    <Route path="approve-approvals/:docStatus" element={<ApproveAppsByStatus/>}/>

                    <Route path="document/:approvalCode" element={<AppDetail/>} />
                    <Route path="write">
                        <Route path="businessDraft" element={<WriteBusinessDraft/>}/>
                        <Route path="expenseReport" element={<ERWriteForm/>}/>
                    </Route>
                </Route>
                {/* == 전자결재 끝 == */}
                {/* == 상품관리 == */}
                <Route path="products" element={<ProtectedRoute loginCheck={true}><ProductLayout/></ProtectedRoute>}>
                    <Route path="employee" element={<ProtectedRoute loginCheck={true}><ProductMain/></ProtectedRoute>}/>
                    <Route path="management/productState/:productState" element={<ProtectedRoute authCheck={true}><ProductManagement/></ProtectedRoute>} />
                    <Route path="categories/:productCategory" element={<CategoryMain/>}/>
                    <Route path="regist" element={<ProtectedRoute authCheck={true}><ProductRegist/></ProtectedRoute>}/>


                </Route>
                {/* == 상품관리 끝== */}
            </Route>

            <Route path="/emp/employee">
                <Route path="login" element={ <ProtectedRoute loginCheck={false}><Login/></ProtectedRoute> }/>
                <Route path="findpassword" element={ <ProtectedRoute loginCheck={false}><FindPassword/></ProtectedRoute> }/>
            </Route>

            <Route path="addressBook" element={ <ProtectedRoute loginCheck={true}><AddressBookLayout/></ProtectedRoute>}>
                <Route path="main" element={ <ProtectedRoute loginCheck={true}> <AddressBookMain/> </ProtectedRoute>}/>
                <Route path="department/:departmentCode" element={ <AddressBookDepartment/> }/>
                <Route path=":emplyCode" element={ <AddressDetail/> }/>
                <Route
                    path="addressAdmin/:emplyCode" element={<ProtectedRoute authCheck={true}> <AddressAdminItem/> </ProtectedRoute>}/>
            </Route>

            <Route path="/*" element={<Error/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
