function SantaFoot() {
  return (
    <div className="footer-background">
      <footer>
        <div className="footer-date">
          <p>{`Copyright © ${new Date().getFullYear()}. All Rights Reserved.`}<br />
          1001 Green Bay Road, Box 167 Winnetka, IL 60093
          </p>
        </div>

        <div style={{display: "flex", alignItems: "center"}}>
          <a
              href="https://www.facebook.com/santasvolunteers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.svg"></img>
            </a>
            <a
              href="https://www.instagram.com/santas.volunteers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.svg"></img>
            </a>
            <a
              href="https://account.venmo.com/charity/donate?charity=3899938677196160769"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/venmo.svg"></img>
            </a>
          <div className="footer-links">
            <a href="corporate-donors"><p style={{letterSpacing: "0.25px"}}>CORPORATE DONORS</p></a>
            <a href="board-of-directors"><p style={{letterSpacing: "0.25px"}}>BOARD OF DIRECTORS</p></a>
          </div>
        </div>
        
      </footer>
    </div>

  );
}

export default SantaFoot;
