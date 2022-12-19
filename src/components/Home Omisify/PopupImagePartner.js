export default function PopupImagePartner() {
  const partner =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671415292/omisify/partner_eo1nnu.jpg";

  return (
    <>
      <div className="popup-image-background-home-omisify">
        <div className="card">
          <img src={partner} alt="imagee" />
        </div>
      </div>
    </>
  );
}
