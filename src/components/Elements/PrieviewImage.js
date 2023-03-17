import React from 'react'

const PrieviewImage = ({file}) => {
    const [preview, setPreview] = React.useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload= () => {
        setPreview(reader.result)
    }
    return (
    <div>
        {preview ? <img src={preview} alt="preview" width="200px" height="200px" /> : "loading..."}
    </div>
    )
}
export default PrieviewImage