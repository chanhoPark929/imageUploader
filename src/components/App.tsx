import React, { useState, useRef } from "react"
import UploadForm from "./UploadForm"
import Review from "./Review"

interface AppProps {}

const styles = {
  container: {
    display: "flex",
    maxWidth: "1200px",
    margin: "auto"
  }
}
export default function App({}: AppProps): JSX.Element {
  const [images, setImages] = useState([]);

  const removeImage = (index: number): void => {
    setImages(images.filter((image, i, array) => {
      return i != index
    }))
  }

  const submitImage = (image): void => {
    setImages([...images, image])
  }

  return (
    <div style={styles.container}>
      <UploadForm  submitImage={submitImage}/>
      <Review images={images} removeImage={removeImage}/>
    </div>
  );
}
