import React, { Component } from 'react'
import axios from "axios"
import { connect } from 'react-redux'
import { getDocs, setPreviewDoc } from "../../store/actions/docActions"

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeClassIndex: ''
    }

    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleViewer = this.handleViewer.bind(this);
  }

  componentDidMount() {
    this.props.getDocs();
  }

  toggleActiveClass(index) {
    this.setState({
      activeClassIndex: index
    });
  }

  handleFileUpload(e) {
    let formData = new FormData();
    formData.append('document', e.target.files[0]);
    axios.post('api/upload', formData, { headers: { 'content-type': 'multipart/form-data' } })
      .then((response) => {
        this.props.getDocs();
      });
  }

  handleViewer(index, docTitle) {
    let docInfo = {
      title: docTitle,
      index: index + 1
    }
    this.props.setPreviewDoc(docInfo);
  }

  render() {

    const { docs } = this.props;
    const { activeClassIndex } = this.state;

    return (
      <nav id="sidebar">

        <div className="sidebar-header border-bottom">
          <span className="file-text">FILES</span>
          <input type="file" className="fileControl" id="file" onChange={this.handleFileUpload} />
          <label className="float-right upload-text" htmlFor="file">
            Upload <img src="images/upload_icon.png" />
          </label>
        </div>

        <div className="p-2">
          <ul className="list-unstyled components">
            {
              docs.map((doc, index) => {
                return (
                  <li key={index} className={activeClassIndex === index ? "active" : ""} onClick={() => this.toggleActiveClass(index)}>
                    <a onClick={() => this.handleViewer(index, doc.file_name)}>
                      <div className="file-title">
                        <span className="name">{`Document #${index + 1}`}</span>
                        <br />
                        <span className="user">Me, Dustin</span>
                      </div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {

  const { docReducer } = state;
  return {
    docs: docReducer.docs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDocs: () => dispatch(getDocs()),
    setPreviewDoc: (data) => dispatch(setPreviewDoc(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);