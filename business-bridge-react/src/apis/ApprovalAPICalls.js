import async from "async";
import {authRequest, request} from "./Api";
import {
    getAppEmployees,
    getApproveApps, getApproveAppsByStatus, getBusinessDraftDetail,
    getDraftApps,
    getDraftAppsByStatus, getDraftCollect, getExpenseReportDetail,
    getReceiveApps,
    getReceiveAppsByStatus, getTempStorage,
    getUpcomingApps, postBusinessDraft, postExpenseReport
} from "../modules/ApprovalModule";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

/* 받은 결재 목록 조회 - 전체 */
export const callReceiveApprovalsListAPI = ({currentPage}) => {

    return async (dispatch, getStatus) => {

        const result
            = await authRequest.get( `/approval/receive-approvals/all?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => {
            console.log(e);
        });

        console.log('받은 결재 목록 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getReceiveApps(result));
        }
    }
}

/* 받은 결재 목록 조회 - 상태별 */
export const callReceiveAppsByStatusAPI = ({currentPage, approvalStatus}) => {

    console.log("요청 URL : " + `/approval/receive-approvals/${approvalStatus}?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/receive-approvals/${approvalStatus}?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('받은 결재 목록 상태별 : ', result);

        if(result?.status === 200) {
            dispatch(getReceiveAppsByStatus(result));
        }
    }
}

/* 받을 결재 목록 조회 - 전체 */
export const callUpcomingApprovalsListAPI = ({currentPage}) => {

    return async (dispatch, getStatus) => {

        const result
            = await authRequest.get( `/approval/upcoming-approvals?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => {
            console.log(e);
        });

        console.log('받을 결재 목록 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getUpcomingApps(result));
        }
    }
}

/* 기안한 문서 목록 조회 - 전체 */
export const callDraftAppsAPI = ({currentPage}) => {

    console.log("요청 URL : " + `/approval/draft-docs/all?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/draft-docs/all?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('기안한 문서 목록 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getDraftApps(result));
        }
    }
}

/* 기안한 문서 목록 조회 - 상태별 */
export const callDraftAppsByStatusAPI = ({currentPage, docStatus}) => {

    console.log("요청 URL : " + `/approval/draft-docs/${docStatus}?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/draft-docs/${docStatus}?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('기안한 문서 목록 상태별 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getDraftAppsByStatus(result));
        }
    }
}

/* 기안 회수함 목록 조회 */
export const callDraftCollectAPI = ({currentPage}) => {

    console.log("요청 URL : " + `/approval/collect-draft-docs?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/collect-draft-docs?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('기안 회수 목록 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getDraftCollect(result));
        }
    }
}

/* 임시 저장함 목록 조회 */
export const callTempStorageAppsAPI = ({currentPage}) => {

    console.log("요청 URL : " + `/approval/tempSave-draft-docs?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/tempSave-draft-docs?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('임시 저장 목록 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getTempStorage(result));
        }
    }
}

/* 결재한 문서 목록 조회 - 전체 */
export const callApproveAppsAPI = ({currentPage}) => {

    console.log("요청 URL : " + `/approval/approve-docs/all?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/approve-docs/all?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('결재한 문서 목록 전체 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getApproveApps(result));
        }
    }
}

/* 결재한 문서 목록 조회 - 상태별 */
export const callApproveAppsByStatusAPI = ({currentPage, docStatus}) => {

    console.log("요청 URL : " + `/approval/approve-docs/${docStatus}?page=${currentPage}`);
    return async (dispatch, getState) => {
        const result
            =await authRequest.get(`/approval/approve-docs/${docStatus}?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => { console.log(e); });

        console.log('결재한 문서 목록 상태별 조회 결과 : ', result);

        if(result?.status === 200) {
            dispatch(getApproveAppsByStatus(result));
        }
    }
}

/* 업무기안서 상세 조회 */
export const callBusinessDraftDetailAPI = ({approvalCode}) => {

    return async (dispatch, getState) => {
        const result
            = await request('GET',`/approval/document/businessDraft/${approvalCode}`);

        console.log('업무 기안서 상세 조회 : ', result);

        if(result?.status === 200) {
            dispatch(getBusinessDraftDetail(result));
        }
    }
}

/* 지출결의서 상세 조회 */
export const callExpenseReportDetailAPI = ({approvalCode}) => {

    return async (dispatch, getState) => {
        const result
            = await request('GET',`/approval/document/expenseReport/${approvalCode}`);

        console.log('지출결의서 상세 조회 : ', result);

        if(result?.status === 200) {
            dispatch(getExpenseReportDetail(result));
        }
    }
}

/* 결재자 모달 창 직원 조회 */
export const callAppEmployeeAPI = () => {

    return async(dispatch, getState) => {
        const result = await authRequest.get('/approval/allEmployeeList');

        console.log('결재자 직원 전체 조회 : ', result);

        if(result?.status === 200) {
            dispatch(getAppEmployees(result));
        }
    }
}

/* 업무 기안서 등록 */
export const callRegistBusinessDraftAPI = ({ form, files, docStatus }) => {

    form.docStatus = docStatus;
    const formData = new FormData();
    formData.append("businessDraftRequest", new Blob([JSON.stringify(form)], {type : 'application/json'}));
    Array.from(files).forEach(file =>  formData.append("attachFiles", file));

    return async (dispatch, getState) => {
        const result = await authRequest.post('/approval/regist-business-draft', formData);
        console.log('업무기안서 등록 result : ', result);

        if(result.status === 201){
            dispatch(postBusinessDraft());
        }
    }
}

/* 지출 결의서 등록 */
export const callRegistExpenseReportAPI = ({ form, files, docStatus}) => {

    form.docStatus = docStatus;

    const formData = new FormData();
    formData.append("expenseReportRequest",  new Blob([JSON.stringify(form)], {type : 'application/json'}));
    Array.from(files).forEach(file => formData.append("attachFiles", file));

    return async (dispatch, getState) => {
        const result = await authRequest.post('/approval/regist-expense_report', formData);
        console.log('지출결의서 등록 result : ', result);

        if(result.status === 201){
            dispatch(postExpenseReport());
        }
    }
}
