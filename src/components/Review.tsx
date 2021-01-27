import React from "react"
import ImagePreview from "./ImagePreview"

interface ReviewProps {
  images: Array<{ url: string, name: string }>,
  removeImage: (index: number) => void
}

const styles = {
  container: {
    marginLeft: "50px",
    backgroundColor: "#f2f8b7",
    width: "60%",
    paddingLeft: "50px",
    paddingRight: "50px"
  }
}

export default function Review({ images, removeImage }: ReviewProps) {
  return (
    <div style={styles.container}>
      {images.map((image, index) => (
        <ImagePreview image={image} key={index} keyId={index} removeImage={removeImage} />
      ))}
    </div>
  )
}
