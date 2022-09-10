import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import './Home.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [files,setFiles] = useState([])
const {getRootProps,getInputProps} = useDropzone({
//   accept:"image/*",
  onDrop:(acceptedFiles) => {
    setFiles(
      acceptedFiles.map(file => Object.assign(file,{
        preview:URL.createObjectURL(file)
      }))
    )
    console.log(acceptedFiles);
    
  }
})

const images = files.map(file => (
  <img key={file.name} src={file.preview} 
  alt="image" style={{width:'200px',height:'200px'}} />
))

  return (
    <div>
        <div className="dropArea" {...getRootProps()}>
        <input {...getInputProps()} />
        <Card className="card">
      <Card.Body className="body">
        <Card.Title className="title">Drag n Drop a file to Upload.</Card.Title>
      </Card.Body>
    </Card>
        </div>
   

    <Card className="card2">
    <Card.Body className="body2">
    <Card.Title className="title2">Dataset Name.</Card.Title>
    </Card.Body>
    </Card>


    <Button className="button" variant="primary">UPLOAD</Button>

     <div>{images}</div>


</div>
  )
}

export default Home