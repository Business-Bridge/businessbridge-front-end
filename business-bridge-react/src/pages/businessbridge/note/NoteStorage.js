import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    callNoteStorageListAPI
} from "../../../apis/NoteApiCalls";
import PagingBar from "../../../components/common/PagingBar";
import {useNavigate} from "react-router-dom";
import NoteList from "../../../components/lists/NoteList";
import {ToastContainer} from "react-toastify";
import NoteStorageList from "../../../components/lists/NoteStorageList";


function NoteStorage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {note} = useSelector(state => state.noteReducer);

    console.log('note:', note);

    useEffect(() => {
        dispatch(callNoteStorageListAPI({currentPage}));
    }, [dispatch, currentPage]);


    return (
        <>
            <div className="note-div">
                <div className="note-wrapper">
                    <h1 className="note-h1">중요 쪽지함</h1>
                </div>
                <hr/>
                <div className="noteList">
                    <div className="noteListHeader">보낸사람</div>
                    <div className="noteListHeader">부서</div>
                    <div className="noteListHeader">제목</div>
                    <div className="noteListHeader">내용</div>
                    <div className="noteListHeader">날짜</div>
                </div>
                <hr/>

                <>
                    {note
                        &&
                        <NoteStorageList data={note.data}/>
                    }
                </>

                {note && (
                    <div className="paging-bar-container">
                        <PagingBar pageInfo={note.pageInfo} setCurrentPage={setCurrentPage}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default NoteStorage;