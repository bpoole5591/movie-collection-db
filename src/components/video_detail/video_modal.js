import React from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';

const VideoModal = (props) => (    
    <Modal
        isOpen={!!props.movieSelected} //!!props.movieSelected
        contentLabel="Movie Detail"    
    >
    {props.detail && console.log(props.detail.Title)}  
        <h3>Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. </h3>
        <button onClick={props.handleCloseDetail}>Close Detail</button>
  
    </Modal>
  );

  function mapStateToProps({ detail }) {
      console.log();
    //console.log(typeof movie);
    return { detail };
  }
  
  // REDUX EXPORT

export default connect(mapStateToProps)(VideoModal);
