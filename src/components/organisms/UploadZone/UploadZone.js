import React, { Component } from 'react';
import UploadForm from '../../molecules/UploadForm';

class UploadZone extends Component {
    handleFileChange(file) {
        console.log(file);
    }

    render() {
        return (
            <div className='upload-zone'>
                <UploadForm
                    onChange={(file) => this.handleFileChange(file)}
                />
            </div>
        );
    }
}

export default UploadZone;
