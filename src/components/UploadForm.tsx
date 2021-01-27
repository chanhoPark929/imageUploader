import React, { useRef } from "react"

interface UploadProps {
  submitImage: (url: any) => void
}

const styles = {
  container: {
    backgroundColor: "#ffc677",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: window.innerHeight,
    width: "40%"
  },
  submitBtnStyle: {
    marginTop: "20px",
    backgroundColor: "red",
    fontSize: "26px",
    color: "#ffffff",
    border: "none",
    padding: "5px 70px",
    fontWeight: "bold",
  }
}

export default function UploadForm({ submitImage }: UploadProps): JSX.Element {
  const ref = useRef(null);
  
  const onSubmit = () => {
    let files =  ref.current.files;
    if (files.length > 0) {
      let reader = new FileReader();
      reader.onload = r => {
        submitImage({ url: r.target.result, name: files[0].name });
        ref.current.value = '';
      };
      reader.readAsDataURL(files[0]);
    }
  }

  return (
    <div style={styles.container as React.CSSProperties}>
      <input type="file" ref={ref} />
      <button onClick={onSubmit} style={styles.submitBtnStyle as React.CSSProperties}>submit</button>
    </div>
  )
}
