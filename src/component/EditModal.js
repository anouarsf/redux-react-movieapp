import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux'
import { updatetask } from '../action/action'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class EditModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      title: "",
    }
  }


  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

 

  render() {
    return (
      <div>
        <button className="btn-edit" onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <input type="text" class="form-control" id="title" name="" onChange={(e) => this.setState({ title: e.target.value })} />
          <button className="btn btn-outline-dark" onClick={this.closeModal}>close</button>
          <button className="btn" onClick={() => this.props.updatetask({ id: this.props.index, task: this.state.title })}>Update</button>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = (dispatch) => ({
  updatetask: (payload) => dispatch(updatetask(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditModal)