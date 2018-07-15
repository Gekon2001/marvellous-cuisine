import React from 'react';
import Dropzone from 'react-dropzone';
import utils from 'Utils';

const UPLOAD_STATUS = {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
};

export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      images: []//{ uploaded, uploading, error }
    };
  }

  onDrop(acceptedFiles) {
    let { images, uploading } = this.state;
    // images = images.slice(0);
    acceptedFiles.forEach(file => {
      images.push({ uploadStatus: UPLOAD_STATUS.NEW, file });
    });

    console.log(images);
    this.setState(Object.assign({}, { images, uploading }));
    console.log(this.state);
    this.handleUpload();
  };

  handleUpload = async () => {
    const uploadNext = async () => {
      if (this.state.uploading)
        return;

      const image = this.state.images.find((img) => img.uploadStatus === UPLOAD_STATUS.NEW);
      if (!image) {
        // all images uploaded
        this.setState({ ...this.state, uploading: false });
        return;
      }

      this.setState({ ...this.state, uploading: true, });
      //change current image uploading state
      var { result, error } = await utils.request.uploadFile('/api/upload/img', image.file);
      if (error)
        return console.error(error);

      setTimeout(uploadNext, 100);
    };

    uploadNext();
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Dropzone accept={'image/*'} onDrop={this.onDrop.bind(this)}>
          <p>{ 'Drag files here' }</p>
        </Dropzone>
        <div className={'previews'}>
          { images.length && images.map((img) => {
            return (<img src={img.file.preview} key={img.file.name} style={{ maxWidth: 120}} />);
          }) || '' }
        </div>
      </div>
    );
  }
}