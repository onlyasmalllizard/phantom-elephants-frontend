import React from "react";
import css from "./style.module.css";
import { useState } from "react";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} className={css.img} />
    </div>
    <input
      id="photo-upload"
      type="file"
      onChange={onChange}
      className={css.input}
    />
  </label>
);

const Name = ({ onChange, value }) => (
  <div className={css.field}>
    <label htmlFor="name" className={css.label}>
      name:
    </label>
    <input
      className={css.input}
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
  <div className={css.field}>
    <label htmlFor="status" className={css.label}>
      region:
    </label>
    <input
      className={css.input}
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
  <div className={css.field}>
    <label htmlFor="watchlist" className={css.label}>
      watchlist:
    </label>
    <input
      className={css.input}
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
  <div className={css.card}>
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className={`${css.customFileUpload} ${css.label}`}>
        <div className={css.imgWrap}>
          <img for="photo-upload" src={src} className={css.img} />
        </div>
      </label>
      <div className={css.card}>{name}</div>
      <div className={css.card}>{region}</div>
      <div className={css.card}>{watchlist}</div>
      <button type="submit" className={`${css.edit} ${css.button}`}>
        Edit Profile{" "}
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className={css.card}>
    <form onSubmit={onSubmit}>
      <h1 className={`${css.label} text-center text-black mb-4`}>
        User Settings
      </h1>
      {children}
      <button type="submit" className={`${css.save} ${css.button}`}>
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
      setPreviewImage(reader.result);
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
    let activeP = active === "edit" ? "profile" : "edit";
    setActive(activeP);
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
        <Edit onSubmit={handleSubmit} className={css.body}>
          <ImgUpload
            onChange={photoUpload}
            src={previewImage}
            className={css.imgUpload}
          />
          <Name onChange={editName} value={name} />
          <Region onChange={editRegion} value={region} />
          <Watchlist onChange={editWatchlist} value={watchlist} />
        </Edit>
      ) : (
        <Profile
          className={css.body}
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
