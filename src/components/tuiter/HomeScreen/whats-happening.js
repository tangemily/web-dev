// Citation: Code sourced from Prof. Annunziato's GitHub

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'/tuiter/images/gudetama-flower.jpg'}
                             className="rounded-circle me-2"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "transparent"}}
                                  onChange={(e) =>
                                      setNewTuit({...newTuit,
                                          tuit: e.target.value})}></textarea>

                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="fa-solid fa-chart-line me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={() =>
                            createTuit(dispatch, newTuit)}
                                className="btn btn-primary rounded-pill float-end">
                            Tuit
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;
