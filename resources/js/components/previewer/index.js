import React, { Component } from 'react'
import { connect } from 'react-redux'

class Previewer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { previewDoc } = this.props;

    return (
      <div id="content">
        <div className="document-header">
          {previewDoc.index ? `Document #${previewDoc.index}` : "Select or Upload Document to Preview"}
        </div>
        <div className="file-viewer">
          {
            previewDoc.title ?
              <iframe allowFullScreen src={`storage/attachments/${previewDoc.title}`} />
              : "No Document"
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { docReducer } = state;
  return {
    previewDoc: docReducer.previewDoc
  }
}

export default connect(mapStateToProps, null)(Previewer);