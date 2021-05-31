import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {'Whizzon will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' placeholder="Enter Image URL" onChange={onInputChange} />
                    <button className='btn-grad'
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;