export default function sticky() {
  return (
    <div className="wrap">
      <div className="header">header</div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <style jsx>{`
        .box {
          width: 500px;
          height: 500px;
          background-color: red;
        }
        .header {
          position: sticky;
          top: 0;
        }
      `}</style>
    </div>
  );
}
