import React from "react";
import "./style.css";
import { useState } from "react";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

const Name = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="name">name:</label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxlength="25"
      value={value}
      placeholder="Name"
      required
    />
  </div>
);

const Region = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="status">region:</label>
    <input
      id="status"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="Region"
      required
    />
  </div>
);

const Watchlist = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="watchlist">watchlist:</label>
    <input
      id="watchlist"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="Watchlist"
      required
    />
  </div>
);

const Profile = ({ onSubmit, src, name, region, watchlist }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img for="photo-upload" src={src} />
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="region">{region}</div>
      <div className="watchlist">{watchlist}</div>
      <button type="submit" className="edit">
        Edit Profile{" "}
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>User Settings</h1>
      {children}
      <button type="submit" className="save">
        Save{" "}
      </button>
    </form>
  </div>
);

function CardProfile(props) {
  const [state, setState] = useState("");
  const [files, setFiles] = useState("");
  const [previewImage, setPreviewImage] = useState(
    "https://thumbs.dreamstime.com/b/user-icon-human-person-symbol-avatar-login-sign-vector-illustration-isolated-modern-background-user-icon-human-person-symbol-118096858.jpg"
  );
  const [name, setName] = useState("");
  //   const [status, setStatus] = useState("");
  const [active, setActive] = useState("edit");
  const [region, setRegion] = useState("");
  const [watchlist, setWatchlist] = useState("");

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFiles({
        files: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  const editName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const editRegion = (e) => {
    const status = e.target.value;
    setRegion(status);
  };

  const editWatchlist = (e) => {
    const watchlist = e.target.value;
    setWatchlist(watchlist);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let activeP = state.active === "edit" ? "profile" : "edit";
    setActive({ activeP });
  };

  //   useEffect(() => {
  //     async function getData() {
  //       const response = await fetch("http://localhost:3000/records", {
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       const data = await response.json();
  //       return data.payload;
  //     }

  return (
    <div>
      {active === "edit" ? (
        <Edit onSubmit={handleSubmit}>
          <ImgUpload onChange={photoUpload} src={previewImage} />
          <Name onChange={editName} value={name} />
          <Region onChange={editRegion} value={region} />
          <Watchlist onChange={editWatchlist} value={watchlist} />
        </Edit>
      ) : (
        <Profile
          onSubmit={handleSubmit}
          src={previewImage}
          name={name}
          region={region}
          watchlist={watchlist}
        />
      )}
    </div>
  );
}

export { CardProfile };
