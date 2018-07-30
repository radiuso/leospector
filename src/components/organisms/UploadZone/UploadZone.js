import React, { Component } from 'react';
import UploadForm from '../../molecules/UploadForm';
import LeoParser from '../../../helpers/LeoParser';
import CSVReader from '../../../helpers/CSVReader';

class UploadZone extends Component {
    constructor(props) {
        super(props);

        this.parser = new LeoParser();
        this.csvReader = new CSVReader();
    }

    handleFileChange(file) {
        const { onChange } = this.props;

        this.csvReader.read(file)
        .then((result) => {
            return this.parser.parse(result.data);
        })
        .then((result) => {
            if (typeof onChange === 'function') {
                onChange(result);
            }
        })
        .catch((error) => {
            console.error(error);
        });
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
