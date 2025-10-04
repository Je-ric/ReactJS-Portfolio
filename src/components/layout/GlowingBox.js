const GlowBox = ({ color, icon: Icon, title, href }) => {
  const content = (
    <div
      className="glow-box"
      style={{
        '--clr': color,
      }}
    >
      {Icon && <Icon size={40} />}
      {title && <div className="glow-box-title">{title}</div>}
    </div>
  );

  // If href exists, wrap in <a>; otherwise render as is
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glow-box-parent"
      >
        {content}
      </a>
    );
  }

  return <div className="glow-box-parent">{content}</div>;
};

export default GlowBox;

// <GlowBox
//   color="#FF3CAC"
//   icon={FaHeart}
//   title="Love"
//   href="#"
// />