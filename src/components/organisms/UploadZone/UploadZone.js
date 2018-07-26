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
        this.csvReader.read(file)
        .then((result) => {
            return this.parser.parse(result.data);
        })
        .then((result) => {
            console.log(result);
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
