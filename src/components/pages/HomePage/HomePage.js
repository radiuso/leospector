import React from 'react';
import { connect } from 'react-redux';

import { updateRows } from '../../../entities/leo/leo.actions';

import Hero from '../../atoms/Hero';
import UploadZone from '../../organisms/UploadZone';
import LeoTable from '../../organisms/LeoTable';


const HomePage = ({ rows, onChange }) => (
    <div className='home-page'>
        <Hero className='is-primary' title='Welcome to Leospector'>
            <div>
                <p>
                    Upload your csv file. File won't be uploaded — your data stays in your browser.
                </p>

                <UploadZone onChange={(rows) => onChange(rows) }/>
            </div>
        </Hero>
        <LeoTable rows={rows} />
    </div>
);

const mapStateToProps = store => ({
  rows: store.leoState.rows,
});

const mapDispatchToProps = dispatch => ({
  onChange: rows => {
    updateRows(rows)
  }
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageContainer;
