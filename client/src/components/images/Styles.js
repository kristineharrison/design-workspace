import { useState } from "react";


export default function StyleExample({
  newStyle,
  imagePlaceholder,
  descriptionPlaceholder,
  titlePlaceholder,
  codePlaceholder,
}) {
  const { imageUrl, title, description, code, classStyle } = newStyle;
  const [classToggle, setClassToggle] = useState({ classStyle });
  const [classPlaceholderToggle, setClassPlaceholderToggle] = useState("");
  const plainText = "img { border-radius: 10px; }";

  function handleClick() {
    setClassToggle(!classToggle);
  }

  function handlePlaceholderClick() {
    setClassPlaceholderToggle(!classPlaceholderToggle);
  }

  return (
    <div className="style-example">
      {titlePlaceholder ? <h2>Rounded Corners</h2> : <h2>{title}</h2>}
      {imagePlaceholder ? (
        classPlaceholderToggle ? (
          <img
            onClick={handlePlaceholderClick}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-men-standing-on-a-high-catwalk-surveying-the-news-photo-1582921823.jpg"
            alt="Men on a bridge"
          />
        ) : (
          <img
            onClick={handlePlaceholderClick}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-men-standing-on-a-high-catwalk-surveying-the-news-photo-1582921823.jpg"
            className="rounded"
            alt="Men on a bridge -rounded"
          />
        )
      ) : classToggle ? (
        <img
          onClick={handleClick}
          className={classStyle}
          src={imageUrl}
          alt="class example"
        />
      ) : (
        <img onClick={handleClick} src={imageUrl} alt="Example" />
      )}

      <small>Click to toggle between the styled and original image.</small>
      {descriptionPlaceholder ? (
        <p className="description">
          Use the border-radius property to create rounded images.
        </p>
      ) : (
        <p className="description">{description}</p>
      )}

      <div className="code-container">
        {codePlaceholder ? (
          <p className="code">{plainText}</p>
        ) : (
          <p className="code">{code}</p>
        )}
      </div>
    </div>
  );
}
