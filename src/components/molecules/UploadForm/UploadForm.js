import React, { Component } from 'react';

class UploadForm extends Component {
    handleFileChange(event) {
        const { onChange } = this.props;

        if (typeof onChange === 'function') {
            onChange(event.target.files[0]);
        }
    }

    render() {
        const { className } = this.props;
        return (
            <form
                className={className}
                method='post'
                action=''
                encType='multipart/form-data'
                noValidate=''
            >
                <input
                    className='upload--input'
                    name='file'
                    type='file'
                    onChange={(event) => this.handleFileChange(event)}
                />
            </form>
        );
    }
}

export default UploadForm;
