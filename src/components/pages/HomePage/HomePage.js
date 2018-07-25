import React from 'react';

import Hero from '../../atoms/Hero';
import UploadZone from '../../organisms/UploadZone';

export default () => (
    <Hero className="is-primary" title="Welcome to Leospector">
        <div>
            <p>
                Upload your csv file. File won't be uploaded — your data stays in your browser.
            </p>

            <UploadZone />
        </div>
    </Hero>
);