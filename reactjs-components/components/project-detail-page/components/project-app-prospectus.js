import React, {useState} from 'react';
import Modal from 'react-modal';
import { MobilePDFReader } from 'react-read-pdf'

export const ProjectAppProspectus = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="row row-buttons">
            <div className="col-lg-6 col-md-12 col-sm-12" id="button-buy">
                <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp" id="btn-invest">
                    <button className="btn btn-primary btn-detail-bottom" style={{width: "100%", boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14)"}}>
                        BELI VIA APP
                    </button>
                </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <button className="btn btn-outline-success btn-detail-bottom" onClick={()=>setShowModal(true)} style={{width: "100%"}}>
                    SHOW PROSPEKTUS
                </button>
            </div>
            <Modal
            isOpen={showModal}
            onRequestClose={()=>setShowModal(false)}
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1050,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '10px',
                  bottom: '10px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'none',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none'
                }
              }}
            >
                <MobilePDFReader url={props.prospectusLink} overflow={'none'} scale={'auto'} isShowFooter={false} isShowHeader={false}/>

            </Modal>
            
        </div>
    );
}
