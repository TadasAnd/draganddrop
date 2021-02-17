import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
    
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        console.log(file);
        localStorage.setItem(0, file.name);
      };
      reader.readAsBinaryString(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="main-container">
      <h2 className="main-title">Drop Zone</h2>
      <div className="dz-input-container" {...getRootProps()}>
        <input className="dz-input" {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {/* <p>{localStorage.getItem(0)}</p> */}
    </div>
  );
}

export default MyDropzone;
