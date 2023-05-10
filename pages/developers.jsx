export default function Developers() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10px"
      }}
    >
      <div
        className="header"
        style={{
          position: "relative",
          marginBottom: "20px",
          textAlign: "center"
        }}
      >
        <img
          className="background-img"
          src="/img/bck4.png"
          alt="Background"
          style={{
            width: "400px"
          }}
        />
        <h1
          className="title"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "48px",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
          }}
        >
          <span style={{ color: "#FBBF24", marginRight: "10px" }}>★</span>
          Developers
        </h1>
      </div>

      <div className="discord-widgets" style={{ display: "flex", justifyContent: "center" }}>
        <DiscordWidget
          imageUrl="https://discord.c99.nl/widget/theme-2/980069165459198022.png"
          style={{ margin: "10px" }}
        />
        <DiscordWidget
          imageUrl="https://discord.c99.nl/widget/theme-2/903237169722834954.png"
          style={{ margin: "10px" }}
        />
      </div>
    </div>
  );
}

function DiscordWidget({ imageUrl, style }) {
  return (
    <img
      className="discord-widget"
      src={imageUrl}
      alt="Discord Widget"
      style={{
        width: "400px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        ...style
      }}
    />
  );
}
