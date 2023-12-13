import ApprovalButton from "../../../components/items/approvalItems/ApprovalButton";
import BDWriteForm from "../../../components/form/approvalForm/BDWriteForm";
import {useEffect} from "react";
import {callEmployeeAPI} from "../../../apis/EmployeeAPICalls";
import {useDispatch, useSelector} from "react-redux";

function WriteBusinessDraft() {

    const dispatch = useDispatch();
    const {myPageInfo} = useSelector(state => state.memberReducer);

    useEffect(() => {
        dispatch(callEmployeeAPI())
    }, []);

    return(
        <>
                <h2 className="approval-title">업무기안서</h2>
                <ApprovalButton/>
            {
                myPageInfo &&
                <BDWriteForm myPageInfo={myPageInfo}/>
            }
        </>
    );

}

export default WriteBusinessDraft;