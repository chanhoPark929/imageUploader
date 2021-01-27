import React from "react"

interface ImagePreviewProps {
  image: { url: string, name: string },
  removeImage: (index: number) => void,
  keyId: number
}

export default function ImagePreview({ image, keyId, removeImage }: ImagePreviewProps): JSX.Element {
  const styles = {
    container: {
      margin: "20px 0 40px 0",
      padding: "30px 30px 10px 30px",
      position: "relative",
      backgroundColor: "#679c35"
    },
    image: {
      width: "100%"
    },
    imageName: {
      fontSize: "24px",
      fontWeight: "bold",
      width: "100%",
      backgroundColor: "#95d45e",
      textAlign: "center",
      padding: "3px 0",
      margin: "10px 0",
      color: "#fff",

    },
    close: {
      width: "40px",
      height: "40px",
      borderRadius: "20px",
      backgroundColor: "red",
      marginRight: "-20px",
      marginTop: "-20px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer",
      position: "absolute",
      top: "0",
      right: "0"
    }
  }

  return (
    <div style={styles.container as React.CSSProperties}>
      <div>
        <img src={image.url} style={styles.image} />
      </div>
      <h3 style={styles.imageName as React.CSSProperties}>
        {image.name}
      </h3>
      <div style={styles.close as React.CSSProperties} onClick={() => removeImage(keyId)}>
        x
      </div>
    </div>
  )
}
